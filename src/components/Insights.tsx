import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
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
    <section id="insights" className="py-10 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          {/* <Badge variant="secondary" className="mb-4">Insights</Badge> */}
          <h2 className="text-4xl font-bold text-gray-800 poppins mb-6">
            Legal Insights & Updates
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed with our latest insights on trending topics in tax law, 
            commercial litigation, and regulatory developments.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categoryList.map((category) => (
            <Button
              key={category}
              variant={category === selectedCategory ? "default" : "outline"}
              size="sm"
              className="mb-2"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Loading State */}
        {blogsLoading && (
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="shadow-card">
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
        )}

        {/* Blog Grid */}
        {!blogsLoading && (
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {filteredBlogs.map((blog, index) => (
            <Card key={blog._id} className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="outline" className="text-xs">
                    {blog.category?.name || 'Uncategorized'}
                  </Badge>
                  {blog.isNew && (
                    <Badge variant="secondary" className="text-xs">
                      New
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl leading-tight hover:text-primary transition-colors">
                  <Link to={`/blog/${blog.slug.current}`} className="cursor-pointer">
                    {blog.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {blog.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{format(new Date(blog.publishedAt), 'MMMM d, yyyy')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Link to={`/blog/${blog.slug.current}`} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full">
                      <Eye className="mr-2 h-4 w-4" />
                      Read Article
                    </Button>
                  </Link>
                  {blog.downloadUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={blog.downloadUrl} target="_blank" rel="noopener noreferrer">
                        <Download className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
          </div>
        )}

        {/* Newsletter Section */}
        <Card className="bg-accent border-2 border-dashed border-primary/20">
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
        </Card>
      </div>
    </section>
  );
};

export default Insights;