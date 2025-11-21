import { useFeaturedNewsUpdates, useFeaturedBlogPosts, useSearchArticles } from "@/hooks/useSanityData";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { useState, useMemo, useCallback, memo } from "react";

// Memoized News Item Component
const NewsItem = memo(({ news, getTypeDisplayName }: { news: any; getTypeDisplayName: (type: string) => string }) => (
  <div className="border-b border-gray-200">
    <Link 
      to={`/news/${news.slug.current}`} 
      className="block p-2 -mx-2 rounded-lg hover:bg-gray-50 hover:text-[#163C0F] transition-all cursor-pointer group"
    >
      <h4 className="text-sm font-semibold text-gray-800 mb-1 leading-tight group-hover:text-[#163C0F] transition-colors">
        {news.title}
      </h4>
      <p className="text-xs text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors">
        {getTypeDisplayName(news.type)} · {format(new Date(news.publishedAt), 'MMM dd yyyy')}
      </p>
    </Link>
    {/* <hr className="mt-4 border-t border-[#163C0F]" /> */}
  </div>
));

NewsItem.displayName = 'NewsItem';

// Memoized Blog Item Component
const BlogItem = memo(({ blog }: { blog: any }) => (
  <div className="border-b border-gray-200">
    <Link 
      to={`/blog/${blog.slug.current}`} 
      className="block p-2 -mx-2 rounded-lg hover:bg-gray-50 hover:text-[#163C0F] transition-all cursor-pointer group"
    >
      <h4 className="text-sm font-semibold text-gray-800 mb-1 leading-tight group-hover:text-[#163C0F] transition-colors">
        {blog.title}
      </h4>
      <p className="text-xs text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors">
        Blog · {blog.category?.name || 'Uncategorized'} · {format(new Date(blog.publishedAt), 'MMM dd yyyy')}
      </p>
    </Link>
  </div>
));

BlogItem.displayName = 'BlogItem';

// Memoized Search Result Component
const SearchResultItem = memo(({ result, getTypeDisplayName }: { result: any; getTypeDisplayName: (type: string) => string }) => (
  <div className="border-b border-gray-200">
    <Link 
      to={result._type === 'blogPost' ? `/blog/${result.slug.current}` : `/news/${result.slug.current}`} 
      className="block p-2 -mx-2 rounded-lg hover:bg-gray-50 hover:text-[#163C0F] transition-all cursor-pointer group"
    >
      <h4 className="text-sm font-semibold text-gray-800 mb-1 leading-tight group-hover:text-[#163C0F] transition-colors">
        {result.title}
      </h4>
      <p className="text-xs text-gray-500 mb-1 leading-relaxed group-hover:text-gray-600 transition-colors">
        {result._type === 'blogPost' 
          ? `Blog · ${result.category?.name || 'Uncategorized'}`
          : getTypeDisplayName(result.type || 'news')
        } · {format(new Date(result.publishedAt), 'MMM dd yyyy')}
      </p>
      {result.excerpt && (
        <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed group-hover:text-gray-700 transition-colors">
          {result.excerpt}
        </p>
      )}
    </Link>
  </div>
));

SearchResultItem.displayName = 'SearchResultItem';

const RightSidebar = () => {
  const { data: featuredNews = [], isLoading: isNewsLoading } = useFeaturedNewsUpdates();
  const { data: featuredBlogs = [], isLoading: isBlogsLoading } = useFeaturedBlogPosts();
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
            className="px-4 py-2.5 bg-[#163C0F] text-white text-xs font-medium rounded-r-md flex-shrink-0 hover:bg-gray-700 transition-colors"
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
          <div className="bg-[#163C0F] text-white px-4 py-2.5">
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
        <div className="bg-[#163C0F] text-white px-4 py-2.5">
          <h3 className="text-sm font-semibold">INSIGHTS AND PUBLICATIONS</h3>
        </div>
        {/* <div className="p-4">
          <p className="text-sm text-gray-700 leading-relaxed">Distinctly Different</p>
        </div> */}
      </div>

      {/* Recent Blogs */}
      <div className="border-b border-gray-200 flex-shrink-0">
        <div className="bg-white px-4 py-2.5 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-[#163C0F]">RECENT BLOGS</h3>
        </div>
        <div className="p-4 space-y-4">
          {isBlogsLoading ? (
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
          ) : featuredBlogs.length > 0 ? (
            featuredBlogs.slice(0, 3).map((blog) => (
              <BlogItem 
                key={blog._id} 
                blog={blog}
              />
            ))
          ) : (
            <div className="text-center py-4">
              <p className="text-sm text-gray-500">No blogs available</p>
            </div>
          )}
        </div>
      </div>

      {/* What's New - News */}
      <div className="border-b border-gray-200 flex-shrink-0">
        <div className="bg-white px-4 py-2.5 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-[#163C0F]">RECENT NEWS</h3>
        </div>
        <div className="p-4 space-y-4">
          {isNewsLoading ? (
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
          ) : featuredNews.length > 0 ? (
            featuredNews.map((news) => (
              <NewsItem 
                key={news._id} 
                news={news} 
                getTypeDisplayName={getTypeDisplayName}
              />
            ))
          ) : (
            <div className="text-center py-4">
              <p className="text-sm text-gray-500">No news available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(RightSidebar);