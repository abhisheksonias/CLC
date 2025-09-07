import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, Shield, Award } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-primary via-primary-dark to-primary-light min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Leading Law Firm for Tax & Commercial Litigation
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Strategic Legal Excellence in Tax and Commercial Disputes. Founded in 2008, 
              we deliver bespoke solutions that align with your commercial imperatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-secondary hover:bg-secondary-light text-white font-semibold"
              >
                Get Legal Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Our Expertise
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center text-white">
              <Scale className="h-12 w-12 mx-auto mb-4 text-secondary" />
              <h3 className="font-semibold text-lg mb-2">Supreme Court</h3>
              <p className="text-blue-100 text-sm">Representation before the highest court</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center text-white">
              <Shield className="h-12 w-12 mx-auto mb-4 text-secondary" />
              <h3 className="font-semibold text-lg mb-2">20+ Years</h3>
              <p className="text-blue-100 text-sm">Combined experience in tax law</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center text-white">
              <Award className="h-12 w-12 mx-auto mb-4 text-secondary" />
              <h3 className="font-semibold text-lg mb-2">Pan-India</h3>
              <p className="text-blue-100 text-sm">Presence across all state capitals</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center text-white">
              <div className="text-3xl font-bold mb-2 text-secondary">15+</div>
              <p className="text-blue-100 text-sm">Expert associates and counsels</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;