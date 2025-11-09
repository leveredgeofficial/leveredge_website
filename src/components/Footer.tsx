import { Mail, MapPin, Phone, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.webp";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-4 w-fit hover:opacity-80 transition-opacity">
              <img src={logo} alt="LeverEdge Logo" className="h-8 w-8" />
              <h3 className="text-2xl font-bold">
                Lever<span className="text-primary">Edge</span>
              </h3>
            </Link>
            <p className="text-muted-foreground mb-4">
              LeverEdge is next-generation trading platform with institutional-grade infrastructure and zero-complexity interface. 💚
            </p>
            <div className="flex items-center gap-3">
              <a 
                href="https://www.facebook.com/leveredgeofficial/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors group"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="https://www.instagram.com/leveredgeofficial/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors group"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="/LeverEdge_User_Manual.pdf" download className="text-muted-foreground hover:text-primary transition-colors">
                  Trading Guide
                </a>
              </li>
              <li>
                <Link to="/terms-conditions" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <div className="text-sm text-muted-foreground">Email Support</div>
                  <a href="mailto:support@leveredge.co" className="text-foreground hover:text-primary transition-colors">
                    support@leveredge.co
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <div className="text-sm text-muted-foreground">Contact Number</div>
                  <a href="tel:+447451268002" className="text-foreground hover:text-primary transition-colors">
                    +44 7451 268002
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <div className="text-sm text-muted-foreground">Registered Office</div>
                  <p className="text-sm text-foreground">
                    42 High Street, Unit 5  Arndale Centre, Market Street, Manchester, Greater Manchester - M4 1QB.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} LeverEdge. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            Trading in securities market are subject to market risks. Please read all related documents carefully before investing.
          </p>
        </div>
      </div>
    </footer>
  );
};
