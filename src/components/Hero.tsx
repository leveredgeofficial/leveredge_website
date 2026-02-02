import { Button } from "@/components/ui/button";
import { TrendingUp, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.webp";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20 md:pt-16">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6 animate-glow">
          <TrendingUp className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-medium">Trusted by 100,000+ Traders</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
          Trade Smarter with<br />
          <span className="text-primary">LeverEdge</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          A globally trusted advanced stock trading platform. Access futures & options with zero complexity and <span className="text-primary font-semibold">higher leverage</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="/leveredge_2.0.3.apk" download>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 rounded-xl shadow-primary"
            >
              Start Trading Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
          <a href="/LeverEdge_User_Manual.pdf" download>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/50 text-foreground hover:bg-primary/10 hover:text-foreground text-lg px-8 py-6 rounded-xl"
            >
              Learn More
            </Button>
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="relative p-6 bg-primary/5 backdrop-blur-sm border-2 border-primary rounded-xl animate-glow overflow-hidden group hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50" />
            <div className="relative z-10">
              <div className="text-5xl font-bold text-primary mb-2 animate-pulse">Up to 50x</div>
              <div className="text-foreground font-semibold">Leverage</div>
            </div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors duration-300" />
          </div>
          <div className="p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:border-primary/30 transition-colors duration-300">
            <div className="text-4xl font-bold text-primary mb-2">₹1200Cr+</div>
            <div className="text-muted-foreground">Daily Trading Volume</div>
          </div>
          <div className="p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:border-primary/30 transition-colors duration-300">
            <div className="text-4xl font-bold text-primary mb-2">50K+</div>
            <div className="text-muted-foreground">Active Smart Traders</div>
          </div>
        </div>
      </div>
    </section>
  );
};
