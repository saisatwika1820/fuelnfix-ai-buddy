import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Bot, 
  Send, 
  Mic, 
  Camera, 
  Fuel, 
  Wrench, 
  MapPin,
  MessageCircle
} from "lucide-react";

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your AI assistant. I can help you order fuel, diagnose vehicle issues, or connect you with mechanics. How can I help you today?",
      isBot: true
    }
  ]);

  const quickActions = [
    { icon: Fuel, text: "Order Fuel", action: "fuel" },
    { icon: Wrench, text: "Vehicle Issue", action: "mechanic" },
    { icon: MapPin, text: "Find Location", action: "location" },
    { icon: Camera, text: "Analyze Photo", action: "photo" }
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    const newMessage = {
      id: messages.length + 1,
      text: message,
      isBot: false
    };
    
    setMessages([...messages, newMessage]);
    setMessage("");
    
    // Simulate AI response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "I understand you need assistance. Let me help you with that. Based on your message, I can connect you with the right service.",
        isBot: true
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleQuickAction = (action: string) => {
    const actionMessages = {
      fuel: "I'd like to order fuel for my vehicle",
      mechanic: "I'm having vehicle issues and need help",
      location: "Help me set my location for service",
      photo: "I want to upload a photo for diagnosis"
    };
    
    setMessage(actionMessages[action as keyof typeof actionMessages]);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Your AI Assistant
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get instant help with voice commands, photo analysis, and smart recommendations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* AI Assistant Demo */}
          <Card className="overflow-hidden shadow-elegant">
            {/* Chat Header */}
            <div className="bg-gradient-primary p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-full">
                  <Bot className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">FuelNFill AI Assistant</h3>
                  <p className="text-sm text-white/80">Online • Ready to help</p>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gradient-subtle">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    msg.isBot 
                      ? 'bg-white border border-border shadow-sm' 
                      : 'bg-gradient-primary text-white'
                  }`}>
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="p-4 border-t border-border bg-card">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
                {quickActions.map((action, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickAction(action.action)}
                    className="justify-start gap-2"
                  >
                    <action.icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{action.text}</span>
                  </Button>
                ))}
              </div>

              {/* Message Input */}
              <div className="flex gap-2">
                <Input
                  placeholder="Type your message or describe your issue..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button variant="ghost" size="icon">
                  <Mic className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Camera className="h-4 w-4" />
                </Button>
                <Button onClick={handleSendMessage}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>

              <p className="text-xs text-muted-foreground mt-2 text-center">
                Try: "I need 10L petrol" or "My car won't start" or upload a photo of your issue
              </p>
            </div>
          </Card>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="p-6 text-center shadow-card hover:shadow-elegant transition-all duration-300">
              <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                <Mic className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Voice Commands</h3>
              <p className="text-sm text-muted-foreground">
                Simply say "I need fuel" or "Find a mechanic" and our AI will understand
              </p>
            </Card>

            <Card className="p-6 text-center shadow-card hover:shadow-elegant transition-all duration-300">
              <div className="p-4 bg-accent/10 rounded-full w-fit mx-auto mb-4">
                <Camera className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Photo Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Upload photos of vehicle damage or issues for instant AI diagnosis
              </p>
            </Card>

            <Card className="p-6 text-center shadow-card hover:shadow-elegant transition-all duration-300">
              <div className="p-4 bg-success/10 rounded-full w-fit mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-success" />
              </div>
              <h3 className="font-semibold mb-2">Smart Recommendations</h3>
              <p className="text-sm text-muted-foreground">
                Get personalized suggestions for services, mechanics, and fuel options
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;