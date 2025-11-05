import { useFeaturedNewsUpdates, useSearchArticles } from "@/hooks/useSanityData";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { useState, useMemo, useCallback, memo } from "react";

// Memoized News Item Component
const NewsItem = memo(({ news, getTypeDisplayName }: { news: any; getTypeDisplayName: (type: string) => string }) => (
  <div>
    <Link to={`/news/${news.slug.current}`} className="hover:text-primary transition-colors block">
      <h4 className="text-sm font-semibold text-gray-800 mb-1 leading-tight">
        {news.title}
      </h4>
      <p className="text-xs text-gray-500 leading-relaxed">
        {getTypeDisplayName(news.type)} · {format(new Date(news.publishedAt), 'MMM dd yyyy')}
      </p>
    </Link>
  </div>
));

NewsItem.displayName = 'NewsItem';

// Memoized Search Result Component
const SearchResultItem = memo(({ result, getTypeDisplayName }: { result: any; getTypeDisplayName: (type: string) => string }) => (
  <div>
    <Link 
      to={result._type === 'blogPost' ? `/blog/${result.slug.current}` : `/news/${result.slug.current}`} 
      className="hover:text-primary transition-colors block"
    >
      <h4 className="text-sm font-semibold text-gray-800 mb-1 leading-tight">
        {result.title}
      </h4>
      <p className="text-xs text-gray-500 mb-1 leading-relaxed">
        {result._type === 'blogPost' 
          ? `Blog · ${result.category?.name || 'Uncategorized'}`
          : getTypeDisplayName(result.type || 'news')
        } · {format(new Date(result.publishedAt), 'MMM dd yyyy')}
      </p>
      {result.excerpt && (
        <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
          {result.excerpt}
        </p>
      )}
    </Link>
  </div>
));

SearchResultItem.displayName = 'SearchResultItem';

const RightSidebar = () => {
  const { data: featuredNews = [], isLoading } = useFeaturedNewsUpdates();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  
  // Only fetch search results when actively searching
  const { data: searchResults = [], isLoading: isSearchLoading } = useSearchArticles(
    isSearching ? searchQuery : ""
  );

  // Memoize the type display function
  const getTypeDisplayName = useCallback((type: string) => {
    switch (type) {
      case "case-update": return "Case Update";
      case "news": return "News";
      case "publication": return "Publication";
      case "deal-corner": return "Deal Corner";
      default: return type;
    }
  }, []);

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim().length > 2) {
      setIsSearching(true);
    }
  }, [searchQuery]);

  const handleClearSearch = useCallback(() => {
    setSearchQuery("");
    setIsSearching(false);
  }, []);

  return (
    <div className="right-sidebar w-full lg:w-auto bg-white border-l border-gray-200 sticky top-0 self-start lg:max-h-screen overflow-y-auto flex flex-col">
      {/* Search */}
      <div className="p-4 border-b border-gray-200 flex-shrink-0">
        <form onSubmit={handleSearch} className="flex gap-0">
          <input
            type="text"
            placeholder="Search Articles"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 min-w-0 px-3 py-2.5 border border-gray-300 text-sm rounded-l-md border-r-0 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          />
          <button 
            type="submit"
            className="px-4 py-2.5 bg-gray-600 text-white text-xs font-medium rounded-r-md flex-shrink-0 hover:bg-gray-700 transition-colors"
          >
            GO
          </button>
        </form>
        {isSearching && (
          <button 
            onClick={handleClearSearch}
            className="mt-2 text-xs text-gray-500 hover:text-gray-700 underline"
          >
            Clear Search
          </button>
        )}
      </div>

      {/* Search Results */}
      {isSearching && (
        <div className="border-b border-gray-200 flex-shrink-0">
          <div className="bg-primary text-white px-4 py-2.5">
            <h3 className="text-sm font-semibold">SEARCH RESULTS</h3>
          </div>
          <div className="p-4 space-y-4">
            {isSearchLoading ? (
              // Loading skeleton
              <>
                <div className="animate-pulse">
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                </div>
                <div className="animate-pulse">
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                </div>
              </>
            ) : searchResults.length > 0 ? (
              searchResults.map((result) => (
                <SearchResultItem 
                  key={result._id} 
                  result={result} 
                  getTypeDisplayName={getTypeDisplayName}
                />
              ))
            ) : (
              <div className="text-center py-4">
                <p className="text-sm text-gray-500">No articles found for "{searchQuery}"</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mission and Vision */}
      <div className="border-b border-gray-200 flex-shrink-0">
        <div className="bg-gray-600 text-white px-4 py-2.5">
          <h3 className="text-sm font-semibold">INSIGHTS AND PUBLICATIONS</h3>
        </div>
        <div className="p-4">
          <p className="text-sm text-gray-700 leading-relaxed">Distinctly Different</p>
        </div>
      </div>

      {/* What's New */}
      <div className="border-b border-gray-200 flex-shrink-0">
        <div className="bg-white px-4 py-2.5 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-red-600">WHAT'S NEW</h3>
        </div>
        <div className="p-4 space-y-4">
          {isLoading ? (
            // Loading skeleton
            <>
              <div className="animate-pulse">
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-3 bg-gray-300 rounded w-3/4"></div>
              </div>
              <div className="animate-pulse">
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-3 bg-gray-300 rounded w-3/4"></div>
              </div>
            </>
          ) : (
            featuredNews.map((news) => (
              <NewsItem 
                key={news._id} 
                news={news} 
                getTypeDisplayName={getTypeDisplayName}
              />
            ))
          )}
        </div>
      </div>

      {/* Events */}
      <div className="border-b border-gray-200 flex-shrink-0">
        <div className="bg-white px-4 py-2.5 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-800">EVENTS</h3>
        </div>
        <div className="p-4">
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-red-600 mb-2">WEBINARS</h4>
            <div>
              <h5 className="text-sm font-semibold text-gray-800 mb-1 leading-tight">
                The Next Big Play: Regulation and Opportunities in Online Social Games & E-Sports
              </h5>
              <p className="text-xs text-gray-500 leading-relaxed">September 09 2025 - September 09 2025</p>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-red-600 mb-2">SEMINAR</h4>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 text-xs text-gray-500 text-center mt-auto flex-shrink-0">
        Commercial Law Chamber®2016 All rights reserved.
      </div>
    </div>
  );
};

export default memo(RightSidebar);