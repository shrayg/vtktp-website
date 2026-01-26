import { Navigation } from "@/components/Navigation";
import { AccentBar } from "@/components/AccentBar";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Franklin Zhang slideshow images
import franklin1 from "@/assets/ktppictures/franklin/franklin1.jpg";
import franklin2 from "@/assets/ktppictures/franklin/franklin2.jpg";
import franklin3 from "@/assets/ktppictures/franklin/franklin3.jpg";
import franklin4 from "@/assets/ktppictures/franklin/franklin4.jpg";

// Import philanthropy images
import roadwaySafetyImg from "@/assets/ktppictures/philanthropy/roadway-safety.jpg";
import codeorgImg from "@/assets/ktppictures/philanthropy/codeorg.png";
import appalachianTrailImg from "@/assets/ktppictures/philanthropy/appalachian-trail.jpg";

const franklinImages = [franklin1, franklin2, franklin3, franklin4];

const Philanthropy = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % franklinImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % franklinImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + franklinImages.length) % franklinImages.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-16">
        {/* Page Header */}
        <div className="text-center mb-12 px-6">
          <h1 className="text-4xl md:text-5xl font-normal text-foreground mb-6">
            Philanthropy & Service
          </h1>
          <div className="flex justify-center mb-6">
            <AccentBar color="blue" size="lg" />
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Through organized fundraising events and community outreach, 
            we work to honor the memory of Franklin Zhang and support causes close to our chapter's heart.
          </p>
        </div>

        {/* Franklin Zhang Initiative Section */}
        <section className="mb-20">
          <div className="text-center mb-8 px-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              The Franklin Zhang Initiative
            </h2>
            <div className="flex justify-center">
              <AccentBar color="blue" size="md" />
            </div>
          </div>

          {/* Slideshow */}
          <div className="relative max-w-4xl mx-auto mb-12">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              {franklinImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Franklin Zhang ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {franklinImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? "bg-white" : "bg-white/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Franklin Zhang Bio */}
          <div className="max-w-4xl mx-auto px-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground text-center mb-6">
              Franklin Zhang
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg text-center">
              Frank was an active member of KTP's Alpha Class. Our members were lucky enough to know and love him for his kindness, loyalty, and incredibly clever sense of humor. Frank never failed to amaze us with his latest creative project; he was truly an inspiration to every member of KTP and beyond. At Virginia Tech, Frank was double-majoring in computer engineering and computer science, and was still heavily involved in several campus organizations. Not surprisingly, he was obsessed with all things coffee. He jumped at every opportunity to attend KTP's brotherhood events, especially hikes where he would meander off to explore, even if the water at the Cascades waterfall was 50 degrees. It is unfortunate to know that Frank wasn't able to reach his fullest potential, but we are grateful for his impact on KTP. He had already accomplished so much as just a freshman at VT. We chose to form our philanthropy around Frank to honor his memory and preserve the impact he had on our organization.
            </p>
          </div>
        </section>

        {/* Charities Section */}
        <section className="mb-16">
          <div className="text-center mb-8 px-6">
            <h2 className="text-2xl md:text-3xl font-normal text-foreground mb-4">
              Proceeds are split evenly amongst the three charities below
            </h2>
            <div className="flex justify-center">
              <AccentBar color="blue" size="md" />
            </div>
          </div>

          {/* Charity Sections */}
          <div className="space-y-0">
            {/* Roadway Safety Foundation - Image Left, Text Right */}
            <section className="grid lg:grid-cols-2 min-h-[400px]">
              <div className="relative overflow-hidden">
                <img 
                  src={roadwaySafetyImg} 
                  alt="BT Transit Bus at Virginia Tech Campus" 
                  className="w-full h-full object-cover min-h-[300px] lg:min-h-[400px]"
                />
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-12 bg-card">
                <h4 className="text-xs uppercase tracking-wider text-primary mb-2">Roadway Safety</h4>
                <h3 className="text-3xl lg:text-4xl font-semibold text-foreground mb-6">
                  The Roadway Safety Foundation
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  At the heart of our initiative is roadway safety. This foundation works to 
                  reduce the frequency and severity of roadway accidents through improving 
                  the design and operating conditions of roads.
                </p>
              </div>
            </section>

            {/* Code.org - Text Left, Image Right */}
            <section className="grid lg:grid-cols-2 min-h-[400px]">
              <div className="flex flex-col justify-center p-8 lg:p-12 bg-card order-2 lg:order-1">
                <h4 className="text-xs uppercase tracking-wider text-primary mb-2">Passion for Technology</h4>
                <h3 className="text-3xl lg:text-4xl font-semibold text-foreground mb-6">
                  Code.org
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Our fraternity is centered around technology, an interest that Frank had and 
                  pursued during his time at Virginia Tech. Code.org believes every student 
                  should have the opportunity to learn about computer science and artificial 
                  intelligence. This platform increases access to computer science education to all.
                </p>
              </div>
              <div className="relative overflow-hidden order-1 lg:order-2 bg-[#00b4c5]">
                <img 
                  src={codeorgImg} 
                  alt="Code.org Logo" 
                  className="w-full h-full object-contain min-h-[300px] lg:min-h-[400px] p-8"
                />
              </div>
            </section>

            {/* Appalachian Trail - Image Left, Text Right */}
            <section className="grid lg:grid-cols-2 min-h-[400px]">
              <div className="relative overflow-hidden">
                <img 
                  src={appalachianTrailImg} 
                  alt="Blue Ridge Mountains - Appalachian Trail" 
                  className="w-full h-full object-cover min-h-[300px] lg:min-h-[400px]"
                />
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-12 bg-card">
                <h4 className="text-xs uppercase tracking-wider text-primary mb-2">National Parks Foundation</h4>
                <h3 className="text-3xl lg:text-4xl font-semibold text-foreground mb-6">
                  The Appalachian Trail
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  As Frank was an eager attendee to KTP's many brotherhood hikes, the 
                  National Parks Foundation ties our initiative together. The organization 
                  helps to fund projects that restore natural resources, improve visitor 
                  access, and engage the community in preservation efforts.
                </p>
              </div>
            </section>
          </div>
        </section>

        {/* Visit Foundations */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-normal text-foreground mb-2">Visit the Foundations</h2>
            <div className="flex justify-center">
              <AccentBar color="blue" size="md" />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://code.org/en-US"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded-sm hover:bg-muted transition-colors transition-transform duration-200 hover:scale-105"
            >
              Code.org
            </a>
            <a 
              href="https://www.nationalparks.org/explore/parks/appalachian-national-scenic-trail"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded-sm hover:bg-muted transition-colors transition-transform duration-200 hover:scale-105"
            >
              Appalachian Trail
            </a>
            <a 
              href="https://www.roadwaysafety.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded-sm hover:bg-muted transition-colors transition-transform duration-200 hover:scale-105"
            >
              Roadway Safety Foundation
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Philanthropy;
