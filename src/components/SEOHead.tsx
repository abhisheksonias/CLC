import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl: string;
  ogImage?: string;
  ogType?: "website" | "article";
  publishedDate?: string;
  modifiedDate?: string;
  author?: string;
  articleSection?: string;
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
}

/**
 * Universal SEO Component
 * Use this component on all pages for consistent SEO optimization
 * 
 * Example:
 * <SEOHead
 *   title="Page Title"
 *   description="Page description"
 *   canonicalUrl="https://www.clclaw.in/page"
 *   keywords="keyword1, keyword2"
 * />
 */
const SEOHead = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = "https://www.clclaw.in/clc-logo.png",
  ogType = "website",
  publishedDate,
  modifiedDate,
  author = "Commercial Law Chamber",
  articleSection,
  structuredData,
  noindex = false,
  nofollow = false,
}: SEOHeadProps) => {
  const robotsContent = [
    noindex ? "noindex" : "index",
    nofollow ? "nofollow" : "follow",
    "max-image-preview:large",
    "max-snippet:-1",
    "max-video-preview:-1"
  ].join(", ");

  const fullTitle = title.includes("Commercial Law Chamber") 
    ? title 
    : `${title} | Commercial Law Chamber`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
      <meta name="bingbot" content={robotsContent} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Commercial Law Chamber" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Article specific OG tags */}
      {ogType === "article" && (
        <>
          {publishedDate && <meta property="article:published_time" content={publishedDate} />}
          {modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
          {articleSection && <meta property="article:section" content={articleSection} />}
          <meta property="article:author" content={author} />
        </>
      )}
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@CommercialLawChamber" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;

