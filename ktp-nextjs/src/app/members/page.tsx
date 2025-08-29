import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import Head from 'next/head';
import SocialIcons from '@/components/SocialIcons';

// Eboard members with positions
const eboardMembers = [
  { photo: '/ahsan.jpg', name: 'Riaz Ahsan', position: 'Vice President of Professional and Technical Development' },
  { photo: '/tanavade.jpg', name: 'Ghazal Tanavade', position: 'Vice President of External Affairs' },
  { photo: '/robbins.jpg', name: 'Hunter Robbins', position: 'Director of New Member Recruits' },
  { photo: '/suchkova.jpg', name: 'Julia Suchkova', position: 'Vice President of Marketing' },
  { photo: '/mckinney.jpg', name: 'Kamryn McKinney', position: 'Vice President of Internal Affairs' },
  { photo: '/abyaneh.jpg', name: 'Nazila Abyaneh', position: 'Vice President of Finance' },
  { photo: '/bradley.jpg', name: 'Morgan Bradley', position: 'Vice President of Philanthropy' },
  { photo: '/placeholder.svg', name: 'Annie Malamphy', position: 'Vice President of Marketing' },
  { photo: '/placeholder.svg', name: 'Matt Hausler', position: 'Vice President of Social Engagement' },
  { photo: '/placeholder.svg', name: 'Jasmine Varma', position: 'President' },
  { photo: '/placeholder.svg', name: 'Lily Cole', position: 'Vice President of Membership' },
];

// Regular members (excluding eboard members)
const members = [
  { photo: '/abreu.jpg', name: 'Layla Abreu' },
  { photo: '/ager.jpg', name: 'Gianni Ager' },
  { photo: '/asma.jpg', name: 'Asma Adiba' },
  { photo: '/berhanu.jpg', name: 'Alayit Berhanu' },
  { photo: '/burns.jpg', name: 'Justin Burns' },
  { photo: '/duarte.jpg', name: 'Michael Duarte' },
  { photo: '/dugar.jpg', name: 'Aashi Dugar' },
  { photo: '/ehler.jpg', name: 'Lily Ehler' },
  { photo: '/elias.jpg', name: 'Elroi Elias' },
  { photo: '/gwaltney.jpg', name: 'Sophia Gwaltney' },
  { photo: '/kretzing.jpg', name: 'Dominic Kretzing' },
  { photo: '/li.jpg', name: 'Hanru Li' },
  { photo: '/macphail.jpg', name: 'Peter MacPhail' },
  { photo: '/mcdonald.jpg', name: 'Brianna McDonald' },
  { photo: '/radhakrishnan.jpg', name: 'Ramya Radhakrishnan' },
  { photo: '/rajgopal.jpg', name: 'Antara Rajgopal' },
  { photo: '/sullivan.jpg', name: 'Benjamin Sullivan' },
  { photo: '/talreja.jpg', name: 'Simha Talreja' },
  { photo: '/tripathy.jpg', name: 'Ashwin Tripathy' },
  { photo: '/vikhman.jpg', name: 'Mitchell Vikhman' },
];

export default function Members() {
  return (
    <>
      <Head>
        <title>Members - Kappa Theta Pi Virginia Tech</title>
        <meta name="description" content="Meet the members of Kappa Theta Pi at Virginia Tech, including our executive board and chapter members." />
        <meta property="og:title" content="Members - Kappa Theta Pi Virginia Tech" />
        <meta property="og:description" content="Meet the members of Kappa Theta Pi at Virginia Tech, including our executive board and chapter members." />
        <meta property="og:image" content="/KTP_Logos_Letters_KTP_Logo.png" />
        <meta property="og:type" content="website" />
      </Head>
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-7xl mx-auto w-full">
          {/* Page Logo */}
          {/* Logo image removed */}

          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#0049ba] mb-8 text-center">
            Members
          </h1>

          {/* Eboard Card */}
          <Card className="max-w-5xl mx-auto shadow-lg mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-[#0049ba]">
                E-Board
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {eboardMembers.map((member, index) => (
                  <div key={index} className="flex flex-col items-center space-y-2">
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-[#0049ba] shadow-lg">
                      <Image
                        src={member.photo}
                        alt={`${member.name} headshot`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium text-[#0049ba]">
                        {member.name}
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        {member.position}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Content Card */}
          <Card className="max-w-5xl mx-auto shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-[#0049ba]">
                Meet Our Chapter
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-lg text-gray-700 space-y-4">
                <p>
                  Our chapter is made up of diverse, talented students from various 
                  backgrounds and majors, all united by our passion for technology.
                </p>
                
                <p>
                  From computer science to engineering, business to design, our members 
                  bring unique perspectives and skills to our community.
                </p>
                
                <p>
                  We&apos;re proud of our growing family and the strong bonds we&apos;ve formed 
                  through shared experiences and professional development.
                </p>
              </div>

              {/* Member Headshots Grid */}
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-[#0049ba] mb-6">
                  Members
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                  {members.map((member, index) => (
                    <div key={index} className="flex flex-col items-center space-y-2">
                      <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-[#0049ba] shadow-lg">
                        <Image
                          src={member.photo}
                          alt={`${member.name} headshot`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                        />
                      </div>
                      <p className="text-sm font-medium text-[#0049ba] text-center">
                        {member.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Footer */}
      <SocialIcons />
    </>
  );
} 