import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calculator, Building, Globe, FileText, ArrowRight } from "lucide-react";

const Expertise = () => {
  const practiceAreas = [
    {
      icon: Calculator,
      title: "Direct & Indirect Tax",
      subtitle: "Strategic Tax Advisory Across Borders and Sectors",
      description: "Our tax practice offers deep, cross-functional expertise in direct and indirect taxation, international tax structuring, and customs advisory. We advise on corporate, commercial, and financial transactions with focus on tax-efficient investments and cross-border operations.",
      highlights: [
        "Transfer Pricing (TP) audits and disputes",
        "Customs valuation and classification",
        "Supply chain restructuring",
        "DTAA, FTA, and BIT advisory",
        "International investment treaty claims",
        "Cross-border tax strategies"
      ],
      experience: [
        "Advised Government of India in bilateral treaty dispute",
        "Structured international income tax strategies for MNCs",
        "Led advisory on double taxation issues and FTAs",
        "Provided strategic counsel on service tax implications"
      ]
    },
    {
      icon: Building,
      title: "Regulatory and Commercial Disputes",
      subtitle: "Focused Expertise in Regulatory and Commercial Disputes",
      description: "We provide strategic, outcome-oriented legal representation in complex regulatory and commercial disputes. Our regulatory practice spans engagements with government bodies, statutory regulators, and adjudicatory forums.",
      highlights: [
        "SEBI enforcement actions and investigations",
        "Competition Commission of India (CCI) matters",
        "NCLT proceedings and corporate disputes",
        "Shareholder conflicts and joint ventures",
        "Commercial fraud and investment disputes",
        "Licensing and compliance disputes"
      ],
      experience: [
        "High-stakes shareholder conflicts resolution",
        "Contractual breach and supply chain disputes",
        "Regulatory investigation defense",
        "Commercial arbitration and ADR"
      ]
    }
  ];

  return (
    <section id="expertise" className="py-10 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold poppins text-gray-800 mb-6">
            Comprehensive Legal Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Research-intensive, solution-driven approach tailored to align with 
            both legal and business objectives.
          </p>
        </div>

        {/* Practice Areas */}
        <div className="space-y-12">
          {practiceAreas.map((area, index) => (
            <Card key={index} className="shadow-card">
              <CardHeader className="pb-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary rounded-lg">
                    <area.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-primary mb-2">{area.title}</CardTitle>
                    <p className="text-lg font-medium text-muted-foreground">{area.subtitle}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Description and Highlights */}
                  <div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {area.description}
                    </p>
                    
                    <h4 className="font-semibold text-primary mb-4">Key Service Areas:</h4>
                    <ul className="space-y-2">
                      {area.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Experience */}
                  <div>
                    <h4 className="font-semibold text-primary mb-4">Select Experience:</h4>
                    <div className="space-y-4">
                      {area.experience.map((exp, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 bg-accent rounded-lg">
                          <FileText className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-muted-foreground">{exp}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6">
                      {/* <Button variant="outline" className="w-full">
                        Learn More About This Practice
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button> */}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary to-primary-dark text-white shadow-elegant">
            <CardContent className="p-12">
              <Globe className="h-12 w-12 mx-auto mb-6 text-secondary" />
              <h3 className="text-2xl font-semibold mb-4">Pan-India Legal Network</h3>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                With on-ground representation in every Indian state capital, our pan-India 
                footprint allows for swift, coordinated action and local insight—ensuring 
                efficiency without compromise.
              </p>
              <Button variant="secondary" size="lg">
                Discuss Your Legal Requirements
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Expertise;