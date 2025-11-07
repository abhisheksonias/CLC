import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex-1 bg-white/95 backdrop-blur-sm min-h-screen flex items-center justify-center">
      <div className="p-4 sm:p-6 md:p-8 max-w-2xl mx-auto">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-8 sm:p-12 text-center"
          style={{ borderRadius: "16px", opacity: 1 }}>
          <div className="mb-6">
            <h1 className="font-lora text-[96px] leading-[100px] font-bold text-[#779E5A] mb-4">404</h1>
            <h2 className="font-montserrat font-bold text-[36px] leading-[40px] text-gray-800 mb-4">
              Page Not Found
            </h2>
            <p className="text-[18px] text-gray-600 mb-8 max-w-md mx-auto">
              Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="bg-[#779E5A] hover:bg-[#6a8d4f] text-white px-6 py-3 w-full sm:w-auto">
                <Home className="mr-2 h-4 w-4" />
                Go to Homepage
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="px-6 py-3 w-full sm:w-auto hover:bg-gray-100"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
