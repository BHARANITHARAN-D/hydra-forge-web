import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Download } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Hydra_King_Bharani_Resume.pdf';
    link.click();
  };

  const navItems = [
    { label: 'Home', path: '/', id: 'hero' },
    { label: 'About', path: '/about', id: 'about' },
    { label: 'Skills', path: '/skills', id: 'skills' },
    { label: 'Tools', path: '/tools', id: 'tools' },
    { label: 'Projects', path: '/projects', id: 'projects' },
    { label: 'Experience', path: '/experience', id: 'experience' },
    { label: 'Achievements', path: '/achievements', id: 'achievements' },
    { label: 'Contact', path: '/contact', id: 'contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/"
            className="text-xl font-bold bg-gradient-cyber bg-clip-text text-transparent cursor-pointer"
          >
            Hydra King
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => item.path === '/' && scrollToSection(item.id)}
                className={`relative px-3 py-2 rounded-lg transition-all duration-500 hover:glow-primary group ${
                  location.pathname === item.path 
                    ? 'text-primary bg-primary/10 border border-primary/30' 
                    : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {location.pathname === item.path && (
                  <div className="absolute inset-0 bg-gradient-cyber opacity-20 rounded-lg animate-pulse-glow" />
                )}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button
              onClick={handleResumeDownload}
              variant="outline"
              size="sm"
              className="btn-cyber hidden sm:flex"
            >
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}