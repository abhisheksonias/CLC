import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Team from "@/components/Team";
import Layout from "@/components/Layout";
import { teamMembers } from "@/components/TeamMember";

const OurTeam = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Extract team member names for structured data
  const teamMemberNames = Object.values(teamMembers).map(member => member.name);
  const partners = Object.values(teamMembers).filter(member => 
    member.title.toLowerCase().includes('partner')
  );

  return (
    <>
      <Helmet>
        <html lang="en-IN" />
        <title>Our Team - Legal Experts | Commercial Law Chamber</title>
        <meta 
          name="description" 
          content="Meet our experienced legal team at Commercial Law Chamber. Our partners Vivek Sarin and Shreyas Srivastava bring 30+ years of combined experience in tax litigation, commercial disputes, and regulatory compliance." 
        />
        <meta 
          name="keywords" 
          content="legal team, tax lawyers, commercial law experts, Supreme Court lawyers, tax litigation attorneys, regulatory compliance lawyers, law firm partners, legal professionals India" 
        />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta property="og:title" content="Our Team - Legal Experts | Commercial Law Chamber" />
        <meta property="og:description" content="Meet our experienced legal team specializing in tax litigation, commercial disputes, and regulatory compliance. 40+ years of combined experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.clclaw.in/team" />
        <meta property="og:image" content="https://www.clclaw.in/clc-logo.png" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Team - Commercial Law Chamber" />
        <meta name="twitter:description" content="Experienced legal professionals specializing in tax and commercial disputes." />
        <link rel="canonical" href="https://www.clclaw.in/team" />
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "Commercial Law Chamber",
            "url": "https://www.clclaw.in",
            "employee": [
              {
                "@type": "Person",
                "name": "Vivek Sarin",
                "jobTitle": "Founding Partner",
                "worksFor": {
                  "@type": "LegalService",
                  "name": "Commercial Law Chamber"
                },
                "knowsAbout": [
                  "Tax Litigation",
                  "Constitutional Tax Challenges",
                  "Supreme Court Representation",
                  "Regulatory Compliance",
                  "Commercial Disputes"
                ]
              },
              {
                "@type": "Person",
                "name": "Shreyas Srivastava",
                "jobTitle": "Partner",
                "worksFor": {
                  "@type": "LegalService",
                  "name": "Commercial Law Chamber"
                },
                "knowsAbout": [
                  "Income Tax",
                  "GST",
                  "Customs",
                  "International Trade Remedies",
                  "Cross-border Tax Advisory"
                ]
              }
            ],
            "numberOfEmployees": {
              "@type": "QuantitativeValue",
              "value": "18"
            }
          })}
        </script>
      </Helmet>
      
      <Layout>
        <Team />
      </Layout>
    </>
  );
};

export default OurTeam;

