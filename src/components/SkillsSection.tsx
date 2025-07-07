import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export function SkillsSection() {
  const skills = [
    { name: 'HTML/CSS', level: 90, category: 'Frontend' },
    { name: 'JavaScript', level: 85, category: 'Frontend' },
    { name: 'React', level: 80, category: 'Frontend' },
    { name: 'Python', level: 95, category: 'Backend' },
    { name: 'SQL/MySQL', level: 75, category: 'Backend' },
    { name: 'Git/GitHub', level: 85, category: 'Tools' },
    { name: 'VS Code', level: 90, category: 'Tools' },
    { name: 'Linux', level: 70, category: 'Tools' }
  ];

  const experience = [
    {
      title: 'Freelance Web Developer',
      period: '2023 - Present',
      description: 'Building custom websites and web applications for small businesses',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Python']
    },
    {
      title: 'Python Automation Projects',
      period: '2022 - Present',
      description: 'Created automation scripts for data processing and web scraping',
      technologies: ['Python', 'Selenium', 'BeautifulSoup', 'Pandas']
    },
    {
      title: 'Cybersecurity Intern',
      period: '2023 (3 months)',
      description: 'Learned penetration testing and vulnerability assessment techniques',
      technologies: ['Kali Linux', 'Metasploit', 'Wireshark', 'Nmap']
    }
  ];

  const categories = ['Frontend', 'Backend', 'Tools'];

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/10 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-cyber bg-clip-text text-transparent mb-4">
            Skills & Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My technical arsenal and professional journey in the world of development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold text-center text-primary mb-8">Technical Skills</h3>
            
            {categories.map((category) => (
              <Card key={category} className="cyber-card mb-6">
                <CardHeader>
                  <CardTitle className="text-lg text-secondary">{category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill, index) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="relative">
                          <Progress 
                            value={skill.level} 
                            className="h-2"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          />
                          <div 
                            className="absolute top-0 left-0 h-2 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                              width: `${skill.level}%`,
                              animationDelay: `${index * 0.1}s`
                            }}
                          />
                        </div>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-4 h-1 rounded-full ${
                                i < Math.floor(skill.level / 20) 
                                  ? 'bg-primary' 
                                  : 'bg-muted'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-center text-accent mb-8">Experience</h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <Card 
                  key={index} 
                  className="cyber-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-lg font-semibold text-primary">{exp.title}</h4>
                      <span className="text-sm text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full border border-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Achievement stats */}
            <Card className="cyber-card mt-8">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-center text-secondary mb-6">
                  Development Stats
                </h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-accent">3+</div>
                    <div className="text-sm text-muted-foreground">Years Learning</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-secondary">8+</div>
                    <div className="text-sm text-muted-foreground">Technologies</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">∞</div>
                    <div className="text-sm text-muted-foreground">Passion Level</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}