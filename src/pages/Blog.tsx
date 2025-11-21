import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import Footer from "@/components/Footer";
import { useBlogPost } from "@/hooks/useSanityData";
import { SanityContentRenderer } from "@/lib/sanityContent";
import { urlFor } from "@/lib/sanity";
import { format } from "date-fns";
import { ArrowLeft, Download, Eye } from "lucide-react";

const Blog = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { data: blogPost, isLoading, error } = useBlogPost(slug || '');

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen">
        <div className="max-w-7xl bg-slate-900/40 mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Header />
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="hidden lg:block lg:w-48 xl:w-52">
              <LeftSidebar activeSection="insights" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="bg-white/95 backdrop-blur-sm p-8">
                <div className="max-w-4xl">
                  <div className="animate-pulse">
                    <div className="h-8 bg-gray-300 rounded mb-6"></div>
                    <div className="space-y-4">
                      <div className="h-4 bg-gray-300 rounded"></div>
                      <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                      <div className="h-4 bg-gray-300 rounded w-4/6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block lg:w-60 xl:w-64">
              <RightSidebar />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }

  // Error state or article not found
  if (error || !blogPost) {
    return (
      <div className="min-h-screen">
        <div className="max-w-7xl bg-slate-900/40 mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Header />
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="hidden lg:block lg:w-48 xl:w-52">
              <LeftSidebar activeSection="insights" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="bg-white/95 backdrop-blur-sm p-8">
                <div className="max-w-4xl">
                  <h1 className="text-2xl font-semibold mb-4">Article not found</h1>
                  <Link to="/" className="text-primary">Go back</Link>
                </div>
              </div>
            </div>
            <div className="hidden lg:block lg:w-60 xl:w-64">
              <RightSidebar />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }

  const metaTitle = blogPost.seo?.metaTitle || blogPost.title;
  const metaDescription = blogPost.seo?.metaDescription || blogPost.excerpt || `Read ${blogPost.title} - Legal insights and analysis from Commercial Law Chamber`;
  const canonicalUrl = `https://www.clclaw.in/blog/${blogPost.slug.current}`;
  const ogImage = blogPost.featuredImage 
    ? urlFor(blogPost.featuredImage).width(1200).height(630).fit('crop').url()
    : 'https://www.clclaw.in/clc-logo.png';
  const publishedDate = blogPost.publishedAt ? new Date(blogPost.publishedAt).toISOString() : new Date().toISOString();

  return (
    <>
      <Helmet>
        <title>{metaTitle} | Commercial Law Chamber</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={`${blogPost.category?.name || 'legal'}, tax law, commercial disputes, legal insights, ${blogPost.title}`} />
        <meta name="author" content="Commercial Law Chamber" />
        <meta name="article:published_time" content={publishedDate} />
        <meta name="article:author" content="Commercial Law Chamber" />
        <meta name="article:section" content={blogPost.category?.name || "Legal Insights"} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Commercial Law Chamber" />
        <meta property="article:published_time" content={publishedDate} />
        {blogPost.category && <meta property="article:section" content={blogPost.category.name} />}
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": blogPost.title,
            "description": metaDescription,
            "image": ogImage,
            "datePublished": publishedDate,
            "dateModified": publishedDate,
            "author": {
              "@type": "Organization",
              "name": "Commercial Law Chamber",
              "url": "https://www.clclaw.in"
            },
            "publisher": {
              "@type": "LegalService",
              "name": "Commercial Law Chamber",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.clclaw.in/clc-logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": canonicalUrl
            },
            "articleSection": blogPost.category?.name || "Legal Insights",
            "keywords": blogPost.category?.name || "legal insights",
            "inLanguage": "en-IN"
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen">
        <div className="max-w-7xl bg-slate-900/40 mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Header />
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Left Sidebar */}
            <div className="hidden lg:block lg:w-48 xl:w-52">
              <LeftSidebar activeSection="insights" />
            </div>
            {/* Main Content */}
            <div className="flex-1 min-w-0">
              <article className="bg-white/95 backdrop-blur-sm p-8">
                <div className="max-w-4xl">
                  {/* Back Navigation */}
                  <nav className="mb-6" aria-label="Breadcrumb">
                    <Button
                      variant="ghost"
                      onClick={() => {
                        const cameFromSameSite = document.referrer && new URL(document.referrer).origin === window.location.origin;
                        if (window.history.length > 1 && cameFromSameSite) {
                          navigate(-1);
                        } else {
                          navigate('/insights');
                        }
                      }}
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-800 p-0 h-auto"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back to Previous Page
                    </Button>
                  </nav>
                  
                  <header>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold poppins text-[#163C0F] mb-6">{blogPost.title}</h1>
                    {blogPost.category && (
                      <div className="mb-4">
                        <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                          {blogPost.category.name}
                        </span>
                      </div>
                    )}
                    {blogPost.publishedAt && (
                      <time className="text-sm text-gray-600" dateTime={publishedDate}>
                        {format(new Date(blogPost.publishedAt), 'MMMM d, yyyy')}
                      </time>
                    )}
                  </header>
                  
                  {/* Featured Image */}
                  {blogPost.featuredImage && (
                    <div className="mb-8">
                      <img
                        src={urlFor(blogPost.featuredImage).width(800).height(400).fit('crop').url()}
                        alt={blogPost.featuredImage.alt || blogPost.title}
                        className="w-full h-auto rounded-lg shadow-md"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  )}
                  
                  {/* Content */}
                  <div itemProp="articleBody" className="text-gray-700">
                    <SanityContentRenderer content={blogPost.content} />
                  </div>
                  
                  {/* Download Button */}
                  {blogPost.downloadUrl && (
                    <div className="flex items-center gap-3 mt-8">
                      {/* <span className="font-semibold text-[#163C0F]">Read The Full Document Here </span> */}
                      <Button variant="outline" asChild>
                        <a href={blogPost.downloadUrl} target="_blank" rel="noopener noreferrer">
                          <Eye className="h-4 w-4" />
                          Read The Full Document Here
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </article>
            </div>
            {/* Right Sidebar */}
            <div className="hidden lg:block lg:w-60 xl:w-64">
              <RightSidebar />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Blog;

