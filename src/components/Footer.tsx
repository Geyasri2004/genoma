import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dna, Brain, Heart, Mail, Phone, Users } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Dna className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Genoma
              </span>
            </div>
            <p className="text-sm text-foreground/70 max-w-sm">
              Revolutionizing personalized healthcare through integrated genetic, 
              blood, and pharmacogenomic risk assessment powered by advanced AI technology.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Platform Features</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>• Genetic Compatibility Assessment</li>
              <li>• Maternal-Fetal Health Monitoring</li>
              <li>• HLA & Blood Matching</li>
              <li>• Pharmacogenomics Analysis</li>
              <li>• Personalized Digital Twin</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact Info</h3>
            <div className="space-y-3 text-sm text-foreground/70">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>support@genoma.health</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>24/7 Healthcare Support</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-foreground/60">
            © 2025 Genoma. Empowering healthcare through AI innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;