import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Download, Eye, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Insights = () => {
  const blogs = [
    {
      slug: "interim-relief-tds-prosecution",
      title: "Interim Relief Granted in TDS Prosecution: A Notable Decision by Allahabad High Court",
      excerpt: "The Hon'ble High Court of Allahabad has granted interim relief to two applicants in a case concerning delayed deposit of Tax Deducted at Source (TDS). The decision is noteworthy for its interpretation of Section 276B of the Income Tax Act.",
      date: "July 9, 2025",
      category: "Tax Litigation",
      readTime: "5 min read",
      isNew: true
    },
    {
      slug: "nclt-operational-debt-cirp",
      title: "NCLT Admits Insolvency Petition for Default in Operational Debt",
      excerpt: "A petition under Section 9 of the Insolvency and Bankruptcy Code, 2016 was filed seeking initiation of the Corporate Insolvency Resolution Process (CIRP) against a corporate debtor for default in repayment of operational dues amounting to over ₹11 crore.",
      date: "June 15, 2025",
      category: "Insolvency Law",
      readTime: "4 min read",
      isNew: true
    },
    {
      slug: "ncdrc-fire-insurance-oversight",
      title: "NCDRC Holds Insurer Liable for Own Oversight in Fire Insurance Claim",
      excerpt: "In a landmark ruling that underscores the importance of insurer accountability and service diligence, the National Consumer Disputes Redressal Commission (NCDRC) has held Oriental Insurance Company Ltd. liable for wrongfully repudiating an insurance claim.",
      date: "February 13, 2025",
      category: "Consumer Law",
      readTime: "6 min read",
      isNew: false
    },
    {
      slug: "delhi-hc-gst-fresh-hearing",
      title: "Delhi High Court Grants Fresh Hearing to GST Defaulter Amidst Pending SC Verdict",
      excerpt: "In a recent ruling with implications for taxpayers grappling with procedural lapses and legal uncertainties, the Delhi High Court has granted a fresh hearing to M/s Jinender Paper Mart, whose GST registration was suspended and subsequently cancelled.",
      date: "July 10, 2025",
      category: "GST Law",
      readTime: "5 min read",
      isNew: true
    }
  ];

  const categories = ["All", "Tax Litigation", "GST Law", "Insolvency Law", "Consumer Law"];

  return (
    <section id="insights" className="py-20 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Insights</Badge>
          <h2 className="text-4xl font-bold text-primary mb-6">
            Legal Insights & Updates
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed with our latest insights on trending topics in tax law, 
            commercial litigation, and regulatory developments.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {blogs.map((blog, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="outline" className="text-xs">
                    {blog.category}
                  </Badge>
                  {blog.isNew && (
                    <Badge variant="secondary" className="text-xs">
                      New
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl leading-tight hover:text-primary transition-colors">
                  <Link to={`/blog/${blog.slug}`} className="cursor-pointer">
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
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Link to={`/blog/${blog.slug}`} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full">
                      <Eye className="mr-2 h-4 w-4" />
                      Read Article
                    </Button>
                  </Link>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

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