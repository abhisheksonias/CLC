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
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

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
        
        {/* Mobile Sidebar Toggle Button */}
        <div className="lg:hidden mb-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            {isMobileSidebarOpen ? <X className="h-4 w-4 mr-2" /> : <Menu className="h-4 w-4 mr-2" />}
            {isMobileSidebarOpen ? 'Close Menu' : 'Open Menu'}
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          {/* Mobile Sidebar Overlay */}
          {isMobileSidebarOpen && (
            <div 
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsMobileSidebarOpen(false)}
            />
          )}
          
          {/* Mobile Sidebar - Hidden by default, shown when toggle is clicked */}
          <div className={`lg:hidden transition-all duration-300 z-50 relative ${isMobileSidebarOpen ? 'block' : 'hidden'}`}>
            <LeftSidebar 
              activeSection={activeSection} 
              setActiveSection={(section) => {
                setActiveSection(section);
                setIsMobileSidebarOpen(false); // Close sidebar when item is selected
              }} 
            />
          </div>
          
          {/* Desktop Sidebar - Always visible on large screens */}
          <div className="hidden lg:block lg:w-48 xl:w-52">
            <LeftSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
          </div>
          
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {renderMainContent()}
          </div>
          
          {/* Right Sidebar - Desktop only */}
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
