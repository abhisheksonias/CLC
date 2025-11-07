import TeamMember, { teamMembers } from "./TeamMember";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <div className="flex-1 bg-white/95 backdrop-blur-sm">
      {/* Hero Section */}
      {/* <section className="relative p-4 sm:p-6 md:p-8 overflow-hidden">
        <div className="relative z-10">
          <div className="max-w-5xl mx-auto bg-[#779E5A] text-white rounded-xl p-6 sm:p-8 md:p-10 shadow-md">
            <h1 className="font-lora text-[48px] leading-[60px] font-bold mb-4 text-white">
              Our Team
            </h1>
            <p className="text-white/90 text-sm sm:text-base md:text-lg mb-6 max-w-3xl">
              Meet Our Legal Experts
            </p>
          </div>
        </div>
      </section> */}

      {/* Team Grid Section */}
      <section className="p-4 sm:p-6 md:p-8">
        <div className="mb-6">
          <h2 className="font-montserrat font-bold text-[36px] leading-[40px] tracking-[0px] text-gray-800 mb-3">Our Legal Professionals</h2>
          <p className="text-base text-gray-600">Experienced partners dedicated to excellence</p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[17px]">
          {Object.values(teamMembers).map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="p-4 sm:p-6 md:p-8 border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-montserrat font-bold text-[30px] leading-[36px] text-gray-800 mb-4">Join Our Team</h2>
          <p className="text-gray-600 text-[16px] mb-6 leading-relaxed">
            We're always looking for talented professionals to join our team. If you're passionate about 
            tax law and commercial litigation, we'd love to hear from you.
          </p>
          <Link 
            to="/career"
            className="inline-block bg-[#779E5A] hover:bg-[#6a8d4f] text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            View Career Opportunities
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Team;