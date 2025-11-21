import { Button } from "@/components/ui/button";
import { Calendar, Download, Eye, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useBlogPosts, useCategories } from "@/hooks/useSanityData";
import { urlFor } from "@/lib/sanity";
import { format } from "date-fns";
import { useState } from "react";

const Insights = () => {
  const { data: blogs = [], isLoading: blogsLoading } = useBlogPosts();
  const { data: categories = [] } = useCategories();
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter blogs by selected category
  const filteredBlogs = selectedCategory === "All" 
    ? blogs 
    : blogs.filter(blog => blog.category?.name === selectedCategory);

  // Create category list for filter buttons
  const categoryList = ["All", ...categories.map(cat => cat.name)];

  return (
    <div className="flex-1 bg-white">
      {/* Header Section */}
      <section className="p-6 sm:p-8 md:p-12 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl poppins font-bold text-[#163C0F] mb-3">
              Legal Insights & Updates
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              Stay informed with our latest insights on trending topics in tax law, 
              commercial litigation, and regulatory developments.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categoryList.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  category === selectedCategory
                    ? "bg-[#163C0F] text-white"
                    : "bg-gray-50 text-gray-700 border border-gray-200 hover:border-[#163C0F] hover:text-[#163C0F]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="p-6 sm:p-8 md:p-12 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          {/* Loading State */}
          {blogsLoading && (
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

          {/* Blog Grid */}
          {!blogsLoading && (
            <div className="grid lg:grid-cols-2 gap-6">
              {filteredBlogs.map((blog, index) => (
                <div key={blog._id} className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#163C0F] transition-all flex flex-col h-full">
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-3">
                      <span className="bg-[#B3C7AB] text-[#163C0F] text-xs font-medium px-3 py-1 rounded-full">
                        {blog.category?.name || 'Uncategorized'}
                      </span>
                      {blog.isNew && (
                        <span className="bg-[#163C0F] text-white text-xs font-medium px-3 py-1 rounded-full">
                          New
                        </span>
                      )}
                    </div>
                    <Link to={`/blog/${blog.slug.current}`} className="cursor-pointer group">
                      <h3 className="text-lg font-bold text-[#163C0F] leading-tight mb-3 group-hover:text-[#1a4a1a] transition-colors">
                        {blog.title}
                      </h3>
                    </Link>
                  </div>
                  
                  <div className="flex flex-col flex-grow">
                    {/* Featured Image */}
                    {blog.featuredImage && (
                      <Link to={`/blog/${blog.slug.current}`} className="mb-4 block">
                        <img
                          src={urlFor(blog.featuredImage).width(600).height(300).fit('crop').url()}
                          alt={blog.featuredImage.alt || blog.title}
                          className="w-full h-auto object-cover rounded-lg border border-gray-200 hover:border-[#163C0F] transition-all"
                          loading="lazy"
                          decoding="async"
                        />
                      </Link>
                    )}
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{format(new Date(blog.publishedAt), 'MMMM d, yyyy')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Eye className="h-4 w-4" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 mt-auto">
                      <Link to={`/blog/${blog.slug.current}`} className="flex-1">
                        <Button size="sm" className="w-full bg-[#163C0F] hover:bg-[#1a4a1a] text-white">
                          <Eye className="mr-2 h-4 w-4" />
                          Read Article
                        </Button>
                      </Link>
                      {blog.downloadUrl && (
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="border-[#163C0F] text-[#163C0F] hover:bg-[#163C0F] hover:text-white"
                          asChild
                        >
                          <a href={blog.downloadUrl} target="_blank" rel="noopener noreferrer">
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

          {!blogsLoading && filteredBlogs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>

    </div>
  );
};

export default Insights;