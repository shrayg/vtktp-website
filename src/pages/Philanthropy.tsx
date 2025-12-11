import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Heart, Globe, Users, TreePine, Check } from "lucide-react";
import { AccentBar } from "@/components/AccentBar";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Philanthropy = () => {
  const { toast } = useToast();
  const [showCheck, setShowCheck] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("ktp@vt.edu");
      setShowCheck(true);
      toast({
        description: "Copied",
        duration: 2000,
      });
      setTimeout(() => setShowCheck(false), 1000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-normal text-foreground mb-6">
              Philanthropy & Service
            </h1>
            <div className="flex justify-center mb-6">
              <AccentBar color="blue" size="lg" />
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Giving back to our community through technology and service. We believe in using 
              our skills and passion to make a positive impact.
            </p>
          </div>

          {/* Impact Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="bg-card border-border p-8 text-center">
              <div className="text-3xl font-bold text-foreground mb-2">#</div>
              <div className="text-muted-foreground">Placeholder</div>
            </Card>
            <Card className="bg-card border-border p-8 text-center">
              <div className="text-3xl font-bold text-foreground mb-2">#</div>
              <div className="text-muted-foreground">Placeholder</div>
            </Card>
            <Card className="bg-card border-border p-8 text-center">
              <div className="text-3xl font-bold text-foreground mb-2">#</div>
              <div className="text-muted-foreground">Placeholder</div>
            </Card>
          </div>

          {/* Initiatives */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <Card className="bg-card border-border p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-muted rounded-sm flex items-center justify-center">
                  <Heart className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-2xl font-normal text-foreground">Tech for Good</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <br/>

                We leverage our technical skills to help local nonprofits and community organizations. 
                From building websites to developing mobile apps, we use technology to amplify the 
                impact of those doing good work.
              </p>
              <ul className="space-y-2 text-muted-foreground/80 text-sm">
                <li>• Website development for local nonprofits</li>
                <li>• Digital literacy workshops for seniors</li>
                <li>• Tech support for community centers</li>
              </ul>
            </Card>

            <Card className="bg-card border-border p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-muted rounded-sm flex items-center justify-center">
                  <Users className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-2xl font-normal text-foreground">STEM Education</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
              <br></br>
                We're passionate about inspiring the next generation of technologists. Through 
                partnerships with local schools, we provide hands-on STEM education and mentorship 
                to students of all ages.
              </p>
              <ul className="space-y-2 text-muted-foreground/80 text-sm">
                <li>• Coding workshops at local elementary schools</li>
                <li>• Robotics competitions for middle schoolers</li>
                <li>• High school programming mentorship</li>
              </ul>
            </Card>

            <Card className="bg-card border-border p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-muted rounded-sm flex items-center justify-center">
                  <TreePine className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-2xl font-normal text-foreground">Environmental Impact</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
              <br/>
                Technology can be a powerful force for environmental conservation. We organize 
                community clean-up events and develop apps to promote sustainable practices 
                on campus and beyond.
              </p>
              <ul className="space-y-2 text-muted-foreground/80 text-sm">
                <li>• Campus sustainability app development</li>
                <li>• Quarterly community clean-up events</li>
                <li>• E-waste recycling drives</li>
              </ul>
            </Card>

            <Card className="bg-card border-border p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-muted rounded-sm flex items-center justify-center">
                  <Globe className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-2xl font-normal text-foreground">Global Outreach</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
              <br/>
                Our impact extends beyond Blacksburg. We partner with international organizations 
                to provide technology solutions for global challenges and support educational 
                initiatives in underserved communities.
              </p>
              <ul className="space-y-2 text-muted-foreground/80 text-sm">
                <li>• Remote volunteer software development</li>
                <li>• Educational resource creation</li>
                <li>• Technology accessibility projects</li>
              </ul>
            </Card>
          </div>

          {/* Call to Action */}
          <Card className="bg-card border-border p-12 text-center">
            <h2 className="text-3xl font-normal text-foreground mb-4">Get Involved</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you're a student looking to make a difference or a community organization 
              in need of tech support, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-colors transition-transform duration-200 hover:scale-105"
              >
                {showCheck ? <Check className="w-4 h-4" /> : "Email Us"}
              </button>
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded-sm hover:bg-muted transition-colors transition-transform duration-200 hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Philanthropy;
