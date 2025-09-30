import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
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

          {/* Member Highlights */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-normal text-white mb-8">Diverse Backgrounds</h2>
              <div className="space-y-6">
                <Card className="bg-white/5 border-white/10 p-6">
                  <h3 className="text-lg font-medium text-white mb-2">Academic Diversity</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Our members represent over 12 different majors across Virginia Tech, from 
                    Computer Science and Engineering to Business and Liberal Arts. This diversity 
                    brings fresh perspectives to every project and discussion.
                  </p>
                </Card>

                <Card className="bg-white/5 border-white/10 p-6">
                  <h3 className="text-lg font-medium text-white mb-2">Industry Experience</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Our brothers have interned and worked at top companies including Google, 
                    Microsoft, Amazon, Apple, Facebook, and countless startups, bringing real-world 
                    experience back to our chapter.
                  </p>
                </Card>

                <Card className="bg-white/5 border-white/10 p-6">
                  <h3 className="text-lg font-medium text-white mb-2">Leadership Development</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Many of our members hold leadership positions in other organizations on campus, 
                    from engineering honor societies to startup accelerators, demonstrating the 
                    leadership skills KTP helps develop.
                  </p>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-normal text-white mb-8">Member Success</h2>
              <div className="space-y-6">
                <Card className="bg-white/5 border-white/10 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-medium">JD</span>
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">John Doe</h3>
                      <p className="text-white/60 text-sm mb-2">Computer Science '23</p>
                      <p className="text-white/70 text-sm">
                        "KTP provided me with the network and skills I needed to land my dream job at Google. 
                        The professional development workshops were invaluable."
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-white/5 border-white/10 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-medium">AS</span>
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Alex Smith</h3>
                      <p className="text-white/60 text-sm mb-2">Business Information Technology '24</p>
                      <p className="text-white/70 text-sm">
                        "The mentorship I received through KTP was incredible. Having upperclassmen 
                        guide me through my career journey made all the difference."
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-white/5 border-white/10 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-medium">MJ</span>
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Maria Johnson</h3>
                      <p className="text-white/60 text-sm mb-2">Electrical Engineering '25</p>
                      <p className="text-white/70 text-sm">
                        "KTP isn't just about professional development - it's about finding your family 
                        at Tech. The friendships I've made here will last a lifetime."
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
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
    </div>
  );
};

export default Members;