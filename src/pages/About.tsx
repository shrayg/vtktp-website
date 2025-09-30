import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Users, Target, Award, Code } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-normal text-white mb-6">
              About Kappa Theta Pi
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              The Alpha Gamma chapter at Virginia Tech focuses on professional development, 
              networking, and creating lasting friendships among members.
            </p>
          </div>

          {/* Mission Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <Card className="bg-white/5 border-white/10 p-8 text-center">
              <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Community</h3>
              <p className="text-white/60 text-sm">Building lasting relationships with like-minded tech enthusiasts</p>
            </Card>

            <Card className="bg-white/5 border-white/10 p-8 text-center">
              <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Professional</h3>
              <p className="text-white/60 text-sm">Developing career skills and industry connections</p>
            </Card>

            <Card className="bg-white/5 border-white/10 p-8 text-center">
              <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Technology</h3>
              <p className="text-white/60 text-sm">Exploring cutting-edge innovations and technical excellence</p>
            </Card>

            <Card className="bg-white/5 border-white/10 p-8 text-center">
              <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Excellence</h3>
              <p className="text-white/60 text-sm">Striving for the highest standards in all endeavors</p>
            </Card>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-normal text-white mb-6">
                Our Mission
              </h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Kappa Theta Pi is a professional technology fraternity that fosters a community 
                  of students passionate about technology and innovation. We believe that the 
                  intersection of professional development and genuine friendship creates the 
                  strongest foundation for success.
                </p>
                <p>
                  Our members come from diverse academic backgrounds, united by a shared enthusiasm 
                  for technology and a commitment to professional growth. We welcome students from 
                  all majors who share our passion for technology and professional development.
                </p>
                <p>
                  Through workshops, networking events, and collaborative projects, we prepare our 
                  members for successful careers in the technology industry while building lifelong 
                  friendships along the way.
                </p>
              </div>
            </div>

            <Card className="bg-white/5 border-white/10 p-8">
              <h3 className="text-2xl font-normal text-white mb-6">What We Offer</h3>
              <ul className="space-y-4 text-white/70">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>Professional development workshops and technical talks</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>Networking opportunities with industry professionals</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>Collaborative projects and hackathons</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>Mentorship programs connecting brothers across class years</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>Social events and brotherhood activities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>Community service and philanthropy initiatives</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;