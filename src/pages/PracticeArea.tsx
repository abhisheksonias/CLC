import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Expertise from "@/components/Expertise";
import Layout from "@/components/Layout";

const PracticeArea = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Helmet>
        <html lang="en-IN" />
        <title>Practice Areas - Tax & Commercial Disputes | Commercial Law Chamber</title>
        <meta 
          name="description" 
          content="Commercial Law Chamber offers comprehensive legal solutions in Direct & Indirect Tax, Regulatory Disputes, and Commercial Disputes. Expert representation in tax litigation, GST matters, SEBI, CCI, and international tax advisory." 
        />
        <meta 
          name="keywords" 
          content="tax law practice areas, direct tax advisory, indirect tax litigation, GST disputes, transfer pricing, customs valuation, SEBI matters, CCI disputes, commercial disputes, regulatory compliance, international tax, DTAA advisory" 
        />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta property="og:title" content="Practice Areas - Tax & Commercial Disputes | Commercial Law Chamber" />
        <meta property="og:description" content="Comprehensive legal solutions in tax advisory, regulatory disputes, and commercial litigation. Expert representation before Supreme Court, High Courts, and specialized tribunals." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.clclaw.in/practice-area" />
        <meta property="og:image" content="https://www.clclaw.in/clc-logo.png" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Practice Areas - Commercial Law Chamber" />
        <meta name="twitter:description" content="Expert legal services in tax advisory, regulatory disputes, and commercial litigation across India." />
        <link rel="canonical" href="https://www.clclaw.in/practice-area" />
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Legal Services",
            "provider": {
              "@type": "LegalService",
              "name": "Commercial Law Chamber",
              "url": "https://www.clclaw.in"
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Practice Areas",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Direct & Indirect Tax",
                    "description": "Strategic tax advisory across borders and sectors including transfer pricing, customs valuation, DTAA, FTA, and BIT advisory",
                    "serviceType": "Tax Advisory and Litigation",
                    "provider": {
                      "@type": "LegalService",
                      "name": "Commercial Law Chamber"
                    },
                    "areaServed": {
                      "@type": "Country",
                      "name": "India"
                    }
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Regulatory and Commercial Disputes",
                    "description": "Strategic legal representation in complex regulatory and commercial disputes including SEBI, CCI, NCLT, and shareholder conflicts",
                    "serviceType": "Regulatory and Commercial Disputes",
                    "provider": {
                      "@type": "LegalService",
                      "name": "Commercial Law Chamber"
                    },
                    "areaServed": {
                      "@type": "Country",
                      "name": "India"
                    }
                  }
                }
              ]
            },
            "serviceType": [
              "Direct Tax Advisory",
              "Indirect Tax Litigation",
              "Transfer Pricing",
              "Customs Valuation",
              "GST Disputes",
              "SEBI Matters",
              "CCI Disputes",
              "NCLT Proceedings",
              "Commercial Arbitration",
              "International Tax",
              "DTAA Advisory",
              "Regulatory Compliance"
            ]
          })}
        </script>
      </Helmet>
      
      <Layout>
        <Expertise />
      </Layout>
    </>
  );
};

export default PracticeArea;

