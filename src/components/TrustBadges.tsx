import { Shield, CheckCircle, Globe, Headphones } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "Backed by Global Standards",
    description: "Secure and compliant trading.",
  },
  {
    icon: CheckCircle,
    title: "Verified Platform",
    description: "Trusted by 100K+ traders",
  },
  {
    icon: Globe,
    title: "International Standards",
    description: "Global security protocols",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Always here to help.",
  },
];

export const TrustBadges = () => {
  return (
    <section className="py-16 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <badge.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">{badge.title}</h3>
              <p className="text-sm text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
