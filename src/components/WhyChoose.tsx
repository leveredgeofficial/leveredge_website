import { Zap, Lock, Smartphone, Award } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Execute trades in milliseconds with our high-performance infrastructure",
  },
  {
    icon: Lock,
    title: "Bank-Grade Security",
    description: "Your funds and data protected with enterprise-level encryption",
  },
  {
    icon: Smartphone,
    title: "Trade Anywhere",
    description: "Seamless experience across mobile, tablet, and desktop",
  },
];

export const WhyChoose = () => {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => (
    <div
      className="relative p-8 bg-gradient-to-br from-card to-secondary rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 animate-slide-up group h-full"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          <feature.icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
        <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-primary">LeverEdge</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the perfect blend of technology, security, and support
          </p>
        </div>

        {/* Mobile: Carousel */}
        <div className="md:hidden">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4">
              {features.map((feature, index) => (
                <CarouselItem key={index} className="pl-4">
                  <FeatureCard feature={feature} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Desktop/Tablet: Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
