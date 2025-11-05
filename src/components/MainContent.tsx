import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Eye, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { useNewsUpdates } from "@/hooks/useSanityData";
import { format } from "date-fns";

const MainContent = () => {
  const { data: newsUpdates = [], isLoading } = useNewsUpdates();
  const newsOnly = newsUpdates.filter((n) => n.type === "news");
  const caseOnly = newsUpdates.filter((n) => n.type === "case-update");
  return (
    <div className="flex-1 bg-white/95 backdrop-blur-sm p-8">

      


      

      {/* News & Case Updates (card grid style similar to Insights) */}
      <div id="news-updates" className="">
        {/* News Updates */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">News Updates</h2>
        {isLoading ? (
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {[1, 2, 3, 4].map((i) => (
              <Card key={`news-skel-${i}`} className="shadow-card">
                <CardHeader>
                  <div className="animate-pulse">
                    <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
                    <div className="h-6 bg-gray-300 rounded mb-4"></div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="animate-pulse space-y-3">
                    <div className="h-4 bg-gray-300 rounded"></div>
                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-300 rounded w-4/6"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {newsOnly.map((item) => (
              <Card key={item._id} className="shadow-card hover:shadow-elegant transition-all duration-300 flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="text-xl leading-tight hover:text-primary transition-colors">
                    <Link to={`/news/${item.slug.current}`} className="cursor-pointer">
                      {item.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{format(new Date(item.publishedAt), 'MMMM d, yyyy')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="h-4 w-4" />
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-auto">
                    <Link to={`/news/${item.slug.current}`} className="flex-1">
                      <Button variant="outline" size="sm" className="w-full">
                        Read More
                      </Button>
                    </Link>
                    {item.downloadUrl ? (
                      <Button variant="outline" size="sm" asChild>
                        <a href={item.downloadUrl} target="_blank" rel="noopener noreferrer">
                          <Download className="h-4 w-4" />
                        </a>
                      </Button>
                    ) : (
                      <div className="w-10"></div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
            {newsOnly.length === 0 && (
              <div className="col-span-full text-sm text-gray-500">No news updates available.</div>
            )}
          </div>
        )}

        {/* Case Updates */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Case Updates</h2>
        {isLoading ? (
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {[1, 2, 3, 4].map((i) => (
              <Card key={`case-skel-${i}`} className="shadow-card">
                <CardHeader>
                  <div className="animate-pulse">
                    <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
                    <div className="h-6 bg-gray-300 rounded mb-4"></div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="animate-pulse space-y-3">
                    <div className="h-4 bg-gray-300 rounded"></div>
                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-300 rounded w-4/6"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {caseOnly.map((item) => (
              <Card key={item._id} className="shadow-card hover:shadow-elegant transition-all duration-300 flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="text-xl leading-tight hover:text-primary transition-colors">
                    <Link to={`/news/${item.slug.current}`} className="cursor-pointer">
                      {item.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{format(new Date(item.publishedAt), 'MMMM d, yyyy')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="h-4 w-4" />
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-auto">
                    <Link to={`/news/${item.slug.current}`} className="flex-1">
                      <Button variant="outline" size="sm" className="w-full">
                        Read More
                      </Button>
                    </Link>
                    {item.downloadUrl ? (
                      <Button variant="outline" size="sm" asChild>
                        <a href={item.downloadUrl} target="_blank" rel="noopener noreferrer">
                          <Download className="h-4 w-4" />
                        </a>
                      </Button>
                    ) : (
                      <div className="w-10"></div>
                    )}
                  </div>
                </CardContent>
              </Card>
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