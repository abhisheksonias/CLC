import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, Shield, Award, Users, BookOpen, Briefcase, Gavel, Building, Calculator, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const practiceAreas = [
    {
      icon: Calculator,
      title: "Direct Tax",
      description: "Comprehensive direct tax advisory and litigation services"
    },
    {
      icon: Gavel,
      title: "Commercial Disputes",
      description: "Strategic litigation and dispute resolution"
    },
    {
      icon: Building,
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
      icon: Users,
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
    <div className="flex-1 bg-white">
      <section className="relative p-4 sm:p-6 md:p-8 overflow-hidden">
        <div className="relative z-10">
          <div className="relative max-w-5xl mx-auto">
            <div 
              className="relative border-2 border-[#163C0F] rounded-2xl p-8 sm:p-10 md:p-12 shadow-2xl overflow-hidden"
              style={{
                backgroundImage: 'url(/bgpattern.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="relative z-10 text-center space-y-6">
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight drop-shadow-lg">
                  Specialized in Tax & Commercial Disputes
                </h1>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 justify-center pt-2">
                  <Link 
                    to="/contact"
                    className="bg-white px-4 py-2 rounded-xl text-base sm:text-lg font-semibold text-[#163C0F] flex items-center gap-2 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
                  >
                    Discuss your Issue
                    <ArrowRight className="h-5 w-5 text-[#163C0F]" />
                  </Link>
                  <Link 
                    to="/practice-area"
                    className="bg-[#B3C7AB] px-4  py-2 rounded-xl text-base sm:text-lg font-semibold text-[#163C0F] flex items-center gap-2 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
                  >
                    Our Expertise
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="p-2 sm:p-3 md:p-4 border-t border-gray-200">
          <div className="bg-gray-50 rounded-lg p-2 sm:p-3 ">
          <h2 className="text-xl sm:text-2xl font-bold poppins text-center text-[#163C0F] mb-4">Welcome to Commercial Law Chamber</h2>
          <div className="grid lg:grid-cols-1 gap-4 sm:gap-6">
            <div>
              <p className="text-sm sm:text-base text-justify text-gray-600 leading-relaxed mb-4">
                Founded in 2008, Commercial Law Chamber is a boutique law practice distinguished by its deep
                specialization in tax advisory and dispute resolution. With three seasoned Partners and a team
                of 15 adept associates, we operate through a robust national network of legal professionals.
              </p>
              <p className="text-sm sm:text-base text-justify text-gray-600 leading-relaxed">
                Our philosophy is rooted in strategic thinking and rigorous legal research—crafting bespoke
                solutions that align with both legal precedents and commercial imperatives.
              </p>
            </div>
            <div className="bg-[#B3C7AB] rounded-lg p-5 sm:p-6 border-2 border-[#163C0F]">
              <h3 className="font-bold poppins text-[#163C0F] mb-4 text-center text-lg sm:text-xl">Our Distinction</h3>
              <ul className="space-y-3 text-sm sm:text-base text-justify text-black">
                <li className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-[#163C0F] mt-0.5 flex-shrink-0" />
                  <span className="font-medium">Specialized in tax and commercial disputes</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-[#163C0F] mt-0.5 flex-shrink-0" />
                  <span className="font-medium">Pan-India legal network coverage</span>
                </li>
                <li className="flex items-start gap-3">
                  <BookOpen className="h-5 w-5 text-[#163C0F] mt-0.5 flex-shrink-0" />
                  <span className="font-medium">Research-intensive approach</span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-[#163C0F] mt-0.5 flex-shrink-0" />
                  <span className="font-medium">Supreme Court representation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Practice Areas */}
      <section className="p-4 sm:p-3 md:p-4 border-t border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl poppins font-bold text-[#163C0F] mb-3">Core Practice Areas</h2>
            <p className="text-base sm:text-lg text-gray-600">Comprehensive legal solutions across key practice domains</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practiceAreas.map((area, index) => (
              <div key={index} className="bg-white border-2 border-[#163C0F] rounded-xl p-3 hover:shadow-lg transition-all hover:scale-[1.02]">
                <div className="flex items-start gap-4">
                  <div className="bg-[#B3C7AB] rounded-lg p-2 flex-shrink-0">
                    <area.icon className="h-8 w-8 text-[#163C0F]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#163C0F] text-lg mb-1">{area.title}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{area.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="p-4 sm:p-6 md:p-8 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold poppins text-[#163C0F] mb-3">Our Team</h2>
            <p className="text-base sm:text-lg text-gray-600">Meet our experienced legal professionals</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center">
            {[
              { name: "Vivek Sarin", designation: "Partner", image: "./vivek.jpg" },
              { name: "Shreyas Srivastava", designation: "Partner", image: "./shreya.jpg" },
            ].map((member, index) => (
              <div key={index} className="bg-white border-2 border-[#163C0F] rounded-xl overflow-hidden hover:shadow-xl transition-all hover:scale-[1.02]">
                <div className="aspect-square bg-gray-200">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.designation} at Commercial Law Chamber`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/300x300?text=' + member.name;
                    }}
                  />
                </div>
                <div className="p-5 text-center bg-[#B3C7AB]">
                  <h3 className="font-bold text-[#163C0F] text-lg mb-1">{member.name}</h3>
                  <p className="text-sm font-medium text-[#163C0F]">{member.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose CLC */}
      <section className="p-4 sm:p-6 md:p-8 border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold poppins text-[#163C0F] mb-3">Why Choose Commercial Law Chamber</h2>
            <p className="text-base sm:text-lg text-gray-600">Distinguished by excellence, expertise, and client-centric approach</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-[#E5E7EB] rounded-xl p-3  hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-[#B3C7AB] rounded-lg p-4 flex-shrink-0">
                    <item.icon className="h-7 w-7 text-[#163C0F]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#163C0F] text-[16px]  mb-1">{item.title}</h3>
                    <p className="text-gray-700 text-[14px] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white border-2 border-[#163C0F] rounded-xl p-6 sm:p-8">
            <div className="text-center">
              <h3 className="font-bold text-[#163C0F] mb-3 text-lg sm:text-xl">Legal Excellence</h3>
              <p className="text-gray-700 text-sm sm:text-base mb-6">
                Trusted by corporations and individuals across India for strategic legal solutions
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center">
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-[#163C0F] mb-2">2</div>
                  <div className="text-sm font-medium text-gray-700">Partners</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-[#163C0F] mb-2">15+</div>
                  <div className="text-sm font-medium text-gray-700">Associates</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-[#163C0F] mb-2">All</div>
                  <div className="text-sm font-medium text-gray-700">State Capitals</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-[#163C0F] mb-2">2008</div>
                  <div className="text-sm font-medium text-gray-700">Founded</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;