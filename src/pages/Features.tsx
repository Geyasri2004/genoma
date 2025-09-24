import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import aiTechnology from "@/assets/ai-technology.jpg";
import digitalTwin from "@/assets/digital-twin.jpg";

const Features = () => {
  const additionalFeatures = [
    {
      title: "Real-time Health Monitoring",
      description: "Continuous tracking of health parameters with instant alerts for critical changes",
      benefits: [
        "24/7 automated monitoring",
        "Instant notification system", 
        "Trend analysis and predictions",
        "Integration with wearable devices"
      ]
    },
    {
      title: "Comprehensive Risk Assessment",
      description: "Multi-dimensional health risk evaluation across genetic, environmental, and lifestyle factors",
      benefits: [
        "Genetic predisposition analysis",
        "Environmental risk factors",
        "Lifestyle impact assessment",
        "Preventive care recommendations"
      ]
    },
    {
      title: "Personalized Treatment Plans",
      description: "Tailored medical recommendations based on individual genetic and health profiles", 
      benefits: [
        "Customized medication dosing",
        "Optimal treatment pathways",
        "Drug interaction warnings",
        "Therapy effectiveness predictions"
      ]
    },
    {
      title: "Healthcare Provider Integration",
      description: "Seamless connection with healthcare systems and medical professionals",
      benefits: [
        "EHR/EMR system integration",
        "Provider dashboard access",
        "Collaborative care tools",
        "Clinical decision support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle relative">
          <div className="absolute top-4 left-4">
            <Link to="/">
              <Button variant="outline" size="sm" className="hover:bg-muted/50">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Platform Features
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comprehensive <span className="bg-gradient-primary bg-clip-text text-transparent">Health Intelligence</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Discover the full range of capabilities that make Genoma the most advanced 
              integrated health assessment platform available today.
            </p>
          </div>
        </section>

        {/* Technology Showcase */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-20">
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                  AI-Powered Analytics
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Intelligent Health <span className="bg-gradient-primary bg-clip-text text-transparent">Technology</span>
                </h2>
                <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                  Our advanced AI algorithms process complex genetic and medical data to provide 
                  real-time insights and predictive analytics for better healthcare outcomes.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    <span>Machine learning-powered risk assessment</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    <span>Real-time genomic data processing</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    <span>Predictive health analytics</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={aiTechnology} 
                  alt="AI-powered medical technology dashboard"
                  className="rounded-lg shadow-medical w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Additional Features */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Advanced Capabilities</h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Beyond our core features, Genoma offers a comprehensive suite of advanced tools 
                designed to support every aspect of personalized healthcare.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {additionalFeatures.map((feature, index) => (
                <Card key={index} className="bg-gradient-card shadow-medical hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="bg-primary/5 border-primary/20 max-w-4xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl md:text-3xl">Why Choose Genoma?</CardTitle>
                <CardDescription className="text-lg">
                  The only platform that unifies genetic, blood, and pharmacogenomic assessment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">5-in-1</div>
                    <p className="text-sm text-foreground/70">Integrated assessment modules</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">Real-time</div>
                    <p className="text-sm text-foreground/70">Instant health insights</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">HIPAA</div>
                    <p className="text-sm text-foreground/70">Compliant & secure</p>
                  </div>
                </div>

                <div className="text-center">
                  <Link to="/signin">
                    <Button 
                      size="lg" 
                      className="bg-gradient-primary hover:shadow-glow transition-all duration-300 w-full sm:w-auto"
                    >
                      Start Your Health Journey
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Features;