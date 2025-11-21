import TeamMember, { teamMembers } from "./TeamMember";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <div className="flex-1 bg-white">
      {/* Team Header Section */}
      <section className="p-6 sm:p-8 md:p-12 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl poppins font-bold text-[#163C0F] mb-3">
              Our Team
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              Meet Our Legal Experts
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.values(teamMembers).map((member) => (
              <TeamMember key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="p-6 sm:p-8 md:p-12 border-b border-gray-200 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold poppins text-[#163C0F] mb-4">Join Our Team</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-4">
            We're always looking for talented professionals to join our team. If you're passionate about 
            tax law and commercial litigation, we'd love to hear from you.
          </p>
          <Link 
            to="/career"
            className="text-[#163C0F] hover:text-[#1a4a1a] font-semibold transition-colors"
          >
            View Career Opportunities →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Team;