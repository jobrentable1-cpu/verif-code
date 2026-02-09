import { useLanguage } from '@/contexts/LanguageContext';
import { MousePointerClick, KeyRound, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: <MousePointerClick className="w-8 h-8" />,
      title: t('step1Title'),
      description: t('step1Desc'),
      number: '01',
    },
    {
      icon: <KeyRound className="w-8 h-8" />,
      title: t('step2Title'),
      description: t('step2Desc'),
      number: '02',
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: t('step3Title'),
      description: t('step3Desc'),
      number: '03',
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
          {t('howItWorks')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="relative text-center animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
              
              {/* Step card */}
              <div className="relative bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300">
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded-full">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
