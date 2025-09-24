import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dna, Brain, Heart, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-medical.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
          <Brain className="w-4 h-4 mr-2" />
          AI-Powered Healthcare Platform
        </Badge>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Genoma
          		<span className="block text-2xl md:text-4xl lg:text-5xl mt-2 text-ink">
            Next-Gen Health & Gene Fusion
          </span>
        </h1>

        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-8 leading-relaxed">
          Unifying genetic compatibility, maternal-fetal health, HLA matching, and pharmacogenomics 
          into one intelligent, life-saving healthcare ecosystem with explainable AI.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link to="/features">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              <Heart className="w-5 h-5 mr-2" />
              Explore Platform
            </Button>
          </Link>
          <Link to="/solutions">
            <Button variant="outline" size="lg" className="border-primary/30 hover:border-primary/60 hover:bg-primary/5">
              <Shield className="w-5 h-5 mr-2" />
              View Demo
            </Button>
          </Link>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { label: "Genetic Compatibility", value: "Couples Planning" },
            { label: "Maternal Health", value: "Pregnancy Safety" },
            { label: "HLA Matching", value: "Transplant Success" },
            { label: "Drug Safety", value: "Pharmacogenomics" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-foreground/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <Dna className="w-6 h-6 text-primary/20" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;