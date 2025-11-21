import { ReactNode, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Get active section from pathname
  const getActiveSection = (): string => {
    const path = location.pathname.replace('/', '').trim();
    const routeToSection: Record<string, string> = {
      '': 'home',
      'about': 'about',
      'career': 'career',
      'expertise': 'expertise',
      'practice-area': 'expertise',
      'team': 'team',
      'insights': 'insights',
      'contact': 'contact',
      'news-updates': 'content',
      'news': 'content',
    };
    return routeToSection[path] || 'home';
  };

  const activeSection = getActiveSection();

  // Close mobile sidebar when route changes
  useEffect(() => {
    setIsMobileSidebarOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl bg-[#B3C7AB] mx-auto px-4 sm:px-6 lg:px-8 py-4">
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
                setIsMobileSidebarOpen(false); // Close sidebar when item is selected
              }}
            />
          </div>
          
          {/* Desktop Sidebar - Always visible on large screens */}
          <div className="hidden lg:block lg:w-48 xl:w-52">
            <LeftSidebar activeSection={activeSection} />
          </div>
          
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {children}
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

export default Layout;

