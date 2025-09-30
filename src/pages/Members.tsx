import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import GradualBlur from "@/components/GradualBlur";
import { Button } from "@/components/ui/button";
import { GraduationCap, Briefcase, Code, Users } from "lucide-react";

const Members = () => {
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
            <Card className="bg-white/5 border-white/10 p-6 text-center">
              <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">45+</div>
              <div className="text-white/60 text-sm">Active Members</div>
            </Card>

            <Card className="bg-white/5 border-white/10 p-6 text-center">
              <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">12+</div>
              <div className="text-white/60 text-sm">Different Majors</div>
            </Card>

            <Card className="bg-white/5 border-white/10 p-6 text-center">
              <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">95%</div>
              <div className="text-white/60 text-sm">Job Placement Rate</div>
            </Card>

            <Card className="bg-white/5 border-white/10 p-6 text-center">
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
              {/* President */}
              <div className="text-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-full mb-4 mx-auto border border-white/20 overflow-hidden">
                  <img 
                    src="/api/placeholder/128/128" 
                    alt="Jasmine Varma" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white font-medium text-sm md:text-base">Jasmine Varma</h3>
                <p className="text-white/60 text-xs md:text-sm">President</p>
              </div>

              {/* VP Internal Affairs */}
              <div className="text-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-full mb-4 mx-auto border border-white/20 overflow-hidden">
                  <img 
                    src="/api/placeholder/128/128" 
                    alt="Kamryn McKinney" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white font-medium text-sm md:text-base">Kamryn McKinney</h3>
                <p className="text-white/60 text-xs md:text-sm">VP Internal Affairs</p>
              </div>

              {/* VP External Affairs */}
              <div className="text-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-full mb-4 mx-auto border border-white/20 overflow-hidden">
                  <img 
                    src="/api/placeholder/128/128" 
                    alt="Ghazal Tanavade" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white font-medium text-sm md:text-base">Ghazal Tanavade</h3>
                <p className="text-white/60 text-xs md:text-sm">VP External Affairs</p>
              </div>

              {/* VP Professional & Technical Development */}
              <div className="text-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-full mb-4 mx-auto border border-white/20 overflow-hidden">
                  <img 
                    src="/api/placeholder/128/128" 
                    alt="Riaz Ahsan" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white font-medium text-sm md:text-base">Riaz Ahsan</h3>
                <p className="text-white/60 text-xs md:text-sm">VP Professional & Technical Development</p>
              </div>

              {/* VP Marketing */}
              <div className="text-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-full mb-4 mx-auto border border-white/20 overflow-hidden">
                  <img 
                    src="/api/placeholder/128/128" 
                    alt="Julia Suchkova" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white font-medium text-sm md:text-base">Julia Suchkova</h3>
                <p className="text-white/60 text-xs md:text-sm">VP Marketing</p>
              </div>

              {/* VP Finance */}
              <div className="text-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-full mb-4 mx-auto border border-white/20 overflow-hidden">
                  <img 
                    src="/api/placeholder/128/128" 
                    alt="Nazila Abyaneh" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white font-medium text-sm md:text-base">Nazila Abyaneh</h3>
                <p className="text-white/60 text-xs md:text-sm">VP Finance</p>
              </div>

              {/* VP Philanthropy */}
              <div className="text-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-full mb-4 mx-auto border border-white/20 overflow-hidden">
                  <img 
                    src="/api/placeholder/128/128" 
                    alt="Morgan Bradley" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white font-medium text-sm md:text-base">Morgan Bradley</h3>
                <p className="text-white/60 text-xs md:text-sm">VP Philanthropy</p>
              </div>

              {/* VP Social Engagement */}
              <div className="text-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-full mb-4 mx-auto border border-white/20 overflow-hidden">
                  <img 
                    src="/api/placeholder/128/128" 
                    alt="Matt Hausler" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white font-medium text-sm md:text-base">Matt Hausler</h3>
                <p className="text-white/60 text-xs md:text-sm">VP Social Engagement</p>
              </div>

              {/* VP Membership */}
              <div className="text-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-full mb-4 mx-auto border border-white/20 overflow-hidden">
                  <img 
                    src="/api/placeholder/128/128" 
                    alt="Lily Cole" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white font-medium text-sm md:text-base">Lily Cole</h3>
                <p className="text-white/60 text-xs md:text-sm">VP Membership</p>
              </div>

              {/* Director of New Member Recruits */}
              <div className="text-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-full mb-4 mx-auto border border-white/20 overflow-hidden">
                  <img 
                    src="/api/placeholder/128/128" 
                    alt="Hunter Robbins" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white font-medium text-sm md:text-base">Hunter Robbins</h3>
                <p className="text-white/60 text-xs md:text-sm">Director of New Member Recruits</p>
              </div>
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
              {[
                "Layla Abreu", "Gianni Ager", "Asma Adiba", "Alayit Berhanu", 
                "Justin Burns", "Michael Duarte", "Aashi Dugar", "Lily Ehler",
                "Elroi Elias", "Sophia Gwaltney", "Dominic Kretzing", "Hanru Li",
                "Peter MacPhail", "Brianna McDonald", "Ramya Radhakrishnan", "Antara Rajgopal",
                "Benjamin Sullivan", "Simha Talreja", "Ashwin Tripathy", "Mitchell Vikhman"
              ].map((name, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full mb-2 mx-auto border border-white/20 overflow-hidden">
                    <img 
                      src="/api/placeholder/80/80" 
                      alt={name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-white text-xs md:text-sm font-medium">{name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Join CTA */}
          <Card className="bg-white/5 border-white/10 p-12 text-center">
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