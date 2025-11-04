import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Scale, Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const practiceAreas = [
    "Direct Tax Advisory",
    "Indirect Tax Litigation",
    "GST Compliance",
    "Commercial Disputes",
    "Regulatory Matters",
    "International Tax"
  ];

  const quickLinks: { label: string; to: string }[] = [
    { label: "About Us", to: "/#about" },
    { label: "Our Team", to: "/#team" },
    { label: "Case Studies", to: "/#insights" },
    { label: "Legal Updates", to: "/#content" },
    { label: "Contact", to: "/#contact" },
    { label: "Careers", to: "/#career" },
  ];

  return (
    <footer className="poppins bg-gray-100/90 backdrop-blur-sm border-t border-gray-200/50 text-gray-600">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-4 sm:py-6 md:py-8 m-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center">
                  <img src="/clc-logo.png" alt="commercial law firm" className="h-8 sm:h-10 w-auto" loading="lazy" decoding="async" />
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-4">
                A boutique law practice distinguished by its deep specialization in tax
                advisory and dispute resolution across India.
              </p>
              <div className="flex space-x-3">
                <a href="https://www.linkedin.com/company/7953220/" className="text-gray-500 hover:text-gray-700 transition-colors">
                  <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
                <a href="https://twitter.com/yourtwitterhandle" className="text-gray-500 hover:text-gray-700 transition-colors">
                  <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
                <a href="https://www.instagram.com/yourinstagramhandle" className="text-gray-500 hover:text-gray-700 transition-colors">
                  <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </div>
            </div>

            {/* Practice Areas and Quick Links Grid */}
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {/* Practice Areas */}
                <div>
                  <h4 className="font-semibold text-xs sm:text-sm mb-3 sm:mb-4 text-gray-700">Practice Areas</h4>
                  <ul className="space-y-1 sm:space-y-2">
                    {practiceAreas.map((area, index) => (
                      <li key={index}>
                        <a href="#" className="text-xs sm:text-sm text-gray-500 hover:text-gray-700 transition-colors">
                          {area}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Links */}
                <div>
                  <h4 className="font-semibold text-xs sm:text-sm mb-3 sm:mb-4 text-gray-700">Quick Links</h4>
                  <ul className="space-y-1 sm:space-y-2">
                    {quickLinks.map((item, index) => (
                      <li key={index}>
                        <Link to={item.to} className="text-xs sm:text-sm text-gray-500 hover:text-gray-700 transition-colors">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h4 className="font-semibold text-xs sm:text-sm mb-3 sm:mb-4 text-gray-700">Contact Information</h4>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start gap-2">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">Head Office</p>
                    <p className="text-xs sm:text-sm text-gray-500">New Delhi, India</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500 flex-shrink-0" />
                  <p className="text-xs sm:text-sm text-gray-500">+91 99999 20118</p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500 flex-shrink-0" />
                  <p className="text-xs sm:text-sm text-gray-500 break-all">vivek.sarin@clclaw.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-300/50" />

        {/* Bottom Footer - Styled like your snippet */}
        <div className="bg-gray-100/80 backdrop-blur-sm px-2 sm:px-4 py-2 text-xs text-gray-600 border-t border-gray-200/50">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <span className="text-xs sm:text-sm">www.commerciallawchamber.com</span>
            <div className="flex space-x-4">
              <span className="hover:text-gray-800 cursor-pointer transition-colors text-xs sm:text-sm text-center">
                Copyright © 2025, Commercial Law Chamber. All Rights Reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;