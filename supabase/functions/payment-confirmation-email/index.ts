// @ts-nocheck

import { createClient } from "jsr:@supabase/supabase-js@2";

type DenoEnv = {
  get(key: string): string | undefined;
};

declare const Deno: {
  env: DenoEnv;
  serve: (handler: (req: Request) => Response | Promise<Response>) => void;
};

const SUPABASE_URL = Deno.env.get("SUPABASE_URL") ?? "";
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
const FROM_EMAIL = Deno.env.get("PAYMENTS_FROM_EMAIL") ?? "payments@trendcraft.studio";

const corsHeaders = {
  "Access-Control-Allow-Origin": Deno.env.get("ALLOWED_ORIGIN") ?? "https://yourdomain.com",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", {
      status: 405,
      headers: corsHeaders,
    });
  }

  const body = await req.json().catch(() => null);
  if (!body) {
    return new Response("Invalid JSON body", {
      status: 400,
      headers: corsHeaders,
    });
  }

  const {
    email,
    brandName,
    plan,
    amount,
    requestId,
    paymentReference,
    paymentTime,
    selectedOption,
  } = body as {
    email?: string;
    brandName?: string;
    plan?: string;
    amount?: number;
    requestId?: string;
    paymentReference?: string;
    paymentTime?: string;
    selectedOption?: string;
  };

  if (!email || !paymentReference || !paymentTime || !selectedOption) {
    return new Response("Missing required fields", {
      status: 400,
      headers: corsHeaders,
    });
  }

  const metadata = {
    paymentReference,
    paymentTime,
    selectedOption,
    requestId: paymentReference,
    requestedAt: paymentTime,
    plan: selectedOption,
  };

  const { data: usersPage, error: listError } = await supabase.auth.admin.listUsers();

  if (listError || !usersPage) {
    console.error("Failed to list users for payment email:", listError);
    return new Response("Failed to prepare confirmation email", {
      status: 500,
      headers: corsHeaders,
    });
  }

  const existingUser = usersPage.users.find((user: { email?: string | null }) =>
    user.email && user.email.toLowerCase() === email.toLowerCase(),
  );

  if (existingUser) {
    const { error: updateError } = await supabase.auth.admin.updateUserById(
      existingUser.id,
      { user_metadata: metadata },
    );
    if (updateError) {
      console.error(
        "Failed to update user metadata for payment email:",
        updateError,
      );
      return new Response("Failed to prepare confirmation email", {
        status: 500,
        headers: corsHeaders,
      });
    }
  } else {
    const { error: createError } = await supabase.auth.admin.createUser({
      email,
      user_metadata: metadata,
    });
    if (createError) {
      console.error("Failed to create user for payment email:", createError);
      return new Response("Failed to prepare confirmation email", {
        status: 500,
        headers: corsHeaders,
      });
    }
  }

  console.log("Triggering auth magic-link email as payment confirmation", {
    email: email.replace(/(.{2})(.*)(@.*)/, "$1***$3"),
    paymentReference,
    paymentTime,
    selectedOption,
  });

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: true,
    },
  });

  if (error) {
    console.error("Auth email send failed:", error);
    return new Response("Failed to send confirmation email", {
      status: 500,
      headers: corsHeaders,
    });
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
});
