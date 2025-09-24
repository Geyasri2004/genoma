import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SolutionOverview from "@/components/SolutionOverview";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Users, Hospital, Baby, Heart, Pill, ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import hospitalRoom from "@/assets/hospital-room.jpg";
import aiAgents from "@/assets/ai-agents.jpg";

const Solutions = () => {
  const useCases = [
    {
      icon: Users,
      title: "Family Planning Solutions",
      description: "Comprehensive genetic compatibility assessment for couples planning children",
      metrics: [
        { label: "Risk Detection Rate", value: 95 },
        { label: "Genetic Variants Analyzed", value: 1000000 },
        { label: "Couples Assessed", value: 10000 }
      ],
      outcomes: [
        "99% reduction in undetected hereditary risks",
        "Early intervention planning for genetic conditions",
        "Informed family planning decisions",
        "Reduced anxiety through clear insights"
      ]
    },
    {
      icon: Baby,
      title: "Maternal-Fetal Health",
      description: "Advanced monitoring and risk assessment during pregnancy",
      metrics: [
        { label: "Complication Prevention", value: 87 },
        { label: "Early Detection Rate", value: 92 },
        { label: "Successful Interventions", value: 89 }
      ],
      outcomes: [
        "Reduced maternal-fetal complications",
        "Early detection of Rh incompatibility",
        "Optimized prenatal care protocols",
        "Improved pregnancy outcomes"
      ]
    },
    {
      icon: Heart,
      title: "Transplant Matching",
      description: "Precision HLA and blood group compatibility analysis for organ transplants",
      metrics: [
        { label: "Match Accuracy", value: 99 },
        { label: "Success Rate Improvement", value: 35 },
        { label: "Processing Speed", value: 90 }
      ],
      outcomes: [
        "Reduced transplant rejection rates",
        "Optimal donor-recipient matching",
        "Faster transplant decision-making",
        "Extended organ viability"
      ]
    },
    {
      icon: Pill,
      title: "Pharmacogenomic Optimization",
      description: "Personalized drug selection and dosing based on genetic profiles",
      metrics: [
        { label: "ADR Reduction", value: 78 },
        { label: "Treatment Efficacy", value: 85 },
        { label: "Drug Interactions Prevented", value: 92 }
      ],
      outcomes: [
        "Reduced adverse drug reactions",
        "Optimized medication effectiveness",
        "Personalized dosing recommendations",
        "Improved patient safety"
      ]
    }
  ];

  const industries = [
    {
      name: "Healthcare Systems",
      description: "Integrated EHR solutions for hospitals and clinics",
      benefits: ["Streamlined workflows", "Reduced diagnostic errors", "Improved patient outcomes"]
    },
    {
      name: "Fertility Clinics",
      description: "Specialized genetic assessment for reproductive health",
      benefits: ["Enhanced IVF success rates", "Genetic counseling support", "Risk stratification"]
    },
    {
      name: "Pharmaceutical",
      description: "Drug development and personalized therapy optimization",
      benefits: ["Clinical trial optimization", "Companion diagnostics", "Market access support"]
    },
    {
      name: "Research Institutions",
      description: "Advanced genomic research and population health studies",
      benefits: ["Large-scale data analysis", "Research collaboration tools", "Publication support"]
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
              Healthcare Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transforming <span className="bg-gradient-primary bg-clip-text text-transparent">Healthcare Delivery</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Discover how Genoma's integrated platform is revolutionizing healthcare outcomes 
              across multiple specialties and use cases.
            </p>
          </div>
        </section>

        {/* Core Solution */}
        <SolutionOverview />

        {/* Use Cases */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Real-World Applications</h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                See how Genoma is making a measurable impact across different healthcare scenarios 
                with proven results and improved patient outcomes.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={index} className="bg-gradient-card shadow-medical hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <useCase.icon className="w-8 h-8 text-primary mr-3" />
                      <div>
                        <CardTitle className="text-xl">{useCase.title}</CardTitle>
                        <CardDescription>{useCase.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Metrics */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-sm">Key Metrics</h4>
                      {useCase.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">{metric.label}</span>
                            <Badge variant="outline" className="text-xs">{metric.value}%</Badge>
                          </div>
                          <Progress value={metric.value} className="h-2" />
                        </div>
                      ))}
                    </div>

                    {/* Outcomes */}
                    <div>
                      <h4 className="font-semibold text-sm mb-3">Clinical Outcomes</h4>
                      <ul className="space-y-2">
                        {useCase.outcomes.map((outcome, outcomeIndex) => (
                          <li key={outcomeIndex} className="flex items-start text-sm">
                            <TrendingUp className="w-4 h-4 text-success mt-0.5 mr-2 flex-shrink-0" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Healthcare Innovation */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-20">
              <div className="relative">
                <img 
                  src={hospitalRoom} 
                  alt="Modern hospital room with advanced medical equipment"
                  className="rounded-lg shadow-medical w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-lg" />
              </div>
              <div>
                <Badge className="mb-4 bg-success/10 text-success border-success/20">
                  Healthcare Innovation
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Transforming Patient <span className="bg-gradient-primary bg-clip-text text-transparent">Care</span>
                </h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Our solutions integrate seamlessly with existing healthcare infrastructure, 
                  providing healthcare professionals with the tools they need to deliver 
                  personalized, precision medicine.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Industry Solutions</h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Tailored implementations designed to meet the specific needs of different healthcare sectors.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {industries.map((industry, index) => (
                <Card key={index} className="bg-gradient-card shadow-card-soft hover:shadow-medical transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{industry.name}</CardTitle>
                    <CardDescription className="text-sm">{industry.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {industry.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-xs text-foreground/70">
                          • {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-primary/5 border-primary/20 max-w-4xl mx-auto">
              <CardContent className="pt-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Healthcare Delivery?</h3>
                  <p className="text-foreground/70 mb-6">
                    Join leading healthcare organizations that are already using Genoma to improve patient outcomes.
                  </p>
                  <Link to="/demo">
                    <Button 
                      size="lg" 
                      className="bg-gradient-primary hover:shadow-glow transition-all duration-300 w-full sm:w-auto"
                    >
                      <Hospital className="w-5 h-5 mr-2" />
                      Schedule a Demo
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

export default Solutions;