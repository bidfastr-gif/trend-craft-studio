import { Users, Briefcase, TrendingUp, Award } from "lucide-react";

const useCases = [
  {
    icon: Users,
    title: "Social Media Managers",
    description: "Keep your clients' feeds fresh with trending content",
  },
  {
    icon: Briefcase,
    title: "Brands & Businesses",
    description: "Stay relevant and connect with younger audiences",
  },
  {
    icon: TrendingUp,
    title: "Marketing Agencies",
    description: "Scale content production for multiple clients",
  },
  {
    icon: Award,
    title: "Influencers & Creators",
    description: "Collab with brands using viral formats",
  },
];

const testimonials = [
  {
    quote: "Trendcraft helped us go viral with the penguin trend. Our spa bookings increased by 300%!",
    author: "Priya Sharma",
    role: "Marketing Head, Zen Spa",
    avatar: "PS",
  },
  {
    quote: "We use Trendcraft for all our D2C clients. The turnaround time is incredible.",
    author: "Rahul Mehta",
    role: "Founder, Viral Agency",
    avatar: "RM",
  },
  {
    quote: "Finally, a tool that understands Indian brands. The content feels authentic and relatable.",
    author: "Ananya Kapoor",
    role: "Social Media Manager",
    avatar: "AK",
  },
];

const TrustSection = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Use Cases */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            Built For <span className="gradient-text">Everyone</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From solo creators to enterprise agencies, Trendcraft fits your workflow
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="glass-card p-6 rounded-2xl text-center group hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <useCase.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-2">
                {useCase.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-display font-bold mb-4">
            Loved by <span className="gradient-text">Creators</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="glass-card p-6 rounded-2xl"
            >
              {/* Quote */}
              <div className="mb-6">
                <svg
                  className="w-8 h-8 text-primary/50"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-foreground mb-6">"{testimonial.quote}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-bold text-white">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
