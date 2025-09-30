import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Instagram, Linkedin, MapPin, Clock, Users } from "lucide-react";
import GradualBlur from "@/components/GradualBlur";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-normal text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Have questions about KTP? Interested in joining? Want to partner with us? 
              We'd love to hear from you.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white/5 border-white/10 p-8 text-center">
              <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Email</h3>
              <p className="text-white/60 text-sm mb-4">Get in touch with our leadership team</p>
              <a 
                href="mailto:ktp@vt.edu" 
                className="inline-flex items-center justify-center px-4 py-2 bg-white text-black text-sm font-medium rounded-sm hover:bg-white/90 transition-colors"
              >
                ktp@vt.edu
              </a>
            </Card>

            <Card className="bg-white/5 border-white/10 p-8 text-center">
              <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center mx-auto mb-4">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Instagram</h3>
              <p className="text-white/60 text-sm mb-4">Follow us for updates and events</p>
              <a 
                href="https://instagram.com/ktp_vt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-white text-black text-sm font-medium rounded-sm hover:bg-white/90 transition-colors"
              >
                @ktp_vt
              </a>
            </Card>

            <Card className="bg-white/5 border-white/10 p-8 text-center">
              <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center mx-auto mb-4">
                <Linkedin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">LinkedIn</h3>
              <p className="text-white/60 text-sm mb-4">Connect with us professionally</p>
              <a 
                href="https://www.linkedin.com/company/kappa-theta-pi-virginia-tech/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-white text-black text-sm font-medium rounded-sm hover:bg-white/90 transition-colors"
              >
                Follow Us
              </a>
            </Card>
          </div>

          {/* Info Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <Card className="bg-white/5 border-white/10 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-normal text-white">Prospective Members</h3>
              </div>
              <div className="space-y-4 text-white/70">
                <p>
                  Interested in joining KTP? We recruit new members each semester and welcome 
                  students from all majors who are passionate about technology.
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong className="text-white">Requirements:</strong></p>
                  <ul className="space-y-1 pl-4">
                    <li>• Full-time Virginia Tech student</li>
                    <li>• Minimum 2.5 GPA</li>
                    <li>• Passion for technology and innovation</li>
                    <li>• Commitment to professional development</li>
                  </ul>
                </div>
                <Button 
                  variant="outline" 
                  className="bg-white text-black border-white hover:bg-white/90 font-medium w-full mt-4"
                  asChild
                >
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfGAmgra6nKbO95DBAfM4O08yxWK0S6bf1DWztz3KIytlgQHg/viewform" target="_blank" rel="noopener noreferrer">
                    Apply Now
                  </a>
                </Button>
              </div>
            </Card>

            <Card className="bg-white/5 border-white/10 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-normal text-white">Find Us</h3>
              </div>
              <div className="space-y-4 text-white/70">
                <div>
                  <p className="text-white font-medium mb-1">Virginia Tech Campus</p>
                  <p className="text-sm">Blacksburg, VA 24061</p>
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Chapter Meetings</p>
                  <p className="text-sm">Wednesdays at 7:00 PM</p>
                  <p className="text-sm text-white/60">Location shared with members</p>
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Office Hours</p>
                  <p className="text-sm">By appointment</p>
                  <p className="text-sm text-white/60">Contact us to schedule</p>
                </div>
              </div>
            </Card>
          </div>

          {/* FAQ Section */}
          <Card className="bg-white/5 border-white/10 p-8">
            <h2 className="text-3xl font-normal text-white mb-8 text-center">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-medium mb-2">When do you recruit?</h3>
                  <p className="text-white/70 text-sm">We recruit new members at the beginning of each fall and spring semester. Follow our social media for exact dates.</p>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">Do I need to be a CS major?</h3>
                  <p className="text-white/70 text-sm">Not at all! We welcome students from any major who are passionate about technology and professional development.</p>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">What's the time commitment?</h3>
                  <p className="text-white/70 text-sm">We understand you're a student first. Most events are optional, with weekly meetings being the main requirement.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-medium mb-2">How much are dues?</h3>
                  <p className="text-white/70 text-sm">Dues are kept affordable for students. Contact us for current rates and available payment plans.</p>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">What if I'm a graduate student?</h3>
                  <p className="text-white/70 text-sm">We primarily focus on undergraduate students, but graduate students are welcome to attend events and participate in our community.</p>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">Can I visit a meeting?</h3>
                  <p className="text-white/70 text-sm">Absolutely! Reach out to us and we'll arrange for you to attend a meeting and meet our members.</p>
                </div>
              </div>
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
        target="page"
      />
    </div>
  );
};

export default Contact;