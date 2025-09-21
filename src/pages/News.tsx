import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import Footer from "@/components/Footer";
import { useNewsUpdate } from "@/hooks/useSanityData";
import { SanityContentRenderer } from "@/lib/sanityContent";
import { urlFor } from "@/lib/sanity";
import { ArrowLeft } from "lucide-react";

const News = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { data: newsUpdate, isLoading, error } = useNewsUpdate(slug || '');

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen">
        <div className="max-w-7xl bg-slate-900/40 mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Header />
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="hidden lg:block lg:w-48 xl:w-52">
              <LeftSidebar activeSection="insights" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="bg-white/95 backdrop-blur-sm p-8">
                <div className="max-w-4xl">
                  <div className="animate-pulse">
                    <div className="h-8 bg-gray-300 rounded mb-6"></div>
                    <div className="space-y-4">
                      <div className="h-4 bg-gray-300 rounded"></div>
                      <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                      <div className="h-4 bg-gray-300 rounded w-4/6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block lg:w-60 xl:w-64">
              <RightSidebar />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }

  // Error state or article not found
  if (error || !newsUpdate) {
    return (
      <div className="min-h-screen">
        <div className="max-w-7xl bg-slate-900/40 mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Header />
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="hidden lg:block lg:w-48 xl:w-52">
              <LeftSidebar activeSection="insights" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="bg-white/95 backdrop-blur-sm p-8">
                <div className="max-w-4xl">
                  <h1 className="text-2xl font-semibold mb-4">Article not found</h1>
                  <Link to="/" className="text-primary">Go back</Link>
                </div>
              </div>
            </div>
            <div className="hidden lg:block lg:w-60 xl:w-64">
              <RightSidebar />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }

  const getTypeDisplayName = (type: string) => {
    switch (type) {
      case "case-update": return "Case Update";
      case "news": return "News";
      case "publication": return "Publication";
      case "deal-corner": return "Deal Corner";
      default: return type;
    }
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl bg-slate-900/40 mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Header />
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Left Sidebar */}
          <div className="hidden lg:block lg:w-48 xl:w-52">
            <LeftSidebar activeSection="insights" />
          </div>
          {/* Main Content */}
            <div className="flex-1 min-w-0">
              <div className="bg-white/95 backdrop-blur-sm p-8">
                <div className="max-w-4xl">
                  {/* Back Navigation */}
                  <div className="mb-6">
                    <Button
                      variant="ghost"
                      onClick={() => navigate(-1)}
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-800 p-0 h-auto"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back to Previous Page
                    </Button>
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {getTypeDisplayName(newsUpdate.type)}
                    </span>
                  </div>
                  <h1 className="text-3xl lg:text-4xl font-light text-gray-800 mb-6">{newsUpdate.title}</h1>
                
                {/* Featured Image */}
                {newsUpdate.featuredImage && (
                  <div className="mb-8">
                    <img
                      src={urlFor(newsUpdate.featuredImage).width(800).height(400).fit('crop').url()}
                      alt={newsUpdate.featuredImage.alt || newsUpdate.title}
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                )}
                
                {/* Content */}
                <SanityContentRenderer content={newsUpdate.content} />
                
                {/* Download Button */}
                {newsUpdate.downloadUrl && (
                  <div className="flex items-center gap-3 mt-8">
                    <span>Read the complete document here: Document (Give Download Button)</span>
                    <Button variant="outline" asChild>
                      <a href={newsUpdate.downloadUrl} target="_blank" rel="noopener noreferrer">
                        Download
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Right Sidebar */}
          <div className="hidden lg:block lg:w-60 xl:w-64">
            <RightSidebar />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default News;
