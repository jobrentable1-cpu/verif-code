import { useLanguage } from '@/contexts/LanguageContext';
import { Shield } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold">PrepaidHub</span>
          </div>
          
          {/* Links */}
          <nav className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-accent transition-colors">
              {t('legalNotice')}
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              {t('privacy')}
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              {t('contact')}
            </a>
          </nav>
          
          {/* Copyright */}
          <p className="text-sm text-background/60">
            © {currentYear} PrepaidHub. {t('footerRights')}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
