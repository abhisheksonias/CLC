import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, Shield, Award, Users, BookOpen, Briefcase, Gavel, Building, Calculator, Globe } from "lucide-react";

const Hero = () => {
  const practiceAreas = [
    {
      icon: Calculator,
      title: "Direct & Indirect Tax",
      description: "Comprehensive tax advisory and litigation services"
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
    <div className="flex-1 bg-white/95 backdrop-blur-sm">
      {/* Hero Section */}
      <section className="relative p-4 sm:p-6 md:p-8">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl poppins text-gray-600 font-bold mb-4 sm:mb-6 px-2">
            Leading Legal Excellence in Tax & Commercial Disputes
          </h1>
          <div className="poppins flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button
              className="bg-primary hover:bg-primary-dark text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base"
            >
              Get Legal Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base"
            >
              Our Expertise
            </Button>
          </div>
        </div>

        <div
          className="bg-gray-100 aspect-video rounded-lg flex items-end justify-center mb-6 sm:mb-8"
          style={{
            backgroundImage: 'url(/herobg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="text-center bg-gray-800/70 rounded-lg p-3 sm:p-4 mx-2 sm:mx-4">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2">
              Strategic Legal Solutions for Modern Business
            </h2>
            <p className="text-white text-xs sm:text-sm md:text-base">
              Boutique law practice with deep specialization in tax advisory and dispute resolution
            </p>
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="p-4 sm:p-6 md:p-8 border-t border-gray-200">
        <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold poppins text-gray-800 mb-4">Welcome to Commercial Law Chamber</h2>
          <div className="grid lg:grid-cols-1 gap-4 sm:gap-6">
            <div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                Founded in 2008, Commercial Law Chamber is a boutique law practice distinguished by its deep
                specialization in tax advisory and dispute resolution. With three seasoned Partners and a team
                of 15 adept associates, we operate through a robust national network of legal professionals.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Our philosophy is rooted in strategic thinking and rigorous legal research—crafting bespoke
                solutions that align with both legal precedents and commercial imperatives.
              </p>
            </div>
            <div className="bg-white rounded-lg p-3 sm:p-4 border border-gray-200">
              <h3 className="font-semibold poppins text-gray-800 mb-3 text-sm sm:text-base">Our Distinction</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                <li className="flex items-center">
                  <Shield className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Specialized in tax and commercial disputes
                </li>
                <li className="flex items-center">
                  <Users className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Pan-India legal network coverage
                </li>
                <li className="flex items-center">
                  <BookOpen className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Research-intensive approach
                </li>
                <li className="flex items-center">
                  <Award className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Supreme Court representation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Practice Areas */}
      <section className="p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 border-t border-gray-200">
        <div className="text-center mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl poppins font-bold text-gray-800 mb-2">Core Practice Areas</h2>
          <p className="text-sm sm:text-base text-gray-600 px-2">Comprehensive legal solutions across key practice domains</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {practiceAreas.map((area, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="text-center">
                <div className="bg-gray-100 rounded-lg p-3 inline-block mb-3">
                  <area.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-800 text-sm mb-2">{area.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{area.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="p-4 sm:p-6 md:p-8 border-t border-gray-200">
        <div className="text-center mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold poppins text-gray-800 mb-2">Our Team</h2>
          <p className="text-sm sm:text-base text-gray-600 px-2">Meet our experienced legal professionals</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {[
            { name: "Vivek Sarin", designation: "Partner", image: "./vivek.jpg" },
            { name: "Vimal Kumar", designation: "Partner", image: "./vimal.jpg" },
            { name: "Shreyas Srivastava", designation: "Partner", image: "./shreya.jpg" },
          ].map((member, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-gray-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/300x300?text=' + member.name;
                  }}
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-gray-800 text-base mb-1">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose CLC */}
      <section className="p-4 sm:p-6 md:p-8 border-t border-gray-200">
        <div className="text-center mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold poppins text-gray-800 mb-2 px-2">Why Choose Commercial Law Chamber</h2>
          <p className="text-sm sm:text-base text-gray-600 px-2">Distinguished by excellence, expertise, and client-centric approach</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyChooseUs.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-lg p-3">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 poppins bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
          <div className="text-center">
            <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Legal Excellence</h3>
            <p className="text-gray-600 text-xs sm:text-sm mb-4">
              Trusted by corporations and individuals across India for strategic legal solutions
            </p>
            <div className="grid grid-cols-2 sm:flex sm:justify-center gap-4 sm:gap-8 text-center">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-primary">3</div>
                <div className="text-xs text-gray-500">Partners</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-primary">15+</div>
                <div className="text-xs text-gray-500">Associates</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-primary">All</div>
                <div className="text-xs text-gray-500">State Capitals</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-primary">2008</div>
                <div className="text-xs text-gray-500">Founded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      
    </div>
  );
};

export default Hero;