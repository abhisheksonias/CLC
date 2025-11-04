import { useFeaturedNewsUpdates, useSearchArticles } from "@/hooks/useSanityData";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { useState, useMemo, useCallback, memo } from "react";

// Memoized News Item Component
const NewsItem = memo(({ news, getTypeDisplayName }: { news: any; getTypeDisplayName: (type: string) => string }) => (
  <div>
    <Link to={`/news/${news.slug.current}`} className="hover:text-primary transition-colors">
      <h4 className="text-sm font-semibold text-gray-800 mb-1">
        {news.title}
      </h4>
      <p className="text-xs text-gray-500">
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
      className="hover:text-primary transition-colors"
    >
      <h4 className="text-sm font-semibold text-gray-800 mb-1">
        {result.title}
      </h4>
      <p className="text-xs text-gray-500 mb-1">
        {result._type === 'blogPost' 
          ? `Blog · ${result.category?.name || 'Uncategorized'}`
          : getTypeDisplayName(result.type || 'news')
        } · {format(new Date(result.publishedAt), 'MMM dd yyyy')}
      </p>
      {result.excerpt && (
        <p className="text-xs text-gray-600 line-clamp-2">
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
    <div className="right-sidebar w-full lg:w-auto bg-white border-l border-gray-200 sticky top-0 self-start">
      {/* Search */}
      <div className="p-4 border-b border-gray-200">
        <form onSubmit={handleSearch} className="flex">
          <input
            type="text"
            placeholder="Search Articles"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 min-w-0 px-2 py-2 border border-gray-300 text-sm rounded-l border-r-0 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button 
            type="submit"
            className="px-2 py-2 bg-gray-600 text-white text-xs font-medium rounded-r flex-shrink-0 hover:bg-gray-700 transition-colors"
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
        <div className="border-b border-gray-200">
          <div className="bg-primary text-white px-4 py-2">
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
      <div className="border-b border-gray-200">
        <div className="bg-gray-600 text-white px-4 py-2">
          <h3 className="text-sm font-semibold">INSIGHTS AND PUBLICATIONS</h3>
        </div>
        <div className="p-4">
          <p className="text-sm text-gray-700">Distinctly Different</p>
        </div>
      </div>

      {/* What's New */}
      <div className="border-b border-gray-200">
        <div className="bg-white px-4 py-2 border-b border-gray-200">
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
      <div className="border-b border-gray-200">
        <div className="bg-white px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-800">EVENTS</h3>
        </div>
        <div className="p-4">
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-red-600 mb-2">WEBINARS</h4>
            <div>
              <h5 className="text-sm font-semibold text-gray-800 mb-1">
                The Next Big Play: Regulation and Opportunities in Online Social Games & E-Sports
              </h5>
              <p className="text-xs text-gray-500">September 09 2025 - September 09 2025</p>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-red-600 mb-2">SEMINAR</h4>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 text-xs text-gray-500 text-center">
        Commercial Law Chamber®2016 All rights reserved.
      </div>
    </div>
  );
};

export default memo(RightSidebar);