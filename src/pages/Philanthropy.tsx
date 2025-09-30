import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Heart, Globe, Users, TreePine } from "lucide-react";
import GradualBlur from "@/components/GradualBlur";

const Philanthropy = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-normal text-white mb-6">
              Philanthropy & Service
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Giving back to our community through technology and service. We believe in using 
              our skills and passion to make a positive impact.
            </p>
          </div>

          {/* Impact Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="bg-white/5 border-white/10 p-8 text-center">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-white/60">Hours of Community Service</div>
            </Card>
            <Card className="bg-white/5 border-white/10 p-8 text-center">
              <div className="text-3xl font-bold text-white mb-2">10+</div>
              <div className="text-white/60">Community Partners</div>
            </Card>
            <Card className="bg-white/5 border-white/10 p-8 text-center">
              <div className="text-3xl font-bold text-white mb-2">$2,000+</div>
              <div className="text-white/60">Raised for Local Charities</div>
            </Card>
          </div>

          {/* Initiatives */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <Card className="bg-white/5 border-white/10 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-normal text-white">Tech for Good</h3>
              </div>
              <p className="text-white/70 leading-relaxed mb-4">
                We leverage our technical skills to help local nonprofits and community organizations. 
                From building websites to developing mobile apps, we use technology to amplify the 
                impact of those doing good work.
              </p>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>• Website development for local nonprofits</li>
                <li>• Digital literacy workshops for seniors</li>
                <li>• Tech support for community centers</li>
              </ul>
            </Card>

            <Card className="bg-white/5 border-white/10 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-normal text-white">STEM Education</h3>
              </div>
              <p className="text-white/70 leading-relaxed mb-4">
                We're passionate about inspiring the next generation of technologists. Through 
                partnerships with local schools, we provide hands-on STEM education and mentorship 
                to students of all ages.
              </p>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>• Coding workshops at local elementary schools</li>
                <li>• Robotics competitions for middle schoolers</li>
                <li>• High school programming mentorship</li>
              </ul>
            </Card>

            <Card className="bg-white/5 border-white/10 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center">
                  <TreePine className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-normal text-white">Environmental Impact</h3>
              </div>
              <p className="text-white/70 leading-relaxed mb-4">
                Technology can be a powerful force for environmental conservation. We organize 
                community clean-up events and develop apps to promote sustainable practices 
                on campus and beyond.
              </p>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>• Campus sustainability app development</li>
                <li>• Quarterly community clean-up events</li>
                <li>• E-waste recycling drives</li>
              </ul>
            </Card>

            <Card className="bg-white/5 border-white/10 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-normal text-white">Global Outreach</h3>
              </div>
              <p className="text-white/70 leading-relaxed mb-4">
                Our impact extends beyond Blacksburg. We partner with international organizations 
                to provide technology solutions for global challenges and support educational 
                initiatives in underserved communities.
              </p>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>• Remote volunteer software development</li>
                <li>• Educational resource creation</li>
                <li>• Technology accessibility projects</li>
              </ul>
            </Card>
          </div>

          {/* Call to Action */}
          <Card className="bg-white/5 border-white/10 p-12 text-center">
            <h2 className="text-3xl font-normal text-white mb-4">Get Involved</h2>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Whether you're a student looking to make a difference or a community organization 
              in need of tech support, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:ktp@vt.edu" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-black font-medium rounded-sm hover:bg-white/90 transition-colors"
              >
                Partner With Us
              </a>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSfGAmgra6nKbO95DBAfM4O08yxWK0S6bf1DWztz3KIytlgQHg/viewform" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-white font-medium rounded-sm hover:bg-white/10 transition-colors"
              >
                Join Our Mission
              </a>
            </div>
          </Card>
        </div>
      </main>
      <GradualBlur 
        position="bottom"
        height="8rem"
        strength={2}
        curve="bezier"
        divCount={5}
      />
    </div>
  );
};

export default Philanthropy;