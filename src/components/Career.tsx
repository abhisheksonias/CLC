import { Button } from "@/components/ui/button";
import { Briefcase, Users, GraduationCap, Clock, MapPin, Building2, CheckCircle } from "lucide-react";
import { useCareerOpenings } from "@/hooks/useSanityData";

const Career = () => {
  const { data: currentOpenings, isLoading, isError } = useCareerOpenings();

  const whyJoinUs = [
    {
      icon: Users,
      title: "Collaborative Environment",
      description: "Work with experienced professionals in a supportive team setting"
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description: "Regular training programs and mentorship opportunities"
    },
    {
      icon: Building2,
      title: "Professional Growth",
      description: "Clear career progression path and leadership opportunities"
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      description: "Flexible working arrangements and supportive policies"
    }
  ];

  return (
    <div className="flex-1 bg-white">
      {/* Career Header Section */}
      <section className="p-6 sm:p-8 md:p-12 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl poppins font-bold text-[#163C0F] mb-3">
              Career Opportunities
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              Join Our Team of Legal Excellence
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="max-w-3xl mx-auto">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                At Commercial Law Chamber, we are always looking for talented professionals who share our 
                commitment to excellence and client service. We offer a dynamic work environment where you 
                can grow your career while working on challenging and meaningful cases.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Our firm provides opportunities for both experienced lawyers and fresh graduates who demonstrate 
                exceptional potential and a passion for tax and commercial law.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      {/* <section className="p-8 mb-8 border-t poppins border-gray-200">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Current Openings</h2>
          <p className="text-gray-600">Available positions across our offices</p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {isLoading && (
            <div className="text-center text-gray-600">Loading openings...</div>
          )}
          {!isLoading && (isError || !currentOpenings || currentOpenings.length === 0) && (
            <div className="text-center text-gray-600">No current openings.</div>
          )}
          {!isLoading && currentOpenings && currentOpenings.map((job, index) => (
            <div key={job._id ?? index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                    <span className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {job.location}
                    </span>
                    <span className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-1" />
                      {job.type}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {job.experience}
                    </span>
                  </div>
                </div>
                <Button className="mt-4 md:mt-0 bg-primary hover:bg-primary-dark text-white">
                  Apply Now
                </Button>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-700">Requirements:</h4>
                <ul className="space-y-2">
                  {job.requirements?.map((req, reqIndex) => (
                    <li key={`${job._id}-req-${reqIndex}`} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span className="text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Why Join Us Section */}
      <section className="p-6 sm:p-8 md:p-12 border-b border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold poppins text-[#163C0F] mb-3">Why Join Us</h2>
            <p className="text-base sm:text-lg text-gray-600">Benefits of building your career with CLC</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whyJoinUs.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-gray-200 hover:border-[#163C0F] transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-[#B3C7AB] rounded-lg p-3 flex-shrink-0">
                    <benefit.icon className="h-6 w-6 text-[#163C0F]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#163C0F] mb-2 text-base">{benefit.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      {/* <section className="p-8 border-t poppins border-gray-200">
        <div className="bg-gray-100 rounded-lg p-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Application Process</h2>
            <p className="text-gray-600">How to join our team</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4 text-gray-600">
              <p>
                To apply for any of the positions listed above, please send your:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Detailed CV
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Cover letter explaining your interest in CLC
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Academic transcripts
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Writing sample (for legal positions)
                </li>
              </ul>
              <p className="mt-4">
                Send your application to: <span className="text-primary">careers@clc.in</span>
              </p>
              <p className="text-sm text-gray-500 mt-4">
                * We review all applications carefully and will contact shortlisted candidates for interviews.
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Career;
