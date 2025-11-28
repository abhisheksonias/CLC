import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";

const Home = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Helmet>
        <html lang="en-IN" />
        <title>Commercial Law Chamber - Leading Tax & Commercial Disputes Law Firm in India</title>
        <meta 
          name="description" 
          content="Commercial Law Chamber is a boutique law practice specializing in tax advisory and dispute resolution. With 20+ years of experience, Supreme Court representation, and a pan-India network of legal professionals." 
        />
        <meta 
          name="keywords" 
          content="tax law firm, commercial disputes, tax advisory, GST litigation, direct tax, indirect tax, Supreme Court lawyers, legal services India, tax consultants" 
        />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta property="og:title" content="Commercial Law Chamber - Leading Tax & Commercial Disputes Law Firm" />
        <meta property="og:description" content="Boutique law practice with deep specialization in tax advisory and dispute resolution across India." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.clclaw.in/" />
        <meta property="og:image" content="https://www.clclaw.in/clc-logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Commercial Law Chamber" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Commercial Law Chamber - Leading Tax & Commercial Disputes Law Firm" />
        <meta name="twitter:description" content="Boutique law practice with deep specialization in tax advisory and dispute resolution across India." />
        <meta name="twitter:image" content="https://www.clclaw.in/clc-logo.png" />
        <link rel="canonical" href="https://www.clclaw.in/" />
        
        {/* Combined LegalService + LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LegalService", "LocalBusiness"],
            "name": "Commercial Law Chamber",
            "description": "Boutique law practice specializing in tax advisory and dispute resolution",
            "url": "https://www.clclaw.in",
            "logo": "https://www.clclaw.in/clc-logo.png",
            "foundingDate": "2008",
            "priceRange": "Consultation required",
            "telephone": "+91-99999-20118",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "A, 1 A2, Jangpura Rd, Block A, Jangpura Extension",
              "addressLocality": "New Delhi",
              "addressRegion": "Delhi",
              "postalCode": "110014",
              "addressCountry": "IN"
            },
            "areaServed": { "@type": "Country", "name": "India" },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Legal Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Direct & Indirect Tax Advisory" }},
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Disputes Resolution" }},
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Regulatory Disputes" }},
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "International Tax" }}
              ]
            }
          })}
        </script>
      </Helmet>
      
      <Layout>
        <Hero />
      </Layout>
    </>
  );
};

export default Home;

