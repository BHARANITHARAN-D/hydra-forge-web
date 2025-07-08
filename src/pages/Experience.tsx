import { Header } from '@/components/Header';
import { ExperienceSection } from '@/components/ExperienceSection';
import { Footer } from '@/components/Footer';

const Experience = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <ExperienceSection />
      </main>
      <Footer />
    </div>
  );
};

export default Experience;