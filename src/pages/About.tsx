import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Target, Users, Zap, Eye, Lightbulb, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Trader First",
      highlight: "Your goals guide every decision we make.",
      description: "Every feature on LeverEdge is built to give traders more control, clarity, and confidence — because we trade too.",
    },
    {
      icon: Zap,
      title: "Lightning Fast Execution",
      highlight: "Speed is our edge — and yours.",
      description: "Execute trades in milliseconds with ultra-low latency infrastructure so you never miss an opportunity when it matters most.",
    },
    {
      icon: Eye,
      title: "Transparent by Design",
      highlight: "Clarity builds trust, and we live by it.",
      description: "From clear liquidation prices to visible risk levels, every trade gives you full insight before you even enter.",
    },
    {
      icon: Lightbulb,
      title: "Innovation that Empowers",
      highlight: "Built by traders who wanted better tools.",
      description: "We're constantly improving to make trading smarter, simpler, and more profitable — for every trader, every day.",
    },
  ];

  const stats = [
    { number: "50K+", label: "Smart Traders" },
    { number: "₹1200Cr+", label: "Daily Volume" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-background via-card/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              By Traders. For Traders.{" "}
              <span className="text-primary">Powered by Control!</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              At LeverEdge, we aren't a company built by executives — we're traders who built what we always wished existed.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We know the frustration of platforms that fix your leverage, restrict your exits, and delay your withdrawals. That's why we designed LeverEdge — a platform where <span className="text-primary font-semibold">control shifts back to the trader</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-4xl font-bold mb-6">
                  Our <span className="text-primary">Mission</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To democratize leveraged trading by providing institutional-grade tools 
                  to individual traders. We're committed to transparency, innovation, and 
                  empowering our users with complete control over their trading strategies.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Unlike traditional platforms that profit from trader losses, we succeed 
                  when our traders succeed. Our isolated margin system, transparent liquidation 
                  prices, and P2P transaction support are built around this philosophy.
                </p>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 border border-primary/20">
                  <Users className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">Trader-Centric Approach</h3>
                  <p className="text-muted-foreground">
                    Every feature we build starts with one question: "How does this benefit 
                    our traders?" This principle guides our product development, customer 
                    support, and platform evolution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-background via-card/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-primary">Core Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that drive everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(146,232,91,0.15)] animate-fade-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-foreground font-semibold mb-2 leading-relaxed">{value.highlight}</p>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6 text-center">
                The <span className="text-primary">LeverEdge</span> Story
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  LeverEdge was born from a simple observation: traditional trading platforms 
                  were designed for the platform, not the trader. Hidden fees, opaque liquidation 
                  mechanisms, and cross-margin nightmares were the norm.
                </p>
                <p>
                  Our founding team, comprised of experienced traders and financial technology 
                  experts, set out to build something different. A platform where traders have 
                  full visibility into their positions, complete control over their leverage, 
                  and protection against catastrophic losses through isolated margins.
                </p>
                <p>
                  Today, LeverEdge serves thousands of traders globally, processing millions in 
                  daily trading volume. But our mission remains unchanged: to provide the most 
                  transparent, powerful, and trader-friendly leveraged trading platform in the market.
                </p>
                <div className="bg-card/50 border border-border rounded-xl p-6 mt-8">
                  <TrendingUp className="w-10 h-10 text-primary mb-4" />
                  <p className="text-foreground font-semibold mb-2">
                    Looking Forward
                  </p>
                  <p>
                    We're constantly innovating, adding new features, and listening to our 
                    community. Your success is our success, and we're committed to building 
                    the tools that help you achieve your trading goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
