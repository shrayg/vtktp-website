import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Briefcase, Code, Users, Globe, CalendarDays } from "lucide-react";
import { getMemberImage, placeholderMale, placeholderFemale } from "@/data/memberImages";
import { AccentBar } from "@/components/AccentBar";

const Members = () => {
  // Function to handle image load errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, gender: string) => {
    const target = e.target as HTMLImageElement;
    target.src = gender === "female" ? placeholderFemale : placeholderMale;
  };

  const eBoard = [
    { name: "Jasmine Varma", role: "President", gender: "female" },
    { name: "Riaz Ahsan", role: "VP Professional & Technical Development", gender: "male" },
    { name: "Nazila Abyaneh", role: "VP Finance", gender: "female" },
    { name: "Morgan Bradley", role: "VP Philanthropy", gender: "female" },
    { name: "Lily Cole", role: "VP Membership", gender: "female" },
    { name: "Matt Hausler", role: "VP Social Engagement", gender: "male" },
    { name: "Kamryn McKinney", role: "VP Internal Affairs", gender: "female" },
    { name: "Hunter Robbins", role: "Director of New Member Recruits", gender: "male" },
    { name: "Julia Suchkova", role: "VP Marketing", gender: "female" },
    { name: "Ghazal Tanavade", role: "VP External Affairs", gender: "female" },
    { name: "Annie Malamphy", role: "VP Marketing", gender: "female" },
  ];

  // Alpha Class members
  const alphaClass = [
    { name: "Gianni Ager", gender: "male" },
    { name: "Justin Burns", gender: "male" },
    { name: "Sophia Gwaltney", gender: "female" },
    { name: "Hanru Li", gender: "male" },
    { name: "Austen Liles", gender: "male" },
    { name: "Brianna McDonald", gender: "female" },
    { name: "Noor Naim", gender: "female" },
    { name: "Hailey Pazmino", gender: "female" },
    { name: "Mallory Shumway", gender: "female" },
    { name: "Ben Sullivan", gender: "male" },
    { name: "Divyasimha Talreja", gender: "female" },
    { name: "Franklin Zhang", gender: "male" },
  ];

  // Beta Class members
  const betaClass = [
    { name: "Layla Abreu", gender: "female" },
    { name: "Morgan Bradley", gender: "female" },
    { name: "Aashi Dugar", gender: "female" },
    { name: "Lily Ehler", gender: "female" },
    { name: "Dominic Kretzing", gender: "male" },
    { name: "Michael Duarte", gender: "male" },
    { name: "Peter MacPhail", gender: "male" },
    { name: "Sree Mamilla", gender: "female" },
    { name: "Ramya Radhakrishnan", gender: "female" },
    { name: "Antara Rajgopal", gender: "female" },
    { name: "Ashwin Tripathy", gender: "male" },
    { name: "Mitchell Vikhman", gender: "male" },
  ];

  // Gamma Class members
  const gammaClass = [
    { name: "Yousif Abuhaija", gender: "male" },
    { name: "Karla Andujar", gender: "female" },
    { name: "Sean Breslin", gender: "male" },
    { name: "Luke Brugger", gender: "male" },
    { name: "Jaylene Chute", gender: "female" },
    { name: "Ryan Gow", gender: "male" },
    { name: "Shray Gupta", gender: "male" },
    { name: "Charlie Hui", gender: "male" },
    { name: "Keegan Hoyne", gender: "male" },
    { name: "Samir Khattak", gender: "male" },
    { name: "Tim Pactwa", gender: "male" },
    { name: "Joshua Ponnraj", gender: "male" },
    { name: "Akanksha Potluri", gender: "female" },
    { name: "Hamza Rafat", gender: "male" },
    { name: "Nick Teal", gender: "male" },
    { name: "Charu Vijay", gender: "female" },
  ];

  // Combine all classes and sort alphabetically by last name
  const allMembers = [
    ...alphaClass.map(member => ({ ...member, class: "Alpha Class" })),
    ...betaClass.map(member => ({ ...member, class: "Beta Class" })),
    ...gammaClass.map(member => ({ ...member, class: "Gamma Class" }))
  ].sort((a, b) => {
    const aLastName = a.name.split(' ').pop() || '';
    const bLastName = b.name.split(' ').pop() || '';
    return aLastName.localeCompare(bLastName);
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-normal text-foreground mb-6">
              Our Brotherhood
            </h1>
            <div className="flex justify-center mb-6">
              <AccentBar color="blue" size="lg" />
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Meet the diverse group of students who make up KTP's members. 
              With over fifteen different majors in the fraternity, our members bring unique perspectives to technology.
            </p>
          </div>

          {/* Member Statistics */}
          <div className="grid md:grid-cols-4 gap-6 mb-20">
            <Card className="bg-card border-border p-6 text-center ">
              <div className="w-12 h-12 bg-muted rounded-sm flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-foreground" />
              </div>

              <div className="text-2xl font-bold text-foreground mb-1">50+</div>
              <div className="text-muted-foreground text-sm">Active Members</div>
            </Card>

            <Card className="bg-card border-border p-6 text-center ">
              <div className="w-12 h-12 bg-muted rounded-sm flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-6 h-6 text-foreground" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">15+</div>
              <div className="text-muted-foreground text-sm">Different Majors</div>
            </Card>

            <Card className="bg-card border-border p-6 text-center ">
              <div className="w-12 h-12 bg-muted rounded-sm flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-foreground" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">30+</div>
              <div className="text-muted-foreground text-sm">National Chapters</div>
            </Card>

            <Card className="bg-card border-border p-6 text-center ">
              <div className="w-12 h-12 bg-muted rounded-sm flex items-center justify-center mx-auto mb-4">
                <CalendarDays className="w-6 h-6 text-foreground" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">50+</div>
              <div className="text-muted-foreground text-sm">Annual Events</div>
            </Card>
          </div>

          {/* E-Board Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-normal text-foreground mb-4 text-center">E-Board</h2>
            <div className="flex justify-center mb-8">
              <AccentBar color="green" size="md" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {eBoard.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-muted rounded-full mb-4 mx-auto border border-border overflow-hidden">
                    <img 
                      src={getMemberImage(member.name, member.gender, true)}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => handleImageError(e, member.gender)}
                    />
                  </div>
                  <h3 className="text-foreground font-medium text-sm md:text-base">{member.name}</h3>
                  <p className="text-muted-foreground text-xs md:text-sm">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Meet the Brothers */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-normal text-foreground mb-4">Meet the Brothers</h2>
            <div className="flex justify-center mb-6">
              <AccentBar color="green" size="md" />
            </div>
          </div>

          {/* All Brothers */}
          <div className="mb-16">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
              {allMembers.map((member, index) => (
                <div key={`member-${index}`} className="text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-muted rounded-full mb-2 mx-auto border border-border overflow-hidden">
                    <img 
                      src={getMemberImage(member.name, member.gender, false)}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => handleImageError(e, member.gender)}
                    />
                  </div>
                  <h4 className="text-foreground text-xs md:text-sm font-medium">{member.name}</h4>
                  <p className="text-muted-foreground text-xs">{member.class}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Join CTA */}
          <Card className="bg-card border-border p-12 text-center">
            <h2 className="text-3xl font-normal text-foreground mb-4">Ready to Join Our Brotherhood?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              We welcome students from all majors who share our passion for technology and 
              professional growth. Join a community that will support you throughout your 
              college career and beyond.
            </p>
            <Button 
              variant="outline" 
              className="bg-primary text-primary-foreground border-primary hover:bg-primary/90 font-medium px-8 py-3 transition-transform duration-200 hover:scale-105"
              asChild
            >
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfGAmgra6nKbO95DBAfM4O08yxWK0S6bf1DWztz3KIytlgQHg/viewform" target="_blank" rel="noopener noreferrer">
                Apply for Spring 2026
              </a>
            </Button>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Members;
