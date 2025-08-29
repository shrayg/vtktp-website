import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SocialIcons from '@/components/SocialIcons';

// About images for the collage
const aboutImages = [
  { src: '/0c258901-e420-4fc1-ade6-7a0b7b5caa8a.jpg', alt: 'KTP Activity 1', className: 'w-48 h-32 md:w-56 md:h-40 rounded-lg shadow-lg' },
  { src: '/1400fa08-98d4-4f6b-88fd-8d2d9d678b3b.jpg', alt: 'KTP Activity 2', className: 'w-40 h-48 md:w-48 md:h-56 rounded-lg shadow-lg' },
  { src: '/32e660b8-3cd3-4c26-8644-3dfd086fb895.jpg', alt: 'KTP Activity 3', className: 'w-56 h-36 md:w-64 md:h-44 rounded-lg shadow-lg' },
  { src: '/801fdd2e-1278-4bcd-858a-f2682e3c7d21.jpg', alt: 'KTP Activity 4', className: 'w-44 h-44 md:w-52 md:h-52 rounded-lg shadow-lg' },
  { src: '/db33629d-517f-4bbd-b735-8ebc054a21d0.jpg', alt: 'KTP Activity 5', className: 'w-52 h-40 md:w-60 md:h-48 rounded-lg shadow-lg' },
  { src: '/679a5d20-54ee-4dd4-9f2c-43d5dee1e5ea.webp', alt: 'KTP Activity 6', className: 'w-48 h-36 md:w-56 md:h-44 rounded-lg shadow-lg' },
  { src: '/ff8d78d5-23d0-474d-a75e-9928de33dab0.jpg', alt: 'KTP Activity 7', className: 'w-40 h-52 md:w-48 md:h-60 rounded-lg shadow-lg' },
];

import Head from 'next/head';
export default function Home() {
  return (
    <>
      <Head>
        <title>Kappa Theta Pi - Virginia Tech</title>
        <meta name="description" content="Kappa Theta Pi is Virginia Tech's professional technology fraternity. Learn about our members, philanthropy, and how to join!" />
        <meta property="og:title" content="Kappa Theta Pi - Virginia Tech" />
        <meta property="og:description" content="Kappa Theta Pi is Virginia Tech's professional technology fraternity. Learn about our members, philanthropy, and how to join!" />
        <meta property="og:image" content="/KTP_Logos_Letters_KTP_Logo.png" />
        <meta property="og:type" content="website" />
      </Head>
  <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-0 pb-0 -mt-20">
  <div className="w-full mt-0">
          {/* Page Logo */}
          <div className="mb-8 text-center">
              {/* Logo image removed */}
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-0">
            {/* Image Collage - Left Side */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                {/* Collage Grid */}
                <div className="grid grid-cols-3 gap-4 auto-rows-max">
                  {/* Row 1 */}
                  <div className="col-span-2">
                    <div className="relative w-full h-44 md:h-56 rounded-lg shadow-lg overflow-hidden">
                      <Image
                        src={aboutImages[0].src}
                        alt={aboutImages[0].alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        loading="lazy"
                        aria-label={aboutImages[0].alt}
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="relative w-full h-44 md:h-56 rounded-lg shadow-lg overflow-hidden">
                      <Image
                        src={aboutImages[1].src}
                        alt={aboutImages[1].alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 25vw"
                        loading="lazy"
                        aria-label={aboutImages[1].alt}
                      />
                    </div>
                  </div>
                  
                  {/* Row 2 */}
                  <div className="col-span-1">
                    <div className="relative w-full h-40 md:h-48 rounded-lg shadow-lg overflow-hidden">
                      <Image
                        src={aboutImages[2].src}
                        alt={aboutImages[2].alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div className="relative w-full h-40 md:h-48 rounded-lg shadow-lg overflow-hidden">
                      <Image
                        src={aboutImages[3].src}
                        alt={aboutImages[3].alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                  
                  {/* Row 3 */}
                  <div className="col-span-1">
                    <div className="relative w-full h-36 md:h-44 rounded-lg shadow-lg overflow-hidden">
                      <Image
                        src={aboutImages[4].src}
                        alt={aboutImages[4].alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="relative w-full h-36 md:h-44 rounded-lg shadow-lg overflow-hidden">
                      <Image
                        src={aboutImages[5].src}
                        alt={aboutImages[5].alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="relative w-full h-36 md:h-44 rounded-lg shadow-lg overflow-hidden">
                      <Image
                        src={aboutImages[6].src}
                        alt={aboutImages[6].alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Card - Right Side */}
            <div className="order-1 lg:order-2">
              <Card className="shadow-lg h-fit text-xl md:text-2xl p-6">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-[#0049ba]">
                    The Premier Professional Technology Fraternity at Virginia Tech
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-lg text-gray-700 space-y-4">
                    <p>
                      Kappa Theta Pi is a professional technology fraternity that fosters a community 
                      of students passionate about technology and innovation.
                    </p>
                    
                    <p>
                      The Alpha Gamma chapter at Virginia Tech focuses on professional development, networking, 
                      and creating lasting friendships among members.
                    </p>
                    
                    <p>
                      We welcome students from all majors who share our passion for technology 
                      and professional growth!
                    </p>
                  </div>

                  {/* Interest Form Link */}
                  <div className="mt-8">
                    <Button
                      asChild
                      size="lg"
                      className="bg-[#3CB371] hover:bg-[#2E8B57] text-white text-xl font-semibold px-8 py-4 h-auto w-full"
                    >
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfGAmgra6nKbO95DBAfM4O08yxWK0S6bf1DWztz3KIytlgQHg/viewform?fbclid=PAZXh0bgNhZW0CMTEAAael8JTNuHKSNeIBXS9rub0coZ2mXPTqc-MEyu3Sj5_jzdIVlwCLDF5kHCSlXg_aem__Lsx405UojwoIwsLDAxNxw"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Fall 2025 Interest Form
                      </a>
                    </Button>
                  </div>
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
