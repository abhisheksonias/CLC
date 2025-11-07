import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Head Office",
      details: [
        "Commercial Law Chamber",
        "New Delhi, India",
        "Pan-India presence across all state capitals"
      ]
    },
    {
      icon: Phone,
      title: "Phone",
      details: [
        "+91 99999 20118",
        "24/7 Emergency Legal Support"
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "vivek.sarin@clclaw.in",
        "Quick response within 24 hours"
      ]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 9:00 AM - 7:00 PM",
        "Saturday: 10:00 AM - 4:00 PM",
        "Sunday: Emergency consultations only"
      ]
    }
  ];

  return (
    <div className="flex-1 bg-white/95 backdrop-blur-sm">
      {/* Hero Section */}
      <section className="relative p-4 sm:p-6 md:p-8 overflow-hidden">
        <div className="relative z-10">
          <div className="max-w-5xl mx-auto bg-[#779E5A] text-white rounded-xl p-6 sm:p-8 md:p-10 shadow-md">
            <h1 className="font-lora text-[48px] leading-[60px] font-bold mb-4 text-white">
              Get Expert Legal Consultation
            </h1>
            <p className="text-white/90 text-sm sm:text-base md:text-lg mb-6 max-w-3xl">
              Reach out to our experienced team for strategic legal counsel in tax and commercial disputes. We're here to protect your interests.
            </p>
          </div>
        </div>
      </section>

      <section className="p-4 sm:p-6 md:p-8">
        <div className="mb-6">
          <h2 className="font-montserrat font-bold text-[36px] leading-[40px] tracking-[0px] text-gray-800 mb-3">Contact Information</h2>
        </div>

        {/* Contact Information Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[17px] mb-12">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white border border-gray-200 hover:shadow-md transition-shadow flex flex-col"
              style={{ borderRadius: "16px", padding: "22px 24px", opacity: 1 }}>
              <div className="flex flex-col h-full">
                <div className="flex justify-center mb-3">
                  <div className="bg-gray-100 rounded-full p-3 inline-block">
                    <info.icon className="h-8 w-8" style={{ color: "#636AE8" }} />
                  </div>
                </div>
                <h3 className="font-semibold font-montserrat text-gray-800 text-[20px] text-center mb-3">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-[15px] text-gray-600 text-center break-words">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 sm:p-8">
            <div className="mb-6">
              <h3 className="font-montserrat font-bold text-[28px] text-gray-800 mb-2">Send us a Message</h3>
              <p className="text-gray-600 text-[16px]">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>
            <form className="space-y-6" action="https://formsubmit.co/vivek.sarin@clclaw.in" method="POST">
                {/* FormSubmit hidden fields */}
                <input type="hidden" name="_subject" value="New Contact Form Submission - CLC Website" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.origin + "/contact?success=true" : "/contact?success=true"} />
                <input type="hidden" name="_template" value="box" />

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#636AE8]"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#636AE8]"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#636AE8]"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="matterType" className="block text-sm font-medium text-gray-700 mb-2">
                      Legal Matter Type <span className="text-red-500">*</span>
                    </label>
                    <select id="matterType" name="matterType" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#636AE8]">
                      <option value="">Select type</option>
                      <option value="Direct Tax">Direct Tax</option>
                      <option value="Indirect Tax">Indirect Tax</option>
                      <option value="GST Matters">GST Matters</option>
                      <option value="Commercial Disputes">Commercial Disputes</option>
                      <option value="Regulatory Issues">Regulatory Issues</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company/Organization <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#636AE8]"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#636AE8] resize-none"
                    placeholder="Please describe your legal matter and how we can assist you..."
                  ></textarea>
                </div>

                <div className="flex items-center gap-2">
                  <input type="checkbox" id="privacy" name="privacy" required className="rounded" />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    I agree to the privacy policy and terms of service <span className="text-red-500">*</span>
                  </label>
                </div>

                <Button type="submit" size="lg" className="w-full bg-[#779E5A] hover:bg-[#6a8d4f] text-white">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-gray-200 border border-gray-200 rounded-lg p-8 text-center">
            <div className="bg-gray-100 rounded-full p-4 inline-block mb-4">
              <MapPin className="h-12 w-12" style={{ color: "#636AE8" }} />
            </div>
            <h3 className="font-montserrat font-bold text-[28px] text-gray-800 mb-2">
              Pan-India Legal Network
            </h3>
            <p className="text-gray-600 text-[16px]">
              With representation across all state capitals, we provide seamless legal support throughout India with local insight and expertise.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;