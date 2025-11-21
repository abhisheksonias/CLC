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
    <div className="flex-1 bg-white">
      {/* Header Section */}
      <section className="p-6 sm:p-8 md:p-12 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl poppins font-bold text-[#163C0F] mb-3">
              Comprehensive Legal Solutions
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              Research-intensive, solution-driven approach tailored to align with 
              both legal and business objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <div className="space-y-6 sm:space-y-8">
        {practiceAreas.map((area, index) => (
          <section key={index} className={`p-6 sm:p-8 md:p-12 ${index < practiceAreas.length - 1 ? 'border-b border-gray-200' : ''}`}>
            <div className="max-w-6xl mx-auto">
              <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:border-[#163C0F] transition-all">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-[#B3C7AB] rounded-lg p-3 flex-shrink-0">
                    <area.icon className="h-8 w-8 text-[#163C0F]" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl sm:text-2xl font-bold poppins text-[#163C0F] mb-2">{area.title}</h2>
                    <p className="text-base sm:text-lg font-medium text-gray-600">{area.subtitle}</p>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                  {/* Description and Highlights */}
                  <div>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                      {area.description}
                    </p>
                    
                    <h3 className="font-semibold text-[#163C0F] mb-4 text-base sm:text-lg">Key Service Areas:</h3>
                    <ul className="space-y-3">
                      {area.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="bg-[#B3C7AB] rounded-full p-1 mt-1 flex-shrink-0">
                            <div className="w-1.5 h-1.5 bg-[#163C0F] rounded-full"></div>
                          </div>
                          <span className="text-sm text-gray-700 leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Experience */}
                  <div>
                    <h3 className="font-semibold text-[#163C0F] mb-4 text-base sm:text-lg">Select Experience:</h3>
                    <div className="space-y-3">
                      {area.experience.map((exp, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <FileText className="h-5 w-5 text-[#163C0F] mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-gray-700 leading-relaxed">{exp}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Expertise;