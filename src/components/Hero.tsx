import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, Shield, Award, Users, BookOpen, Briefcase, Gavel, Building, Calculator, Globe, Network, FilesIcon, Folder, FolderOpen, Hammer, Building2 } from "lucide-react";

const Hero = () => {
  const practiceAreas = [
    {
      icon: FolderOpen,
      title: "Direct & Indirect Tax",
      description: "Comprehensive tax advisory and litigation services"
    },
    {
      icon: Hammer,
      title: "Commercial Disputes",
      description: "Strategic litigation and dispute resolution"
    },
    {
      icon: Building2,
      title: "Regulatory Disputes",
      description: "Corporate compliance and regulatory advisory"
    },
    {
      icon: Globe,
      title: "International Tax",
      description: "Cross-border tax structuring and planning"
    }
  ];

  const whyChooseUs = [
    {
      icon: Scale,
      title: "Supreme Court Representation",
      description: "Extensive experience before the highest court of India"
    },
    {
      icon: Award,
      title: "20+ Years Experience",
      description: "Combined expertise in tax and commercial law"
    },
    {
      icon: Network,
      title: "Pan-India Network",
      description: "Legal professionals across all state capitals"
    },
    {
      icon: BookOpen,
      title: "Research-Driven Approach",
      description: "Solution-oriented legal strategies"
    }
  ];

  return (
    <div className="flex-1 bg-white/95 backdrop-blur-sm">

      <section className="relative p-4 sm:p-6 md:p-8 overflow-hidden">

        <div className="relative z-10">
          <div className="max-w-5xl h-[345px]  mx-auto bg-[#779E5A] text-white rounded-xl p-6 sm:p-8 md:p-10 shadow-md">
            <h1 className="font-lora text-[48px] leading-[60px] font-bold mb-4">
              Leading Legal Excellence in Tax & Commercial Disputes
            </h1>
            <p className="text-white/90 text-sm sm:text-base md:text-lg mb-6 max-w-3xl">
              At Commercial Law Chamber, we offer unparalleled legal expertise, combining deep industry knowledge with innovative solutions to navigate the complexities of tax and commercial law.
            </p>
            <div className="font-poppins flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                className="bg-black hover:bg-neutral-900 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base"
                onClick={() => window.location.href = '/contact'}
              >
                Get Legal Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                className="bg-white text-gray-800 hover:bg-gray-100 px-5 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base"
                onClick={() => window.location.href = '/expertise'}
              >
                Our Expertise
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="p-4 sm:p-6 md:p-8">
        <div className="rounded-2xl">
          <div className="max-w-4xl">
            <h2 className="font-montserrat font-bold text-[36px] leading-[40px] tracking-[0px] text-gray-800 mb-5">
              Welcome to Commercial Law Chamber
            </h2>
            <div className="space-y-4 text-[18px] text-gray-700 leading-relaxed">
              <p>
                Founded in 2008, Commercial Law Chamber is a boutique law practice distinguished by its deep
                specialization in tax advisory and dispute resolution. With three seasoned Partners and a team of 15 adept
                associates, we operate through a robust national network of legal professionals.
              </p>
              <p>
                Our philosophy is rooted in strategic thinking and rigorous legal research—crafting bespoke solutions that
                align with both legal precedents and commercial imperatives.
              </p>
            </div>

            <div className="mt-6 w-full flex flex-wrap justify-evenly gap-3">
              {[{ icon: Scale, label: "Supreme Court" }, { icon: Award, label: "20+ Years" }, { icon: Network, label: "Pan-India Network" }, { icon: BookOpen, label: "Research-Driven" }].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center justify-center gap-2 text-sm text-gray-700 bg-white"
                  style={{
                    width: "196.4px",
                    height: "45.74px",
                    borderRadius: "22.87px",
                    border: "1.35px solid #d1d5db",
                    opacity: 1
                  }}
                >
                  <Icon className="h-[22px] w-[22px] text-[#5B67A8]" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Practice Areas */}
      <section className="p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 border-t border-gray-200">
        <div className="mb-6">
          <h2 className="font-montserrat font-bold text-[36px] leading-[40px] tracking-[0px] text-gray-800">Core Practice Areas</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[17px]">
          {practiceAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 hover:shadow-md transition-shadow flex flex-col"
              style={{

                borderRadius: "16px",
                padding: "22px 24px",
                opacity: 1
              }}
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-center mb-3">
                  <div className="bg-gray-100 rounded-full p-3 inline-block">
                    <area.icon className="h-8 w-8" style={{ color: "#636AE8" }} />
                  </div>
                </div>
                <h3 className="font-semibold font-montserrat text-gray-800 text-[20px] text-center mb-2">{area.title}</h3>
                <p className="text-[16px] text-gray-600 leading-relaxed text-center flex-grow">{area.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>



      <section className="p-4 sm:p-6 md:p-8 border-t border-gray-200">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-[36px] leading-[40px] tracking-[0px] text-gray-800 mb-3">Our Team</h2>
          <p className="text-base text-gray-600">Meet our experienced legal professionals</p>
        </div>

        <div className="flex justify-center gap-12 flex-wrap">
          {[
            { name: "Vivek Sarin", designation: "Partner", image: "./vivek.jpg" },
            { name: "Vimal Kumar", designation: "Partner", image: "./vimal.jpg" },
            { name: "Shreyas Srivastava", designation: "Partner", image: "./shreya.jpg" },
          ].map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-6">
                <div className="h-32 w-32 rounded-full bg-none  flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-32 w-32 rounded-full object-cover"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/224x224?text=' + member.name;
                    }}
                  />
                </div>
              </div>
              <h3 className="font-montserrat font-bold text-[20px] text-gray-800 mb-1">{member.name}</h3>
              <p className="font-poppins text-sm text-gray-600">{member.designation}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Why Choose CLC */}
      <section className="p-4 sm:p-6 md:p-8 border-t border-gray-200">
        <div className="mb-6">
          <h2 className="font-montserrat font-bold text-[36px] leading-[40px] tracking-[0px] text-gray-800">Why Choose Commercial Law Chamber</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[17px]">
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 hover:shadow-md transition-shadow flex flex-col"
              style={{
                borderRadius: "16px",
                padding: "22px 24px",
                opacity: 1
              }}
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-center mb-3">
                  <div className="bg-gray-100 rounded-full p-3 inline-block">
                    <item.icon className="h-8 w-8" style={{ color: "#636AE8" }} />
                  </div>
                </div>
                <h3 className="font-semibold font-montserrat text-gray-800 text-sm text-center mb-2">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed text-center flex-grow">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 font-poppins bg-gray-200 border border-gray-200 rounded-lg p-4 sm:p-6">
          <div className="text-center flex flex-col items-center">
            <div className="w-full max-w-[448px] mx-auto h-auto mb-4 text-center">
              <h3 className="font-montserrat font-bold text-[30px] leading-[36px] pb-2 tracking-[0px] text-gray-800">
                Legal Excellence
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-4">
                Trusted by corporations and individuals across India for strategic legal solutions
              </p>
            </div>

          </div>
          <div className="grid grid-cols-2 sm:flex sm:justify-between gap-4 sm:gap-8 text-center">
            <div>
              <div className="text-[48px] sm:text-[48px] font-bold font-merriweather text-primary">3</div>
              <div className="text-[16px] font-lora text-gray-500">Partners</div>
            </div>
            <div>
              <div className="text-[48px] sm:text-[48px] font-bold font-merriweather text-primary">15+</div>
              <div className="text-[16px] font-lora text-gray-500">Associates</div>
            </div>
            <div>
              <div className="text-[48px] sm:text-[48px] font-bold font-merriweather text-primary">All</div>
              <div className="text-[16px] font-lora text-gray-500">State Capitals</div>
            </div>
            <div>
              <div className="text-[48px] sm:text-[48px] font-bold font-merriweather text-primary">2008</div>
              <div className="text-[16px] font-lora text-gray-500">Founded</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;