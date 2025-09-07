import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Gavel, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Building2, label: "Founded", value: "2008" },
    { icon: Users, label: "Partners", value: "3" },
    { icon: Users, label: "Associates", value: "15+" },
    { icon: Gavel, label: "States", value: "All Capitals" },
  ];

  return (
    <section id="about" className="py-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">About Us</Badge>
          <h2 className="text-4xl font-bold text-primary mb-6">
            Strategic Legal Excellence in Tax and Commercial Disputes
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center shadow-card">
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">Our Legacy</h3>
            <div className="prose prose-lg text-muted-foreground leading-relaxed space-y-4">
              <p>
                Founded in 2008, Commercial Law Chamber is a boutique law practice distinguished 
                by its deep specialization in tax advisory and dispute resolution. With three seasoned 
                Partners and a team of 15 adept associates, we operate through a robust national 
                network of legal professionals and expert counsels, ensuring seamless support 
                across jurisdictions in India.
              </p>
              <p>
                Our philosophy is rooted in strategic thinking and rigorous legal research—crafting 
                bespoke solutions that not only address legal complexities but also align with our 
                clients' commercial imperatives.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">Our Expertise</h3>
            <div className="prose prose-lg text-muted-foreground leading-relaxed space-y-4">
              <p>
                We are particularly known for our formidable expertise in tax litigation, representing 
                clients before the Supreme Court of India (including SLPs), various High Courts, and 
                specialized tax tribunals such as ITAT, CESTAT, and VAT Tribunals.
              </p>
              <p>
                Our comprehensive practice spans the full spectrum of contentious and advisory tax 
                matters, including departmental proceedings, GST investigations, refund litigation, 
                and trade remedies before the Directorate General of Trade Remedies (DGTR).
              </p>
            </div>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-primary to-primary-dark text-white shadow-elegant">
            <CardContent className="p-12 text-center">
              <TrendingUp className="h-12 w-12 mx-auto mb-6 text-secondary" />
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-xl leading-relaxed max-w-4xl mx-auto">
                At the Commercial Law Chamber, we don't just solve legal problems—we craft strategies 
                that protect, defend, and advance your interests in the most complex and high-value disputes. 
                We are proud of our track record in precedent-setting matters across courts and tribunals.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;