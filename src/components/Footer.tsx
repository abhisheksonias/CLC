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
    <footer className="bg-gray-100/90 backdrop-blur-sm border-t border-gray-200/50 text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8">
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center">
                  <img src="/clc-logo.png" alt="commercial law firm" className="h-10 w-auto" />
                </div>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                A boutique law practice distinguished by its deep specialization in tax
                advisory and dispute resolution across India.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Practice Areas */}
            <div>
              <h4 className="font-semibold text-sm mb-4 text-gray-700">Practice Areas</h4>
              <ul className="space-y-2">
                {practiceAreas.map((area, index) => (
                  <li key={index}>
                    <a href="#" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
                      {area}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-sm mb-4 text-gray-700">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-sm mb-4 text-gray-700">Contact Information</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <MapPin className="h-3 w-3 text-gray-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500">Head Office</p>
                    <p className="text-xs text-gray-500">New Delhi, India</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-3 w-3 text-gray-500 flex-shrink-0" />
                  <p className="text-xs text-gray-500">+91 XXX-XXX-XXXX</p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-3 w-3 text-gray-500 flex-shrink-0" />
                  <p className="text-xs text-gray-500">info@commerciallawchamber.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-300/50" />

        {/* Bottom Footer - Styled like your snippet */}
        <div className="bg-gray-100/80 backdrop-blur-sm px-4 py-2 text-xs text-gray-600 border-t border-gray-200/50">
          <div className="flex justify-between items-center">
            <span>www.commerciallawchamber.com</span>
            <div className="flex space-x-4">
              <span className="hover:text-gray-800 cursor-pointer transition-colors">Copyright © 2025, Commercial Law Chamber. All Rights Reserved.</span>
              {/* <span className="hover:text-gray-800 cursor-pointer transition-colors">WALKTHROUGH</span> */}
              {/* <span className="hover:text-gray-800 cursor-pointer transition-colors">SUBSCRIBE</span> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;