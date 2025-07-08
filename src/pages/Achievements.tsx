import { Header } from '@/components/Header';
import { AchievementsSection } from '@/components/AchievementsSection';
import { Footer } from '@/components/Footer';

const Achievements = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <AchievementsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Achievements;