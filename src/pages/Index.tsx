import Header from "@/components/Header";
import LeftSidebar from "@/components/LeftSidebar";
import MainContent from "@/components/MainContent";
import RightSidebar from "@/components/RightSidebar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 bg-law-texture">
      <div className="max-w-6xl mx-auto px-8 py-4">
        <Header />
        <div className="flex">
          <LeftSidebar />
          <MainContent />
          <RightSidebar />
        </div>
        {/* Footer */}
        <div className="bg-gray-100 px-4 py-2 text-xs text-gray-600 border-t">
          <div className="flex justify-between items-center">
            <span>www.commerciallawchamber.com/Category/31/CLC-in-the-Media.html</span>
            <div className="flex space-x-4">
              <span>BACK</span>
              <span>WALKTHROUGH</span>
              <span>SUBSCRIBE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
