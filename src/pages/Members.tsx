import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import GradualBlur from "@/components/GradualBlur";
import { Button } from "@/components/ui/button";
import { GraduationCap, Briefcase, Code, Users } from "lucide-react";
import placeholderMale from "@/assets/placeholder-male.png";
import placeholderFemale from "@/assets/placeholder-female.png";

const Members = () => {
  const eBoard = [
    { name: "Jasmine Varma", role: "President", gender: "female" },
    { name: "Kamryn McKinney", role: "VP Internal Affairs", gender: "female" },
    { name: "Ghazal Tanavade", role: "VP External Affairs", gender: "female" },
    { name: "Riaz Ahsan", role: "VP Professional & Technical Development", gender: "male" },
    { name: "Julia Suchkova", role: "VP Marketing", gender: "female" },
    { name: "Nazila Abyaneh", role: "VP Finance", gender: "female" },
    { name: "Morgan Bradley", role: "VP Philanthropy", gender: "female" },
    { name: "Matt Hausler", role: "VP Social Engagement", gender: "male" },
    { name: "Lily Cole", role: "VP Membership", gender: "female" },
    { name: "Hunter Robbins", role: "Director of New Member Recruits", gender: "male" },
  ];

  const members = [
    { name: "Layla Abreu", gender: "female" },
    { name: "Gianni Ager", gender: "male" },
    { name: "Asma Adiba", gender: "female" },
    { name: "Alayit Berhanu", gender: "female" },
    { name: "Justin Burns", gender: "male" },
    { name: "Michael Duarte", gender: "male" },
    { name: "Aashi Dugar", gender: "female" },
    { name: "Lily Ehler", gender: "female" },
    { name: "Elroi Elias", gender: "male" },
    { name: "Sophia Gwaltney", gender: "female" },
    { name: "Dominic Kretzing", gender: "male" },
    { name: "Hanru Li", gender: "male" },
    { name: "Peter MacPhail", gender: "male" },
    { name: "Brianna McDonald", gender: "female" },
    { name: "Ramya Radhakrishnan", gender: "female" },
    { name: "Antara Rajgopal", gender: "female" },
    { name: "Benjamin Sullivan", gender: "male" },
    { name: "Simha Talreja", gender: "female" },
    { name: "Ashwin Tripathy", gender: "male" },
    { name: "Mitchell Vikhman", gender: "male" },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-normal text-white mb-6">
              Our Brotherhood
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Meet the diverse group of students who make up KTP's Alpha Gamma chapter. 
              From computer science to business, our members bring unique perspectives to technology.
            </p>
          </div>

          {/* Member Statistics */}
          <div className="grid md:grid-cols-4 gap-6 mb-20">
            <Card className="bg-white/5 border-white/10 p-6 text-center transition-transform duration-200 hover:scale-105">
              <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">45+</div>
              <div className="text-white/60 text-sm">Active Members</div>
            </Card>

            <Card className="bg-white/5 border-white/10 p-6 text-center transition-transform duration-200 hover:scale-105">
              <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">12+</div>
              <div className="text-white/60 text-sm">Different Majors</div>
            </Card>

            <Card className="bg-white/5 border-white/10 p-6 text-center transition-transform duration-200 hover:scale-105">
              <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">95%</div>
              <div className="text-white/60 text-sm">Job Placement Rate</div>
            </Card>

            <Card className="bg-white/5 border-white/10 p-6 text-center transition-transform duration-200 hover:scale-105">
              <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">50+</div>
              <div className="text-white/60 text-sm">Companies Represented</div>
            </Card>
          </div>

          {/* E-Board Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-normal text-white mb-8 text-center">E-Board</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {eBoard.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-full mb-4 mx-auto border border-white/20 overflow-hidden">
                    <img 
                      src={member.gender === "female" ? placeholderFemale : placeholderMale}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-white font-medium text-sm md:text-base">{member.name}</h3>
                  <p className="text-white/60 text-xs md:text-sm">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Meet Our Chapter */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-normal text-white mb-6">Meet Our Chapter</h2>
            <p className="text-xl text-white/60 max-w-4xl mx-auto leading-relaxed">
              Our chapter is made up of diverse, talented students from various backgrounds and majors, 
              all united by our passion for technology. From computer science to engineering, business to design, 
              our members bring unique perspectives and skills to our community.
            </p>
          </div>

          {/* Chapter Members */}
          <div className="mb-16">
            <h3 className="text-2xl font-normal text-white mb-8 text-center">Chapter Members</h3>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
              {members.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full mb-2 mx-auto border border-white/20 overflow-hidden">
                    <img 
                      src={member.gender === "female" ? placeholderFemale : placeholderMale}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-white text-xs md:text-sm font-medium">{member.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Join CTA */}
          <Card className="bg-white/5 border-white/10 p-12 text-center transition-transform duration-200 hover:scale-105">
            <h2 className="text-3xl font-normal text-white mb-4">Ready to Join Our Brotherhood?</h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              We welcome students from all majors who share our passion for technology and 
              professional growth. Join a community that will support you throughout your 
              college career and beyond.
            </p>
            <Button 
              variant="outline" 
              className="bg-white text-black border-white hover:bg-white/90 font-medium px-8 py-3"
              asChild
            >
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfGAmgra6nKbO95DBAfM4O08yxWK0S6bf1DWztz3KIytlgQHg/viewform" target="_blank" rel="noopener noreferrer">
                Apply for Fall 2025
              </a>
            </Button>
          </Card>
        </div>
      </main>
      <GradualBlur 
        position="bottom"
        height="6rem"
        strength={2}
        curve="bezier"
        divCount={5}
        target="page"
      />
    </div>
  );
};

export default Members;