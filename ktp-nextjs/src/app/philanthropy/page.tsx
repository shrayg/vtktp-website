

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SocialIcons from '@/components/SocialIcons';
import Head from 'next/head';

export default function Philanthropy() {
  return (
    <>
      <Head>
        <title>Philanthropy - Kappa Theta Pi Virginia Tech</title>
        <meta name="description" content="Learn about Kappa Theta Pi's philanthropic initiatives and community service at Virginia Tech." />
        <meta property="og:title" content="Philanthropy - Kappa Theta Pi Virginia Tech" />
        <meta property="og:description" content="Learn about Kappa Theta Pi's philanthropic initiatives and community service at Virginia Tech." />
        <meta property="og:image" content="/KTP_Logos_Letters_KTP_Logo.png" />
        <meta property="og:type" content="website" />
      </Head>
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-7xl mx-auto w-full">
          {/* Page Logo */}
          {/* Logo image removed */}

          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#0049ba] mb-8 text-center">
            Philanthropy
          </h1>

          {/* Content Card */}
          <Card className="max-w-3xl mx-auto shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-[#0049ba]">
                Giving Back to Our Community
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-lg text-gray-700 space-y-4">
                <p>
                  Kappa Theta Pi is committed to making a positive impact in our community 
                  through various philanthropic initiatives and volunteer work.
                </p>
                
                <p>
                  We believe in using our technical skills and knowledge to help others 
                  and create meaningful changes around us.
                </p>
              </div>

              {/* Coming Soon Notice */}
              <div className="mt-8 p-4 bg-[#0049ba] text-white rounded-lg">
                <p className="text-center font-semibold">
                  Details about our philanthropic activities and upcoming events coming soon!
                </p>
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