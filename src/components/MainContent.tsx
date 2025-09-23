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
      {/* Page title and navigation */}
      <div className="mb-6">
        <h1 className="text-3xl font-light text-gray-800 mb-4">Commercial</h1>
        <div className="flex space-x-6 text-sm">
          <span className="text-gray-600">PUBLIC</span>
          <span className="text-gray-600">STUDENT</span>
          <span className="text-gray-600">CLIENT</span>
          <span className="text-gray-600">MEMBER</span>
        </div>
      </div>

      {/* Video embed area */}
      <div className="mb-8">
        <div className="bg-gray-100 aspect-video rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="bg-primary text-white p-4 rounded-lg mb-4 inline-block">
              <span className="text-2xl">▶</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Tax Structuring and Commercial Litigation in 2023
            </h2>
            <p className="text-gray-600">
              Watch our latest insights on tax advisory and commercial dispute resolution
            </p>
            <div className="mt-4 flex justify-center space-x-4">
              <button className="bg-primary text-white px-4 py-2 rounded text-sm">
                Watch Later
              </button>
              <button className="border border-gray-300 px-4 py-2 rounded text-sm">
                Share
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* Commercial Law Chamber info */}
      <div className="flex items-center text-sm text-gray-600">
        <span className="mr-4">Commercial Law Chamber</span>
        <span>LEGAL AND TAX COUNSELING WORLDWIDE</span>
      </div>
      
      <div className="mt-4 text-sm text-gray-500">
        March 24, 2023
      </div>

      {/* News & Case Updates (card grid style similar to Insights) */}
      <div id="news-updates" className="mt-10">
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