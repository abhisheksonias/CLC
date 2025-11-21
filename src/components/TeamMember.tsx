import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Award, Briefcase, GraduationCap, MapPin, User } from "lucide-react";

interface TeamMemberProps {
  member: {
    id: string;
    name: string;
    title: string;
    image: string;
    experience: string;
    shortDescription: string;
    fullDescription: string[];
    expertise: string[];
    location: string;
    education: string[];
  };
  variant?: "card" | "detailed";
}

const teamMembers = {
  vivek: {
    id: "vivek",
    name: "Vivek Sarin",
    title: "Founding Partner",
    image: "/vivek.jpg",
    experience: "20+ Years",
    location: "New Delhi",
    shortDescription: "Founding Partner with 20+ years of experience in tax litigation, regulatory compliance, and commercial disputes across Supreme Court and High Courts.",
    fullDescription: [
      "Vivek Sarin is the Founding Partner of Commercial Law Chambers, a New Delhi-based boutique firm specializing in Tax, Regulatory, and Commercial Disputes. With over 20 years of experience, he represents clients in high-stakes litigation before the Supreme Court, multiple High Courts, tribunals including ITAT, CESTAT, VAT Appellate Tribunals, and forums such as NCLT.",
      "His expertise spans constitutional tax challenges, shareholder disputes, and CIRP matters, as well as regulatory pricing issues involving NPPA, TRAI, AERA, and Electricity Commissions. He advises leading companies across sectors—FMCG, Healthcare, Technology, and more—on CGST, VAT, Customs, Income Tax, and compliance strategy.",
      "His blend of deep domestic insight and global perspective makes him a trusted advisor in complex legal landscapes."
    ],
    expertise: [
      "Constitutional Tax Challenges",
      "High Court & Supreme Court Litigation",
      "Regulatory & Compliance Strategy",
      "CIRP Matters",
      "Shareholder Disputes"
    ],
    education: [
      "Bachelor of Laws (LLB)",
      "Member, Bar Council of India"
    ]
  },
  shreyas: {
    id: "shreyas",
    name: "Shreyas Srivastava",
    title: "Partner",
    image: "/shreya.jpg",
    experience: "12+ Years",
    location: "New Delhi",
    shortDescription: "Partner with 12+ years of experience in direct and indirect taxation, international trade remedies, and cross-border tax advisory matters.",
    fullDescription: [
      "Shreyas is a seasoned counsel with over 12 years of experience in direct and indirect taxation. At Commercial Law Chambers, he leads complex litigation and advisory mandates with a strategic focus on Income Tax, GST, and Customs matters, including international trade remedies such as anti-dumping and safeguard duties.",
      "Shreyas has represented clients across a wide range of industries including FMCG, Consumer Durables, Aviation, Real Estate, Banking & Finance, Insurance, and Food & Beverage. His practice spans high-stakes tax disputes, regulatory representation, and advisory on cross-border trade issues.",
      "Known for his research-driven and solution-oriented approach, Shreyas combines legal depth with industry insight to deliver pragmatic and effective outcomes for clients across forums including tribunals, High Courts, and the Supreme Court."
    ],
    expertise: [
      "Income Tax & GST",
      "International Trade Remedies",
      "Cross-border Tax Advisory",
      "High-stakes Tax Disputes",
      "Regulatory Representation"
    ],
    education: [
      "Bachelor of Laws (LLB)",
      "Member, Bar Council of India"
    ]
  }
};

export { teamMembers };

const TeamMember = ({ member, variant = "card" }: TeamMemberProps) => {
  if (variant === "detailed") {
    return (
      <div className="bg-white p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
            <div className="w-48 h-48 relative">
              {member.image ? (
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.title} at Commercial Law Chamber`}
                  className="w-full h-full object-cover rounded-lg border-2 border-[#B3C7AB]"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center border-2 border-[#B3C7AB]">
                  <User className="w-24 h-24 text-gray-400" />
                </div>
              )}
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl font-bold poppins text-[#163C0F] mb-2">{member.name}</h1>
              <p className="text-[#163C0F] font-semibold mb-4">{member.title}</p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                <span className="flex items-center">
                  <Briefcase className="w-4 h-4 mr-2" />
                  {member.experience}
                </span>
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {member.location}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {member.expertise.slice(0, 3).map((skill, index) => (
                  <span
                    key={index}
                    className="bg-[#B3C7AB] text-[#163C0F] text-sm px-3 py-1 rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            {/* About */}
            <section>
              <h2 className="text-xl font-bold poppins text-[#163C0F] mb-4">About</h2>
              <div className="space-y-4">
                {member.fullDescription.map((paragraph, index) => (
                  <p key={index} className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            {/* Expertise */}
            <section>
              <h2 className="text-xl font-bold poppins text-[#163C0F] mb-4">Areas of Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {member.expertise.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-gray-50 rounded-lg p-3 border border-gray-200"
                  >
                    <Award className="w-5 h-5 text-[#163C0F] mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-xl font-bold poppins text-[#163C0F] mb-4">Education & Qualifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {member.education.map((edu, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-gray-50 rounded-lg p-3 border border-gray-200"
                  >
                    <GraduationCap className="w-5 h-5 text-[#163C0F] mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{edu}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 hover:border-[#163C0F] transition-all flex flex-col h-full">
      <div className="text-center mb-4">
        {member.image ? (
          <img
            src={member.image}
            alt={`${member.name} - ${member.title} at Commercial Law Chamber`}
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-2 border-[#B3C7AB]"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-4 border-2 border-[#B3C7AB]">
            <User className="w-16 h-16 text-gray-400" />
          </div>
        )}
        <h3 className="text-lg font-bold text-[#163C0F] mb-1">{member.name}</h3>
        <p className="text-[#163C0F] font-medium mb-3">{member.title}</p>
        <div className="flex justify-center gap-4 text-xs sm:text-sm text-gray-600 mb-4">
          <span className="flex items-center">
            <Briefcase className="w-4 h-4 mr-1" />
            {member.experience}
          </span>
          <span className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            {member.location}
          </span>
        </div>
      </div>
      
      <div className="flex-grow flex flex-col">
        <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-grow">
          {member.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {member.expertise.slice(0, 3).map((skill, index) => (
            <span
              key={index}
              className="bg-[#B3C7AB] text-[#163C0F] text-xs px-3 py-1 rounded-full font-medium"
            >
              {skill}
            </span>
          ))}
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full bg-[#163C0F] hover:bg-[#1a4a1a] text-white mt-auto">
              View Profile
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold poppins text-[#163C0F]">Team Member Profile</DialogTitle>
              <DialogDescription>
                <TeamMember member={member} variant="detailed" />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default TeamMember;
