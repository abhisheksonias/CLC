import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Vivek Sarin",
      title: "Founding Partner",
      experience: "20+ Years",
      specialization: "Constitutional Tax Challenges, Supreme Court Litigation",
      description: "Vivek Sarin is the Founding Partner of Commercial Law Chambers, specializing in Tax, Regulatory, and Commercial Disputes. With over 20 years of experience, he represents clients in high-stakes litigation before the Supreme Court, multiple High Courts, and specialized tribunals including ITAT, CESTAT, and VAT Appellate Tribunals.",
      expertise: ["Constitutional Tax Law", "Supreme Court Practice", "CIRP Matters", "Regulatory Pricing"]
    },
    {
      name: "Vimal Kumar",
      title: "Partner",
      experience: "10+ Years",
      specialization: "Tax Planning & Corporate Compliance",
      description: "Vimal is a seasoned Chartered Accountant with over a decade of experience in audits, taxation, and litigation. He has advised multinational corporations and Indian enterprises on tax planning, corporate tax policy formulation, and regulatory compliance.",
      expertise: ["Direct Tax Advisory", "Audit & Compliance", "Tax Planning", "Corporate Policy"]
    },
    {
      name: "Shreyas Srivastava",
      title: "Partner",
      experience: "12+ Years",
      specialization: "International Trade & Tax Litigation",
      description: "Shreyas is a seasoned counsel leading complex litigation and advisory mandates with strategic focus on Income Tax, GST, and Customs matters, including international trade remedies such as anti-dumping and safeguard duties.",
      expertise: ["GST & Customs", "Trade Remedies", "Cross-border Tax", "Industry Advisory"]
    }
  ];

  return (
    <section className="py-20 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Our Team</Badge>
          <h2 className="text-4xl font-bold text-primary mb-6">
            Meet Our Expert Partners
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our leadership team brings decades of combined experience in tax law, 
            commercial litigation, and regulatory matters.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                {/* Avatar */}
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>

                {/* Basic Info */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{member.name}</h3>
                  <Badge variant="outline" className="mb-2">{member.title}</Badge>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Briefcase className="h-4 w-4" />
                    <span className="text-sm">{member.experience}</span>
                  </div>
                </div>

                {/* Specialization */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <GraduationCap className="h-4 w-4 text-primary" />
                    <span className="font-semibold text-sm">Specialization</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">{member.specialization}</p>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {member.description}
                </p>

                {/* Expertise Tags */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="h-4 w-4 text-primary" />
                    <span className="font-semibold text-sm">Key Expertise</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;