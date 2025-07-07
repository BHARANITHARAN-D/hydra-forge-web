import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { FileText, Download } from 'lucide-react';

export function ProjectsSection() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration and admin dashboard',
      image: '/placeholder.svg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      demoUrl: '#',
      repoUrl: '#',
      category: 'Full Stack'
    },
    {
      title: 'Portfolio Website',
      description: 'Responsive portfolio website with modern design and animations',
      image: '/placeholder.svg',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      demoUrl: '#',
      repoUrl: '#',
      category: 'Frontend'
    },
    {
      title: 'Task Management API',
      description: 'RESTful API for task management with user authentication',
      image: '/placeholder.svg',
      technologies: ['Python', 'FastAPI', 'PostgreSQL', 'JWT'],
      demoUrl: '#',
      repoUrl: '#',
      category: 'Backend'
    },
    {
      title: 'Data Scraper Tool',
      description: 'Python tool for web scraping and data analysis with visualization',
      image: '/placeholder.svg',
      technologies: ['Python', 'Selenium', 'Pandas', 'Matplotlib'],
      demoUrl: '#',
      repoUrl: '#',
      category: 'Python'
    },
    {
      title: 'Cybersecurity Scanner',
      description: 'Network vulnerability scanner built for educational purposes',
      image: '/placeholder.svg',
      technologies: ['Python', 'Nmap', 'Socket', 'Threading'],
      demoUrl: '#',
      repoUrl: '#',
      category: 'Security'
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat app with WebSocket implementation',
      image: '/placeholder.svg',
      technologies: ['React', 'Socket.io', 'Node.js', 'Express'],
      demoUrl: '#',
      repoUrl: '#',
      category: 'Full Stack'
    }
  ];

  const certificates = [
    {
      title: 'Python Programming Masterclass',
      issuer: 'Udemy',
      date: '2023',
      type: 'course',
      pdfUrl: '#'
    },
    {
      title: 'Full Stack Web Development',
      issuer: 'freeCodeCamp',
      date: '2023',
      type: 'course',
      pdfUrl: '#'
    },
    {
      title: 'Cybersecurity Fundamentals',
      issuer: 'Coursera',
      date: '2023',
      type: 'course',
      pdfUrl: '#'
    },
    {
      title: 'Bachelor of Computer Science',
      issuer: 'University Name',
      date: '2024',
      type: 'degree',
      pdfUrl: '#'
    },
    {
      title: 'Ethical Hacking Certificate',
      issuer: 'EC-Council',
      date: '2023',
      type: 'course',
      pdfUrl: '#'
    }
  ];

  const [selectedFilter, setSelectedFilter] = useState('All');
  const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'Python', 'Security'];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  const handleViewPDF = (url: string) => {
    window.open(url, '_blank');
  };

  const handleDownloadPDF = (title: string, url: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title.replace(/\s+/g, '_')}.pdf`;
    link.click();
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-cyber bg-clip-text text-transparent mb-4">
            Projects & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing my work and continuous learning journey through code and certifications.
          </p>
        </div>

        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger value="projects" className="text-lg">Projects</TabsTrigger>
            <TabsTrigger value="certificates" className="text-lg">Certificates</TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="space-y-8">
            {/* Project filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedFilter === category ? "default" : "outline"}
                  onClick={() => setSelectedFilter(category)}
                  className={`btn-cyber ${selectedFilter === category ? 'bg-primary text-primary-foreground' : ''}`}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Projects grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card 
                  key={index} 
                  className="cyber-card group overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg text-primary">{project.title}</CardTitle>
                      <Badge variant="outline" className="border-secondary text-secondary">
                        {project.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full border border-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3 pt-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 btn-cyber"
                        onClick={() => window.open(project.demoUrl, '_blank')}
                      >
                        Live Demo
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                        onClick={() => window.open(project.repoUrl, '_blank')}
                      >
                        GitHub
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="certificates" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Course Certificates */}
              <Card className="cyber-card">
                <CardHeader>
                  <CardTitle className="text-xl text-secondary flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Course Certificates
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {certificates
                    .filter(cert => cert.type === 'course')
                    .map((cert, index) => (
                      <div 
                        key={index} 
                        className="flex items-center justify-between p-3 border border-border rounded-lg hover:border-primary/50 transition-colors"
                      >
                        <div>
                          <h4 className="font-medium text-primary">{cert.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {cert.issuer} • {cert.date}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleViewPDF(cert.pdfUrl)}
                            className="btn-cyber"
                          >
                            <FileText className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDownloadPDF(cert.title, cert.pdfUrl)}
                            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                          >
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                </CardContent>
              </Card>

              {/* Degree Certificates */}
              <Card className="cyber-card">
                <CardHeader>
                  <CardTitle className="text-xl text-accent flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Degree Certificates
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {certificates
                    .filter(cert => cert.type === 'degree')
                    .map((cert, index) => (
                      <div 
                        key={index} 
                        className="flex items-center justify-between p-3 border border-border rounded-lg hover:border-primary/50 transition-colors"
                      >
                        <div>
                          <h4 className="font-medium text-primary">{cert.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {cert.issuer} • {cert.date}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleViewPDF(cert.pdfUrl)}
                            className="btn-cyber"
                          >
                            <FileText className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDownloadPDF(cert.title, cert.pdfUrl)}
                            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                          >
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}