import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function AboutSection() {
  const interests = [
    {
      title: 'Web Development',
      description: 'Creating responsive, modern web applications',
      icon: '🌐'
    },
    {
      title: 'Python Programming',
      description: 'Backend development and automation scripts',
      icon: '🐍'
    },
    {
      title: 'Cybersecurity',
      description: 'Securing applications and understanding vulnerabilities',
      icon: '🔒'
    },
    {
      title: 'Ethical Hacking',
      description: 'Penetration testing and security research',
      icon: '⚡'
    }
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Full Stack Journey Begins',
      description: 'Started learning advanced web development and backend technologies'
    },
    {
      year: '2023',
      title: 'Python Mastery',
      description: 'Deepened Python skills with projects and automation'
    },
    {
      year: '2022',
      title: 'Web Development Foundation',
      description: 'Built first websites with HTML, CSS, and JavaScript'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-cyber bg-clip-text text-transparent mb-4">
            About The Hydra King
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate developer on a mission to master the digital realm through code, creativity, and continuous learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <div className="space-y-6">
            <Card className="cyber-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">My Journey</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to my digital domain! I'm Bharani, better known as the <span className="text-primary font-semibold">Hydra King</span> in the coding realm. 
                  My journey into technology started with curiosity and evolved into a passionate pursuit of excellence.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From crafting elegant web solutions to diving deep into Python's capabilities, I believe in the power of code to transform ideas into reality. 
                  My goal is to become a <span className="text-accent font-semibold">Full Stack Architect</span>, mastering both frontend artistry and backend engineering.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring cybersecurity landscapes, learning about ethical hacking, and staying ahead of the latest tech trends.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Interests */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center text-secondary mb-8">Areas of Expertise</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <Card 
                  key={index} 
                  className="cyber-card group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {interest.icon}
                    </div>
                    <h4 className="font-semibold text-primary">{interest.title}</h4>
                    <p className="text-sm text-muted-foreground">{interest.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-accent mb-12">Learning Timeline</h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent rounded-full" />
              
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <Card 
                    className={`cyber-card w-80 ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                          {item.year}
                        </div>
                        <h4 className="font-semibold text-lg">{item.title}</h4>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background glow-primary" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}