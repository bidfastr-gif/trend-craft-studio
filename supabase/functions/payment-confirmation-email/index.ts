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

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

Deno.serve(async (req: Request) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const body = await req.json().catch(() => null);
  if (!body) {
    return new Response("Invalid JSON body", { status: 400 });
  }

  const { email, brandName, plan, amount, requestId } = body as {
    email?: string;
    brandName?: string;
    plan?: string;
    amount?: number;
    requestId?: string;
  };

  if (!email || !brandName || !plan || !amount || !requestId) {
    return new Response("Missing required fields", { status: 400 });
  }

  const subject = "Trendcraft Payment Confirmation";

  const textContent = [
    `Hi ${brandName},`,
    "",
    "Thank you for your payment to Trendcraft.",
    "",
    `Order ID: ${requestId}`,
    `Plan: ${plan}`,
    `Amount: ₹${amount.toLocaleString("en-IN")}`,
    "",
    "We have received your payment and will start working on your custom video.",
    "",
    "If you have any questions, just reply to this email.",
    "",
    "– Trendcraft Team",
  ].join("\n");

  const htmlContent = `
    <p>Hi ${brandName},</p>
    <p>Thank you for your payment to <strong>Trendcraft</strong>.</p>
    <p>
      <strong>Order ID:</strong> ${requestId}<br />
      <strong>Plan:</strong> ${plan}<br />
      <strong>Amount:</strong> ₹${amount.toLocaleString("en-IN")}
    </p>
    <p>We have received your payment and will start working on your custom video.</p>
    <p>If you have any questions, just reply to this email.</p>
    <p>– Trendcraft Team</p>
  `;

  console.log("Triggering auth magic-link email as payment confirmation", {
    email,
    requestId,
    plan,
    amount,
  });

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: true,
    },
  });

  if (error) {
    console.error("Auth email send failed:", error);
    return new Response("Failed to send confirmation email", { status: 500 });
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
});
