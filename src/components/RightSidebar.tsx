import { useFeaturedNewsUpdates, useSearchArticles } from "@/hooks/useSanityData";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { useState, useMemo, useCallback, memo } from "react";

// Memoized Search Result Component
const SearchResultItem = memo(({ result, getTypeDisplayName }: { result: any; getTypeDisplayName: (type: string) => string }) => {
  const typeLabel = result._type === "blogPost"
    ? `Blog · ${result.category?.name || "Uncategorized"}`
    : getTypeDisplayName(result.type || "news");

  const publishedAt = result.publishedAt ? format(new Date(result.publishedAt), "MMM dd yyyy") : "";

  return (
    <Link
      to={result._type === "blogPost" ? `/blog/${result.slug.current}` : `/news/${result.slug.current}`}
      className="block space-y-1"
    >
      <p className="text-[11px] uppercase tracking-wide text-gray-500">
        {typeLabel}{publishedAt ? ` · ${publishedAt}` : ""}
      </p>
      <h4 className="text-sm font-semibold text-gray-800 leading-tight">
        {result.title}
      </h4>
      {result.excerpt && (
        <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
          {result.excerpt}
        </p>
      )}
    </Link>
  );
});

SearchResultItem.displayName = "SearchResultItem";

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

  const insightsItems = useMemo(() => featuredNews.slice(0, Math.min(3, featuredNews.length)), [featuredNews]);
  const whatsNewItems = useMemo(() => {
    if (featuredNews.length > 3) {
      return featuredNews.slice(3);
    }
    return featuredNews;
  }, [featuredNews]);

  const events = useMemo(() => ([
    {
      type: "Webinar",
      title: "Decoding the New GST Rules on Online Gaming",
      date: "October 05 2025 - 3:00 PM IST",
    },
    {
      type: "Seminar",
      title: "Navigating Cross-Border Tax Complexities",
      date: "November 15 2025 - 10:00 AM IST",
    },
  ]), []);

  const buildMetaLabel = useCallback((item: any) => {
    const typeLabel = getTypeDisplayName(item.type || "news");
    const date = item.publishedAt ? format(new Date(item.publishedAt), "MMM dd yyyy") : "";
    return date ? `${typeLabel} - ${date}` : typeLabel;
  }, [getTypeDisplayName]);

  return (
    <div className="right-sidebar w-full lg:w-auto bg-transparent sticky top-0 self-start lg:max-h-screen overflow-y-auto flex flex-col gap-2">
      {/* Search */}
      <div className="mx-1  pt-4">
        <form onSubmit={handleSearch} className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search Articles"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 min-w-0 px-4 py-2.5 border border-gray-300 text-sm rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#779E5A] focus:border-[#779E5A]"
          />
          <button
            type="submit"
            className="px-5 py-2.5 rounded-[8px] bg-[#779E5A] text-white text-sm font-medium hover:brightness-95 transition-colors"
          >
            Go
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
        <div className="mx-1">
          <div className="rounded-[8px] border border-gray-200 bg-white">
            <div className="px-4 py-4 border-b border-gray-200">
              <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">Search Results</h3>
            </div>
            <div className="px-5 py-4 space-y-4">
              {isSearchLoading ? (
                <>
                  <div className="animate-pulse space-y-2">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                  </div>
                  <div className="animate-pulse space-y-2">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-3 bg-gray-200 rounded w-3/4"></div>
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
                <div className="text-center py-1">
                  <p className="text-sm text-gray-500">No articles found for "{searchQuery}"</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Insights & Publications */}
      <div className="mx-1">
          <div className="rounded-[8px] border border-gray-200 bg-white">
          <div className="px-4 py-4 border-b border-gray-200">
            <h3 className="text-base font-semibold text-gray-900 uppercase tracking-wide whitespace-nowrap">Insights and Publications</h3>
            <p className="text-sm text-gray-500 mt-1">Distinctly Different</p>
          </div>
          <div className="px-5">
            {insightsItems.length === 0 ? (
              <div className="py-6 text-sm text-gray-500">No insights available.</div>
            ) : (
              insightsItems.map((item, index) => (
                <div key={item._id || index} className={`py-4 ${index !== 0 ? "border-t border-gray-200" : ""}`}>
                  <Link to={`/news/${item.slug?.current ?? ""}`} className="block space-y-2">
                    <h4 className="text-base font-semibold text-gray-900 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-sm text-[#1F4FD8]">
                      CLC Insights, {buildMetaLabel(item)}
                    </p>
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* What's New */}
      <div className="mx-1">
        <div className="rounded-[8px] border border-gray-200 bg-white">
          <div className="px-4 py-4 border-b border-gray-200">
            <h3 className="text-base font-semibold text-gray-900 uppercase tracking-wide">What's New</h3>
          </div>
          <div className="px-5">
            {isLoading ? (
              <div className="py-6 space-y-4">
                <div className="animate-pulse space-y-2">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                </div>
                <div className="animate-pulse space-y-2">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                </div>
              </div>
            ) : whatsNewItems.length === 0 ? (
              <div className="py-6 text-sm text-gray-500">No updates available.</div>
            ) : (
              whatsNewItems.map((item, index) => (
                <div key={item._id || index} className={`py-4 ${index !== 0 ? "border-t border-gray-200" : ""}`}>
                  <Link to={`/news/${item.slug?.current ?? ""}`} className="block space-y-1">
                    <h4 className="text-base font-semibold text-gray-900 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-sm font-semibold text-[#1F4FD8] uppercase">
                      {`${(item.type ? item.type : "Update").toUpperCase()}${item.publishedAt ? ` - ${format(new Date(item.publishedAt), "MMMM dd yyyy")}` : ""}`}
                    </p>
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Events */}
      <div className="mx-1">
        <div className="rounded-2xl border border-gray-200 bg-white">
          <div className="px-4 py-4 border-b border-gray-200">
            <h3 className="text-base font-semibold text-gray-900 uppercase tracking-wide">Events</h3>
          </div>
          <div className="px-5">
            {events.map((event, index) => (
              <div key={event.type} className={`py-4 ${index !== 0 ? "border-t border-gray-200" : ""}`}>
                <p className="text-xs font-semibold uppercase text-gray-700 tracking-wide">
                  {event.type}
                </p>
                <p className="text-base font-semibold text-[#1F4FD8] leading-snug mt-1">
                  {event.title}
                </p>
                <p className="text-sm text-gray-600 mt-1">{event.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 pb-6 text-xs text-gray-500 text-center mt-auto">
        Commercial Law Chamber®{new Date().getFullYear()} All rights reserved.
      </div>
    </div>
  );
};

export default memo(RightSidebar);