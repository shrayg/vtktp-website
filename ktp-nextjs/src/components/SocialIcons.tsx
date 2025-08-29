import Image from 'next/image';

export default function SocialIcons() {
  return (
    <footer className="bg-white text-gray-800 py-6 mt-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center items-center">
          <div className="flex gap-4">
            <a
              href="https://instagram.com/vtktp"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#2B4D89] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-200"
              aria-label="Instagram"
            >
              <Image
                src="/Instagram_logo.png"
                alt="Instagram"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/kappa-theta-pi-virginia-tech/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#2B4D89] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-200"
              aria-label="LinkedIn"
            >
              <Image
                src="/LinkedIn_logo_initials.png"
                alt="LinkedIn"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 