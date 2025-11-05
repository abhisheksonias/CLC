import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
    <section id="contacts" className="py-10 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* <Badge variant="secondary" className="mb-4">Contact Us</Badge> */}
          <h2 className="text-4xl font-bold poppins text-gray-800 mb-6">
            Get Expert Legal Consultation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Reach out to our experienced team for strategic legal counsel in tax 
            and commercial disputes. We're here to protect your interests.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary rounded-lg flex-shrink-0">
                    <info.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-primary mb-2">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-sm text-muted-foreground break-words">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Send us a Message</CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" action="https://formsubmit.co/vivek.sarin@clclaw.in" method="POST">
                {/* FormSubmit hidden fields */}
                <input type="hidden" name="_subject" value="New Contact Form Submission - CLC Website" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.origin + "/contact?success=true" : "/contact?success=true"} />
                <input type="hidden" name="_template" value="box" />

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      required
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="matterType" className="block text-sm font-medium text-foreground mb-2">
                      Legal Matter Type <span className="text-red-500">*</span>
                    </label>
                    <select id="matterType" name="matterType" required className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
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
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company/Organization <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    required
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Please describe your legal matter and how we can assist you..."
                  ></textarea>
                </div>

                <div className="flex items-center gap-2">
                  <input type="checkbox" id="privacy" name="privacy" required className="rounded" />
                  <label htmlFor="privacy" className="text-sm text-muted-foreground">
                    I agree to the privacy policy and terms of service <span className="text-red-500">*</span>
                  </label>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="shadow-card">
            <CardContent className="p-0">
              <div className="bg-primary/5 p-8 text-center">
                <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Pan-India Legal Network
                </h3>
                <p className="text-muted-foreground">
                  With representation across all state capitals, we provide seamless 
                  legal support throughout India with local insight and expertise.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;