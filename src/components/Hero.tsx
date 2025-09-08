import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Fuel, Wrench, Bot, Clock, Shield, MapPin } from "lucide-react";
import fuelDeliveryHero from "@/assets/fuel-delivery-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={fuelDeliveryHero} 
          alt="Fuel delivery service" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Fuel & Fix
            <br />
            <span className="bg-gradient-to-r from-white to-accent-foreground bg-clip-text text-transparent">
              Anytime, Anywhere
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            AI-powered on-demand fuel delivery and instant roadside assistance. 
            Never get stuck on the road again.
          </p>

          {/* Service Selection Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
            <Card className="p-6 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent rounded-full group-hover:scale-110 transition-transform">
                  <Fuel className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white">Order Fuel</h3>
                  <p className="text-white/80 text-sm">Get fuel delivered to your location</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent rounded-full group-hover:scale-110 transition-transform">
                  <Wrench className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white">Get Help</h3>
                  <p className="text-white/80 text-sm">Connect with nearby mechanics</p>
                </div>
              </div>
            </Card>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="xl" className="w-full sm:w-auto">
              <Bot className="h-5 w-5" />
              Start with AI Assistant
            </Button>
            <Button variant="outline" size="xl" className="w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white/20">
              <MapPin className="h-5 w-5" />
              Set Your Location
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>24/7 Available</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span>Verified Professionals</span>
            </div>
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              <span>AI-Powered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;