import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Baby, 
  Heart, 
  Pill, 
  User, 
  Activity,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Shield
} from "lucide-react";
import digitalTwinImage from "@/assets/digital-twin.jpg";

const FeaturesDashboard = () => {
  const features = [
    {
      id: "genetic",
      title: "Genetic Compatibility",
      icon: Users,
      description: "Couples planning children",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      id: "maternal",
      title: "Maternal-Fetal Health",
      icon: Baby,
      description: "Pregnancy safety monitoring",
      color: "text-pink-500", 
      bgColor: "bg-pink-500/10"
    },
    {
      id: "transplant",
      title: "HLA & Blood Matching",
      icon: Heart,
      description: "Transplant compatibility",
      color: "text-red-500",
      bgColor: "bg-red-500/10"
    },
    {
      id: "pharma",
      title: "Pharmacogenomics",
      icon: Pill,
      description: "Drug interaction analysis",
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      id: "digital",
      title: "Digital Twin",
      icon: User,
      description: "Personalized health simulation",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    }
  ];

  const mockData = {
    genetic: {
      compatibilityScore: 87,
      riskFactors: ["CF Gene Variant", "Blood Type"],
      recommendations: "Consider genetic counseling for CF screening"
    },
    maternal: {
      rhStatus: "Rh Negative",
      antibodyScreen: "Negative", 
      timeline: "28 weeks - Anti-D due"
    },
    transplant: {
      hlaMatch: "6/6 Match",
      bloodType: "O+ Compatible",
      crossmatch: "Negative"
    },
    pharma: {
      cypStatus: "Poor Metabolizer",
      drugsToAvoid: ["Warfarin", "Clopidogrel"],
      alternatives: "Consider Rivaroxaban"
    }
  };

  return (
    <section id="features" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            <Activity className="w-4 h-4 mr-2" />
            Interactive Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Health Dashboard</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Experience our unified platform that integrates all critical health assessments 
            with real-time AI insights and personalized recommendations.
          </p>
        </div>

        <Tabs defaultValue="genetic" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
            {features.map((feature) => (
              <TabsTrigger key={feature.id} value={feature.id} className="text-xs">
                <feature.icon className="w-4 h-4 mr-2" />
                {feature.title.split(' ')[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="genetic" className="space-y-6">
            <Card className="bg-gradient-card shadow-medical">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-6 h-6 text-blue-500 mr-3" />
                  Genetic Compatibility Assessment
                </CardTitle>
                <CardDescription>
                  Comprehensive genetic analysis for couples planning children
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Compatibility Score</h4>
                    <div className="flex items-center space-x-3">
                      <Progress value={mockData.genetic.compatibilityScore} className="flex-1" />
                      <Badge variant="outline" className="text-success border-success/30">
                        {mockData.genetic.compatibilityScore}% Compatible
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Risk Factors Detected</h4>
                    <div className="space-y-2">
                      {mockData.genetic.riskFactors.map((risk, index) => (
                        <div key={index} className="flex items-center">
                          <AlertTriangle className="w-4 h-4 text-warning mr-2" />
                          <span className="text-sm">{risk}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Shield className="w-4 h-4 text-primary mr-2" />
                    AI Recommendation
                  </h4>
                  <p className="text-sm text-foreground/80">{mockData.genetic.recommendations}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="maternal" className="space-y-6">
            <Card className="bg-gradient-card shadow-medical">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Baby className="w-6 h-6 text-pink-500 mr-3" />
                  Maternal-Fetal Health Monitoring
                </CardTitle>
                <CardDescription>
                  Real-time pregnancy safety and antigen conflict monitoring
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="bg-muted/50">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-pink-500">{mockData.maternal.rhStatus}</div>
                        <div className="text-sm text-foreground/60">Rh Status</div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-muted/50">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-success">{mockData.maternal.antibodyScreen}</div>
                        <div className="text-sm text-foreground/60">Antibody Screen</div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-muted/50">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="text-sm font-bold text-warning">{mockData.maternal.timeline}</div>
                        <div className="text-xs text-foreground/60">Next Milestone</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="transplant" className="space-y-6">
            <Card className="bg-gradient-card shadow-medical">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="w-6 h-6 text-red-500 mr-3" />
                  HLA & Blood Compatibility
                </CardTitle>
                <CardDescription>
                  Advanced transplant matching and compatibility analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { label: "HLA Match", value: mockData.transplant.hlaMatch, status: "success" },
                    { label: "Blood Type", value: mockData.transplant.bloodType, status: "success" },
                    { label: "Crossmatch", value: mockData.transplant.crossmatch, status: "success" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-success/5 rounded-lg border border-success/20">
                      <div>
                        <div className="font-semibold">{item.label}</div>
                        <div className="text-sm text-foreground/60">{item.value}</div>
                      </div>
                      <CheckCircle className="w-5 h-5 text-success" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pharma" className="space-y-6">
            <Card className="bg-gradient-card shadow-medical">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Pill className="w-6 h-6 text-green-500 mr-3" />
                  Pharmacogenomics Analysis
                </CardTitle>
                <CardDescription>
                  Personalized drug safety and efficacy predictions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Metabolizer Status</h4>
                    <Badge variant="outline" className="text-warning border-warning/30">
                      {mockData.pharma.cypStatus}
                    </Badge>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Recommended Alternative</h4>
                    <Badge className="bg-success/10 text-success border-success/30">
                      {mockData.pharma.alternatives}
                    </Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Drugs to Avoid</h4>
                  <div className="flex flex-wrap gap-2">
                    {mockData.pharma.drugsToAvoid.map((drug, index) => (
                      <Badge key={index} variant="outline" className="text-destructive border-destructive/30">
                        {drug}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="digital" className="space-y-6">
            <Card className="bg-gradient-card shadow-medical">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="w-6 h-6 text-purple-500 mr-3" />
                  Personalized Digital Twin
                </CardTitle>
                <CardDescription>
                  Real-time health simulation and lifestyle impact modeling
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <img 
                      src={digitalTwinImage} 
                      alt="Digital Twin Visualization"
                      className="w-full rounded-lg shadow-card-soft"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Health Score</span>
                      <Badge className="bg-success/10 text-success">92/100</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Risk Level</span>
                      <Badge variant="outline" className="text-warning border-warning/30">Low-Moderate</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Lifestyle Impact</span>
                      <div className="flex items-center">
                        <TrendingUp className="w-4 h-4 text-success mr-1" />
                        <span className="text-success text-sm">Improving</span>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300">
                      View Full Simulation
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default FeaturesDashboard;