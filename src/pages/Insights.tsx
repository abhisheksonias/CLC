import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Insights from "@/components/Insights";
import Layout from "@/components/Layout";

const InsightsPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Helmet>
        <html lang="en-IN" />
        <title>Legal Insights & Publications | Commercial Law Chamber</title>
        <meta 
          name="description" 
          content="Stay informed with latest legal insights, case law updates, and regulatory developments in tax law, commercial litigation, and regulatory compliance from Commercial Law Chamber." 
        />
        <meta 
          name="keywords" 
          content="legal insights, tax law updates, commercial litigation insights, regulatory developments, case law updates, legal publications, tax advisory insights, GST updates, legal blog" 
        />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta property="og:title" content="Legal Insights & Publications | Commercial Law Chamber" />
        <meta property="og:description" content="Latest insights on tax law, commercial litigation, and regulatory developments. Stay informed with our legal publications and case law updates." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.clclaw.in/insights" />
        <meta property="og:image" content="https://www.clclaw.in/clc-logo.png" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Legal Insights & Publications - Commercial Law Chamber" />
        <meta name="twitter:description" content="Latest legal insights and publications on tax law and commercial disputes." />
        <link rel="canonical" href="https://www.clclaw.in/insights" />
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Legal Insights & Publications",
            "description": "Latest legal insights, case law updates, and regulatory developments in tax law, commercial litigation, and regulatory compliance",
            "url": "https://www.clclaw.in/insights",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "Blog",
                  "name": "Legal Insights & Publications",
                  "description": "Stay informed with our latest insights on trending topics in tax law, commercial litigation, and regulatory developments",
                  "url": "https://www.clclaw.in/insights",
                  "publisher": {
                    "@type": "LegalService",
                    "name": "Commercial Law Chamber",
                    "url": "https://www.clclaw.in"
                  },
                  "about": [
                    {
                      "@type": "Thing",
                      "name": "Tax Law"
                    },
                    {
                      "@type": "Thing",
                      "name": "Commercial Litigation"
                    },
                    {
                      "@type": "Thing",
                      "name": "Regulatory Compliance"
                    },
                    {
                      "@type": "Thing",
                      "name": "GST"
                    },
                    {
                      "@type": "Thing",
                      "name": "Direct Tax"
                    },
                    {
                      "@type": "Thing",
                      "name": "Indirect Tax"
                    }
                  ]
                }
              }
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.clclaw.in"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Insights",
                  "item": "https://www.clclaw.in/insights"
                }
              ]
            }
          })}
        </script>
      </Helmet>
      
      <Layout>
        <Insights />
      </Layout>
    </>
  );
};

export default InsightsPage;

