import { Shield, Gauge, Target, ArrowLeftRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const features = [
  {
    icon: Gauge,
    title: "Controlled Leverage",
    description: "Take full command of your trading strategy with customizable leverage options. Adjust your position size to match your risk appetite and market conditions.",
    detail: "From conservative 2x to aggressive 100x - you decide the multiplier that aligns with your trading goals and risk management philosophy.",
  },
  {
    icon: Target,
    title: "Transparent Liquidation Prices",
    description: "Never trade in the dark. Every leveraged position displays clear liquidation thresholds in real-time, eliminating surprises and enabling informed decision-making.",
    detail: "Monitor your risk exposure with precision. Know exactly where your position stands at all times with upfront liquidation price visibility.",
  },
  {
    icon: Shield,
    title: "Isolated Margin Protection",
    description: "Trade with confidence knowing each position operates independently. Our isolated margin system protects your entire portfolio from a single trade going wrong.",
    detail: "No cascading liquidations. No cross-margin nightmares. Each position carries its own risk, safeguarding your capital from total account blowup.",
  },
  {
    icon: ArrowLeftRight,
    title: "Instant Deposits & Withdrawals",
    description: "Fund your account effortlessly with UPI, cards, or peer-to-peer transfers for seamless deposits and quick withdrawals.",
    detail: "Experience instant settlements with zero delays — deposit, trade, and withdraw on your terms with full flexibility.",
  },
];

export const USP = () => {
  const plugin = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false })
  );

  const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
    const Icon = feature.icon;
    const isEven = index % 2 === 0;
    
    return (
      <div
        className={`group relative animate-fade-in bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(146,232,91,0.15)] h-full`}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 items-start`}>
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
              <Icon className="w-8 h-8 text-primary" />
            </div>
          </div>
          
          <div className="flex-1">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <span className="text-4xl font-bold text-primary/20 ml-4">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
            
            <p className="text-foreground/90 mb-3 text-base leading-relaxed">
              {feature.description}
            </p>
            
            <p className="text-muted-foreground text-sm leading-relaxed pl-4 border-l-2 border-primary/30">
              {feature.detail}
            </p>
          </div>
        </div>

        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background via-card to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built for <span className="text-primary">Serious Traders</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Advanced features engineered to give you the edge in leveraged trading
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
        <div className="hidden md:grid gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
