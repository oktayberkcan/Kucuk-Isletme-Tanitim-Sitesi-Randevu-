
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Scissors, Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Hizmetler", href: "/services" },
  { name: "Fiyat Listesi", href: "/pricing" },
  { name: "Galeri", href: "/gallery" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      scrolled 
        ? "h-16 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg" 
        : "h-20 bg-background border-b border-transparent"
    )}>
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="p-2 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:rotate-12">
            <Scissors className="h-6 w-6 text-primary" />
          </div>
          <span className="font-headline text-2xl font-bold text-foreground tracking-tighter">
            ROYAL<span className="text-primary">CUTS</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <div className="h-6 w-px bg-border/50 mx-2" />
          
          <div className="flex items-center gap-4">
            <a href="tel:+905000000000" className="flex items-center gap-2 text-primary font-bold hover:opacity-80 transition-opacity">
              <Phone className="h-4 w-4" />
              <span className="text-sm">05XX XXX XX XX</span>
            </a>
            <Button asChild variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6">
              <Link href="/book">Randevu Al</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground bg-muted/50 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 w-full bg-background border-b border-border transition-all duration-300 ease-in-out shadow-2xl",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <div className="container mx-auto px-4 py-10 flex flex-col gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-2xl font-headline font-bold hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="h-px w-full bg-border" />
          <div className="space-y-6">
            <a href="tel:+905000000000" className="flex items-center gap-3 text-primary text-xl font-bold">
              <Phone className="h-5 w-5" />
              <span>05XX XXX XX XX</span>
            </a>
            <Button asChild size="lg" className="w-full bg-primary text-primary-foreground font-bold h-16 text-lg">
              <Link href="/book" onClick={() => setIsOpen(false)}>
                Hemen Randevu Al
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
