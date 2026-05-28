import { useLanguage } from '@/contexts/LanguageContext';
import PrepaidCard from './PrepaidCard';
import paysafeLogo from '@/assets/paysafe-logo.png';
import transcashLogo from '@/assets/transcash-logo.png';
import pcsLogo from '@/assets/pcs-logo.png';
import neosurfLogo from '@/assets/neosurf-logo.jfif';
import cryptonowLogo from '@/assets/cryptonow-logo.jpeg';
import bitnovoLogo from '@/assets/bitnovo-logo.jpeg';

const CardGrid = () => {
  const { t } = useLanguage();

  const cards = [
    {
      name: t('paysafe'),
      description: t('paysafeDesc'),
      logo: paysafeLogo,
      bgColor: 'bg-white',
    },
    {
      name: t('transcash'),
      description: t('transcashDesc'),
      logo: transcashLogo,
      bgColor: 'bg-white',
    },
    {
      name: t('pcs'),
      description: t('pcsDesc'),
      logo: pcsLogo,
      bgColor: 'bg-gray-900',
    },
    {
      name: t('neosurf'),
      description: t('neosurfDesc'),
      logo: neosurfLogo,
      bgColor: 'bg-white',
    },
    {
      name: 'Cryptonow',
      description: t('cryptonowDesc'),
      logo: cryptonowLogo,
      bgColor: 'bg-[#9b87f5]',
      kind: 'crypto' as const,
    },
    {
      name: 'Bitnovo',
      description: t('bitnovoDesc'),
      logo: bitnovoLogo,
      bgColor: 'bg-[#0a2540]',
      kind: 'crypto' as const,
    },
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <div 
              key={card.name} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <PrepaidCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardGrid;
