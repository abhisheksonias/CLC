import { Button } from "@/components/ui/button";
import { Calendar, Eye, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { useNewsUpdates } from "@/hooks/useSanityData";
import { format } from "date-fns";

const MainContent = () => {
  const { data: newsUpdates = [], isLoading } = useNewsUpdates();
  const newsOnly = newsUpdates.filter((n) => n.type === "news");
  const caseOnly = newsUpdates.filter((n) => n.type === "case-update");
  return (
    <div className="flex-1 bg-white/95 backdrop-blur-sm p-4 sm:p-6 md:p-8">
      <div id="news-updates">
        <h2 className="font-montserrat font-bold text-[36px] leading-[40px] tracking-[0px] text-gray-800 mb-6">News Updates</h2>
        {isLoading ? (
          <div className="grid lg:grid-cols-2 gap-[17px] mb-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={`news-skel-${i}`} className="bg-white border border-gray-200 rounded-2xl shadow-md"
                style={{ borderRadius: "16px", padding: "22px 24px", opacity: 1 }}>
                <div className="animate-pulse">
                  <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
                  <div className="h-6 bg-gray-300 rounded mb-4"></div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-300 rounded"></div>
                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-300 rounded w-4/6"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-[17px] mb-12">
            {newsOnly.map((item) => (
              <div key={item._id} className="bg-white border border-gray-200 hover:shadow-md transition-all duration-300 flex flex-col h-full"
                style={{ borderRadius: "16px", padding: "22px 24px", opacity: 1 }}>
                <div>
                  <h3 className="font-montserrat font-bold text-[20px] leading-tight text-gray-800 hover:text-[#636AE8] transition-colors mb-4">
                    <Link to={`/news/${item.slug.current}`} className="cursor-pointer">
                      {item.title}
                    </Link>
                  </h3>
                </div>
                <div className="flex flex-col flex-grow">
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" style={{ color: "#636AE8" }} />
                      <span>{format(new Date(item.publishedAt), 'MMMM d, yyyy')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="h-4 w-4" style={{ color: "#636AE8" }} />
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-auto">
                    <Link to={`/news/${item.slug.current}`} className="flex-1">
                      <Button variant="outline" size="sm" className="w-full hover:bg-[#636AE8] hover:text-white hover:border-[#636AE8]">
                        Read More
                      </Button>
                    </Link>
                    {item.downloadUrl ? (
                      <Button variant="outline" size="sm" asChild className="hover:bg-[#636AE8] hover:text-white hover:border-[#636AE8]">
                        <a href={item.downloadUrl} target="_blank" rel="noopener noreferrer">
                          <Download className="h-4 w-4" />
                        </a>
                      </Button>
                    ) : (
                      <div className="w-10"></div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            {newsOnly.length === 0 && (
              <div className="col-span-full text-sm text-gray-500">No news updates available.</div>
            )}
          </div>
        )}

        <h2 className="font-montserrat font-bold text-[36px] leading-[40px] tracking-[0px] text-gray-800 mb-6">Case Updates</h2>
        {isLoading ? (
          <div className="grid lg:grid-cols-2 gap-[17px] mb-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={`case-skel-${i}`} className="bg-white border border-gray-200 rounded-2xl shadow-md"
                style={{ borderRadius: "16px", padding: "22px 24px", opacity: 1 }}>
                <div className="animate-pulse">
                  <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
                  <div className="h-6 bg-gray-300 rounded mb-4"></div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-300 rounded"></div>
                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-300 rounded w-4/6"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-[17px] mb-12">
            {caseOnly.map((item) => (
              <div key={item._id} className="bg-white border border-gray-200 hover:shadow-md transition-all duration-300 flex flex-col h-full"
                style={{ borderRadius: "16px", padding: "22px 24px", opacity: 1 }}>
                <div>
                  <h3 className="font-montserrat font-bold text-[20px] leading-tight text-gray-800 hover:text-[#636AE8] transition-colors mb-4">
                    <Link to={`/news/${item.slug.current}`} className="cursor-pointer">
                      {item.title}
                    </Link>
                  </h3>
                </div>
                <div className="flex flex-col flex-grow">
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" style={{ color: "#636AE8" }} />
                      <span>{format(new Date(item.publishedAt), 'MMMM d, yyyy')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="h-4 w-4" style={{ color: "#636AE8" }} />
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-auto">
                    <Link to={`/news/${item.slug.current}`} className="flex-1">
                      <Button variant="outline" size="sm" className="w-full hover:bg-[#636AE8] hover:text-white hover:border-[#636AE8]">
                        Read More
                      </Button>
                    </Link>
                    {item.downloadUrl ? (
                      <Button variant="outline" size="sm" asChild className="hover:bg-[#636AE8] hover:text-white hover:border-[#636AE8]">
                        <a href={item.downloadUrl} target="_blank" rel="noopener noreferrer">
                          <Download className="h-4 w-4" />
                        </a>
                      </Button>
                    ) : (
                      <div className="w-10"></div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            {caseOnly.length === 0 && (
              <div className="col-span-full text-sm text-gray-500">No case updates available.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainContent;