import { KTPLogo } from "./VarsLogo";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <KTPLogo className="mb-4" />
            <p className="text-muted-foreground max-w-md">
              Kappa Theta Pi - The premier professional technology fraternity at Virginia Tech. 
              Building tomorrow's tech leaders through brotherhood and innovation.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Chapter</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/about" className="hover:text-foreground transition-colors">About KTP</a></li>
              <li><a href="/members" className="hover:text-foreground transition-colors">Members</a></li>
              <li><a href="/philanthropy" className="hover:text-foreground transition-colors">Philanthropy</a></li>
              <li><a href="/contact" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="https://instagram.com/ktp_vt" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Instagram</a></li>
              <li><a href="https://www.linkedin.com/company/kappa-theta-pi-virginia-tech/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a></li>
              <li><a href="mailto:ktp@vt.edu" className="hover:text-foreground transition-colors">Email</a></li>
              <li><a href="https://ktpvt.com" className="hover:text-foreground transition-colors">Website</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Kappa Theta Pi - Alpha Gamma Chapter. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};