import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.webp";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "#blog" },
    { name: "About us", href: "/about" },
    { name: "Contact us", href: "/contact" },
  ];

  const ctaItem = { name: "Download App", href: "https://drive.google.com/drive/folders/1fZQ6piyoVWzfu1be3-YKnFxsOaaSbfE1?usp=drive_link" };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="LeverEdge Logo" className="h-8 w-8" />
            <span className="text-2xl font-bold">
              <span className="text-primary">Lever</span>
              <span className="text-foreground">Edge</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              item.href.startsWith("#") ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              )
            ))}
            <a href={ctaItem.href} target="_blank" rel="noopener noreferrer">
              <Button size="default" className="ml-4">
                {ctaItem.name}
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            {menuItems.map((item) => (
              item.href.startsWith("#") ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block py-2 text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
            <a href={ctaItem.href} target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="block py-2">
              <Button size="default" className="w-full">
                {ctaItem.name}
              </Button>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};
