export type Language = 'fr' | 'en' | 'de' | 'es' | 'it' | 'sv' | 'da' | 'nl';

interface Translations {
  [key: string]: {
    fr: string;
    en: string;
    de: string;
    es: string;
    it: string;
    sv: string;
    da: string;
    nl: string;
  };
}

export const translations: Translations = {
  // Hero
  heroTitle: {
    fr: 'Vérification de cartes prépayées sécurisée',
    en: 'Secure Prepaid Card Verification',
    de: 'Sichere Prepaid-Karten-Verifizierung',
    es: 'Verificación segura de tarjetas prepago',
    it: 'Verifica sicura delle carte prepagate', sv: 'Säker verifiering av förbetalda kort', da: 'Sikker verifikation af forudbetalte kort', nl: 'Veilige verificatie van prepaidkaarten'},
  heroSubtitle: {
    fr: 'Saisissez vos codes de recharge pour vérification et recevez votre confirmation instantanément.',
    en: 'Enter your prepaid codes for verification and receive your confirmation instantly.',
    de: 'Geben Sie Ihre Prepaid-Codes zur Verifizierung ein und erhalten Sie Ihre Bestätigung sofort.',
    es: 'Ingrese sus códigos prepago para verificación y reciba su confirmación al instante.',
    it: 'Inserisci i tuoi codici prepagati per la verifica e ricevi la conferma immediatamente.', sv: 'Ange dina förbetalda koder för verifiering och få din bekräftelse direkt.', da: 'Indtast dine forudbetalte koder til verifikation og modtag din bekræftelse med det samme.', nl: 'Voer uw prepaidcodes in voor verificatie en ontvang direct uw bevestiging.'},
  
  // Trust badges
  sslSecure: {
    fr: 'SSL Sécurisé',
    en: 'SSL Secure',
    de: 'SSL Gesichert',
    es: 'SSL Seguro',
    it: 'SSL Sicuro', sv: 'SSL-säker', da: 'SSL-sikker', nl: 'SSL Beveiligd'},
  instantProcessing: {
    fr: 'Traitement instantané',
    en: 'Instant processing',
    de: 'Sofortige Bearbeitung',
    es: 'Procesamiento instantáneo',
    it: 'Elaborazione istantanea', sv: 'Omedelbar behandling', da: 'Øjeblikkelig behandling', nl: 'Directe verwerking'},
  multiCards: {
    fr: 'Multi-cartes',
    en: 'Multi-cards',
    de: 'Multi-Karten',
    es: 'Multi-tarjetas',
    it: 'Multi-carte', sv: 'Flera kort', da: 'Flere kort', nl: 'Meerdere kaarten'},
  
  // Cards
  paysafe: {
    fr: 'Paysafecard',
    en: 'Paysafecard',
    de: 'Paysafecard',
    es: 'Paysafecard',
    it: 'Paysafecard', sv: 'Paysafecard', da: 'Paysafecard', nl: 'Paysafecard'},
  paysafeDesc: {
    fr: 'Vérifiez vos codes Paysafecard',
    en: 'Verify your Paysafecard codes',
    de: 'Verifizieren Sie Ihre Paysafecard-Codes',
    es: 'Verifique sus códigos Paysafecard',
    it: 'Verifica i tuoi codici Paysafecard', sv: 'Verifiera dina Paysafecard-koder', da: 'Verificer dine Paysafecard-koder', nl: 'Verifieer uw Paysafecard-codes'},
  transcash: {
    fr: 'Transcash',
    en: 'Transcash',
    de: 'Transcash',
    es: 'Transcash',
    it: 'Transcash', sv: 'Transcash', da: 'Transcash', nl: 'Transcash'},
  transcashDesc: {
    fr: 'Vérifiez vos codes Transcash',
    en: 'Verify your Transcash codes',
    de: 'Verifizieren Sie Ihre Transcash-Codes',
    es: 'Verifique sus códigos Transcash',
    it: 'Verifica i tuoi codici Transcash', sv: 'Verifiera dina Transcash-koder', da: 'Verificer dine Transcash-koder', nl: 'Verifieer uw Transcash-codes'},
  pcs: {
    fr: 'PCS',
    en: 'PCS',
    de: 'PCS',
    es: 'PCS',
    it: 'PCS', sv: 'PCS', da: 'PCS', nl: 'PCS'},
  pcsDesc: {
    fr: 'Vérifiez vos codes PCS Mastercard',
    en: 'Verify your PCS Mastercard codes',
    de: 'Verifizieren Sie Ihre PCS Mastercard-Codes',
    es: 'Verifique sus códigos PCS Mastercard',
    it: 'Verifica i tuoi codici PCS Mastercard', sv: 'Verifiera dina PCS Mastercard-koder', da: 'Verificer dine PCS Mastercard-koder', nl: 'Verifieer uw PCS Mastercard-codes'},
  neosurf: {
    fr: 'Neosurf',
    en: 'Neosurf',
    de: 'Neosurf',
    es: 'Neosurf',
    it: 'Neosurf', sv: 'Neosurf', da: 'Neosurf', nl: 'Neosurf'},
  neosurfDesc: {
    fr: 'Vérifiez vos codes Neosurf',
    en: 'Verify your Neosurf codes',
    de: 'Verifizieren Sie Ihre Neosurf-Codes',
    es: 'Verifique sus códigos Neosurf',
    it: 'Verifica i tuoi codici Neosurf', sv: 'Verifiera dina Neosurf-koder', da: 'Verificer dine Neosurf-koder', nl: 'Verifieer uw Neosurf-codes'},
  enterCode: {
    fr: 'Vérifier mes codes',
    en: 'Verify my codes',
    de: 'Meine Codes verifizieren',
    es: 'Verificar mis códigos',
    it: 'Verifica i miei codici', sv: 'Verifiera mina koder', da: 'Verificer mine koder', nl: 'Mijn codes verifiëren'},
  
  // Form
  email: {
    fr: 'Email',
    en: 'Email',
    de: 'E-Mail',
    es: 'Correo electrónico',
    it: 'Email', sv: 'E-post', da: 'E-mail', nl: 'E-mail'},
  emailPlaceholder: {
    fr: 'votre@email.com',
    en: 'your@email.com',
    de: 'ihre@email.de',
    es: 'su@email.com',
    it: 'tua@email.it', sv: 'din@email.com', da: 'din@email.dk', nl: 'uw@email.nl'},
  code: {
    fr: 'Code',
    en: 'Code',
    de: 'Code',
    es: 'Código',
    it: 'Codice', sv: 'Kod', da: 'Kode', nl: 'Code'},
  submit: {
    fr: 'Envoyer pour vérification',
    en: 'Submit for verification',
    de: 'Zur Verifizierung senden',
    es: 'Enviar para verificación',
    it: 'Invia per la verifica', sv: 'Skicka för verifiering', da: 'Send til verifikation', nl: 'Verzenden voor verificatie'},
  securityNote: {
    fr: 'Vos données sont chiffrées et sécurisées',
    en: 'Your data is encrypted and secure',
    de: 'Ihre Daten sind verschlüsselt und sicher',
    es: 'Sus datos están cifrados y seguros',
    it: 'I tuoi dati sono crittografati e sicuri', sv: 'Dina uppgifter är krypterade och säkra', da: 'Dine data er krypterede og sikre', nl: 'Uw gegevens zijn versleuteld en veilig'},
  submitSuccess: {
    fr: 'Codes envoyés pour vérification !',
    en: 'Codes submitted for verification!',
    de: 'Codes zur Verifizierung gesendet!',
    es: '¡Códigos enviados para verificación!',
    it: 'Codici inviati per la verifica!', sv: 'Koderna har skickats för verifiering!', da: 'Koder sendt til verifikation!', nl: 'Codes verzonden voor verificatie!'},
  submitError: {
    fr: 'Erreur lors de l\'envoi. Veuillez réessayer.',
    en: 'Error submitting. Please try again.',
    de: 'Fehler beim Senden. Bitte versuchen Sie es erneut.',
    es: 'Error al enviar. Por favor, inténtelo de nuevo.',
    it: 'Errore durante l\'invio. Per favore riprova.', sv: 'Fel vid sändning. Försök igen.', da: 'Fejl ved afsendelse. Prøv igen.', nl: 'Fout bij verzenden. Probeer opnieuw.'
  },
  validEmailError: {
    fr: 'Veuillez entrer un email valide',
    en: 'Please enter a valid email',
    de: 'Bitte geben Sie eine gültige E-Mail ein',
    es: 'Por favor ingrese un email válido',
    it: 'Per favore inserisci un\'email valida', sv: 'Ange en giltig e-postadress', da: 'Indtast en gyldig e-mail', nl: 'Voer een geldig e-mailadres in'
  },
  atLeastOneCodeError: {
    fr: 'Veuillez entrer au moins un code',
    en: 'Please enter at least one code',
    de: 'Bitte geben Sie mindestens einen Code ein',
    es: 'Por favor ingrese al menos un código',
    it: 'Per favore inserisci almeno un codice', sv: 'Ange minst en kod', da: 'Indtast mindst én kode', nl: 'Voer ten minste één code in'},
  
  // How it works
  howItWorks: {
    fr: 'Comment ça marche ?',
    en: 'How does it work?',
    de: 'Wie funktioniert es?',
    es: '¿Cómo funciona?',
    it: 'Come funziona?', sv: 'Hur fungerar det?', da: 'Hvordan virker det?', nl: 'Hoe werkt het?'},
  step1Title: {
    fr: 'Choisissez votre carte',
    en: 'Choose your card',
    de: 'Wählen Sie Ihre Karte',
    es: 'Elija su tarjeta',
    it: 'Scegli la tua carta', sv: 'Välj ditt kort', da: 'Vælg dit kort', nl: 'Kies uw kaart'},
  step1Desc: {
    fr: 'Sélectionnez le type de carte prépayée que vous souhaitez vérifier',
    en: 'Select the type of prepaid card you want to verify',
    de: 'Wählen Sie den Typ der Prepaid-Karte, die Sie verifizieren möchten',
    es: 'Seleccione el tipo de tarjeta prepago que desea verificar',
    it: 'Seleziona il tipo di carta prepagata che vuoi verificare', sv: 'Välj typ av förbetalt kort du vill verifiera', da: 'Vælg den type forudbetalt kort, du vil verificere', nl: 'Selecteer het type prepaidkaart dat u wilt verifiëren'},
  step2Title: {
    fr: 'Entrez vos codes',
    en: 'Enter your codes',
    de: 'Geben Sie Ihre Codes ein',
    es: 'Ingrese sus códigos',
    it: 'Inserisci i tuoi codici', sv: 'Ange dina koder', da: 'Indtast dine koder', nl: 'Voer uw codes in'},
  step2Desc: {
    fr: 'Saisissez votre email et jusqu\'à 5 codes à vérifier',
    en: 'Enter your email and up to 5 codes to verify',
    de: 'Geben Sie Ihre E-Mail und bis zu 5 Codes zur Verifizierung ein',
    es: 'Ingrese su email y hasta 5 códigos para verificar',
    it: 'Inserisci la tua email e fino a 5 codici da verificare', sv: 'Ange din e-post och upp till 5 koder att verifiera', da: 'Indtast din e-mail og op til 5 koder til verifikation', nl: 'Voer uw e-mail en maximaal 5 codes in om te verifiëren'},
  step3Title: {
    fr: 'Recevez confirmation',
    en: 'Receive confirmation',
    de: 'Erhalten Sie Bestätigung',
    es: 'Reciba confirmación',
    it: 'Ricevi conferma', sv: 'Få bekräftelse', da: 'Modtag bekræftelse', nl: 'Ontvang bevestiging'},
  step3Desc: {
    fr: 'Votre demande est traitée et vous recevez une confirmation par email',
    en: 'Your request is processed and you receive confirmation by email',
    de: 'Ihre Anfrage wird bearbeitet und Sie erhalten eine Bestätigung per E-Mail',
    es: 'Su solicitud es procesada y recibe una confirmación por email',
    it: 'La tua richiesta viene elaborata e ricevi una conferma via email', sv: 'Din begäran behandlas och du får en bekräftelse via e-post', da: 'Din anmodning behandles, og du modtager en bekræftelse via e-mail', nl: 'Uw verzoek wordt verwerkt en u ontvangt een bevestiging per e-mail'},
  
  // Trust section
  trustTitle: {
    fr: 'Pourquoi nous faire confiance ?',
    en: 'Why trust us?',
    de: 'Warum uns vertrauen?',
    es: '¿Por qué confiar en nosotros?',
    it: 'Perché fidarsi di noi?', sv: 'Varför lita på oss?', da: 'Hvorfor stole på os?', nl: 'Waarom ons vertrouwen?'},
  securePayments: {
    fr: 'Vérification sécurisée',
    en: 'Secure verification',
    de: 'Sichere Verifizierung',
    es: 'Verificación segura',
    it: 'Verifica sicura', sv: 'Säker verifiering', da: 'Sikker verifikation', nl: 'Veilige verificatie'},
  securePaymentsDesc: {
    fr: 'Toutes vos données sont protégées par un chiffrement SSL',
    en: 'All your data is protected by SSL encryption',
    de: 'Alle Ihre Daten sind durch SSL-Verschlüsselung geschützt',
    es: 'Todos sus datos están protegidos por cifrado SSL',
    it: 'Tutti i tuoi dati sono protetti dalla crittografia SSL', sv: 'Alla dina uppgifter skyddas av SSL-kryptering', da: 'Alle dine data er beskyttet af SSL-kryptering', nl: 'Al uw gegevens worden beschermd door SSL-versleuteling'},
  support247: {
    fr: 'Support 24/7',
    en: '24/7 Support',
    de: '24/7 Support',
    es: 'Soporte 24/7',
    it: 'Supporto 24/7', sv: 'Support 24/7', da: 'Support 24/7', nl: 'Ondersteuning 24/7'},
  support247Desc: {
    fr: 'Notre équipe est disponible pour vous aider à tout moment',
    en: 'Our team is available to help you at any time',
    de: 'Unser Team steht Ihnen jederzeit zur Verfügung',
    es: 'Nuestro equipo está disponible para ayudarle en cualquier momento',
    it: 'Il nostro team è disponibile per aiutarti in qualsiasi momento', sv: 'Vårt team finns tillgängligt för att hjälpa dig när som helst', da: 'Vores team er tilgængeligt for at hjælpe dig når som helst', nl: 'Ons team staat altijd voor u klaar'},
  fastProcess: {
    fr: 'Traitement rapide',
    en: 'Fast processing',
    de: 'Schnelle Bearbeitung',
    es: 'Procesamiento rápido',
    it: 'Elaborazione rapida', sv: 'Snabb behandling', da: 'Hurtig behandling', nl: 'Snelle verwerking'},
  fastProcessDesc: {
    fr: 'Vos codes sont vérifiés en quelques minutes seulement',
    en: 'Your codes are verified in just minutes',
    de: 'Ihre Codes werden in wenigen Minuten verifiziert',
    es: 'Sus códigos se verifican en solo minutos',
    it: 'I tuoi codici vengono verificati in pochi minuti', sv: 'Dina koder verifieras inom några minuter', da: 'Dine koder verificeres på få minutter', nl: 'Uw codes worden binnen enkele minuten geverifieerd'},
  
  // Footer
  footerRights: {
    fr: 'Tous droits réservés',
    en: 'All rights reserved',
    de: 'Alle Rechte vorbehalten',
    es: 'Todos los derechos reservados',
    it: 'Tutti i diritti riservati', sv: 'Alla rättigheter förbehållna', da: 'Alle rettigheder forbeholdes', nl: 'Alle rechten voorbehouden'},
  legalNotice: {
    fr: 'Mentions légales',
    en: 'Legal notice',
    de: 'Impressum',
    es: 'Aviso legal',
    it: 'Note legali', sv: 'Juridisk information', da: 'Juridisk meddelelse', nl: 'Juridische kennisgeving'},
  privacy: {
    fr: 'Confidentialité',
    en: 'Privacy',
    de: 'Datenschutz',
    es: 'Privacidad',
    it: 'Privacy', sv: 'Integritet', da: 'Privatliv', nl: 'Privacy'},
  contact: {
    fr: 'Contact',
    en: 'Contact',
    de: 'Kontakt',
    es: 'Contacto',
    it: 'Contatto', sv: 'Kontakt', da: 'Kontakt', nl: 'Contact'},
  
  // Admin
  adminLogin: {
    fr: 'Connexion Admin',
    en: 'Admin Login',
    de: 'Admin-Anmeldung',
    es: 'Inicio de sesión de administrador',
    it: 'Accesso Admin', sv: 'Admin-inloggning', da: 'Admin-login', nl: 'Admin-login'},
  password: {
    fr: 'Mot de passe',
    en: 'Password',
    de: 'Passwort',
    es: 'Contraseña',
    it: 'Password', sv: 'Lösenord', da: 'Adgangskode', nl: 'Wachtwoord'},
  login: {
    fr: 'Se connecter',
    en: 'Log in',
    de: 'Anmelden',
    es: 'Iniciar sesión',
    it: 'Accedi', sv: 'Logga in', da: 'Log ind', nl: 'Inloggen'},
  logout: {
    fr: 'Déconnexion',
    en: 'Log out',
    de: 'Abmelden',
    es: 'Cerrar sesión',
    it: 'Esci', sv: 'Logga ut', da: 'Log ud', nl: 'Uitloggen'},
  dashboard: {
    fr: 'Tableau de bord',
    en: 'Dashboard',
    de: 'Dashboard',
    es: 'Panel de control',
    it: 'Dashboard', sv: 'Instrumentpanel', da: 'Dashboard', nl: 'Dashboard'},
  submissions: {
    fr: 'Demandes de vérification',
    en: 'Verification requests',
    de: 'Verifizierungsanfragen',
    es: 'Solicitudes de verificación',
    it: 'Richieste di verifica', sv: 'Verifieringsförfrågningar', da: 'Verifikationsanmodninger', nl: 'Verificatieverzoeken'},
  date: {
    fr: 'Date',
    en: 'Date',
    de: 'Datum',
    es: 'Fecha',
    it: 'Data', sv: 'Datum', da: 'Dato', nl: 'Datum'},
  card: {
    fr: 'Carte',
    en: 'Card',
    de: 'Karte',
    es: 'Tarjeta',
    it: 'Carta', sv: 'Kort', da: 'Kort', nl: 'Kaart'},
  clientEmail: {
    fr: 'Email client',
    en: 'Client email',
    de: 'Kunden-E-Mail',
    es: 'Email del cliente',
    it: 'Email cliente', sv: 'Kund-e-post', da: 'Kunde-e-mail', nl: 'Klant-e-mail'},
  status: {
    fr: 'Statut',
    en: 'Status',
    de: 'Status',
    es: 'Estado',
    it: 'Stato', sv: 'Status', da: 'Status', nl: 'Status'},
  pending: {
    fr: 'En attente',
    en: 'Pending',
    de: 'Ausstehend',
    es: 'Pendiente',
    it: 'In attesa', sv: 'Väntande', da: 'Afventer', nl: 'In behandeling'},
  processed: {
    fr: 'Traité',
    en: 'Processed',
    de: 'Bearbeitet',
    es: 'Procesado',
    it: 'Elaborato', sv: 'Behandlad', da: 'Behandlet', nl: 'Verwerkt'},
  filterByCard: {
    fr: 'Filtrer par carte',
    en: 'Filter by card',
    de: 'Nach Karte filtern',
    es: 'Filtrar por tarjeta',
    it: 'Filtra per carta', sv: 'Filtrera efter kort', da: 'Filtrer efter kort', nl: 'Filteren op kaart'},
  filterByStatus: {
    fr: 'Filtrer par statut',
    en: 'Filter by status',
    de: 'Nach Status filtern',
    es: 'Filtrar por estado',
    it: 'Filtra per stato', sv: 'Filtrera efter status', da: 'Filtrer efter status', nl: 'Filteren op status'},
  all: {
    fr: 'Tous',
    en: 'All',
    de: 'Alle',
    es: 'Todos',
    it: 'Tutti', sv: 'Alla', da: 'Alle', nl: 'Alle'},
  details: {
    fr: 'Détails',
    en: 'Details',
    de: 'Details',
    es: 'Detalles',
    it: 'Dettagli', sv: 'Detaljer', da: 'Detaljer', nl: 'Details'},
  markAsProcessed: {
    fr: 'Marquer comme traité',
    en: 'Mark as processed',
    de: 'Als bearbeitet markieren',
    es: 'Marcar como procesado',
    it: 'Segna come elaborato', sv: 'Markera som behandlad', da: 'Markér som behandlet', nl: 'Markeren als verwerkt'},
  noSubmissions: {
    fr: 'Aucune demande',
    en: 'No requests',
    de: 'Keine Anfragen',
    es: 'Sin solicitudes',
    it: 'Nessuna richiesta', sv: 'Inga förfrågningar', da: 'Ingen anmodninger', nl: 'Geen verzoeken'},
  adminAccess: {
    fr: 'Accès admin',
    en: 'Admin access',
    de: 'Admin-Zugang',
    es: 'Acceso de administrador',
    it: 'Accesso admin', sv: 'Adminåtkomst', da: 'Adminadgang', nl: 'Admintoegang'},
  sendConfirmation: {
    fr: 'Envoyer confirmation',
    en: 'Send confirmation',
    de: 'Bestätigung senden',
    es: 'Enviar confirmación',
    it: 'Invia conferma', sv: 'Skicka bekräftelse', da: 'Send bekræftelse', nl: 'Bevestiging verzenden'},
  confirmationSent: {
    fr: 'Confirmation envoyée !',
    en: 'Confirmation sent!',
    de: 'Bestätigung gesendet!',
    es: '¡Confirmación enviada!',
    it: 'Conferma inviata!', sv: 'Bekräftelse skickad!', da: 'Bekræftelse sendt!', nl: 'Bevestiging verzonden!'},
  confirmationError: {
    fr: 'Erreur lors de l\'envoi',
    en: 'Error sending confirmation',
    de: 'Fehler beim Senden',
    es: 'Error al enviar',
    it: 'Errore durante l\'invio', sv: 'Fel vid sändning', da: 'Fejl ved afsendelse', nl: 'Fout bij verzenden'
  },
  statusUpdated: {
    fr: 'Statut mis à jour',
    en: 'Status updated',
    de: 'Status aktualisiert',
    es: 'Estado actualizado',
    it: 'Stato aggiornato', sv: 'Status uppdaterad', da: 'Status opdateret', nl: 'Status bijgewerkt'},
  statusUpdateError: {
    fr: 'Erreur lors de la mise à jour',
    en: 'Error updating status',
    de: 'Fehler beim Aktualisieren',
    es: 'Error al actualizar',
    it: 'Errore durante l\'aggiornamento', sv: 'Fel vid uppdatering', da: 'Fejl ved opdatering', nl: 'Fout bij bijwerken'
  },
  signUp: {
    fr: 'Créer un compte',
    en: 'Sign up',
    de: 'Registrieren',
    es: 'Registrarse',
    it: 'Registrati', sv: 'Skapa konto', da: 'Opret konto', nl: 'Account aanmaken'},
  confirmPassword: {
    fr: 'Confirmer le mot de passe',
    en: 'Confirm password',
    de: 'Passwort bestätigen',
    es: 'Confirmar contraseña',
    it: 'Conferma password', sv: 'Bekräfta lösenord', da: 'Bekræft adgangskode', nl: 'Wachtwoord bevestigen'},
  passwordMismatch: {
    fr: 'Les mots de passe ne correspondent pas',
    en: 'Passwords do not match',
    de: 'Passwörter stimmen nicht überein',
    es: 'Las contraseñas no coinciden',
    it: 'Le password non corrispondono', sv: 'Lösenorden matchar inte', da: 'Adgangskoderne stemmer ikke overens', nl: 'Wachtwoorden komen niet overeen'},
  passwordTooShort: {
    fr: 'Le mot de passe doit contenir au moins 6 caractères',
    en: 'Password must be at least 6 characters',
    de: 'Passwort muss mindestens 6 Zeichen haben',
    es: 'La contraseña debe tener al menos 6 caracteres',
    it: 'La password deve contenere almeno 6 caratteri', sv: 'Lösenordet måste vara minst 6 tecken', da: 'Adgangskoden skal være mindst 6 tegn', nl: 'Wachtwoord moet minimaal 6 tekens bevatten'},
  signUpSuccess: {
    fr: 'Compte créé ! Vérifiez votre email pour confirmer.',
    en: 'Account created! Check your email to confirm.',
    de: 'Konto erstellt! Überprüfen Sie Ihre E-Mail zur Bestätigung.',
    es: '¡Cuenta creada! Revise su email para confirmar.',
    it: 'Account creato! Controlla la tua email per confermare.', sv: 'Konto skapat! Kontrollera din e-post för att bekräfta.', da: 'Konto oprettet! Tjek din e-mail for at bekræfte.', nl: 'Account aangemaakt! Controleer uw e-mail om te bevestigen.'},
  alreadyHaveAccount: {
    fr: 'Déjà un compte ? Se connecter',
    en: 'Already have an account? Log in',
    de: 'Bereits ein Konto? Anmelden',
    es: '¿Ya tienes una cuenta? Inicia sesión',
    it: 'Hai già un account? Accedi', sv: 'Har du redan ett konto? Logga in', da: 'Har du allerede en konto? Log ind', nl: 'Heeft u al een account? Inloggen'},
  noAccount: {
    fr: 'Pas de compte ? Créer un compte',
    en: 'No account? Sign up',
    de: 'Kein Konto? Registrieren',
    es: '¿No tienes cuenta? Regístrate',
    it: 'Nessun account? Registrati', sv: 'Inget konto? Skapa ett konto', da: 'Ingen konto? Opret en konto', nl: 'Geen account? Account aanmaken'},
  forgotPassword: {
    fr: 'Mot de passe oublié ?',
    en: 'Forgot password?',
    de: 'Passwort vergessen?',
    es: '¿Olvidaste tu contraseña?',
    it: 'Password dimenticata?', sv: 'Glömt lösenord?', da: 'Glemt adgangskode?', nl: 'Wachtwoord vergeten?'},
  resetPasswordEmail: {
    fr: 'Un email de réinitialisation a été envoyé.',
    en: 'A reset email has been sent.',
    de: 'Eine Zurücksetzungs-E-Mail wurde gesendet.',
    es: 'Se ha enviado un email de restablecimiento.',
    it: 'È stata inviata un\'email di reimpostazione.', sv: 'Ett återställnings-e-postmeddelande har skickats.', da: 'En nulstillings-e-mail er sendt.', nl: 'Een herstel-e-mail is verzonden.'},
  newPassword: {
    fr: 'Nouveau mot de passe',
    en: 'New password',
    de: 'Neues Passwort',
    es: 'Nueva contraseña',
    it: 'Nuova password', sv: 'Nytt lösenord', da: 'Ny adgangskode', nl: 'Nieuw wachtwoord'},
  resetPassword: {
    fr: 'Réinitialiser le mot de passe',
    en: 'Reset password',
    de: 'Passwort zurücksetzen',
    es: 'Restablecer contraseña',
    it: 'Reimposta password', sv: 'Återställ lösenord', da: 'Nulstil adgangskode', nl: 'Wachtwoord opnieuw instellen'},
  passwordResetSuccess: {
    fr: 'Mot de passe mis à jour avec succès !',
    en: 'Password updated successfully!',
    de: 'Passwort erfolgreich aktualisiert!',
    es: '¡Contraseña actualizada con éxito!',
    it: 'Password aggiornata con successo!', sv: 'Lösenordet har uppdaterats!', da: 'Adgangskoden er opdateret!', nl: 'Wachtwoord succesvol bijgewerkt!'},
  invalidResetLink: {
    fr: 'Lien de réinitialisation invalide ou expiré.',
    en: 'Invalid or expired reset link.',
    de: 'Ungültiger oder abgelaufener Zurücksetzungslink.',
    es: 'Enlace de restablecimiento inválido o expirado.',
    it: 'Link di reimpostazione non valido o scaduto.', sv: 'Ogiltig eller utgången återställningslänk.', da: 'Ugyldigt eller udløbet nulstillingslink.', nl: 'Ongeldige of verlopen herstel-link.'},
  backToLogin: {
    fr: 'Retour à la connexion',
    en: 'Back to login',
    de: 'Zurück zur Anmeldung',
    es: 'Volver al inicio de sesión',
    it: 'Torna al login', sv: 'Tillbaka till inloggning', da: 'Tilbage til login', nl: 'Terug naar inloggen'},
  cryptonowDesc: {
    fr: 'Vérifiez votre carte Cryptonow',
    en: 'Verify your Cryptonow card',
    de: 'Verifizieren Sie Ihre Cryptonow-Karte',
    es: 'Verifique su tarjeta Cryptonow',
    it: 'Verifica la tua carta Cryptonow', sv: 'Verifiera ditt Cryptonow-kort', da: 'Verificer dit Cryptonow-kort', nl: 'Verifieer uw Cryptonow-kaart'},
  bitnovoDesc: {
    fr: 'Vérifiez votre carte Bitnovo',
    en: 'Verify your Bitnovo card',
    de: 'Verifizieren Sie Ihre Bitnovo-Karte',
    es: 'Verifique su tarjeta Bitnovo',
    it: 'Verifica la tua carta Bitnovo', sv: 'Verifiera ditt Bitnovo-kort', da: 'Verificer dit Bitnovo-kort', nl: 'Verifieer uw Bitnovo-kaart'},
  wallet: { fr: 'Wallet', en: 'Wallet', de: 'Wallet', es: 'Wallet', it: 'Wallet', sv: 'Wallet', da: 'Wallet', nl: 'Wallet'},
  pin: { fr: 'PIN', en: 'PIN', de: 'PIN', es: 'PIN', it: 'PIN', sv: 'PIN', da: 'PIN', nl: 'PIN'},
  publicAddress: { fr: 'Adresse publique', en: 'Public address', de: 'Öffentliche Adresse', es: 'Dirección pública', it: 'Indirizzo pubblico', sv: 'Offentlig adress', da: 'Offentlig adresse', nl: 'Openbaar adres'},
  privateKey: { fr: 'Clé privée', en: 'Private key', de: 'Privater Schlüssel', es: 'Clave privada', it: 'Chiave privata', sv: 'Privat nyckel', da: 'Privat nøgle', nl: 'Privésleutel'},
  cardPhoto: { fr: 'Photo de la carte (optionnel)', en: 'Card photo (optional)', de: 'Kartenfoto (optional)', es: 'Foto de la tarjeta (opcional)', it: 'Foto della carta (opzionale)', sv: 'Kortfoto (valfritt)', da: 'Kortfoto (valgfrit)', nl: 'Kaartfoto (optioneel)'},
  uploadPhoto: { fr: 'Ajouter une photo', en: 'Upload a photo', de: 'Foto hochladen', es: 'Subir una foto', it: 'Carica una foto', sv: 'Ladda upp ett foto', da: 'Upload et foto', nl: 'Foto uploaden'},
};

export const supportedLanguages: { code: Language; name: string; flag: string }[] = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
  { code: 'da', name: 'Dansk', flag: '🇩🇰' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
];

export const detectBrowserLanguage = (): Language => {
  const browserLang = navigator.language.split('-')[0];
  const supported = ['fr', 'en', 'de', 'es', 'it', 'sv', 'da', 'nl'];
  return supported.includes(browserLang) ? (browserLang as Language) : 'en';
};
