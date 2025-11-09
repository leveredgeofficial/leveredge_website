import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Day Trader, Mumbai",
    content: "LeverEdge has transformed my trading experience. The platform is incredibly fast and the execution is flawless. Best trading platform I've used in India.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Options Trader, Delhi",
    content: "The customer support is outstanding. They're available 24/7 and always help me resolve my queries. Highly recommend for serious traders.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "Swing Trader, Bangalore",
    content: "Clean interface, powerful tools, and lightning-fast execution. LeverEdge has everything I need to trade futures and options efficiently.",
    rating: 5,
  },
  {
    name: "Neha Gupta",
    role: "Options Trader, Hyderabad",
    content: "The margin requirements are competitive and the platform never lags during volatile market hours. Absolutely love it!",
    rating: 4,
  },
  {
    name: "Mohammed Al-Rashid",
    role: "Proprietary Trader, Dubai",
    content: "I've traded on multiple platforms globally, and LeverEdge stands out with its speed and reliability. The low latency makes a real difference.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Futures Trader, Pune",
    content: "Risk management tools are top-notch. The platform helps me stay disciplined with stop-losses and position sizing.",
    rating: 5,
  },
  {
    name: "James Thompson",
    role: "Algorithmic Trader, London",
    content: "The API integration is seamless and documentation is clear. Running my trading bots has never been easier.",
    rating: 4,
  },
  {
    name: "Sneha Reddy",
    role: "Day Trader, Chennai",
    content: "Charts are crisp, order execution is instant, and the mobile app works perfectly. Everything a trader needs in one place.",
    rating: 5,
  },
  {
    name: "Arjun Mehta",
    role: "Options Trader, Ahmedabad",
    content: "The options chain display is the best I've seen. Makes it easy to spot opportunities and execute complex strategies.",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    role: "Portfolio Manager, Singapore",
    content: "Managing multiple accounts is straightforward and the reporting features are comprehensive. Great for professional use.",
    rating: 4,
  },
  {
    name: "Karan Kapoor",
    role: "Scalper, Mumbai",
    content: "For scalping, every millisecond counts. LeverEdge delivers the speed I need to capture quick profits consistently.",
    rating: 5,
  },
  {
    name: "Divya Iyer",
    role: "Swing Trader, Kochi",
    content: "The educational resources and market insights are valuable. It's not just a platform, it's a complete trading ecosystem.",
    rating: 5,
  },
];

export const Testimonials = () => {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <section className="py-24 bg-gradient-dark overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by <span className="text-primary">Active Smart Traders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of traders who've elevated their trading game with LeverEdge
          </p>
        </div>

        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
