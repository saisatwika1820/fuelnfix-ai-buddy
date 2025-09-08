import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Fuel, 
  Wrench, 
  Bot, 
  Zap, 
  Camera, 
  Mic, 
  MapPin, 
  Clock,
  Shield,
  CreditCard
} from "lucide-react";
import roadsideAssistanceHero from "@/assets/roadside-assistance-hero.jpg";

const Services = () => {
  const fuelFeatures = [
    { icon: MapPin, title: "GPS Location", desc: "Auto-detect your location" },
    { icon: Clock, title: "Live Tracking", desc: "Real-time delivery updates" },
    { icon: CreditCard, title: "Easy Payment", desc: "Multiple payment options" },
    { icon: Bot, title: "AI Optimization", desc: "Smart route & pricing" }
  ];

  const mechanicFeatures = [
    { icon: Bot, title: "AI Diagnosis", desc: "Instant problem detection" },
    { icon: Camera, title: "Photo Analysis", desc: "Upload damage photos" },
    { icon: Mic, title: "Voice Commands", desc: "Hands-free assistance" },
    { icon: Shield, title: "Verified Pros", desc: "Trusted mechanics only" }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI-Powered Automotive Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the future of fuel delivery and roadside assistance with our intelligent platform
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Fuel Delivery Service */}
          <Card className="p-8 shadow-card hover:shadow-elegant transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-gradient-primary rounded-full">
                <Fuel className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Fuel Delivery</h3>
                <p className="text-muted-foreground">On-demand fuel at your location</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {fuelFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <feature.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{feature.title}</p>
                    <p className="text-xs text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span>Petrol (Premium)</span>
                <span className="font-semibold">₹95/L + delivery</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Diesel</span>
                <span className="font-semibold">₹87/L + delivery</span>
              </div>
              <div className="h-px bg-border" />
              <div className="flex justify-between text-sm font-medium">
                <span>Delivery charges from</span>
                <span className="text-success">₹25</span>
              </div>
            </div>

            <Button variant="service" className="w-full" size="lg">
              <Fuel className="h-5 w-5" />
              Order Fuel Now
            </Button>
          </Card>

          {/* Roadside Assistance Service */}
          <Card className="p-8 shadow-card hover:shadow-elegant transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
              <img 
                src={roadsideAssistanceHero} 
                alt="Roadside assistance" 
                className="w-full h-full object-cover rounded-bl-3xl"
              />
            </div>
            
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="p-4 bg-gradient-to-br from-accent to-accent/80 rounded-full">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Roadside Assistance</h3>
                <p className="text-muted-foreground">Expert help when you need it</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {mechanicFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <feature.icon className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{feature.title}</p>
                    <p className="text-xs text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span>Basic Diagnosis</span>
                <span className="font-semibold">Free with AI</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Emergency Repairs</span>
                <span className="font-semibold">From ₹299</span>
              </div>
              <div className="h-px bg-border" />
              <div className="flex justify-between text-sm font-medium">
                <span>Response time</span>
                <span className="text-success">~15 mins</span>
              </div>
            </div>

            <Button variant="service" className="w-full" size="lg">
              <Bot className="h-5 w-5" />
              Get AI Assistance
            </Button>
          </Card>
        </div>

        {/* AI Features Highlight */}
        <div className="mt-16 text-center">
          <Card className="p-8 max-w-4xl mx-auto bg-gradient-subtle border-primary/20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-gradient-primary rounded-full">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Powered by Advanced AI</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our intelligent system provides predictive maintenance alerts, optimal routing, 
              smart pricing, and instant vehicle diagnostics through image recognition and voice commands.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/50 rounded-full text-sm">
                <Bot className="h-4 w-4 text-primary" />
                <span>24/7 AI Support</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/50 rounded-full text-sm">
                <Camera className="h-4 w-4 text-primary" />
                <span>Image Recognition</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/50 rounded-full text-sm">
                <Mic className="h-4 w-4 text-primary" />
                <span>Voice Commands</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;