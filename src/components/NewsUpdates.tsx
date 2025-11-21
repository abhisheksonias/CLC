import { Button } from "@/components/ui/button";
import { Calendar, Download, Eye, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useNewsUpdates } from "@/hooks/useSanityData";
import { urlFor } from "@/lib/sanity";
import { format } from "date-fns";
import { useState } from "react";

const NewsUpdates = () => {
  const { data: newsUpdates = [], isLoading } = useNewsUpdates();
  const [selectedType, setSelectedType] = useState("All");

  // Filter news updates by selected type
  const filteredNews = selectedType === "All" 
    ? newsUpdates 
    : newsUpdates.filter(news => news.type === selectedType);

  // Create type list for filter buttons
  const typeList = ["All", "case-update", "news", "publication", "deal-corner"];

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
    <div className="flex-1 bg-white">
      {/* Header Section */}
      <section className="p-6 sm:p-8 md:p-12 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl poppins font-bold text-[#163C0F] mb-3">
              News & Updates
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              Stay informed with our latest case updates, news, and publications 
              from Commercial Law Chambers.
            </p>
          </div>

          {/* Type Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {typeList.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  type === selectedType
                    ? "bg-[#163C0F] text-white"
                    : "bg-gray-50 text-gray-700 border border-gray-200 hover:border-[#163C0F] hover:text-[#163C0F]"
                }`}
              >
                {getTypeDisplayName(type)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid Section */}
      <section className="p-6 sm:p-8 md:p-12 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          {/* Loading State */}
          {isLoading && (
            <div className="grid lg:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <div className="animate-pulse">
                    <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
                    <div className="h-6 bg-gray-300 rounded mb-4"></div>
                    <div className="h-48 bg-gray-300 rounded-lg mb-4"></div>
                    <div className="space-y-3">
                      <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                      <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* News Grid */}
          {!isLoading && (
            <div className="grid lg:grid-cols-2 gap-6">
              {filteredNews.map((news) => (
                <div key={news._id} className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#163C0F] transition-all flex flex-col h-full">
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-3">
                      <span className="bg-[#B3C7AB] text-[#163C0F] text-xs font-medium px-3 py-1 rounded-full">
                        {getTypeDisplayName(news.type)}
                      </span>
                      {news.isNew && (
                        <span className="bg-[#163C0F] text-white text-xs font-medium px-3 py-1 rounded-full">
                          New
                        </span>
                      )}
                    </div>
                    <Link to={`/news/${news.slug.current}`} className="cursor-pointer group">
                      <h3 className="text-lg font-bold text-[#163C0F] leading-tight mb-3 group-hover:text-[#1a4a1a] transition-colors">
                        {news.title}
                      </h3>
                    </Link>
                  </div>
                  
                  <div className="flex flex-col flex-grow">
                    {/* Featured Image */}
                    {news.featuredImage && (
                      <Link to={`/news/${news.slug.current}`} className="mb-4 block">
                        <img
                          src={urlFor(news.featuredImage).width(600).height(300).fit('crop').url()}
                          alt={news.featuredImage.alt || news.title}
                          className="w-full h-auto object-cover rounded-lg border border-gray-200 hover:border-[#163C0F] transition-all"
                          loading="lazy"
                          decoding="async"
                        />
                      </Link>
                    )}
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{format(new Date(news.publishedAt), 'MMMM d, yyyy')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Eye className="h-4 w-4" />
                        <span>{news.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 mt-auto">
                      <Link to={`/news/${news.slug.current}`} className="flex-1">
                        <Button size="sm" className="w-full bg-[#163C0F] hover:bg-[#1a4a1a] text-white">
                          <Eye className="mr-2 h-4 w-4" />
                          Read More
                        </Button>
                      </Link>
                      {news.downloadUrl && (
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="border-[#163C0F] text-[#163C0F] hover:bg-[#163C0F] hover:text-white"
                          asChild
                        >
                          <a href={news.downloadUrl} target="_blank" rel="noopener noreferrer">
                            <Download className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!isLoading && filteredNews.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No news updates found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="p-6 sm:p-8 md:p-12 border-b border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-[#163C0F] rounded-lg p-6 sm:p-8 text-center">
            <h3 className="text-xl sm:text-2xl font-bold poppins text-[#163C0F] mb-4">
              Stay Updated with Legal Developments
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest case updates, 
              news, and regulatory changes directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#163C0F] focus:border-[#163C0F]"
              />
              <Button className="whitespace-nowrap bg-[#163C0F] hover:bg-[#1a4a1a] text-white">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsUpdates;
