import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ArrowLeft, CalendarIcon, Clock, Users, Hospital, CheckCircle, Shield, Award } from "lucide-react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import medicalConsultation from "@/assets/medical-consultation.jpg";
import healthcareDashboard from "@/assets/healthcare-dashboard.jpg";
import healthcareTeam from "@/assets/healthcare-team.jpg";

const Demo = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM", 
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
  ];

  const benefits = [
    "Experience live genetic analysis demonstrations",
    "Understand personalized medication recommendations",
    "See how our technology improves patient care",
    "Learn about compatibility matching for treatments",
    "Discover advanced health monitoring capabilities",
    "Get all your questions answered by our experts"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle relative overflow-hidden">
          <div className="absolute top-4 left-4 z-20">
            <Link to="/">
              <Button variant="outline" size="sm" className="hover:bg-muted/50">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 text-lg px-6 py-2">
              Schedule Your Personal Demo
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Experience Genoma's <span className="bg-gradient-primary bg-clip-text text-transparent">Healthcare Innovation</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto mb-12 leading-relaxed">
              See how our advanced genetic analysis platform is helping healthcare professionals 
              provide better, more personalized patient care. Schedule a one-on-one demonstration 
              with our medical technology specialists.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-16">
              <div className="text-center">
                <img src={medicalConsultation} alt="Medical consultation" className="rounded-lg shadow-medical mb-4 w-full h-48 object-cover" />
                <h3 className="text-lg font-semibold mb-2">Expert Consultation</h3>
                <p className="text-foreground/70">Meet with our healthcare technology experts</p>
              </div>
              <div className="text-center">
                <img src={healthcareDashboard} alt="Healthcare dashboard" className="rounded-lg shadow-medical mb-4 w-full h-48 object-cover" />
                <h3 className="text-lg font-semibold mb-2">Live Platform Demo</h3>
                <p className="text-foreground/70">See our genetic analysis tools in action</p>
              </div>
              <div className="text-center">
                <img src={healthcareTeam} alt="Healthcare team" className="rounded-lg shadow-medical mb-4 w-full h-48 object-cover" />
                <h3 className="text-lg font-semibold mb-2">Professional Support</h3>
                <p className="text-foreground/70">Learn from experienced medical professionals</p>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Booking Form */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Schedule Your Personal Demonstration</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Choose a convenient time for your personalized demo. Our healthcare experts will walk you through 
                all the features and answer your questions.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              
              {/* Form */}
              <Card className="bg-gradient-card shadow-medical border-2">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-3xl font-bold">Book Your Demonstration</CardTitle>
                  <CardDescription className="text-lg mt-4">
                    Please provide your information below. We'll contact you within 24 hours to 
                    confirm your appointment and prepare a customized demonstration.
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="firstName" className="text-base font-medium">First Name *</Label>
                      <Input id="firstName" placeholder="Enter your first name" className="h-12 text-lg" />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="lastName" className="text-base font-medium">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" className="h-12 text-lg" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-base font-medium">Email Address *</Label>
                    <Input id="email" type="email" placeholder="your.email@organization.com" className="h-12 text-lg" />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="phone" className="text-base font-medium">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" className="h-12 text-lg" />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="organization" className="text-base font-medium">Healthcare Organization *</Label>
                    <Input id="organization" placeholder="Your hospital, clinic, or practice name" className="h-12 text-lg" />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="role" className="text-base font-medium">Your Professional Role *</Label>
                    <Select>
                      <SelectTrigger className="h-12 text-lg">
                        <SelectValue placeholder="Please select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="physician">Physician / Doctor</SelectItem>
                        <SelectItem value="nurse">Nurse / Nursing Staff</SelectItem>
                        <SelectItem value="administrator">Healthcare Administrator</SelectItem>
                        <SelectItem value="researcher">Medical Researcher</SelectItem>
                        <SelectItem value="it">IT Director / Technology</SelectItem>
                        <SelectItem value="other">Other Healthcare Professional</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label className="text-base font-medium">Preferred Date *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-start h-12 text-lg">
                            <CalendarIcon className="mr-3 h-5 w-5" />
                            {selectedDate ? format(selectedDate, "PPPP") : "Please select a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 z-50" align="start" side="bottom">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            initialFocus
                            disabled={(date) => date < new Date()}
                            className="rounded-md border shadow-lg bg-background p-3 pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-base font-medium">Preferred Time *</Label>
                      <Select value={selectedTime} onValueChange={setSelectedTime}>
                        <SelectTrigger className="h-12 text-lg">
                          <SelectValue placeholder="Please select a time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time} className="text-lg py-3">
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="interests" className="text-base font-medium">What would you like to learn about? (Optional)</Label>
                    <Textarea 
                      id="interests"
                      placeholder="Please tell us about your specific interests, questions, or how you plan to use our genetic analysis platform. This helps us prepare a more relevant demonstration for you."
                      className="min-h-[120px] text-lg p-4"
                    />
                  </div>

                  <Button className="w-full h-14 text-lg font-semibold bg-gradient-primary hover:shadow-glow transition-all duration-300">
                    <CalendarIcon className="w-5 h-5 mr-3" />
                    Schedule My Personal Demo
                  </Button>

                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    By scheduling a demo, you agree to our terms of service and privacy policy. 
                    We respect your privacy and will only use your information to provide the demonstration.
                  </p>
                </CardContent>
              </Card>

              {/* Benefits & Info */}
              <div className="space-y-8">
                <Card className="bg-primary/5 border-primary/20 border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl mb-4">
                      <Clock className="w-6 h-6 mr-3 text-primary" />
                      What You'll Experience
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-6 h-6 text-success mr-4 mt-1 flex-shrink-0" />
                          <span className="text-base leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl mb-4">
                      <Users className="w-6 h-6 mr-3 text-primary" />
                      Session Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="text-base font-medium">Duration:</span>
                      <span className="text-base text-muted-foreground">45-60 minutes</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="text-base font-medium">Format:</span>
                      <span className="text-base text-muted-foreground">Live video conference</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="text-base font-medium">Attendees:</span>
                      <span className="text-base text-muted-foreground">Up to 5 participants</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-base font-medium">Follow-up:</span>
                      <span className="text-base text-muted-foreground">Resources & trial access</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-2">
                  <CardContent className="pt-8">
                    <div className="text-center">
                      <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
                      <h3 className="text-xl font-bold mb-4">Trusted Healthcare Technology</h3>
                      <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                        Join 500+ healthcare organizations worldwide who trust Genoma to enhance 
                        their patient care through advanced genetic analysis.
                      </p>
                      <div className="space-y-3">
                        <Badge className="bg-success/10 text-success border-success/20 text-base px-4 py-2">
                          <Award className="w-4 h-4 mr-2" />
                          Medical Grade Security
                        </Badge>
                        <Badge className="bg-primary/10 text-primary border-primary/20 text-base px-4 py-2">
                          <Shield className="w-4 h-4 mr-2" />
                          Industry Certified
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Demo;