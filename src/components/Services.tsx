import { TrendingUp, LineChart, BarChart3, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const services = [
  {
    icon: LineChart,
    title: "Futures Trading",
    description: "Trade index and stock futures with leverage. Advanced tools for experienced traders.",
  },
  {
    icon: BarChart3,
    title: "Options Trading",
    description: "Access calls and puts on indices and stocks. Build complex strategies with ease.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Built-in stop-loss, target orders, and portfolio analytics to protect your capital.",
  },
  {
    icon: TrendingUp,
    title: "Up to 25x Leverage",
    description: "Maximize your trading potential with industry-leading leverage from LeverEdge",
  },
];

export const Services = () => {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => (
    <Card 
      className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card hover:scale-105 animate-slide-up group h-full"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <service.icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
      <p className="text-muted-foreground">{service.description}</p>
    </Card>
  );

  return (
    <section className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Comprehensive <span className="text-primary">Trading Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to trade in Indian derivatives markets, all in one platform
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
              {services.map((service, index) => (
                <CarouselItem key={index} className="pl-4">
                  <ServiceCard service={service} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Desktop/Tablet: Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
