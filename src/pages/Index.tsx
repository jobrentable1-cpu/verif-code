import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CardGrid from '@/components/CardGrid';
import HowItWorks from '@/components/HowItWorks';
import TrustSection from '@/components/TrustSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <CardGrid />
        <HowItWorks />
        <TrustSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
