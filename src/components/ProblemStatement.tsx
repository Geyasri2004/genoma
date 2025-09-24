import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Users, Baby, Heart, Pill } from "lucide-react";

const ProblemStatement = () => {
  const problems = [
    {
      icon: Users,
      title: "Genetic Compatibility",
      description: "Couples lack comprehensive genetic compatibility checks before planning children",
      impact: "Undetected hereditary risks"
    },
    {
      icon: Baby,
      title: "Maternal-Fetal Risks",
      description: "Pregnancies threatened by maternal-fetal antigen conflicts and Rh incompatibility",
      impact: "Preventable complications"
    },
    {
      icon: Heart,
      title: "Transplant Matching",
      description: "Organ transplants fail due to HLA and blood group mismatches",
      impact: "Life-threatening failures"
    },
    {
      icon: Pill,
      title: "Drug Reactions",
      description: "Pharmacogenomic risks overlooked, causing adverse drug reactions",
      impact: "Preventable ADRs"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <AlertTriangle className="w-12 h-12 text-warning mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold">Critical Healthcare Gaps</h2>
          </div>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Millions face critical gaps in personalized health risk detection. Currently, no single platform 
            seamlessly integrates genetic, blood, and pharmacogenomic assessments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {problems.map((problem, index) => (
            <Card key={index} className="bg-gradient-card shadow-card-soft hover:shadow-medical transition-all duration-300 border-l-4 border-l-warning">
              <CardHeader className="pb-3">
                <problem.icon className="w-10 h-10 text-warning mb-3" />
                <CardTitle className="text-lg">{problem.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm mb-3">
                  {problem.description}
                </CardDescription>
                <div className="text-xs font-semibold text-warning bg-warning/10 px-2 py-1 rounded">
                  {problem.impact}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* The Big Problem */}
        <Card className="bg-destructive/5 border-destructive/20 shadow-card-soft max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-destructive">The Fragmentation Problem</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-foreground/80 leading-relaxed">
              <strong>No single platform</strong> seamlessly integrates these assessments, leaving patients and doctors 
              without <strong>actionable insights</strong>. This fragmentation results in missed diagnoses, 
              preventable complications, and life-threatening treatment failures.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProblemStatement;