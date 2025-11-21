import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Contact from "@/components/Contact";
import Layout from "@/components/Layout";

const ContactPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Helmet>
        <html lang="en-IN" />
        <title>Contact Us - Get Legal Consultation | Commercial Law Chamber</title>
        <meta 
          name="description" 
          content="Contact Commercial Law Chamber for expert legal consultation in tax and commercial disputes. Reach us at +91 99999 20118 or vivek.sarin@clclaw.in. Pan-India legal network with offices across all state capitals." 
        />
        <meta 
          name="keywords" 
          content="contact commercial law chamber, legal consultation, tax lawyer contact, commercial disputes lawyer, law firm contact India, legal advice, tax advisory contact, New Delhi law firm" 
        />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta property="og:title" content="Contact Us - Get Legal Consultation | Commercial Law Chamber" />
        <meta property="og:description" content="Reach out to our experienced team for strategic legal counsel in tax and commercial disputes. Pan-India presence with 24/7 emergency support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.clclaw.in/contact" />
        <meta property="og:image" content="https://www.clclaw.in/clc-logo.png" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - Commercial Law Chamber" />
        <meta name="twitter:description" content="Get expert legal consultation for tax and commercial disputes." />
        <link rel="canonical" href="https://www.clclaw.in/contact" />
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Us",
            "description": "Contact Commercial Law Chamber for expert legal consultation in tax and commercial disputes",
            "url": "https://www.clclaw.in/contact",
            "mainEntity": {
              "@type": "LegalService",
              "name": "Commercial Law Chamber",
              "url": "https://www.clclaw.in",
              "telephone": "+91-99999-20118",
              "email": "vivek.sarin@clclaw.in",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Commercial Law Chamber",
                "addressLocality": "New Delhi",
                "addressCountry": "IN"
              },
              "areaServed": {
                "@type": "Country",
                "name": "India"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "09:00",
                  "closes": "19:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "10:00",
                  "closes": "16:00"
                }
              ],
              "priceRange": "Consultation",
              "serviceType": [
                "Tax Advisory",
                "Commercial Disputes",
                "Regulatory Compliance",
                "GST Litigation",
                "Direct Tax",
                "Indirect Tax"
              ]
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
                  "name": "Contact",
                  "item": "https://www.clclaw.in/contact"
                }
              ]
            }
          })}
        </script>
      </Helmet>
      
      <Layout>
        <Contact />
      </Layout>
    </>
  );
};

export default ContactPage;

