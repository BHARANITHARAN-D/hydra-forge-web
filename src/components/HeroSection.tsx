import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, ArrowDown } from 'lucide-react';

export function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Website Developer | Python Warrior | Future Full Stack Architect';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, []);

  const handleResumeDownload = () => {
    // Create a dummy PDF download for now
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Hydra_King_Bharani_Resume.pdf';
    link.click();
  };

  const scrollToWork = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-50 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Terminal welcome */}
        <div className="mb-8 text-terminal-green font-code text-sm opacity-60">
          {'> Access granted... Loading Hydra Terminal...'}
        </div>

        {/* Main content */}
        <div className="space-y-8 animate-fade-in">
          {/* Name with glow effect */}
          <div className="relative">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-cyber bg-clip-text text-transparent glow-primary-lg">
              Hydra King
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mt-2">
              Bharani
            </h2>
          </div>

          {/* Typing animation tagline */}
          <div className="h-16 flex items-center justify-center">
            <p className="text-xl md:text-2xl font-mono text-primary">
              {displayText}
              <span className="animate-blink">|</span>
            </p>
          </div>

          {/* Short intro */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences with code and creativity. 
            Transforming ideas into powerful web solutions.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToWork}
              className="btn-cyber px-8 py-6 text-lg"
              size="lg"
            >
              <span className="relative z-10">View My Work</span>
            </Button>
            
            <Button
              onClick={handleResumeDownload}
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg glow-primary"
              size="lg"
            >
              <Download className="mr-2 h-5 w-5" />
              <span>Download Resume</span>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-primary/60 text-sm mb-2">Scroll to explore</div>
          <ArrowDown className="h-6 w-6 text-primary mx-auto" />
        </div>
      </div>

      {/* Side glow effects */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-20 animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-secondary/20 rounded-full blur-3xl opacity-20 animate-pulse-glow" style={{ animationDelay: '1s' }} />
    </section>
  );
}