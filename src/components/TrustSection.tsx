import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Headphones, Zap } from 'lucide-react';

const TrustSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: t('securePayments'),
      description: t('securePaymentsDesc'),
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: t('support247'),
      description: t('support247Desc'),
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: t('fastProcess'),
      description: t('fastProcessDesc'),
    },
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          {t('trustTitle')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-primary-foreground/10 rounded-xl flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-primary-foreground/80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
