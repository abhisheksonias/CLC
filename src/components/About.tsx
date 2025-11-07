import { Building2, Users, Gavel, Scale, Shield, BookOpen, Globe, Handshake, Eye, Lightbulb, NotebookPen, Kanban, Pyramid, Landmark, Blocks } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Building2, label: "Founded", value: "2008" },
    { icon: Users, label: "Partners", value: "3" },
    { icon: Handshake, label: "Associates", value: "15+" },
    { icon: Landmark, label: "States", value: "Capital" },
  ];


  const approaches = [
    {
      icon: NotebookPen,
      title: "Research-Driven Analysis",
      description: "Rigorous legal research and precedent analysis"
    },
    {
      icon: Kanban,
      title: "Strategic Litigation",
      description: "Outcome-oriented approach in high-stakes disputes and appellate matters"
    },
    {
      icon: Pyramid,
      title: "Client-Centric Solutions",
      description: "Bespoke legal solutions aligned with commercial imperatives"
    },
    {
      icon: Globe,
      title: "Pan-India Network",
      description: "Coordinated representation across all Indian state capitals"
    }
  ];

  const values = [
    {
      icon: Blocks,
      title: "Integrity",
      description: "Unwavering commitment to ethical standards and professional conduct"
    },
    {
      icon: Shield,
      title: "Excellence",
      description: "Pursuit of the highest standards in legal representation and advisory"
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Clear communication and honest counsel in all client interactions"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Creative legal strategies and modern approaches to complex problems"
    }
  ];

  return (
    <div className="flex-1 bg-white/95 backdrop-blur-sm">
      {/* About Header Section */}
      <section className="relative p-4 sm:p-6 md:p-8 overflow-hidden">
        <div className="relative z-10">

          <h1 className="font-lora text-[45px] leading-[60px] font-bold mb-3">
            About Commercial Law Chamber
          </h1>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-2 max-w-3xl">
            Strategic Legal Excellence in Tax and Commercial Disputes
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[17px] mb-2">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white border border-gray-400 hover:shadow-md transition-shadow flex flex-col items-center justify-center"
                style={{ borderRadius: "16px", padding: "22px 24px", opacity: 1 }}>
                <div className="bg-gray-100 rounded-full p-3 inline-block mb-2">
                  <stat.icon className="h-8 w-8" style={{ color: "#636AE8" }} />
                </div>
                <div className="text-[28px] font-bold text-[#779E5A] mb-1">{stat.value}</div>
                <div className="text-[16px] text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Our Story Section */}
      <section className="p-4 sm:p-6 md:p-8">
        <div className="rounded-2xl">
          <div className="max-w-4xl">
            <h2 className="font-montserrat font-bold text-[36px] leading-[40px] tracking-[0px] text-gray-800 mb-5">
              Our Story
            </h2>
            <div className="space-y-4 text-[18px] text-gray-700 leading-relaxed">
              <p>
                Founded in 2008, Commercial Law Chamber emerged from a vision to create a boutique law practice distinguished by its deep specialization in tax advisory and dispute resolution. With three seasoned Partners and a team of 15 adept associates, we have built a robust national network of legal professionals and expert counsels, ensuring seamless support across jurisdictions in India.
              </p>
              <p>
                Our founding philosophy was rooted in strategic thinking and rigorous legal research—crafting bespoke solutions that not only address legal complexities but also align with our clients' commercial imperatives. Over the years, we have become particularly known for our formidable expertise in tax litigation, representing clients before the Supreme Court of India (including SLPs), various High Courts, and specialized tax tribunals such as ITAT, CESTAT, and VAT Tribunals.
              </p>
              <p>
                Our comprehensive practice spans the full spectrum of contentious and advisory tax matters, including departmental proceedings, GST investigations, refund litigation, and trade remedies before the Directorate General of Trade Remedies (DGTR) and other international forums. From high-stakes search and seizure defense to meticulous representation in adjudication and appellate proceedings, we deliver end-to-end legal counsel.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Our Approach Section */}
      <section className="p-4 sm:p-6 md:p-8 border-t border-gray-200">
        <div className="text-center mb-6">
          <h2 className="font-montserrat font-bold text-[36px] leading-[40px] tracking-[0px] text-gray-800 mb-2">Our Approach</h2>
          <p className="text-base text-gray-600">Methodology in handling complex legal matters</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[17px] mb-6">
          {approaches.map((approach, index) => (
            <div key={index} className="bg-white border border-gray-200 hover:shadow-md transition-shadow flex flex-col"
              style={{ borderRadius: "16px", padding: "22px 24px", opacity: 1 }}>
              <div className="flex flex-col h-full">
                <div className="flex justify-center mb-3">
                  <div className="bg-gray-100 rounded-full p-3 inline-block">
                    <approach.icon className="h-8 w-8" style={{ color: "#636AE8" }} />
                  </div>
                </div>
                <h3 className="font-semibold font-montserrat text-gray-800 text-[20px] text-center mb-2">{approach.title}</h3>
                <p className="text-[16px] text-gray-600 leading-relaxed text-center flex-grow">{approach.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gray-200 border border-gray-200 rounded-lg p-4 sm:p-6 mt-6">
          <div className="text-center flex flex-col items-center">
            <div className="w-full max-w-full mx-auto h-auto mb-4 text-center">
              <h3 className="font-montserrat font-bold text-[30px] leading-[36px] pb-2 tracking-[0px] text-gray-800">
                Pan-India Footprint
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-4">
                With on-ground representation in every Indian state capital, our pan-India footprint allows for swift, coordinated action and local insight—ensuring efficiency without compromise. This extensive network enables us to provide seamless legal support across diverse jurisdictions while maintaining the highest standards of professional service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Vision Section */}
      <section className="p-4 sm:p-6 md:p-8 border-t border-gray-200">
        <div className="text-center mb-6">
          <h2 className="font-montserrat font-bold text-[36px] leading-[40px] tracking-[0px] text-gray-800 mb-2">Values & Vision</h2>
          <p className="text-base text-gray-600">Core principles of client service and ethical standards</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[17px] mb-6">
          {values.map((value, index) => (
            <div key={index} className="bg-white border border-gray-200 hover:shadow-md transition-shadow flex flex-col items-center justify-center"
              style={{ borderRadius: "16px", padding: "22px 24px", opacity: 1 }}>
              <div className="bg-gray-100 rounded-full p-3 inline-block mb-3">
                <value.icon className="h-8 w-8" style={{ color: "#636AE8" }} />
              </div>
              <h3 className="font-semibold font-montserrat text-gray-800 text-[20px] text-center mb-2">{value.title}</h3>
              <p className="text-[16px] text-gray-600 leading-relaxed text-center flex-grow">{value.description}</p>
            </div>
          ))}
        </div>
        <div className="bg-gray-200 border border-gray-200 rounded-lg p-4 sm:p-6 mt-6">
          <div className="text-center flex flex-col items-center">
            <div className="w-full max-w-full mx-auto h-auto mb-4 text-center">
              <h3 className="font-montserrat font-bold text-[30px] leading-[36px] pb-2 tracking-[0px] text-gray-800">
                Our Vision
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-4">
                We are proud of our track record in precedent-setting matters across courts and tribunals—rulings that have shaped jurisprudence on anti-dumping, transfer pricing, indirect taxes, and constitutional tax challenges. At the Commercial Law Chamber, we don't just solve legal problems—we craft strategies that protect, defend, and advance your interests in the most complex and high-value disputes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location & Infrastructure Section */}
      {/* <section className="p-8  border-t border-gray-200">
        <div className="bg-gray-100 rounded-lg p-6">
          <div className="text-center mb-6">
            <div className="bg-primary/10 rounded-full p-3 inline-block mb-4">
              <Building2 className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-light text-gray-800 mb-4">Office Location & Infrastructure</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">New Delhi Headquarters</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <p className="text-sm text-gray-600">Commercial Law Chamber, New Delhi, India</p>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-primary" />
                  <p className="text-sm text-gray-600">Modern legal infrastructure with state-of-the-art facilities</p>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-primary" />
                  <p className="text-sm text-gray-600">Strategic location for Supreme Court and High Court representations</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">Professional Infrastructure</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Comprehensive legal research library
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Advanced case management systems
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Secure client consultation facilities
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Digital documentation and filing systems
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default About;
