import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Download, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useBlogPosts, useCategories } from "@/hooks/useSanityData";
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
    <div className="flex-1 bg-white/95 backdrop-blur-sm">
      {/* Hero Section */}
      <section className="relative p-4 sm:p-6 md:p-8 overflow-hidden">
        <div className="relative z-10">
          <div className="max-w-5xl mx-auto bg-[#779E5A] text-white rounded-xl p-6 sm:p-8 md:p-10 shadow-md">
            <h1 className="font-lora text-[48px] leading-[60px] font-bold mb-4 text-white">
              Legal Insights & Updates
            </h1>
            <p className="text-white/90 text-sm sm:text-base md:text-lg mb-6 max-w-3xl">
              Stay informed with our latest insights on trending topics in tax law, commercial litigation, and regulatory developments.
            </p>
          </div>
        </div>
      </section>

      <section id="insights" className="p-4 sm:p-6 md:p-8">
        <div className="mb-6">
          <h2 className="font-montserrat font-bold text-[36px] leading-[40px] tracking-[0px] text-gray-800 mb-3">Explore Our Insights</h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categoryList.map((category) => (
            <Button
              key={category}
              variant={category === selectedCategory ? "default" : "outline"}
              size="sm"
              className={`mb-2 ${category === selectedCategory ? 'bg-[#779E5A] hover:bg-[#6a8d4f]' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Loading State */}
        {blogsLoading && (
          <div className="grid lg:grid-cols-2 gap-[17px] mb-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl shadow-md"
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
        )}

        {/* Blog Grid */}
        {!blogsLoading && (
          <div className="grid lg:grid-cols-2 gap-[17px] mb-12">
            {filteredBlogs.map((blog, index) => (
            <div key={blog._id} className="bg-white border border-gray-200 hover:shadow-md transition-all duration-300 flex flex-col h-full"
              style={{ borderRadius: "16px", padding: "22px 24px", opacity: 1 }}>
              <div>
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="outline" className="text-xs" style={{ color: "#636AE8", borderColor: "#636AE8" }}>
                    {blog.category?.name || 'Uncategorized'}
                  </Badge>
                  {blog.isNew && (
                    <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                      New
                    </Badge>
                  )}
                </div>
                <h3 className="font-montserrat font-bold text-[20px] leading-tight text-gray-800 hover:text-[#636AE8] transition-colors mb-4">
                  <Link to={`/blog/${blog.slug.current}`} className="cursor-pointer">
                    {blog.title}
                  </Link>
                </h3>
              </div>
              
              <div className="flex flex-col flex-grow">
                <p className="text-gray-600 text-[16px] leading-relaxed mb-6 flex-grow">
                  {blog.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" style={{ color: "#636AE8" }} />
                    <span>{format(new Date(blog.publishedAt), 'MMMM d, yyyy')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4" style={{ color: "#636AE8" }} />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
                
                <div className="flex gap-3 mt-auto">
                  <Link to={`/blog/${blog.slug.current}`} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full hover:bg-[#636AE8] hover:text-white hover:border-[#636AE8]">
                      <Eye className="mr-2 h-4 w-4" />
                      Read Article
                    </Button>
                  </Link>
                  {blog.downloadUrl ? (
                    <Button variant="outline" size="sm" asChild className="hover:bg-[#636AE8] hover:text-white hover:border-[#636AE8]">
                      <a href={blog.downloadUrl} target="_blank" rel="noopener noreferrer">
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
          </div>
        )}

        {/* Newsletter Section */}
        {/* <Card className="bg-accent border-2 border-dashed border-primary/20">
          <CardContent className="p-12 text-center">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Stay Updated with Legal Developments
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest insights, case law updates, 
              and regulatory changes directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="whitespace-nowrap">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card> */}
      </section>
    </div>
  );
};

export default Insights;