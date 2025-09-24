import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemStatement from "@/components/ProblemStatement";
import SolutionOverview from "@/components/SolutionOverview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProblemStatement />
      <SolutionOverview />
      <Footer />
    </div>
  );
};

export default Index;
