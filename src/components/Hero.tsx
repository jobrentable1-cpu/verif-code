import { useLanguage } from '@/contexts/LanguageContext';
import { CreditCard, ShieldCheck, Zap } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();

  const cardLogos = [
    { name: 'Paysafecard', color: 'bg-blue-500' },
    { name: 'Transcash', color: 'bg-orange-500' },
    { name: 'PCS', color: 'bg-purple-600' },
    { name: 'Neosurf', color: 'bg-teal-500' },
  ];

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            {t('heroTitle')}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            {t('heroSubtitle')}
          </p>
          
          {/* Card logos showcase */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {cardLogos.map((card, index) => (
              <div 
                key={card.name}
                className="flex items-center gap-2 px-4 py-2 bg-card rounded-full card-shadow animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-3 h-3 rounded-full ${card.color}`} />
                <span className="text-sm font-medium text-foreground">{card.name}</span>
              </div>
            ))}
          </div>
          
          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-accent" />
              <span className="text-sm">{t('sslSecure')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-accent" />
              <span className="text-sm">{t('instantProcessing')}</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-accent" />
              <span className="text-sm">{t('multiCards')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
