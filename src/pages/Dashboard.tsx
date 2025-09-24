import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Activity, 
  Heart, 
  Brain, 
  Shield, 
  TrendingUp, 
  Calendar, 
  Bell,
  User,
  Settings,
  LogOut,
  Dna,
  LineChart,
  BarChart3,
  PieChart,
  Zap,
  Sparkles
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import FeaturesDashboard from "@/components/FeaturesDashboard";

const Dashboard = () => {
  const [activeMetric, setActiveMetric] = useState("overview");
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogout = () => {
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account.",
    });
    // Small delay to show the toast before navigation
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const healthMetrics = [
    {
      title: "Overall Health Score",
      value: 92,
      change: "+5%",
      icon: Activity,
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      title: "Heart Rate Variability", 
      value: 78,
      change: "+2%",
      icon: Heart,
      color: "text-red-500",
      bgColor: "bg-red-500/10"
    },
    {
      title: "Cognitive Performance",
      value: 85,
      change: "+8%", 
      icon: Brain,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      title: "Immune System",
      value: 88,
      change: "+3%",
      icon: Shield, 
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    }
  ];

  const recentActivities = [
    { time: "2 hours ago", activity: "Genetic analysis completed", type: "success" },
    { time: "4 hours ago", activity: "New health recommendation", type: "info" },
    { time: "6 hours ago", activity: "Biomarker data updated", type: "success" },
    { time: "1 day ago", activity: "Consultation scheduled", type: "warning" }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <div className="flex items-center space-x-2">
              <Dna className="h-8 w-8 text-primary animate-glow" />
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Genoma Dashboard
              </span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="outline" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-6 space-y-8">
        {/* Welcome Section */}
        <div className="glass-effect rounded-2xl p-8 animate-slide-up">
          <div>
            <h1 className="text-4xl font-bold font-display bg-gradient-primary bg-clip-text text-transparent mb-2">
              Welcome back, Dr. Sarah
            </h1>
            <p className="text-muted-foreground text-lg">
              Your personalized health insights are ready
            </p>
          </div>
        </div>

        {/* Comprehensive Health Dashboard */}
        <FeaturesDashboard />

        {/* Health Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {healthMetrics.map((metric, index) => (
            <Card 
              key={metric.title} 
              className="relative overflow-hidden glass-effect hover:shadow-glow transition-all duration-300 animate-scale-in group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setActiveMetric(metric.title)}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-lg ${metric.bgColor}`}>
                    <metric.icon className={`h-5 w-5 ${metric.color}`} />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {metric.change}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">{metric.title}</p>
                  <div className="flex items-center space-x-2">
                    <span className="text-3xl font-bold">{metric.value}</span>
                    <span className="text-sm text-muted-foreground">%</span>
                  </div>
                  <Progress value={metric.value} className="h-2" />
                </div>
              </CardContent>
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            </Card>
          ))}
        </div>

        {/* Main Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Charts and Analytics */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="glass-effect">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl font-display">Health Trends</CardTitle>
                    <CardDescription>Your health metrics over time</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <LineChart className="h-4 w-4 mr-2" />
                      Line
                    </Button>
                    <Button variant="outline" size="sm">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      Bar
                    </Button>
                    <Button variant="outline" size="sm">
                      <PieChart className="h-4 w-4 mr-2" />
                      Pie
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-80 bg-gradient-card rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <TrendingUp className="h-16 w-16 text-primary mx-auto animate-glow" />
                    <p className="text-lg font-medium">Interactive Health Charts</p>
                    <p className="text-muted-foreground">Real-time visualization of your health data</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Genetic Analysis */}
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="text-xl font-display flex items-center">
                  <Dna className="h-5 w-5 mr-2 text-primary" />
                  Genetic Analysis
                </CardTitle>
                <CardDescription>Latest genomic insights</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="variants" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="variants">Variants</TabsTrigger>
                    <TabsTrigger value="traits">Traits</TabsTrigger>
                    <TabsTrigger value="ancestry">Ancestry</TabsTrigger>
                  </TabsList>
                  <TabsContent value="variants" className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-gradient-card rounded-lg">
                        <div className="text-2xl font-bold text-primary">127</div>
                        <div className="text-sm text-muted-foreground">Analyzed Variants</div>
                      </div>
                      <div className="p-4 bg-gradient-card rounded-lg">
                        <div className="text-2xl font-bold text-success">23</div>
                        <div className="text-sm text-muted-foreground">Beneficial</div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="traits" className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span>Athletic Performance</span>
                        <Badge>High</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Caffeine Sensitivity</span>
                        <Badge variant="secondary">Medium</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Sleep Quality</span>
                        <Badge>High</Badge>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="ancestry" className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span>Northern European</span>
                        <span className="font-medium">64%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Southern European</span>
                        <span className="font-medium">28%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>East Asian</span>
                        <span className="font-medium">8%</span>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="text-xl font-display">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300">
                  <Zap className="h-4 w-4 mr-2" />
                  New Health Scan
                </Button>
                <Button variant="outline" className="w-full">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Consultation
                </Button>
                <Button variant="outline" className="w-full">
                  <User className="h-4 w-4 mr-2" />
                  Update Profile
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="text-xl font-display">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-card">
                      <div className={`w-2 h-2 rounded-full ${
                        activity.type === 'success' ? 'bg-success' :
                        activity.type === 'info' ? 'bg-primary' :
                        'bg-warning'
                      }`} />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{activity.activity}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Health Tips */}
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="text-xl font-display">Today's Tip</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm">
                    Based on your genetic profile, consider increasing your omega-3 intake for optimal brain health.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;