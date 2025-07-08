import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trophy, Star, Award, Target, Zap, Crown } from 'lucide-react';

export function AchievementsSection() {
  const achievements = [
    {
      title: 'Full Stack Foundations',
      icon: <Trophy className="h-8 w-8" />,
      date: '2024',
      type: 'milestone',
      description: 'Successfully completed comprehensive full-stack development learning path',
      level: 'Gold',
      points: 1000
    },
    {
      title: 'Python Automation Master',
      icon: <Zap className="h-8 w-8" />,
      date: '2023',
      type: 'skill',
      description: 'Built 15+ automation scripts for data processing and web scraping',
      level: 'Platinum',
      points: 1500
    },
    {
      title: 'Cybersecurity Explorer',
      icon: <Award className="h-8 w-8" />,
      date: '2023',
      type: 'certification',
      description: 'Completed cybersecurity internship with hands-on penetration testing',
      level: 'Silver',
      points: 800
    },
    {
      title: 'Project Portfolio Champion',
      icon: <Star className="h-8 w-8" />,
      date: '2024',
      type: 'portfolio',
      description: 'Successfully delivered 50+ projects across web development and automation',
      level: 'Gold',
      points: 1200
    },
    {
      title: 'Open Source Contributor',
      icon: <Target className="h-8 w-8" />,
      date: '2024',
      type: 'community',
      description: 'Active contributor to various GitHub repositories and coding communities',
      level: 'Bronze',
      points: 500
    },
    {
      title: 'Future Full Stack Architect',
      icon: <Crown className="h-8 w-8" />,
      date: 'In Progress',
      type: 'goal',
      description: 'On the path to becoming a comprehensive full-stack developer',
      level: 'Diamond',
      points: 2000
    }
  ];

  const milestones = [
    { year: '2022', event: 'Started Programming Journey', description: 'First "Hello World" in Python' },
    { year: '2023', event: 'First Automation Script', description: 'Built data scraper for personal use' },
    { year: '2023', event: 'Cybersecurity Internship', description: '3-month intensive security training' },
    { year: '2024', event: 'Web Development Mastery', description: 'Built first responsive portfolio website' },
    { year: '2024', event: 'Freelance Success', description: 'Delivered first paid client project' },
    { year: '2025', event: 'Full Stack Goal', description: 'Target: Complete full-stack certification' }
  ];

  const stats = [
    { label: 'Total Projects', value: '50+', color: 'text-primary' },
    { label: 'Technologies Learned', value: '20+', color: 'text-secondary' },
    { label: 'Achievement Points', value: '7000+', color: 'text-accent' },
    { label: 'Learning Streak', value: '365 days', color: 'text-warning-orange' }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Diamond': return 'bg-accent/20 text-accent border-accent/30';
      case 'Platinum': return 'bg-primary/20 text-primary border-primary/30';
      case 'Gold': return 'bg-warning-orange/20 text-warning-orange border-warning-orange/30';
      case 'Silver': return 'bg-secondary/20 text-secondary border-secondary/30';
      case 'Bronze': return 'bg-muted/20 text-muted-foreground border-muted/30';
      default: return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'milestone': return 'bg-accent/10 text-accent';
      case 'skill': return 'bg-primary/10 text-primary';
      case 'certification': return 'bg-secondary/10 text-secondary';
      case 'portfolio': return 'bg-warning-orange/10 text-warning-orange';
      case 'community': return 'bg-terminal-green/10 text-terminal-green';
      case 'goal': return 'bg-destructive/10 text-destructive';
      default: return 'bg-muted/10 text-muted-foreground';
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-primary/5 to-secondary/5 animate-glow-pulse" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Floating achievement particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 6}s`
            }}
          >
            <Star className="h-3 w-3 text-accent/30" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-cyber bg-clip-text text-transparent mb-6 glow-primary-lg">
            Hall of Achievements
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Every milestone conquered, every skill mastered, and every goal achieved on my journey 
            from curious beginner to aspiring full-stack architect.
          </p>
        </div>

        {/* Achievement Stats */}
        <Card className="cyber-card mb-16 animate-fade-in">
          <CardContent className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="space-y-2 animate-glow-pulse"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`text-4xl font-bold ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <Card 
              key={achievement.title}
              className="cyber-card group animate-fade-in hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 rounded-full bg-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 w-fit">
                  {achievement.icon}
                </div>
                <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">
                  {achievement.title}
                </CardTitle>
                <div className="flex justify-center gap-2 mt-2">
                  <Badge className={getLevelColor(achievement.level)}>
                    {achievement.level}
                  </Badge>
                  <Badge className={getTypeColor(achievement.type)}>
                    {achievement.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {achievement.description}
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-border/50">
                  <span className="text-xs text-muted-foreground">{achievement.date}</span>
                  <span className="text-sm font-bold text-accent">+{achievement.points} XP</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline */}
        <Card className="cyber-card animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <CardHeader>
            <CardTitle className="text-2xl text-center text-secondary">
              Achievement Timeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className="flex items-start gap-4 animate-slide-in"
                  style={{ animationDelay: `${1 + (index * 0.1)}s` }}
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold border border-primary/30">
                    {milestone.year}
                  </div>
                  <div className="flex-1 space-y-1">
                    <h4 className="font-semibold text-foreground">{milestone.event}</h4>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <Button className="btn-cyber px-8 py-6 text-lg">
            <span className="relative z-10">View My Journey</span>
          </Button>
        </div>
      </div>
    </section>
  );
}