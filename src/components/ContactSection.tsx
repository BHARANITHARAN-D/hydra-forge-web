import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // For now, just show success message
    toast({
      title: "Message Sent! 🚀",
      description: "Thanks for reaching out! I'll get back to you soon.",
      duration: 5000,
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi Hydra King Bharani! I'd like to discuss a project opportunity with you.`
    );
    window.open(`https://wa.me/YOUR_PHONE_NUMBER?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/10 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-cyber bg-clip-text text-transparent mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project or just have a chat about technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="cyber-card">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or idea..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="bg-background/50 border-border focus:border-primary resize-none"
                  />
                </div>
                
                <Button type="submit" className="w-full btn-cyber py-6 text-lg">
                  <span className="relative z-10">Send Message</span>
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <Card className="cyber-card">
              <CardHeader>
                <CardTitle className="text-2xl text-secondary">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4 p-4 border border-border rounded-lg hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Email</h4>
                    <p className="text-muted-foreground">bharani.hydra@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 border border-border rounded-lg hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent">Phone</h4>
                    <p className="text-muted-foreground">+91 XXXXX XXXXX</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 border border-border rounded-lg hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center text-secondary font-bold">
                    📍
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary">Location</h4>
                    <p className="text-muted-foreground">India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Status Card */}
            <Card className="cyber-card">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                    <span className="text-lg font-semibold text-accent">Open for Work</span>
                  </div>
                  <p className="text-muted-foreground">
                    Available for freelance projects and full-time opportunities
                  </p>
                  <Button
                    onClick={handleWhatsApp}
                    className="w-full bg-green-600 hover:bg-green-700 text-white border-none"
                  >
                    💬 WhatsApp Me
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="cyber-card">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-center text-primary mb-4">
                  Response Time
                </h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-accent">{"< 24h"}</div>
                    <div className="text-sm text-muted-foreground">Email Response</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-secondary">{"< 1h"}</div>
                    <div className="text-sm text-muted-foreground">WhatsApp Response</div>
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