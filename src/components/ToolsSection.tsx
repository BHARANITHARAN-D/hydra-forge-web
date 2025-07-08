import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Code, Database, Globe, Shield, Cpu, Terminal } from 'lucide-react';

export function ToolsSection() {
  const toolCategories = [
    {
      title: 'Development Tools',
      icon: <Code className="h-6 w-6" />,
      tools: [
        { name: 'Visual Studio Code', level: 'Expert', description: 'Primary IDE for all development' },
        { name: 'Git & GitHub', level: 'Advanced', description: 'Version control and collaboration' },
        { name: 'Docker', level: 'Intermediate', description: 'Containerization and deployment' },
        { name: 'Postman', level: 'Advanced', description: 'API testing and development' }
      ]
    },
    {
      title: 'Web Technologies',
      icon: <Globe className="h-6 w-6" />,
      tools: [
        { name: 'React.js', level: 'Advanced', description: 'Frontend framework development' },
        { name: 'Node.js', level: 'Intermediate', description: 'Backend JavaScript runtime' },
        { name: 'Tailwind CSS', level: 'Expert', description: 'Utility-first CSS framework' },
        { name: 'Express.js', level: 'Intermediate', description: 'Web application framework' }
      ]
    },
    {
      title: 'Database & Analytics',
      icon: <Database className="h-6 w-6" />,
      tools: [
        { name: 'MySQL', level: 'Advanced', description: 'Relational database management' },
        { name: 'MongoDB', level: 'Intermediate', description: 'NoSQL database operations' },
        { name: 'Firebase', level: 'Intermediate', description: 'Real-time database and hosting' },
        { name: 'Pandas', level: 'Advanced', description: 'Data analysis and manipulation' }
      ]
    },
    {
      title: 'Cybersecurity Tools',
      icon: <Shield className="h-6 w-6" />,
      tools: [
        { name: 'Kali Linux', level: 'Intermediate', description: 'Penetration testing platform' },
        { name: 'Metasploit', level: 'Beginner', description: 'Vulnerability assessment' },
        { name: 'Wireshark', level: 'Intermediate', description: 'Network protocol analyzer' },
        { name: 'Nmap', level: 'Intermediate', description: 'Network discovery and security auditing' }
      ]
    },
    {
      title: 'System Administration',
      icon: <Cpu className="h-6 w-6" />,
      tools: [
        { name: 'Linux Terminal', level: 'Advanced', description: 'Command line operations' },
        { name: 'SSH & SFTP', level: 'Advanced', description: 'Secure remote access' },
        { name: 'Nginx', level: 'Intermediate', description: 'Web server configuration' },
        { name: 'AWS Basics', level: 'Beginner', description: 'Cloud computing services' }
      ]
    },
    {
      title: 'Automation & Scripting',
      icon: <Terminal className="h-6 w-6" />,
      tools: [
        { name: 'Python Scripts', level: 'Expert', description: 'Custom automation solutions' },
        { name: 'Selenium', level: 'Advanced', description: 'Web automation and testing' },
        { name: 'BeautifulSoup', level: 'Advanced', description: 'Web scraping and parsing' },
        { name: 'Bash Scripting', level: 'Intermediate', description: 'System automation scripts' }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'bg-accent/20 text-accent border-accent/30';
      case 'Advanced': return 'bg-primary/20 text-primary border-primary/30';
      case 'Intermediate': return 'bg-secondary/20 text-secondary border-secondary/30';
      case 'Beginner': return 'bg-warning-orange/20 text-warning-orange border-warning-orange/30';
      default: return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 animate-glow-pulse" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-cyber bg-clip-text text-transparent mb-6 glow-primary-lg">
            Development Arsenal
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            My comprehensive toolkit for building, securing, and automating digital solutions. 
            Each tool represents countless hours of learning and real-world application.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {toolCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title} 
              className="cyber-card group animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="p-2 rounded-lg bg-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {category.icon}
                  </div>
                  <span className="text-primary">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.tools.map((tool, index) => (
                  <div 
                    key={tool.name}
                    className="p-4 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 bg-card/30 hover:bg-card/60 group/tool"
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (index * 0.05)}s` }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-foreground group-hover/tool:text-primary transition-colors">
                        {tool.name}
                      </h4>
                      <Badge className={`text-xs ${getLevelColor(tool.level)}`}>
                        {tool.level}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <Card className="cyber-card mt-16 text-center animate-fade-in" style={{ animationDelay: '1s' }}>
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-secondary mb-8">Tool Mastery Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-accent animate-glow-pulse">24+</div>
                <div className="text-sm text-muted-foreground">Total Tools</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary animate-glow-pulse" style={{ animationDelay: '0.5s' }}>6</div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-secondary animate-glow-pulse" style={{ animationDelay: '1s' }}>7</div>
                <div className="text-sm text-muted-foreground">Expert Level</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-warning-orange animate-glow-pulse" style={{ animationDelay: '1.5s' }}>∞</div>
                <div className="text-sm text-muted-foreground">Learning Mode</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <Button className="btn-cyber px-8 py-6 text-lg">
            <span className="relative z-10">Explore My Projects</span>
          </Button>
        </div>
      </div>
    </section>
  );
}