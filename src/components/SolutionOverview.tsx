import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Brain, Cloud, Shield, Zap, Users } from "lucide-react";

const SolutionOverview = () => {
  const benefits = [
    "Unified genetic, blood, and pharmacogenomic assessment",
    "Explainable AI recommendations for doctors and patients", 
    "Real-time health scenario simulations",
    "Personalized digital twin technology",
    "Proactive risk alerts and notifications",
    "Seamless EHR/EMR integration"
  ];

  const coreCapabilities = [
    {
      name: "Genomic Analysis Engine",
      icon: Brain,
      role: "Advanced Genetic Reasoning",
      capabilities: [
        "Genetic variant interpretation",
        "Family risk tree analysis", 
        "Clinical decision support",
        "Transparent AI explanations"
      ]
    },
    {
      name: "Health Orchestration System",
      icon: Cloud,
      role: "Real-time Health Management",
      capabilities: [
        "Scalable platform orchestration",
        "Digital twin simulations",
        "Real-time health monitoring",
        "Proactive alert systems"
      ]
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Solution Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-success/10 text-success border-success/20">
            <CheckCircle className="w-4 h-4 mr-2" />
            Comprehensive Solution
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Introducing <span className="bg-gradient-primary bg-clip-text text-transparent">Genoma</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            An integrated platform that unifies genetic, blood, and pharmacogenomic risk assessment 
            into a single, intelligent ecosystem powered by cutting-edge AI agents.
          </p>
        </div>

        {/* Core Capabilities */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {coreCapabilities.map((capability, index) => (
            <Card key={index} className="bg-gradient-card shadow-medical hover:shadow-glow transition-all duration-300 border-primary/20">
              <CardHeader className="text-center">
                <capability.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">{capability.name}</CardTitle>
                <CardDescription className="font-semibold text-primary">
                  {capability.role}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {capability.capabilities.map((cap, capIndex) => (
                    <li key={capIndex} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-success mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm">{cap}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Benefits */}
        <Card className="bg-primary/5 border-primary/20 max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary mr-3" />
              Key Benefits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-success mr-3 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                  <Users className="w-5 h-5 mr-2" />
                  Get Started Today
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SolutionOverview;