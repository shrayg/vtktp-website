import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaLinkedin } from "react-icons/fa";
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
    { name: "Jasmine Varma", role: "President", gender: "female", gradYear: "2027", linkedin: "https://www.linkedin.com/in/jasminevarma/" },
    { name: "Riaz Ahsan", role: "VP Professional & Technical Development", gender: "male", gradYear: "2027", linkedin: "https://www.linkedin.com/in/riazoahsan/" },
    { name: "Nazila Abyaneh", role: "VP Finance", gender: "female", gradYear: "2027", linkedin: "https://www.linkedin.com/in/nazila-abyaneh-57a723330/" },
    { name: "Morgan Bradley", role: "VP Philanthropy", gender: "female", gradYear: "2026", linkedin: "https://www.linkedin.com/in/morganmarybradley/" },
    { name: "Lily Cole", role: "VP Membership", gender: "female", gradYear: "2027", linkedin: "https://www.linkedin.com/in/lily-cole4/" },
    { name: "Matt Hausler", role: "VP Social Engagement", gender: "male", gradYear: "2027", linkedin: "https://www.linkedin.com/in/matt-hausler-a03611296/" },
    { name: "Kamryn McKinney", role: "VP Internal Affairs", gender: "female", gradYear: "2027", linkedin: "https://www.linkedin.com/in/kamryn-mckinney-6005262b1/" },
    { name: "Hunter Robbins", role: "Director of New Member Recruits", gender: "male", gradYear: "2027", linkedin: "https://www.linkedin.com/in/hunter-robbins-meche/" },
    { name: "Julia Suchkova", role: "VP Marketing", gender: "female", gradYear: "2026", linkedin: "https://www.linkedin.com/in/julia-suchkova-6b7a06294/" },
    { name: "Ghazal Tanavade", role: "VP External Affairs", gender: "female", gradYear: "2028", linkedin: "https://www.linkedin.com/in/ghazal-tanavade/" },
    { name: "Annie Malamphy", role: "VP Marketing", gender: "female", gradYear: "2027", linkedin: "https://www.linkedin.com/in/annie-malamphy-86b411328/" },
  ];

  // Alpha Class members
  const alphaClass = [
    { name: "Gianni Ager", gender: "male", gradYear: "2027", linkedin: "https://www.linkedin.com/in/gianniager/" },
    { name: "Justin Burns", gender: "male", gradYear: "2027", linkedin: "https://www.linkedin.com/in/justin-burns-465036291/" },
    { name: "Sophia Gwaltney", gender: "female", gradYear: "2027", linkedin: "https://www.linkedin.com/in/sophia-gwaltney-a065b2201/" },
    { name: "Hanru Li", gender: "male", gradYear: "2027", linkedin: "https://www.linkedin.com/in/hanru-li-ba9012269/" },
    { name: "Austen Liles", gender: "male", gradYear: "2027", linkedin: "https://www.linkedin.com/in/austenliles/" },
    { name: "Brianna McDonald", gender: "female", gradYear: "2027", linkedin: "https://www.linkedin.com/in/brianna-mcdonald-b98096299/" },
    { name: "Noor Naim", gender: "female", gradYear: "2027", linkedin: "https://www.linkedin.com/in/noor-naim-99850a352/" },
    { name: "Hailey Pazmino", gender: "female", gradYear: "2027", linkedin: "https://www.linkedin.com/in/hailey-pazmino-75a3b828b/" },
    { name: "Mallory Shumway", gender: "female", gradYear: "2027", linkedin: "https://www.linkedin.com/in/mallory-shumway/" },
    { name: "Ben Sullivan", gender: "male", gradYear: "2025", linkedin: "https://www.linkedin.com/in/benjamin-sullivan21/" },
    { name: "Divyasimha Talreja", gender: "female", gradYear: "2028", linkedin: "https://www.linkedin.com/in/divyasimha-talreja/" },
    { name: "Franklin Zhang", gender: "male", gradYear: "", linkedin: "" },
  ];

  // Beta Class members
  const betaClass = [
    { name: "Layla Abreu", gender: "female", gradYear: "2027", linkedin: "https://www.linkedin.com/in/layla-abreu-6914b4278/" },
    { name: "Morgan Bradley", gender: "female", gradYear: "2026", linkedin: "https://www.linkedin.com/in/morganmarybradley/" },
    { name: "Aashi Dugar", gender: "female", gradYear: "2027", linkedin: "https://www.linkedin.com/in/aashi-dugar-371255327/" },
    { name: "Lily Ehler", gender: "female", gradYear: "2027", linkedin: "https://www.linkedin.com/in/lmehler/" },
    { name: "Dominic Kretzing", gender: "male", gradYear: "2027", linkedin: "https://www.linkedin.com/in/dominickretzing/" },
    { name: "Michael Duarte", gender: "male", gradYear: "2027", linkedin: "https://www.linkedin.com/in/mduarte04/" },
    { name: "Peter MacPhail", gender: "male", gradYear: "2028", linkedin: "" },
    { name: "Sree Mamilla", gender: "female", gradYear: "2028", linkedin: "https://www.linkedin.com/in/sreeyuktha-mamilla-59b32324a/" },
    { name: "Ramya Radhakrishnan", gender: "female", gradYear: "2027", linkedin: "https://www.linkedin.com/in/ramya-radhakrishnan1/" },
    { name: "Antara Rajgopal", gender: "female", gradYear: "2027", linkedin: "https://www.linkedin.com/in/antara-rajgopal/" },
    { name: "Ashwin Tripathy", gender: "male", gradYear: "2028", linkedin: "https://www.linkedin.com/in/ashwin-tripathy/" },
    { name: "Mitchell Vikhman", gender: "male", gradYear: "2027", linkedin: "https://www.linkedin.com/in/mitchellvikhman/" },
  ];

  // Gamma Class members
  const gammaClass = [
    { name: "Yousif Abuhaija", gender: "male", gradYear: "2027", linkedin: "https://www.linkedin.com/in/yousif-abuhaija/" },
    { name: "Karla Andujar", gender: "female", gradYear: "2028", linkedin: "https://www.linkedin.com/in/karla-andujar-b56952327/" },
    { name: "Sean Breslin", gender: "male", gradYear: "2027", linkedin: "https://www.linkedin.com/in/seanbreslin1/" },
    { name: "Luke Brugger", gender: "male", gradYear: "2027", linkedin: "https://www.linkedin.com/in/luke-brugger/" },
    { name: "Jaylene Chute", gender: "female", gradYear: "2027", linkedin: "https://www.linkedin.com/in/jaylene-chute-4ab95320b/" },
    { name: "Ryan Gow", gender: "male", gradYear: "2027", linkedin: "https://www.linkedin.com/in/ryan-gow04/" },
    { name: "Shray Gupta", gender: "male", gradYear: "2027", linkedin: "https://www.linkedin.com/in/shraygupta06/" },
    { name: "Charlie Hui", gender: "male", gradYear: "2028", linkedin: "https://www.linkedin.com/in/charleshui06/" },
    { name: "Keegan Hoyne", gender: "male", gradYear: "2028", linkedin: "https://www.linkedin.com/in/keeganhoyne/" },
    { name: "Samir Khattak", gender: "male", gradYear: "2027", linkedin: "https://www.linkedin.com/in/samir-khattak/" },
    { name: "Tim Pactwa", gender: "male", gradYear: "2027", linkedin: "https://www.linkedin.com/in/timothy-pactwa-189a6132a/" },
    { name: "Joshua Ponnraj", gender: "male", gradYear: "2027", linkedin: "https://www.linkedin.com/in/joshua-ponnraj/" },
    { name: "Akanksha Potluri", gender: "female", gradYear: "2027", linkedin: "https://www.linkedin.com/in/akanksha-potluri/" },
    { name: "Hamza Rafat", gender: "male", gradYear: "2028", linkedin: "" },
    { name: "Nick Teal", gender: "male", gradYear: "2028", linkedin: "https://www.linkedin.com/in/nicholasteal1/" },
    { name: "Charu Vijay", gender: "female", gradYear: "2029", linkedin: "" },
  ];

  // Greek letters for each class
  const getGreekLetter = (memberClass: string) => {
  switch (memberClass) {
    case "Alpha Class":
      return "Α";
    case "Beta Class":
      return "Β";
    case "Gamma Class":
      return "Γ";
    default:
      return "";
  }
};

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
                  <div className="relative group w-24 h-24 md:w-32 md:h-32 bg-muted rounded-full mb-4 mx-auto border border-border overflow-hidden">
                    <img 
                      src={getMemberImage(member.name, member.gender, true)}
                      alt={member.name}
                      className="w-full h-full object-cover transition-opacity duration-200 group-hover:opacity-40"
                      onError={(e) => handleImageError(e, member.gender)}
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-[10px] md:text-xs text-foreground text-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 px-1">
                      
                      {member.gradYear && (
                        <div className="mt-0.5">
                          Class of {member.gradYear}
                        </div>
                      )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1"
                      >
                      <FaLinkedin className="w-4 h-4 md:w-5 md:h-5" />
                    </a>
                  )}
                </div>
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
                  <div className="relative group w-16 h-16 md:w-20 md:h-20 bg-muted rounded-full mb-2 mx-auto border border-border overflow-hidden">
                    <img 
                      src={getMemberImage(member.name, member.gender, false)}
                      alt={member.name}
                      className="w-full h-full object-cover transition-opacity duration-200 group-hover:opacity-40"
                      onError={(e) => handleImageError(e, member.gender)}
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-[9px] md:text-xs text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div>
                        {getGreekLetter(member.class)}{" "}
                        {member.gradYear && <>| {member.gradYear}</>}
                      </div>

                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1"
                      >
                        <FaLinkedin className="w-4 h-4 md:w-5 md:h-5" />
                      </a>
                    )}
                    </div>
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
