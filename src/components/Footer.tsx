import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Scale, Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const practiceAreas = [
    "Direct Tax Advisory",
    "Indirect Tax Litigation", 
    "GST Compliance",
    "Commercial Disputes",
    "Regulatory Matters",
    "International Tax"
  ];

  const quickLinks = [
    "About Us",
    "Our Team", 
    "Case Studies",
    "Legal Updates",
    "Contact",
    "Careers"
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-secondary rounded-sm flex items-center justify-center">
                  <Scale className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Commercial Law Chamber</h3>
                  <p className="text-blue-200 text-xs">Legal Excellence Since 2008</p>
                </div>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed mb-6">
                A boutique law practice distinguished by its deep specialization in tax 
                advisory and dispute resolution across India.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Practice Areas */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Practice Areas</h4>
              <ul className="space-y-3">
                {practiceAreas.map((area, index) => (
                  <li key={index}>
                    <a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">
                      {area}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-blue-100 text-sm">Head Office</p>
                    <p className="text-blue-100 text-sm">New Delhi, India</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-secondary flex-shrink-0" />
                  <p className="text-blue-100 text-sm">+91 XXX-XXX-XXXX</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-secondary flex-shrink-0" />
                  <p className="text-blue-100 text-sm">info@commerciallawchamber.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-blue-600" />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-blue-200 text-sm">
                © 2024 Commercial Law Chamber. All rights reserved.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
                  Careers
                </a>
              </div>
            </div>
            <Badge variant="secondary" className="text-xs">
              Pan-India Legal Network
            </Badge>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;