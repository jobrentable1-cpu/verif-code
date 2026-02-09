export type Language = 'fr' | 'en' | 'de' | 'es' | 'it';

interface Translations {
  [key: string]: {
    fr: string;
    en: string;
    de: string;
    es: string;
    it: string;
  };
}

export const translations: Translations = {
  // Hero
  heroTitle: {
    fr: 'Vérification de cartes prépayées sécurisée',
    en: 'Secure Prepaid Card Verification',
    de: 'Sichere Prepaid-Karten-Verifizierung',
    es: 'Verificación segura de tarjetas prepago',
    it: 'Verifica sicura delle carte prepagate',
  },
  heroSubtitle: {
    fr: 'Saisissez vos codes de recharge pour vérification et recevez votre confirmation instantanément.',
    en: 'Enter your prepaid codes for verification and receive your confirmation instantly.',
    de: 'Geben Sie Ihre Prepaid-Codes zur Verifizierung ein und erhalten Sie Ihre Bestätigung sofort.',
    es: 'Ingrese sus códigos prepago para verificación y reciba su confirmación al instante.',
    it: 'Inserisci i tuoi codici prepagati per la verifica e ricevi la conferma immediatamente.',
  },
  
  // Trust badges
  sslSecure: {
    fr: 'SSL Sécurisé',
    en: 'SSL Secure',
    de: 'SSL Gesichert',
    es: 'SSL Seguro',
    it: 'SSL Sicuro',
  },
  instantProcessing: {
    fr: 'Traitement instantané',
    en: 'Instant processing',
    de: 'Sofortige Bearbeitung',
    es: 'Procesamiento instantáneo',
    it: 'Elaborazione istantanea',
  },
  multiCards: {
    fr: 'Multi-cartes',
    en: 'Multi-cards',
    de: 'Multi-Karten',
    es: 'Multi-tarjetas',
    it: 'Multi-carte',
  },
  
  // Cards
  paysafe: {
    fr: 'Paysafecard',
    en: 'Paysafecard',
    de: 'Paysafecard',
    es: 'Paysafecard',
    it: 'Paysafecard',
  },
  paysafeDesc: {
    fr: 'Vérifiez vos codes Paysafecard',
    en: 'Verify your Paysafecard codes',
    de: 'Verifizieren Sie Ihre Paysafecard-Codes',
    es: 'Verifique sus códigos Paysafecard',
    it: 'Verifica i tuoi codici Paysafecard',
  },
  transcash: {
    fr: 'Transcash',
    en: 'Transcash',
    de: 'Transcash',
    es: 'Transcash',
    it: 'Transcash',
  },
  transcashDesc: {
    fr: 'Vérifiez vos codes Transcash',
    en: 'Verify your Transcash codes',
    de: 'Verifizieren Sie Ihre Transcash-Codes',
    es: 'Verifique sus códigos Transcash',
    it: 'Verifica i tuoi codici Transcash',
  },
  pcs: {
    fr: 'PCS',
    en: 'PCS',
    de: 'PCS',
    es: 'PCS',
    it: 'PCS',
  },
  pcsDesc: {
    fr: 'Vérifiez vos codes PCS Mastercard',
    en: 'Verify your PCS Mastercard codes',
    de: 'Verifizieren Sie Ihre PCS Mastercard-Codes',
    es: 'Verifique sus códigos PCS Mastercard',
    it: 'Verifica i tuoi codici PCS Mastercard',
  },
  neosurf: {
    fr: 'Neosurf',
    en: 'Neosurf',
    de: 'Neosurf',
    es: 'Neosurf',
    it: 'Neosurf',
  },
  neosurfDesc: {
    fr: 'Vérifiez vos codes Neosurf',
    en: 'Verify your Neosurf codes',
    de: 'Verifizieren Sie Ihre Neosurf-Codes',
    es: 'Verifique sus códigos Neosurf',
    it: 'Verifica i tuoi codici Neosurf',
  },
  enterCode: {
    fr: 'Vérifier mes codes',
    en: 'Verify my codes',
    de: 'Meine Codes verifizieren',
    es: 'Verificar mis códigos',
    it: 'Verifica i miei codici',
  },
  
  // Form
  email: {
    fr: 'Email',
    en: 'Email',
    de: 'E-Mail',
    es: 'Correo electrónico',
    it: 'Email',
  },
  emailPlaceholder: {
    fr: 'votre@email.com',
    en: 'your@email.com',
    de: 'ihre@email.de',
    es: 'su@email.com',
    it: 'tua@email.it',
  },
  code: {
    fr: 'Code',
    en: 'Code',
    de: 'Code',
    es: 'Código',
    it: 'Codice',
  },
  submit: {
    fr: 'Envoyer pour vérification',
    en: 'Submit for verification',
    de: 'Zur Verifizierung senden',
    es: 'Enviar para verificación',
    it: 'Invia per la verifica',
  },
  securityNote: {
    fr: 'Vos données sont chiffrées et sécurisées',
    en: 'Your data is encrypted and secure',
    de: 'Ihre Daten sind verschlüsselt und sicher',
    es: 'Sus datos están cifrados y seguros',
    it: 'I tuoi dati sono crittografati e sicuri',
  },
  submitSuccess: {
    fr: 'Codes envoyés pour vérification !',
    en: 'Codes submitted for verification!',
    de: 'Codes zur Verifizierung gesendet!',
    es: '¡Códigos enviados para verificación!',
    it: 'Codici inviati per la verifica!',
  },
  submitError: {
    fr: 'Erreur lors de l\'envoi. Veuillez réessayer.',
    en: 'Error submitting. Please try again.',
    de: 'Fehler beim Senden. Bitte versuchen Sie es erneut.',
    es: 'Error al enviar. Por favor, inténtelo de nuevo.',
    it: 'Errore durante l\'invio. Per favore riprova.',
  },
  validEmailError: {
    fr: 'Veuillez entrer un email valide',
    en: 'Please enter a valid email',
    de: 'Bitte geben Sie eine gültige E-Mail ein',
    es: 'Por favor ingrese un email válido',
    it: 'Per favore inserisci un\'email valida',
  },
  atLeastOneCodeError: {
    fr: 'Veuillez entrer au moins un code',
    en: 'Please enter at least one code',
    de: 'Bitte geben Sie mindestens einen Code ein',
    es: 'Por favor ingrese al menos un código',
    it: 'Per favore inserisci almeno un codice',
  },
  
  // How it works
  howItWorks: {
    fr: 'Comment ça marche ?',
    en: 'How does it work?',
    de: 'Wie funktioniert es?',
    es: '¿Cómo funciona?',
    it: 'Come funziona?',
  },
  step1Title: {
    fr: 'Choisissez votre carte',
    en: 'Choose your card',
    de: 'Wählen Sie Ihre Karte',
    es: 'Elija su tarjeta',
    it: 'Scegli la tua carta',
  },
  step1Desc: {
    fr: 'Sélectionnez le type de carte prépayée que vous souhaitez vérifier',
    en: 'Select the type of prepaid card you want to verify',
    de: 'Wählen Sie den Typ der Prepaid-Karte, die Sie verifizieren möchten',
    es: 'Seleccione el tipo de tarjeta prepago que desea verificar',
    it: 'Seleziona il tipo di carta prepagata che vuoi verificare',
  },
  step2Title: {
    fr: 'Entrez vos codes',
    en: 'Enter your codes',
    de: 'Geben Sie Ihre Codes ein',
    es: 'Ingrese sus códigos',
    it: 'Inserisci i tuoi codici',
  },
  step2Desc: {
    fr: 'Saisissez votre email et jusqu\'à 5 codes à vérifier',
    en: 'Enter your email and up to 5 codes to verify',
    de: 'Geben Sie Ihre E-Mail und bis zu 5 Codes zur Verifizierung ein',
    es: 'Ingrese su email y hasta 5 códigos para verificar',
    it: 'Inserisci la tua email e fino a 5 codici da verificare',
  },
  step3Title: {
    fr: 'Recevez confirmation',
    en: 'Receive confirmation',
    de: 'Erhalten Sie Bestätigung',
    es: 'Reciba confirmación',
    it: 'Ricevi conferma',
  },
  step3Desc: {
    fr: 'Votre demande est traitée et vous recevez une confirmation par email',
    en: 'Your request is processed and you receive confirmation by email',
    de: 'Ihre Anfrage wird bearbeitet und Sie erhalten eine Bestätigung per E-Mail',
    es: 'Su solicitud es procesada y recibe una confirmación por email',
    it: 'La tua richiesta viene elaborata e ricevi una conferma via email',
  },
  
  // Trust section
  trustTitle: {
    fr: 'Pourquoi nous faire confiance ?',
    en: 'Why trust us?',
    de: 'Warum uns vertrauen?',
    es: '¿Por qué confiar en nosotros?',
    it: 'Perché fidarsi di noi?',
  },
  securePayments: {
    fr: 'Vérification sécurisée',
    en: 'Secure verification',
    de: 'Sichere Verifizierung',
    es: 'Verificación segura',
    it: 'Verifica sicura',
  },
  securePaymentsDesc: {
    fr: 'Toutes vos données sont protégées par un chiffrement SSL',
    en: 'All your data is protected by SSL encryption',
    de: 'Alle Ihre Daten sind durch SSL-Verschlüsselung geschützt',
    es: 'Todos sus datos están protegidos por cifrado SSL',
    it: 'Tutti i tuoi dati sono protetti dalla crittografia SSL',
  },
  support247: {
    fr: 'Support 24/7',
    en: '24/7 Support',
    de: '24/7 Support',
    es: 'Soporte 24/7',
    it: 'Supporto 24/7',
  },
  support247Desc: {
    fr: 'Notre équipe est disponible pour vous aider à tout moment',
    en: 'Our team is available to help you at any time',
    de: 'Unser Team steht Ihnen jederzeit zur Verfügung',
    es: 'Nuestro equipo está disponible para ayudarle en cualquier momento',
    it: 'Il nostro team è disponibile per aiutarti in qualsiasi momento',
  },
  fastProcess: {
    fr: 'Traitement rapide',
    en: 'Fast processing',
    de: 'Schnelle Bearbeitung',
    es: 'Procesamiento rápido',
    it: 'Elaborazione rapida',
  },
  fastProcessDesc: {
    fr: 'Vos codes sont vérifiés en quelques minutes seulement',
    en: 'Your codes are verified in just minutes',
    de: 'Ihre Codes werden in wenigen Minuten verifiziert',
    es: 'Sus códigos se verifican en solo minutos',
    it: 'I tuoi codici vengono verificati in pochi minuti',
  },
  
  // Footer
  footerRights: {
    fr: 'Tous droits réservés',
    en: 'All rights reserved',
    de: 'Alle Rechte vorbehalten',
    es: 'Todos los derechos reservados',
    it: 'Tutti i diritti riservati',
  },
  legalNotice: {
    fr: 'Mentions légales',
    en: 'Legal notice',
    de: 'Impressum',
    es: 'Aviso legal',
    it: 'Note legali',
  },
  privacy: {
    fr: 'Confidentialité',
    en: 'Privacy',
    de: 'Datenschutz',
    es: 'Privacidad',
    it: 'Privacy',
  },
  contact: {
    fr: 'Contact',
    en: 'Contact',
    de: 'Kontakt',
    es: 'Contacto',
    it: 'Contatto',
  },
  
  // Admin
  adminLogin: {
    fr: 'Connexion Admin',
    en: 'Admin Login',
    de: 'Admin-Anmeldung',
    es: 'Inicio de sesión de administrador',
    it: 'Accesso Admin',
  },
  password: {
    fr: 'Mot de passe',
    en: 'Password',
    de: 'Passwort',
    es: 'Contraseña',
    it: 'Password',
  },
  login: {
    fr: 'Se connecter',
    en: 'Log in',
    de: 'Anmelden',
    es: 'Iniciar sesión',
    it: 'Accedi',
  },
  logout: {
    fr: 'Déconnexion',
    en: 'Log out',
    de: 'Abmelden',
    es: 'Cerrar sesión',
    it: 'Esci',
  },
  dashboard: {
    fr: 'Tableau de bord',
    en: 'Dashboard',
    de: 'Dashboard',
    es: 'Panel de control',
    it: 'Dashboard',
  },
  submissions: {
    fr: 'Demandes de vérification',
    en: 'Verification requests',
    de: 'Verifizierungsanfragen',
    es: 'Solicitudes de verificación',
    it: 'Richieste di verifica',
  },
  date: {
    fr: 'Date',
    en: 'Date',
    de: 'Datum',
    es: 'Fecha',
    it: 'Data',
  },
  card: {
    fr: 'Carte',
    en: 'Card',
    de: 'Karte',
    es: 'Tarjeta',
    it: 'Carta',
  },
  clientEmail: {
    fr: 'Email client',
    en: 'Client email',
    de: 'Kunden-E-Mail',
    es: 'Email del cliente',
    it: 'Email cliente',
  },
  status: {
    fr: 'Statut',
    en: 'Status',
    de: 'Status',
    es: 'Estado',
    it: 'Stato',
  },
  pending: {
    fr: 'En attente',
    en: 'Pending',
    de: 'Ausstehend',
    es: 'Pendiente',
    it: 'In attesa',
  },
  processed: {
    fr: 'Traité',
    en: 'Processed',
    de: 'Bearbeitet',
    es: 'Procesado',
    it: 'Elaborato',
  },
  filterByCard: {
    fr: 'Filtrer par carte',
    en: 'Filter by card',
    de: 'Nach Karte filtern',
    es: 'Filtrar por tarjeta',
    it: 'Filtra per carta',
  },
  filterByStatus: {
    fr: 'Filtrer par statut',
    en: 'Filter by status',
    de: 'Nach Status filtern',
    es: 'Filtrar por estado',
    it: 'Filtra per stato',
  },
  all: {
    fr: 'Tous',
    en: 'All',
    de: 'Alle',
    es: 'Todos',
    it: 'Tutti',
  },
  details: {
    fr: 'Détails',
    en: 'Details',
    de: 'Details',
    es: 'Detalles',
    it: 'Dettagli',
  },
  markAsProcessed: {
    fr: 'Marquer comme traité',
    en: 'Mark as processed',
    de: 'Als bearbeitet markieren',
    es: 'Marcar como procesado',
    it: 'Segna come elaborato',
  },
  noSubmissions: {
    fr: 'Aucune demande',
    en: 'No requests',
    de: 'Keine Anfragen',
    es: 'Sin solicitudes',
    it: 'Nessuna richiesta',
  },
  adminAccess: {
    fr: 'Accès admin',
    en: 'Admin access',
    de: 'Admin-Zugang',
    es: 'Acceso de administrador',
    it: 'Accesso admin',
  },
  sendConfirmation: {
    fr: 'Envoyer confirmation',
    en: 'Send confirmation',
    de: 'Bestätigung senden',
    es: 'Enviar confirmación',
    it: 'Invia conferma',
  },
  confirmationSent: {
    fr: 'Confirmation envoyée !',
    en: 'Confirmation sent!',
    de: 'Bestätigung gesendet!',
    es: '¡Confirmación enviada!',
    it: 'Conferma inviata!',
  },
  confirmationError: {
    fr: 'Erreur lors de l\'envoi',
    en: 'Error sending confirmation',
    de: 'Fehler beim Senden',
    es: 'Error al enviar',
    it: 'Errore durante l\'invio',
  },
  statusUpdated: {
    fr: 'Statut mis à jour',
    en: 'Status updated',
    de: 'Status aktualisiert',
    es: 'Estado actualizado',
    it: 'Stato aggiornato',
  },
  statusUpdateError: {
    fr: 'Erreur lors de la mise à jour',
    en: 'Error updating status',
    de: 'Fehler beim Aktualisieren',
    es: 'Error al actualizar',
    it: 'Errore durante l\'aggiornamento',
  },
  signUp: {
    fr: 'Créer un compte',
    en: 'Sign up',
    de: 'Registrieren',
    es: 'Registrarse',
    it: 'Registrati',
  },
  confirmPassword: {
    fr: 'Confirmer le mot de passe',
    en: 'Confirm password',
    de: 'Passwort bestätigen',
    es: 'Confirmar contraseña',
    it: 'Conferma password',
  },
  passwordMismatch: {
    fr: 'Les mots de passe ne correspondent pas',
    en: 'Passwords do not match',
    de: 'Passwörter stimmen nicht überein',
    es: 'Las contraseñas no coinciden',
    it: 'Le password non corrispondono',
  },
  passwordTooShort: {
    fr: 'Le mot de passe doit contenir au moins 6 caractères',
    en: 'Password must be at least 6 characters',
    de: 'Passwort muss mindestens 6 Zeichen haben',
    es: 'La contraseña debe tener al menos 6 caracteres',
    it: 'La password deve contenere almeno 6 caratteri',
  },
  signUpSuccess: {
    fr: 'Compte créé ! Vérifiez votre email pour confirmer.',
    en: 'Account created! Check your email to confirm.',
    de: 'Konto erstellt! Überprüfen Sie Ihre E-Mail zur Bestätigung.',
    es: '¡Cuenta creada! Revise su email para confirmar.',
    it: 'Account creato! Controlla la tua email per confermare.',
  },
  alreadyHaveAccount: {
    fr: 'Déjà un compte ? Se connecter',
    en: 'Already have an account? Log in',
    de: 'Bereits ein Konto? Anmelden',
    es: '¿Ya tienes una cuenta? Inicia sesión',
    it: 'Hai già un account? Accedi',
  },
  noAccount: {
    fr: 'Pas de compte ? Créer un compte',
    en: 'No account? Sign up',
    de: 'Kein Konto? Registrieren',
    es: '¿No tienes cuenta? Regístrate',
    it: 'Nessun account? Registrati',
  },
};

export const supportedLanguages: { code: Language; name: string; flag: string }[] = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
];

export const detectBrowserLanguage = (): Language => {
  const browserLang = navigator.language.split('-')[0];
  const supported = ['fr', 'en', 'de', 'es', 'it'];
  return supported.includes(browserLang) ? (browserLang as Language) : 'en';
};
