import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AccentBar } from "@/components/AccentBar";

// List of images from the aboutme folder
const images = [
  "/ktppictures/aboutme/0c258901-e420-4fc1-ade6-7a0b7b5caa8a.jpg",
  "/ktppictures/aboutme/1400fa08-98d4-4f6b-88fd-8d2d9d678b3b.jpg",
  "/ktppictures/aboutme/32e660b8-3cd3-4c26-8644-3dfd086fb895.jpg",
  "/ktppictures/aboutme/679a5d20-54ee-4dd4-9f2c-43d5dee1e5ea.webp",
  "/ktppictures/aboutme/801fdd2e-1278-4bcd-858a-f2682e3c7d21.jpg",
  "/ktppictures/aboutme/db33629d-517f-4bbd-b735-8ebc054a21d0.jpg",
  "/ktppictures/aboutme/ff8d78d5-23d0-474d-a75e-9928de33dab0.jpg",
  "/ktppictures/aboutme/group_photo.jpg"
];

export const AboutSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [blurAmount, setBlurAmount] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance slideshow every 3.2 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      transitionToNext();
    }, 3200);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const transitionToNext = () => {
    setIsTransitioning(true);
    setBlurAmount(0);
    
    // Animate blur in
    const blurIn = setInterval(() => {
      setBlurAmount(prev => {
        if (prev >= 20) {
          clearInterval(blurIn);
          // Change image at peak blur
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
          
          // Animate blur out
          const blurOut = setInterval(() => {
            setBlurAmount(prev => {
              if (prev <= 0) {
                clearInterval(blurOut);
                setIsTransitioning(false);
                return 0;
              }
              return prev - 1;
            });
          }, 16); // ~60fps
          
          return 20;
        }
        return prev + 1;
      });
    }, 16); // ~60fps
  };

  const transitionToPrevious = () => {
    setIsTransitioning(true);
    setBlurAmount(0);
    
    // Animate blur in
    const blurIn = setInterval(() => {
      setBlurAmount(prev => {
        if (prev >= 20) {
          clearInterval(blurIn);
          // Change image at peak blur
          setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
          );
          
          // Animate blur out
          const blurOut = setInterval(() => {
            setBlurAmount(prev => {
              if (prev <= 0) {
                clearInterval(blurOut);
                setIsTransitioning(false);
                return 0;
              }
              return prev - 1;
            });
          }, 16); // ~60fps
          
          return 20;
        }
        return prev + 1;
      });
    }, 16); // ~60fps
  };

  const transitionToSlide = (index: number) => {
    if (index === currentIndex) return;
    
    setIsTransitioning(true);
    setBlurAmount(0);
    
    // Animate blur in
    const blurIn = setInterval(() => {
      setBlurAmount(prev => {
        if (prev >= 20) {
          clearInterval(blurIn);
          // Change image at peak blur
          setCurrentIndex(index);
          
          // Animate blur out
          const blurOut = setInterval(() => {
            setBlurAmount(prev => {
              if (prev <= 0) {
                clearInterval(blurOut);
                setIsTransitioning(false);
                return 0;
              }
              return prev - 1;
            });
          }, 16); // ~60fps
          
          return 20;
        }
        return prev + 1;
      });
    }, 16); // ~60fps
  };

  const goToPrevious = () => {
    if (isTransitioning) return;
    transitionToPrevious();
  };

  const goToNext = () => {
    if (isTransitioning) return;
    transitionToNext();
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    transitionToSlide(index);
  };

  return (
    <div className="mb-20">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-normal text-foreground mb-4">
          Our Brotherhood in Action
        </h2>
        <div className="flex justify-center mb-6">
          <AccentBar color="green" size="lg" />
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          See the moments that define our community - from professional events to social gatherings, 
          these photos capture the spirit of Kappa Theta Pi at Virginia Tech.
        </p>
      </div>

      <Card className="bg-card border-border overflow-hidden">
        <div className="relative">
          {/* Main Image Display */}
          <div className="relative h-96 md:h-[500px] overflow-hidden">
            <img
              src={images[currentIndex]}
              alt={`KTP Activity ${currentIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-300"
              style={{
                filter: `blur(${blurAmount}px)`,
                transform: `scale(${1 + blurAmount * 0.02})`
              }}
              loading="lazy"
            />
            
            {/* Transition overlay for enhanced blur effect */}
            {isTransitioning && (
              <div 
                className="absolute inset-0 bg-background/30 transition-opacity duration-300"
                style={{
                  opacity: blurAmount / 20
                }}
              />
            )}
            
            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="icon"
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background/90 border-border transition-opacity ${
                isTransitioning ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
              }`}
              onClick={goToPrevious}
              disabled={isTransitioning}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background/90 border-border transition-opacity ${
                isTransitioning ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
              }`}
              onClick={goToNext}
              disabled={isTransitioning}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-background/80 px-3 py-1 rounded-full text-sm text-foreground">
              {currentIndex + 1} / {images.length}
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="p-4 bg-muted/30">
            <div className="flex gap-2 justify-center overflow-x-auto pb-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  disabled={isTransitioning}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    index === currentIndex
                      ? 'border-primary ring-2 ring-primary/20'
                      : 'border-border hover:border-muted-foreground'
                  } ${
                    isTransitioning ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
