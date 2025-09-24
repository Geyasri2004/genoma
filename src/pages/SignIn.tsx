import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Link, useNavigate } from "react-router-dom";
import { Dna, Mail, Lock, Eye, EyeOff, ArrowLeft } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import doctorProfessional from "@/assets/doctor-professional.jpg";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={doctorProfessional} 
          alt="Healthcare professional"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-subtle opacity-90" />
      </div>
      
      <Card className="w-full max-w-md relative z-10 glass-effect shadow-glass">
        <CardHeader className="text-center space-y-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link to="/" className="flex items-center space-x-2">
              <Dna className="h-8 w-8 text-primary animate-glow" />
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Genoma
              </span>
            </Link>
            <ThemeToggle />
          </div>
          <div>
            <CardTitle className="text-2xl">Welcome Back</CardTitle>
            <CardDescription>
              Sign in to access your personalized healthcare dashboard
            </CardDescription>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="doctor@hospital.com"
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="pl-10 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 h-4 w-4 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm">Remember me</Label>
              </div>
              <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                Forgot password?
              </Link>
            </div>
          </div>

          <Button 
            className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
            onClick={handleSignIn}
          >
            Sign In to Dashboard
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="w-full">
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Google
            </Button>
            <Button variant="outline" className="w-full">
              <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.024-.105-.949-.199-2.403.041-3.439.219-.937 1.219-5.219 1.219-5.219s-.312-.219-.312-1.406c0-1.312.937-2.297 2.063-2.297.968 0 1.438.728 1.438 1.594 0 .968-.625 2.406-.937 3.75-.281 1.156.594 2.094 1.75 2.094 2.094 0 3.5-2.734 3.5-5.953 0-2.453-1.75-4.297-4.922-4.297-3.578 0-5.797 2.672-5.797 5.672 0 1.031.281 1.766.781 2.328.125.125.156.219.125.375l-.25 1.047c-.047.156-.172.203-.328.125C3.624 18.137 2.796 16.073 2.796 13.13c0-4.016 3.047-8.297 9.047-8.297 4.797 0 7.953 3.422 7.953 7.109 0 4.844-2.625 8.422-6.766 8.422-1.359 0-2.641-.734-3.047-1.625 0 0-.703 2.75-.859 3.297-.312 1.203-1.125 2.688-1.734 3.594C9.453 23.312 10.688 23.674 12.017 23.674c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
              </svg>
              Microsoft
            </Button>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              New to Genoma?{" "}
              <Link to="/demo" className="text-primary hover:underline font-medium">
                Schedule a demo
              </Link>
            </p>
          </div>

          <div className="text-center">
            <Badge variant="secondary" className="text-xs">
              🔒 Enterprise-grade security • SOC 2 compliant
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn;