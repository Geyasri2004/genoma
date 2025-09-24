import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Microscope, HeartHandshake, Shield, Target } from "lucide-react";
import { Link } from "react-router-dom";
import researchLab from "@/assets/research-lab.jpg";
import healthcareProfessionals from "@/assets/healthcare-professionals.jpg";

const About = () => {
  const values = [
    {
      icon: Microscope,
      title: "Scientific Excellence",
      description: "Leveraging cutting-edge genomic research and proven medical protocols to deliver accurate health assessments."
    },
    {
      icon: HeartHandshake,
      title: "Patient-Centered Care",
      description: "Putting patients first with personalized insights that empower informed healthcare decisions."
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Maintaining the highest standards of data protection and medical privacy compliance."
    },
    {
      icon: Target,
      title: "Precision Medicine",
      description: "Enabling targeted treatments through comprehensive genetic and pharmacogenomic analysis."
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
              About Genoma
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Revolutionizing <span className="bg-gradient-primary bg-clip-text text-transparent">Healthcare</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Genoma is transforming healthcare through integrated genetic, blood, and pharmacogenomic 
              risk assessment, making personalized medicine accessible to everyone.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  To eliminate the fragmentation in healthcare risk assessment by providing a unified platform 
                  that seamlessly integrates genetic compatibility checks, maternal-fetal health monitoring, 
                  organ transplant matching, and pharmacogenomic analysis. We believe every patient deserves 
                  personalized healthcare insights that can prevent complications and save lives.
                </p>
              </div>
              <div className="relative">
                <img 
                  src={researchLab} 
                  alt="Advanced genetic research laboratory"
                  className="rounded-lg shadow-medical w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-lg" />
              </div>
            </div>

            <Card className="bg-primary/5 border-primary/20 max-w-4xl mx-auto">
              <CardContent className="pt-8">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">1M+</div>
                    <p className="text-foreground/70">Genetic Variants Analyzed</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                    <p className="text-foreground/70">Analysis Accuracy</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                    <p className="text-foreground/70">Health Monitoring</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                The principles that guide our mission to transform healthcare through innovation and compassion.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="bg-gradient-card shadow-card-soft hover:shadow-medical transition-all duration-300">
                  <CardHeader className="text-center">
                    <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="relative lg:order-1">
                <img 
                  src={healthcareProfessionals} 
                  alt="Healthcare professionals team"
                  className="rounded-lg shadow-medical w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-primary/20 to-transparent rounded-lg" />
              </div>
              <Card className="bg-gradient-card shadow-medical lg:order-2">
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    A world where every healthcare decision is informed by comprehensive, personalized genetic 
                    and pharmacogenomic insights. Where preventable complications become a thing of the past, 
                    and where precision medicine is not a luxury, but a standard of care accessible to all.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;