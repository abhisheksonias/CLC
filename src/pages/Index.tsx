import Header from "@/components/Header";
import LeftSidebar from "@/components/LeftSidebar";
import MainContent from "@/components/MainContent";
import RightSidebar from "@/components/RightSidebar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Career from "@/components/Career";
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
      case "career":
        return <Career />;
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
      <div className="max-w-7xl bg-slate-900/40 mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Header />
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="lg:hidden">
            <LeftSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
          </div>
          <div className="hidden lg:block lg:w-48 xl:w-52">
            <LeftSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
          </div>
          <div className="flex-1 min-w-0">
            {renderMainContent()}
          </div>
          <div className="hidden lg:block lg:w-60 xl:w-64">
            <RightSidebar />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
