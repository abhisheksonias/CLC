import { Calculator, Building, FileText, Pointer, BatteryFullIcon, Dot, Circle } from "lucide-react";

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
    <div className="flex-1 bg-white/95 backdrop-blur-sm">
      {/* Hero Section */}
      <section className="relative p-4 sm:p-6 md:p-8 overflow-hidden">
        <div className="relative z-10">
          <div className="max-w-5xl mx-auto bg-gray-100 text-black rounded-xl p-3 sm:p-6 md:p-8 shadow-md">
            <h1 className="font-lora text-[48px] leading-[60px] font-bold mb-4 text-black">
              Comprehensive Legal Solutions
            </h1>
            <p className="text-black/90 text-sm sm:text-base md:text-lg mb-2 max-w-3xl">
              Research-intensive, solution-driven approach tailored to align with both legal and business objectives.
            </p>
          </div>
        </div>
      </section>

      <section id="expertise" className="p-4 sm:p-6 md:p-8">
        <div className="mb-6">
          <h2 className="font-montserrat font-bold text-[36px] leading-[40px] tracking-[0px] text-gray-800">Our Practice Areas</h2>
        </div>

        {/* Practice Areas */}
        <div className="space-y-8">
          {practiceAreas.map((area, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-gray-100 rounded-full p-3">
                    <area.icon className="h-8 w-8" style={{ color: "#636AE8" }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-montserrat font-bold text-[24px] leading-[36px] text-gray-800 ">{area.title}</h3>
                    <p className="text-[16px] font-medium text-gray-600">{area.subtitle}</p>
                  </div>
                </div>
              
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Description and Highlights */}
                  <div>
                    <p className="text-[16px] text-gray-700 leading-relaxed mb-6">
                      {area.description}
                    </p>
                    
                    <h4 className="font-montserrat font-semibold text-[20px] text-gray-800 mb-4">Key Service Areas:</h4>
                    <ul className="space-y-2">
                      {area.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#636AE8" }}></div>
                          <span className="text-[15px] text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Experience */}
                  <div>
                    <h4 className="font-montserrat font-semibold text-[20px] text-gray-800 mb-4">Select Experience:</h4>
                    <div className="space-y-4">
                      {area.experience.map((exp, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 bg-[#F9FAFB] rounded-lg border border-gray-200">
                          <Circle className="h-4 w-4 justify-center mt-3 flex-shrink-0" style={{ color: "#636AE8" }} />
                          <p className="text-[15px] text-gray-600">{exp}</p>
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
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Expertise;