import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Briefcase, MapPin, Calendar, Users, Code2, Rocket } from 'lucide-react';

export function ExperienceSection() {
  const experiences = [
    {
      title: 'Freelance Web Developer',
      company: 'Self-Employed',
      type: 'Freelance',
      location: 'Remote, India',
      period: '2023 - Present',
      duration: '1+ Years',
      description: 'Building custom websites and web applications for small businesses and startups. Specializing in responsive design, user experience optimization, and modern web technologies.',
      responsibilities: [
        'Developed 15+ responsive websites using HTML, CSS, JavaScript, and React',
        'Implemented custom automation solutions saving clients 10+ hours weekly',
        'Collaborated with clients to understand requirements and deliver tailored solutions',
        'Maintained and updated existing web applications with new features',
        'Provided technical consulting on web development best practices'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Python', 'Git'],
      achievements: [
        '100% client satisfaction rate',
        'Average project delivery 20% ahead of schedule',
        'Generated ₹50,000+ in freelance revenue'
      ]
    },
    {
      title: 'Python Automation Developer',
      company: 'Personal Projects',
      type: 'Project-based',
      location: 'India',
      period: '2022 - Present',
      duration: '2+ Years',
      description: 'Created comprehensive automation scripts for data processing, web scraping, and workflow optimization. Focused on building efficient, scalable solutions for various use cases.',
      responsibilities: [
        'Designed and developed 25+ Python automation scripts',
        'Built web scraping tools using BeautifulSoup and Selenium',
        'Created data processing pipelines with Pandas and NumPy',
        'Automated repetitive tasks reducing manual work by 80%',
        'Documented code and created user guides for script deployment'
      ],
      technologies: ['Python', 'Selenium', 'BeautifulSoup', 'Pandas', 'NumPy', 'Requests'],
      achievements: [
        'Automated 100+ hours of manual work',
        'Built reusable script library',
        'Improved data processing efficiency by 300%'
      ]
    },
    {
      title: 'Cybersecurity Intern',
      company: 'SecTech Solutions',
      type: 'Internship',
      location: 'Bangalore, India',
      period: 'Summer 2023',
      duration: '3 Months',
      description: 'Gained hands-on experience in penetration testing and vulnerability assessment. Learned industry-standard security tools and methodologies while working on real-world security projects.',
      responsibilities: [
        'Conducted vulnerability assessments on web applications',
        'Performed network scanning and reconnaissance using industry tools',
        'Documented security findings and recommended remediation strategies',
        'Assisted senior security analysts in penetration testing projects',
        'Studied and practiced ethical hacking methodologies'
      ],
      technologies: ['Kali Linux', 'Metasploit', 'Wireshark', 'Nmap', 'Burp Suite', 'OWASP'],
      achievements: [
        'Identified 15+ security vulnerabilities',
        'Completed comprehensive security training',
        'Earned cybersecurity fundamentals certification'
      ]
    },
    {
      title: 'Computer Science Student',
      company: 'University',
      type: 'Education',
      location: 'India',
      period: '2021 - Present',
      duration: '3+ Years',
      description: 'Pursuing comprehensive computer science education with focus on software development, algorithms, and emerging technologies. Active participation in coding clubs and technical projects.',
      responsibilities: [
        'Maintained 8.5+ CGPA throughout academic career',
        'Completed 20+ programming assignments and projects',
        'Participated in coding competitions and hackathons',
        'Led team projects in software development and database design',
        'Mentored junior students in programming fundamentals'
      ],
      technologies: ['C', 'C++', 'Java', 'Python', 'SQL', 'Data Structures', 'Algorithms'],
      achievements: [
        'Dean\'s List recognition for academic excellence',
        'Won 2nd place in inter-college coding competition',
        'Published research paper on automation techniques'
      ]
    }
  ];

  const skills = [
    { category: 'Frontend Development', count: 5 },
    { category: 'Backend Development', count: 4 },
    { category: 'Automation & Scripting', count: 6 },
    { category: 'Cybersecurity', count: 4 },
    { category: 'Database Management', count: 3 },
    { category: 'Version Control', count: 2 }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Freelance': return 'bg-accent/20 text-accent border-accent/30';
      case 'Project-based': return 'bg-primary/20 text-primary border-primary/30';
      case 'Internship': return 'bg-secondary/20 text-secondary border-secondary/30';
      case 'Education': return 'bg-warning-orange/20 text-warning-orange border-warning-orange/30';
      default: return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-primary/5 to-accent/5 animate-glow-pulse" />
      <div className="absolute inset-0 grid-bg opacity-25" />
      
      {/* Professional floating elements */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            <Briefcase className="h-4 w-4 text-primary/20" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-cyber bg-clip-text text-transparent mb-6 glow-primary-lg">
            Professional Journey
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From curious student to professional developer - a chronicle of growth, learning, 
            and real-world impact through code and innovation.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12 mb-16">
          {experiences.map((exp, index) => (
            <Card 
              key={exp.title}
              className="cyber-card animate-fade-in hover:scale-[1.02] transition-all duration-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl text-primary flex items-center gap-3">
                      <Briefcase className="h-6 w-6" />
                      {exp.title}
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-3 text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className={getTypeColor(exp.type)}>
                      {exp.type}
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      {exp.duration}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Code2 className="h-4 w-4 text-secondary" />
                    Key Responsibilities
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {exp.responsibilities.map((responsibility, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-accent mt-1">▸</span>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="outline"
                        className="bg-primary/10 border-primary/30 text-primary hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Rocket className="h-4 w-4 text-accent" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-accent mt-1">★</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Summary */}
        <Card className="cyber-card animate-fade-in" style={{ animationDelay: '1s' }}>
          <CardHeader>
            <CardTitle className="text-2xl text-center text-secondary">
              Experience-Based Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={skill.category}
                  className="text-center space-y-2 p-4 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 animate-glow-pulse"
                  style={{ animationDelay: `${1.2 + (index * 0.1)}s` }}
                >
                  <div className="text-2xl font-bold text-primary">{skill.count}+</div>
                  <div className="text-sm text-muted-foreground">{skill.category}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <Button className="btn-cyber px-8 py-6 text-lg">
            <span className="relative z-10">Download Full Resume</span>
          </Button>
        </div>
      </div>
    </section>
  );
}