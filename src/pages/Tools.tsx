import { Header } from '@/components/Header';
import { ToolsSection } from '@/components/ToolsSection';
import { Footer } from '@/components/Footer';

const Tools = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <ToolsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Tools;