import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Career from "@/components/Career";
import Layout from "@/components/Layout";

const CareerPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Helmet>
        <html lang="en-IN" />
        <title>Career Opportunities - Join Our Legal Team | Commercial Law Chamber</title>
        <meta 
          name="description" 
          content="Join Commercial Law Chamber - a boutique law practice specializing in tax and commercial disputes. Career opportunities for lawyers, associates, and legal professionals. Collaborative environment, learning & development, and professional growth." 
        />
        <meta 
          name="keywords" 
          content="legal career opportunities, law firm jobs, tax lawyer jobs, commercial disputes lawyer jobs, legal associate positions, law firm careers India, legal jobs New Delhi, law firm hiring" 
        />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta property="og:title" content="Career Opportunities - Join Our Legal Team | Commercial Law Chamber" />
        <meta property="og:description" content="Join our team of legal excellence. Career opportunities for experienced lawyers and fresh graduates passionate about tax and commercial law." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.clclaw.in/career" />
        <meta property="og:image" content="https://www.clclaw.in/clc-logo.png" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Career Opportunities - Commercial Law Chamber" />
        <meta name="twitter:description" content="Join our team of legal excellence. Career opportunities in tax and commercial law." />
        <link rel="canonical" href="https://www.clclaw.in/career" />
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JobPosting",
            "title": "Legal Career Opportunities",
            "description": "Join Commercial Law Chamber - a boutique law practice specializing in tax and commercial disputes. We offer career opportunities for both experienced lawyers and fresh graduates who demonstrate exceptional potential and a passion for tax and commercial law.",
            "identifier": {
              "@type": "PropertyValue",
              "name": "Commercial Law Chamber",
              "value": "CLC-CAREER"
            },
            "datePosted": "2025-01-01",
            "validThrough": "2025-12-31",
            "employmentType": ["FULL_TIME", "PART_TIME", "INTERN"],
            "hiringOrganization": {
              "@type": "LegalService",
              "name": "Commercial Law Chamber",
              "sameAs": "https://www.clclaw.in",
              "logo": "https://www.clclaw.in/clc-logo.png"
            },
            "jobLocation": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "New Delhi",
                "addressCountry": "IN"
              }
            },
            "baseSalary": {
              "@type": "MonetaryAmount",
              "currency": "INR",
              "value": {
                "@type": "QuantitativeValue",
                "value": "Competitive",
                "unitText": "MONTH"
              }
            },
            "jobBenefits": [
              "Collaborative Environment",
              "Learning & Development",
              "Professional Growth",
              "Work-Life Balance",
              "Mentorship Opportunities",
              "Training Programs"
            ],
            "qualifications": "LLB degree or equivalent legal qualification. Passion for tax and commercial law. Strong research and analytical skills.",
            "skills": [
              "Tax Law",
              "Commercial Disputes",
              "Legal Research",
              "Litigation",
              "Regulatory Compliance"
            ],
            "workHours": "Monday - Friday: 9:00 AM - 7:00 PM, Saturday: 10:00 AM - 4:00 PM"
          })}
        </script>
      </Helmet>
      
      <Layout>
        <Career />
      </Layout>
    </>
  );
};

export default CareerPage;

