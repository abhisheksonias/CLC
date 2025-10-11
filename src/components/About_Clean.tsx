// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Building2, Users, Gavel, TrendingUp, Scale, Shield, Award, BookOpen, Target, Globe, CheckCircle, User, MapPin, Phone, Mail, Heart, Eye, Lightbulb } from "lucide-react";

// const About = () => {
//   const stats = [
//     { icon: Building2, label: "Founded", value: "2008" },
//     { icon: Users, label: "Partners", value: "3" },
//     { icon: Users, label: "Associates", value: "15+" },
//     { icon: Gavel, label: "States", value: "All Capitals" },
//   ];

//   const teamMembers = [
//     {
//       name: "Vivek Sarin",
//       title: "Founding Partner",
//       image: "/vivek.jpg",
//       experience: "20+ Years",
//       description: "Vivek Sarin is the Founding Partner of Commercial Law Chambers, a New Delhi-based boutique firm specializing in Tax, Regulatory, and Commercial Disputes. With over 20 years of experience, he represents clients in high-stakes litigation before the Supreme Court, multiple High Courts, tribunals including ITAT, CESTAT, VAT Appellate Tribunals, and forums such as NCLT.",
//       expertise: ["Constitutional Tax Challenges", "Supreme Court Litigation", "CIRP Matters", "Regulatory Pricing"]
//     },
//     {
//       name: "Vimal Kumar",
//       title: "Partner",
//       image: "/placeholder.svg",
//       experience: "10+ Years",
//       description: "Vimal is a seasoned Chartered Accountant with over a decade of experience in audits, taxation, and litigation. He has advised a diverse clientele—including multinational corporations and Indian enterprises—on tax planning, corporate tax policy formulation, and regulatory compliance.",
//       expertise: ["Direct Tax Advisory", "Audit & Compliance", "Tax Planning", "Corporate Policy"]
//     },
//     {
//       name: "Shreyas Srivastava",
//       title: "Partner",
//       image: "/shreya.jpg",
//       experience: "12+ Years",
//       description: "Shreyas is a seasoned counsel with over 12 years of experience in direct and indirect taxation. At Commercial Law Chambers, he leads complex litigation and advisory mandates with a strategic focus on Income Tax, GST, and Customs matters, including international trade remedies such as anti-dumping and safeguard duties.",
//       expertise: ["GST & Customs", "Trade Remedies", "Cross-border Tax", "Industry Advisory"]
//     }
//   ];

//   const approaches = [
//     {
//       icon: BookOpen,
//       title: "Research-Driven Analysis",
//       description: "Rigorous legal research and precedent analysis for strategic advantage"
//     },
//     {
//       icon: Scale,
//       title: "Strategic Litigation",
//       description: "Outcome-oriented approach in high-stakes disputes and appellate matters"
//     },
//     {
//       icon: Users,
//       title: "Client-Centric Solutions",
//       description: "Bespoke legal solutions aligned with commercial imperatives"
//     },
//     {
//       icon: Globe,
//       title: "Pan-India Network",
//       description: "Coordinated representation across all Indian state capitals"
//     }
//   ];

//   const values = [
//     {
//       icon: Heart,
//       title: "Integrity",
//       description: "Unwavering commitment to ethical standards and professional conduct"
//     },
//     {
//       icon: Shield,
//       title: "Excellence",
//       description: "Pursuit of the highest standards in legal representation and advisory"
//     },
//     {
//       icon: Eye,
//       title: "Transparency",
//       description: "Clear communication and honest counsel in all client interactions"
//     },
//     {
//       icon: Lightbulb,
//       title: "Innovation",
//       description: "Creative legal strategies and modern approaches to complex problems"
//     }
//   ];

//   return (
//     <div className="flex-1 bg-white/95 backdrop-blur-sm">
//       {/* About Header Section */}
//       <section className="p-8 mb-8">
//         <div className="text-center mb-8">
//           <h1 className="text-4xl lg:text-5xl font-light text-gray-800 mb-4">
//             About Commercial Law Chamber
//           </h1>
//           <p className="text-xl text-gray-600 mb-6">
//             Strategic Legal Excellence in Tax and Commercial Disputes
//           </p>
//         </div>

//         {/* Stats Section */}
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//           {stats.map((stat, index) => (
//             <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 text-center">
//               <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
//               <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
//               <div className="text-xs text-gray-500">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Our Story Section */}
//       <section className="p-8 mb-8 border-t border-gray-200">
//         <div className="bg-gray-50 rounded-lg p-6">
//           <h2 className="text-2xl font-light text-gray-800 mb-6">Our Story</h2>
//           <div className="space-y-4 text-gray-600 leading-relaxed">
//             <p>
//               Founded in 2008, Commercial Law Chamber emerged from a vision to create a boutique law practice 
//               distinguished by its deep specialization in tax advisory and dispute resolution. With three seasoned 
//               Partners and a team of 15 adept associates, we have built a robust national network of legal 
//               professionals and expert counsels, ensuring seamless support across jurisdictions in India.
//             </p>
//             <p>
//               Our founding philosophy was rooted in strategic thinking and rigorous legal research—crafting bespoke 
//               solutions that not only address legal complexities but also align with our clients' commercial 
//               imperatives. Over the years, we have become particularly known for our formidable expertise in tax 
//               litigation, representing clients before the Supreme Court of India (including SLPs), various High Courts, 
//               and specialized tax tribunals such as ITAT, CESTAT, and VAT Tribunals.
//             </p>
//             <p>
//               Our comprehensive practice spans the full spectrum of contentious and advisory tax matters, including 
//               departmental proceedings, GST investigations, refund litigation, and trade remedies before the 
//               Directorate General of Trade Remedies (DGTR) and other international forums. From high-stakes search 
//               and seizure defense to meticulous representation in adjudication and appellate proceedings, we deliver 
//               end-to-end legal counsel.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Our Team Section - Improved Layout */}
//       <section className="p-8 mb-8 border-t border-gray-200">
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-light text-gray-800 mb-2">Meet Our Team</h2>
//           <p className="text-gray-600">The experienced professionals leading our firm</p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {teamMembers.map((member, index) => (
//             <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
//               <div className="text-center mb-6">
//                 {member.image === "/placeholder.svg" ? (
//                   <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-4">
//                     <User className="h-12 w-12 text-gray-400" />
//                   </div>
//                 ) : (
//                   <img
//                     className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-gray-100"
//                     src={member.image}
//                     alt={`Photo of ${member.name}`}
//                   />
//                 )}
//                 <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
//                 <p className="text-primary font-medium mb-2">{member.title}</p>
//                 <p className="text-sm text-gray-500 mb-4">{member.experience}</p>
//               </div>
              
//               <div className="text-left space-y-4">
//                 <p className="text-sm text-gray-600 leading-relaxed">
//                   {member.description.length > 180 
//                     ? `${member.description.substring(0, 180)}...` 
//                     : member.description}
//                 </p>
                
//                 <div>
//                   <h4 className="font-semibold text-gray-800 text-sm mb-2">Key Expertise</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {member.expertise.map((skill, skillIndex) => (
//                       <span key={skillIndex} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Our Approach Section */}
//       <section className="p-8 mb-8 border-t border-gray-200">
//         <div className="text-center mb-6">
//           <h2 className="text-2xl font-light text-gray-800 mb-2">Our Approach</h2>
//           <p className="text-gray-600">Methodology in handling complex legal matters</p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//           {approaches.map((approach, index) => (
//             <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
//               <div className="flex items-start gap-3">
//                 <div className="bg-gray-100 rounded-lg p-2">
//                   <approach.icon className="h-5 w-5 text-primary" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-gray-800 text-sm mb-1">{approach.title}</h3>
//                   <p className="text-xs text-gray-600 leading-relaxed">{approach.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="bg-gray-50 rounded-lg p-6">
//           <h3 className="font-semibold text-gray-800 mb-3">Pan-India Footprint</h3>
//           <p className="text-gray-600 text-sm leading-relaxed">
//             With on-ground representation in every Indian state capital, our pan-India footprint allows for 
//             swift, coordinated action and local insight—ensuring efficiency without compromise. This extensive 
//             network enables us to provide seamless legal support across diverse jurisdictions while maintaining 
//             the highest standards of professional service.
//           </p>
//         </div>
//       </section>

//       {/* Values & Vision Section */}
//       <section className="p-8 mb-8 border-t border-gray-200">
//         <div className="text-center mb-6">
//           <h2 className="text-2xl font-light text-gray-800 mb-2">Values & Vision</h2>
//           <p className="text-gray-600">Core principles of client service and ethical standards</p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//           {values.map((value, index) => (
//             <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 text-center">
//               <div className="bg-primary/10 rounded-lg p-3 inline-block mb-3">
//                 <value.icon className="h-6 w-6 text-primary" />
//               </div>
//               <h3 className="font-semibold text-gray-800 text-sm mb-2">{value.title}</h3>
//               <p className="text-xs text-gray-600 leading-relaxed">{value.description}</p>
//             </div>
//           ))}
//         </div>

//         <div className="bg-gray-50 rounded-lg p-6">
//           <h3 className="font-semibold text-gray-800 mb-3">Our Vision</h3>
//           <p className="text-gray-600 leading-relaxed">
//             We are proud of our track record in precedent-setting matters across courts and tribunals—rulings 
//             that have shaped jurisprudence on anti-dumping, transfer pricing, indirect taxes, and constitutional 
//             tax challenges. At the Commercial Law Chamber, we don't just solve legal problems—we craft strategies 
//             that protect, defend, and advance your interests in the most complex and high-value disputes.
//           </p>
//         </div>
//       </section>

//       {/* Office Location & Infrastructure Section */}
//       <section className="p-8 border-t border-gray-200">
//         <div className="bg-gray-100 rounded-lg p-6">
//           <div className="text-center mb-6">
//             <div className="bg-primary/10 rounded-full p-3 inline-block mb-4">
//               <Building2 className="h-8 w-8 text-primary" />
//             </div>
//             <h2 className="text-2xl font-light text-gray-800 mb-4">Office Location & Infrastructure</h2>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="bg-white rounded-lg p-4 border border-gray-200">
//               <h3 className="font-semibold text-gray-800 mb-3">New Delhi Headquarters</h3>
//               <div className="space-y-3">
//                 <div className="flex items-center gap-2">
//                   <MapPin className="h-4 w-4 text-primary" />
//                   <p className="text-sm text-gray-600">Commercial Law Chamber, New Delhi, India</p>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Building2 className="h-4 w-4 text-primary" />
//                   <p className="text-sm text-gray-600">Modern legal infrastructure with state-of-the-art facilities</p>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Globe className="h-4 w-4 text-primary" />
//                   <p className="text-sm text-gray-600">Strategic location for Supreme Court and High Court representations</p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-white rounded-lg p-4 border border-gray-200">
//               <h3 className="font-semibold text-gray-800 mb-3">Professional Infrastructure</h3>
//               <ul className="space-y-2 text-sm text-gray-600">
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-primary mr-2" />
//                   Comprehensive legal research library
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-primary mr-2" />
//                   Advanced case management systems
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-primary mr-2" />
//                   Secure client consultation facilities
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-primary mr-2" />
//                   Digital documentation and filing systems
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;
