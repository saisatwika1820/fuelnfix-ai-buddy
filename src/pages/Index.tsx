import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AIAssistant from "@/components/AIAssistant";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <AIAssistant />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
