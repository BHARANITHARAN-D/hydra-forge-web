import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export function Footer() {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Hydra_King_Bharani_Resume.pdf';
    link.click();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted/20 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and tagline */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-cyber bg-clip-text text-transparent">
              Hydra King Bharani
            </div>
            <p className="text-muted-foreground">
              Building the future, one line of code at a time.
            </p>
          </div>

          {/* Quick links */}
          <div className="text-center">
            <h4 className="font-semibold text-primary mb-4">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link 
                to="/projects"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </Link>
              <Link 
                to="/contact"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Resume download */}
          <div className="text-center md:text-right">
            <Button
              onClick={handleResumeDownload}
              className="btn-cyber px-6 py-3"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 Hydra King Bharani. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="text-primary hover:text-accent transition-colors text-sm hover:glow-primary"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}