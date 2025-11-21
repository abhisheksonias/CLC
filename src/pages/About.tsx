import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import About from "@/components/About";
import Layout from "@/components/Layout";

const AboutPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Helmet>
        <html lang="en-IN" />
        <title>About Us - Commercial Law Chamber | Leading Tax & Commercial Disputes Law Firm</title>
        <meta 
          name="description" 
          content="Learn about Commercial Law Chamber - Founded in 2008, we are a boutique law practice specializing in tax advisory and dispute resolution. With 3 Partners, 15+ associates, and a pan-India network of legal professionals." 
        />
        <meta 
          name="keywords" 
          content="about commercial law chamber, tax law firm history, boutique law practice, tax litigation experts, Supreme Court lawyers, legal firm India, tax advisory firm" 
        />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta property="og:title" content="About Us - Commercial Law Chamber | Tax & Commercial Disputes Law Firm" />
        <meta property="og:description" content="Founded in 2008, Commercial Law Chamber is a boutique law practice distinguished by its deep specialization in tax advisory and dispute resolution across India." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.clclaw.in/about" />
        <meta property="og:image" content="https://www.clclaw.in/clc-logo.png" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - Commercial Law Chamber" />
        <meta name="twitter:description" content="Boutique law practice specializing in tax advisory and dispute resolution with pan-India network." />
        <link rel="canonical" href="https://www.clclaw.in/about" />
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "LegalService",
              "name": "Commercial Law Chamber",
              "description": "Boutique law practice specializing in tax advisory and dispute resolution",
              "url": "https://www.clclaw.in",
              "logo": "https://www.clclaw.in/clc-logo.png",
              "foundingDate": "2008",
              "numberOfEmployees": {
                "@type": "QuantitativeValue",
                "value": "18"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "New Delhi",
                "addressCountry": "IN"
              },
              "areaServed": {
                "@type": "Country",
                "name": "India"
              },
              "knowsAbout": [
                "Tax Advisory",
                "Tax Litigation",
                "Commercial Disputes",
                "GST Litigation",
                "Regulatory Disputes",
                "Supreme Court Representation",
                "High Court Representation",
                "ITAT",
                "CESTAT",
                "VAT Tribunals"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Legal Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Tax Advisory and Litigation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Commercial Disputes Resolution"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "GST Investigations and Refund Litigation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Trade Remedies and International Tax"
                    }
                  }
                ]
              }
            }
          })}
        </script>
      </Helmet>
      
      <Layout>
        <About />
      </Layout>
    </>
  );
};

export default AboutPage;

