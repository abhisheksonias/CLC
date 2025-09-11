import TeamMember, { teamMembers } from "./TeamMember";

const Team = () => {
  return (
    <div className="flex-1 bg-white/95 backdrop-blur-sm">
      {/* Team Header Section */}
      <section className="p-8 mb-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl lg:text-4xl poppins font-bold text-gray-800 mb-4">
            Our Team
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Meet Our Legal Experts
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.values(teamMembers).map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="p-8 border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold poppins text-gray-800 mb-4">Join Our Team</h2>
          <p className="text-gray-600 mb-4">
            We're always looking for talented professionals to join our team. If you're passionate about 
            tax law and commercial litigation, we'd love to hear from you.
          </p>
          <a 
            href="#career"
            className="text-primary hover:text-primary-dark font-medium"
          >
            View Career Opportunities
          </a>
        </div>
      </section>
    </div>
  );
};

export default Team;