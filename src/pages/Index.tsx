import Header from "@/components/Header";
import LeftSidebar from "@/components/LeftSidebar";
import MainContent from "@/components/MainContent";
import RightSidebar from "@/components/RightSidebar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Team from "@/components/Team";
import Insights from "@/components/Insights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const renderMainContent = () => {
    switch (activeSection) {
      case "home":
        return <Hero />;
      case "about":
        return <About />;
      case "expertise":
        return <Expertise />;
      case "team":
        return <Team />;
      case "insights":
        return <Insights />;
      case "contact":
        return <Contact />;
      case "content":
      default:
        return <MainContent />;
    }
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl bg-slate-900/40 mx-auto px-8 py-4">
        <Header />
        <div className="flex">
          <LeftSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
          <div className="flex-1">
            {renderMainContent()}
          </div>
          <RightSidebar />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
