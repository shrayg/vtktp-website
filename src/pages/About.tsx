import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Users, GraduationCap, Heart, Code, BookOpen } from "lucide-react";
import { AboutSlideshow } from "@/components/AboutSlideshow";
import { AccentBar } from "@/components/AccentBar";
import LogoLoop from "@/components/LogoLoop";
import { companyLogos } from "@/data/companyLogos";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-normal text-foreground mb-6">
              About Kappa Theta Pi
            </h1>
            <div className="flex justify-center mb-6">
              <AccentBar color="blue" size="lg" />
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The Alpha Gamma chapter at Virginia Tech focuses on professional development, 
              networking, and creating lasting friendships among members.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl font-normal text-foreground mb-4">
                Our Mission
              </h2>
              <div className="mb-6">
                <AccentBar color="green" size="md" />
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                  Placeholder
              </div>
            </div>

            <Card className="bg-card border-border p-8">
              <h3 className="text-2xl font-normal text-foreground mb-4">What We Offer</h3>
              <div className="mb-6">
                <AccentBar color="blue" size="sm" />
              </div>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                  <span>Professional development workshops and technical talks</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                  <span>Networking opportunities with industry professionals</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                  <span>Collaborative projects and hackathons</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                  <span>Mentorship programs connecting brothers across class years</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                  <span>Social events and brotherhood activities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                  <span>Community service and philanthropy initiatives</span>
                </li>
              </ul>
            </Card>
          </div>

          {/* Photo Slideshow */}
          <AboutSlideshow />

          {/* Company Partners */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-normal text-foreground mb-4">
              Our Alumni Network
            </h2>
            <div className="flex justify-center mb-8">
              <AccentBar color="blue" size="lg" />
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Our brothers have gone on to work at some of the most innovative companies in technology, 
              finance, and beyond. Here are just a few of the organizations where our alumni have made their mark.
            </p>
            <div style={{ height: '160px', position: 'relative', overflow: 'hidden' }}>
              <LogoLoop
                logos={companyLogos}
                speed={80}
                direction="left"
                logoHeight={60}
                gap={64}
                fadeOut
                fadeOutColor="hsl(var(--background))"
                ariaLabel="Alumni company partners"
              />
            </div>
          </div>

          {/* Our 5 Pillars */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-normal text-foreground mb-4">Our 5 Pillars</h2>
            <div className="flex justify-center mb-16">
              <AccentBar color="blue" size="lg" />
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              <Card className="bg-card border-border p-8 text-center">
                <div className="w-12 h-12 bg-muted rounded-sm flex items-center justify-center mx-auto mb-6">
                  <Users className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-4">Professional Development</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We focus on building essential professional skills including networking, resume building, 
                  interview preparation, and industry knowledge to prepare our members for successful careers 
                  in technology.
                </p>
              </Card>

              <Card className="bg-card border-border p-8 text-center">
                <div className="w-12 h-12 bg-muted rounded-sm flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-4">Alumni Mentorship</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Our members benefit from direct mentorship relationships with KTP alumni who provide 
                  guidance, career advice, and real-world insights from their experiences in the tech industry.
                </p>
              </Card>

              <Card className="bg-card border-border p-8 text-center">
                <div className="w-12 h-12 bg-muted rounded-sm flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-4">Social Growth</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We foster meaningful friendships and social connections through various events, activities, 
                  and shared experiences that create lasting bonds within our community.
                </p>
              </Card>

              <Card className="bg-card border-border p-8 text-center">
                <div className="w-12 h-12 bg-muted rounded-sm flex items-center justify-center mx-auto mb-6">
                  <Code className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-4">Technical Advancement</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Our members stay current with the latest technologies through workshops, hackathons, 
                  coding challenges, and hands-on projects that enhance technical skills and knowledge.
                </p>
              </Card>

              <Card className="bg-card border-border p-8 text-center">
                <div className="w-12 h-12 bg-muted rounded-sm flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-4">Academic Support</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We provide academic resources, study groups, tutoring opportunities, and peer support 
                  to help our members excel in their coursework and achieve their educational goals.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;