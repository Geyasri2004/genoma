import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import consultationRoom from "@/assets/consultation-room.jpg";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get in touch with our team",
      contact: "hello@genoma.health",
      availability: "24/7 Response"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our experts",
      contact: "+1 (555) 123-4567",
      availability: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: MapPin,
      title: "Office Location",
      description: "Visit our headquarters",
      contact: "Healthcare Innovation District",
      availability: "By Appointment"
    },
    {
      icon: Clock,
      title: "Emergency Support",
      description: "Critical healthcare issues",
      contact: "emergency@genoma.health",
      availability: "24/7 Available"
    }
  ];

  const inquiryTypes = [
    "General Information",
    "Product Demo",
    "Partnership Opportunities",
    "Technical Support",
    "Clinical Consultation",
    "Research Collaboration",
    "Media Inquiries",
    "Other"
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
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let's Transform <span className="bg-gradient-primary bg-clip-text text-transparent">Healthcare Together</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Ready to revolutionize your healthcare delivery? Contact our team to learn how 
              Genoma can integrate with your systems and improve patient outcomes.
            </p>
          </div>
        </section>

        {/* Professional Consultation */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-20">
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                  Professional Support
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Expert Healthcare <span className="bg-gradient-primary bg-clip-text text-transparent">Consultation</span>
                </h2>
                <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                  Our team of healthcare professionals and technical experts are here to support 
                  your implementation and answer any questions about Genoma's capabilities.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-primary mr-3" />
                    <span>Direct line to our medical advisory team</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-primary mr-3" />
                    <span>24/7 technical and clinical support</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-primary mr-3" />
                    <span>Personalized implementation planning</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={consultationRoom} 
                  alt="Professional medical consultation room"
                  className="rounded-lg shadow-medical w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-primary/20 to-transparent rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Multiple Ways to Connect</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Choose the contact method that works best for you. Our team is ready to help.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <Card key={index} className="bg-gradient-card shadow-card-soft hover:shadow-medical transition-all duration-300 text-center">
                  <CardHeader>
                    <method.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                    <CardTitle className="text-lg">{method.title}</CardTitle>
                    <CardDescription>{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-primary mb-2">{method.contact}</p>
                    <p className="text-sm text-foreground/60">{method.availability}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Send Us a Message</h2>
                <p className="text-lg text-foreground/70">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <Card className="bg-gradient-card shadow-medical">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="w-6 h-6 text-primary mr-3" />
                    Contact Form
                  </CardTitle>
                  <CardDescription>
                    Please provide details about your inquiry and we'll match you with the right team member.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="your.email@company.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization</Label>
                      <Input id="organization" placeholder="Your hospital/clinic/company" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Role/Title</Label>
                      <Input id="role" placeholder="Your position" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">Inquiry Type *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        {inquiryTypes.map((type, index) => (
                          <SelectItem key={index} value={type.toLowerCase().replace(/\s+/g, '-')}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please describe your needs, questions, or how we can help you..." 
                      className="min-h-[120px]"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="privacy" className="rounded" />
                    <Label htmlFor="privacy" className="text-sm">
                      I agree to the privacy policy and terms of service *
                    </Label>
                  </div>

                  <Button size="lg" className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader className="text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Schedule a Demo</CardTitle>
                  <CardDescription>
                    See Genoma in action with a personalized demonstration
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Link to="/demo">
                    <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300 w-full sm:w-auto">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Demo Call
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-success/5 border-success/20">
                <CardHeader className="text-center">
                  <MessageSquare className="w-12 h-12 text-success mx-auto mb-4" />
                  <CardTitle>Join Our Community</CardTitle>
                  <CardDescription>
                    Connect with other healthcare innovators using Genoma
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="outline" className="border-success/30 hover:border-success/60 hover:bg-success/5">
                    <Users className="w-4 h-4 mr-2" />
                    Join Community
                  </Button>
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

export default Contact;