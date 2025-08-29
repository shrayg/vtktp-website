import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SocialIcons from '@/components/SocialIcons';

export default function About() {
  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-7xl mx-auto w-full">
          {/* Page Logo */}
          <div className="mb-8 text-center">
            <Image
              src="/KTP_Logos_Letters_KTP_Logo.png"
              alt="KTP Logo"
              width={300}
              height={150}
              className="mx-auto mb-8"
            />
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-12">
            {/* Information Card - Left Side */}
            <div className="order-1 lg:order-1">
              <Card className="shadow-lg h-fit">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-[#2B4D89]">
                    About Kappa Theta Pi at Virginia Tech
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-lg text-gray-700 space-y-4">
                    <p>
                      Kappa Theta Pi takes pride in being the first professional technology fraternity in the country. 
                      Our members learn a plethora of skills needed to stay knowledgeable about the tech industry, 
                      as well as a strong sense of professional development for future job positions.
                    </p>
                    
                    <p>
                      KTP at Virginia Tech was established in the fall of 2024, with the mission to create a tech 
                      community that enthusiastic students could join here on campus.
                    </p>
                    
                    <p>
                      Our members come from all around campus. We are designers, analysts, computer scientists, 
                      engineers, artists, economists, and more. What makes the KTP community strong is our shared 
                      passion for technology and our unique backgrounds meshing together as one.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Group Photo - Right Side */}
            <div className="order-2 lg:order-2">
              <div className="max-w-full">
                <Image
                  src="/group_photo.jpg"
                  alt="Group Photo of All Members"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Our 5 Pillars Section */}
          <div className="mt-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B4D89] mb-8 text-center">
              Our 5 Pillars
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {/* Professional Development */}
              <Card className="shadow-lg h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Image</span>
                  </div>
                  <CardTitle className="text-xl font-semibold text-[#2B4D89]">
                    Professional Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    We focus on building essential professional skills including networking, resume building, 
                    interview preparation, and industry knowledge to prepare our members for successful careers in technology.
                  </p>
                </CardContent>
              </Card>

              {/* Alumni Mentorship */}
              <Card className="shadow-lg h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Image</span>
                  </div>
                  <CardTitle className="text-xl font-semibold text-[#2B4D89]">
                    Alumni Mentorship
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Our members benefit from direct mentorship relationships with KTP alumni who provide 
                    guidance, career advice, and real-world insights from their experiences in the tech industry.
                  </p>
                </CardContent>
              </Card>

              {/* Social Growth */}
              <Card className="shadow-lg h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Image</span>
                  </div>
                  <CardTitle className="text-xl font-semibold text-[#2B4D89]">
                    Social Growth
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    We foster meaningful friendships and social connections through various events, activities, 
                    and shared experiences that create lasting bonds within our community.
                  </p>
                </CardContent>
              </Card>

              {/* Technical Advancement */}
              <Card className="shadow-lg h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Image</span>
                  </div>
                  <CardTitle className="text-xl font-semibold text-[#2B4D89]">
                    Technical Advancement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Our members stay current with the latest technologies through workshops, hackathons, 
                    coding challenges, and hands-on projects that enhance technical skills and knowledge.
                  </p>
                </CardContent>
              </Card>

              {/* Academic Support */}
              <Card className="shadow-lg h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Image</span>
                  </div>
                  <CardTitle className="text-xl font-semibold text-[#2B4D89]">
                    Academic Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    We provide academic resources, study groups, tutoring opportunities, and peer support 
                    to help our members excel in their coursework and achieve their educational goals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <SocialIcons />
    </>
  );
} 