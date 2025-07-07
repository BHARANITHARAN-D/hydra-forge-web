import { Header } from '@/components/Header';
import { SkillsSection } from '@/components/SkillsSection';
import { Footer } from '@/components/Footer';

const Skills = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <SkillsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Skills;