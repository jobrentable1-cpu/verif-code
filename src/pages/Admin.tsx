import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { fetchSubmissions, updateSubmissionStatus, deleteSubmission, Submission } from '@/lib/supabase-submissions';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Shield, LogOut, Filter, Eye, CheckCircle, RefreshCw, Mail, Trash2, Inbox, Clock, CheckCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { toast } from 'sonner';

const Admin = () => {
  const { t, language } = useLanguage();
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [authSuccess, setAuthSuccess] = useState('');
  
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [filterCard, setFilterCard] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [sendingConfirmation, setSendingConfirmation] = useState(false);

  // Check auth state on mount
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setIsLoggedIn(!!session);
      setIsLoading(false);
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsLoggedIn(!!session);
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Fetch submissions when logged in
  useEffect(() => {
    if (isLoggedIn) {
      loadSubmissions();
    }
  }, [isLoggedIn]);

  const loadSubmissions = async () => {
    const result = await fetchSubmissions();
    if (result.data) {
      setSubmissions(result.data);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    setAuthSuccess('');
    
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setAuthError(error.message);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    setAuthSuccess('');

    if (password !== confirmPassword) {
      setAuthError(t('passwordMismatch') || 'Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setAuthError(t('passwordTooShort') || 'Password must be at least 6 characters');
      return;
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/admin`
      }
    });

    if (error) {
      setAuthError(error.message);
    } else {
      setAuthSuccess(t('signUpSuccess') || 'Account created! Check your email to confirm.');
      setIsSignUp(false);
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsLoggedIn(false);
  };

  const handleDelete = async (id: string) => {
    const result = await deleteSubmission(id);
    if (result.success) {
      toast.success('Demande supprimée');
      setSubmissions((prev) => prev.filter((s) => s.id !== id));
      if (selectedSubmission?.id === id) {
        setSelectedSubmission(null);
      }
    } else {
      toast.error('Erreur lors de la suppression');
    }
  };

  const handleUpdateStatus = async (id: string) => {
    const result = await updateSubmissionStatus(id, 'processed');
    if (result.success) {
      toast.success(t('statusUpdated'));
      loadSubmissions();
      if (selectedSubmission?.id === id) {
        setSelectedSubmission({ ...selectedSubmission, status: 'processed' });
      }
    } else {
      toast.error(t('statusUpdateError'));
    }
  };

  const handleSendConfirmation = async (submission: Submission) => {
    setSendingConfirmation(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-confirmation', {
        body: {
          submissionId: submission.id,
          recipientEmail: submission.email,
          cardType: submission.card_type,
          language: language,
        },
      });

      if (error) {
        const msg = String((error as any)?.message ?? error);
        console.error('Error sending confirmation:', error);

        // Resend “testing mode” / domain not verified: give a clear action.
        if (msg.toLowerCase().includes('verify a domain') || msg.toLowerCase().includes('testing email')) {
          toast.error("Configuration email requise: vérifiez un domaine dans Resend et utilisez une adresse 'from' de ce domaine.");
        } else {
          toast.error(msg || t('confirmationError'));
        }
        return;
      }

      if (data?.skipped) {
        toast.error("Impossible d'envoyer au client tant que le domaine d'envoi n'est pas vérifié.");
        return;
      }

      toast.success(t('confirmationSent'));
    } catch (error) {
      console.error('Error sending confirmation:', error);
      toast.error(t('confirmationError'));
    } finally {
      setSendingConfirmation(false);
    }
  };

  const filteredSubmissions = submissions.filter(sub => {
    if (filterCard !== 'all' && sub.card_type !== filterCard) return false;
    if (filterStatus !== 'all' && sub.status !== filterStatus) return false;
    return true;
  });

  const cardTypes = [...new Set(submissions.map(s => s.card_type))];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-card rounded-2xl card-shadow p-8">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-12 h-12 hero-gradient rounded-xl flex items-center justify-center">
                  <Shield className="w-7 h-7 text-primary-foreground" />
                </div>
                <span className="text-2xl font-bold text-foreground">PrepaidHub</span>
              </Link>
            </div>
            
            <h1 className="text-2xl font-bold text-center text-foreground mb-8">
              {isSignUp ? t('signUp') : t('adminLogin')}
            </h1>
            
            <form onSubmit={isSignUp ? handleSignUp : handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">{t('email')}</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@example.com"
                  className="bg-secondary/50"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">{t('password')}</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-secondary/50"
                  required
                  minLength={6}
                />
              </div>

              {isSignUp && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">{t('confirmPassword')}</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="bg-secondary/50"
                    required
                    minLength={6}
                  />
                </div>
              )}
              
              {authError && (
                <p className="text-sm text-destructive bg-destructive/10 p-3 rounded-lg">
                  {authError}
                </p>
              )}

              {authSuccess && (
                <p className="text-sm text-primary bg-primary/10 border border-border p-3 rounded-lg">
                  {authSuccess}
                </p>
              )}
              
              <Button type="submit" className="w-full hero-gradient text-primary-foreground py-6">
                {isSignUp ? t('signUp') : t('login')}
              </Button>
            </form>

            <div className="mt-6 text-center space-y-3">
              {!isSignUp && (
                <button
                  type="button"
                  onClick={async () => {
                    if (!email) {
                      setAuthError(t('validEmailError') || 'Please enter your email first');
                      return;
                    }
                    setAuthError('');
                    const { error } = await supabase.auth.resetPasswordForEmail(email, {
                      redirectTo: `${window.location.origin}/reset-password`,
                    });
                    if (error) {
                      setAuthError(error.message);
                    } else {
                      setAuthSuccess(t('resetPasswordEmail'));
                    }
                  }}
                  className="text-sm text-muted-foreground hover:text-primary hover:underline block w-full"
                >
                  {t('forgotPassword')}
                </button>
              )}
              <button
                type="button"
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setAuthError('');
                  setAuthSuccess('');
                }}
                className="text-sm text-primary hover:underline"
              >
                {isSignUp ? t('alreadyHaveAccount') : t('noAccount')}
              </button>
            </div>
            
            <div className="mt-6 flex justify-center">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/30">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border px-4 sm:px-6 py-4 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 hero-gradient rounded-lg flex items-center justify-center shadow-md">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">PrepaidHub</span>
            </Link>
            <Badge variant="secondary" className="hidden sm:inline-flex">{t('dashboard')}</Badge>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 justify-end">
            <Button variant="ghost" size="sm" onClick={loadSubmissions} title="Rafraîchir">
              <RefreshCw className="w-4 h-4" />
            </Button>
            <LanguageSwitcher />
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">{t('logout')}</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="p-4 sm:p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-foreground tracking-tight">
              {t('submissions')}
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              Gérez et suivez toutes les demandes de vérification de cartes.
            </p>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-card rounded-xl card-shadow p-5 flex items-center gap-4 border border-border/50">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Inbox className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total</p>
                <p className="text-2xl font-bold text-foreground">{submissions.length}</p>
              </div>
            </div>
            <div className="bg-card rounded-xl card-shadow p-5 flex items-center gap-4 border border-border/50">
              <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{t('pending')}</p>
                <p className="text-2xl font-bold text-foreground">
                  {submissions.filter(s => s.status === 'pending').length}
                </p>
              </div>
            </div>
            <div className="bg-card rounded-xl card-shadow p-5 flex items-center gap-4 border border-border/50">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <CheckCheck className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{t('processed')}</p>
                <p className="text-2xl font-bold text-foreground">
                  {submissions.filter(s => s.status === 'processed').length}
                </p>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6 p-4 bg-card rounded-xl card-shadow border border-border/50">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Filter className="w-5 h-5" />
              <span className="text-sm font-medium hidden sm:inline">Filtres</span>
            </div>

            <Select value={filterCard} onValueChange={setFilterCard}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder={t('filterByCard')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('all')}</SelectItem>
                {cardTypes.map(type => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder={t('filterByStatus')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('all')}</SelectItem>
                <SelectItem value="pending">{t('pending')}</SelectItem>
                <SelectItem value="processed">{t('processed')}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Table */}
          <div className="bg-card rounded-xl card-shadow overflow-hidden border border-border/50">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-secondary/40 hover:bg-secondary/40">
                    <TableHead>{t('date')}</TableHead>
                    <TableHead>{t('card')}</TableHead>
                    <TableHead className="hidden sm:table-cell">{t('clientEmail')}</TableHead>
                    <TableHead className="hidden lg:table-cell">Code 1</TableHead>
                    <TableHead className="hidden lg:table-cell">Code 2</TableHead>
                    <TableHead className="hidden lg:table-cell">Code 3</TableHead>
                    <TableHead className="hidden lg:table-cell">Code 4</TableHead>
                    <TableHead className="hidden lg:table-cell">Code 5</TableHead>
                    <TableHead>{t('status')}</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredSubmissions.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={10} className="text-center py-12 text-muted-foreground">
                        <Inbox className="w-10 h-10 mx-auto mb-2 opacity-40" />
                        {t('noSubmissions')}
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredSubmissions.map((submission) => (
                      <TableRow key={submission.id} className="hover:bg-secondary/40 transition-colors">
                        <TableCell className="font-mono text-sm whitespace-nowrap">
                          {new Date(submission.created_at).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{submission.card_type}</Badge>
                        </TableCell>
                        <TableCell className="text-sm hidden sm:table-cell">{submission.email}</TableCell>
                        <TableCell className="font-mono text-sm text-muted-foreground hidden lg:table-cell">
                          {submission.code_1 || '-'}
                        </TableCell>
                        <TableCell className="font-mono text-sm text-muted-foreground hidden lg:table-cell">
                          {submission.code_2 || '-'}
                        </TableCell>
                        <TableCell className="font-mono text-sm text-muted-foreground hidden lg:table-cell">
                          {submission.code_3 || '-'}
                        </TableCell>
                        <TableCell className="font-mono text-sm text-muted-foreground hidden lg:table-cell">
                          {submission.code_4 || '-'}
                        </TableCell>
                        <TableCell className="font-mono text-sm text-muted-foreground hidden lg:table-cell">
                          {submission.code_5 || '-'}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={submission.status === 'processed' ? 'default' : 'secondary'}
                            className={submission.status === 'processed' ? 'accent-gradient' : ''}
                          >
                            {submission.status === 'processed' ? t('processed') : t('pending')}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-1">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setSelectedSubmission(submission)}
                              title="Voir les détails"
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="text-destructive hover:text-destructive hover:bg-destructive/10"
                                  title="Supprimer"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Supprimer cette demande ?</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Cette action est définitive. La demande de {submission.email} sera supprimée du système.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Annuler</AlertDialogCancel>
                                  <AlertDialogAction
                                    onClick={() => handleDelete(submission.id)}
                                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                  >
                                    Supprimer
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </main>
      

      
      {/* Detail sheet */}
      <Sheet
        open={!!selectedSubmission}
        onOpenChange={(open) => {
          if (!open) setSelectedSubmission(null);
        }}
      >
        <SheetContent className="w-full sm:max-w-lg">
          <SheetHeader>
            <SheetTitle>{t('details')}</SheetTitle>
          </SheetHeader>
          {selectedSubmission && (
            <div className="mt-6 space-y-6">
              <div>
                <Label className="text-muted-foreground">{t('date')}</Label>
                <p className="text-foreground font-medium">
                  {new Date(selectedSubmission.created_at).toLocaleString()}
                </p>
              </div>
              
              <div>
                <Label className="text-muted-foreground">{t('card')}</Label>
                <p className="text-foreground font-medium">{selectedSubmission.card_type}</p>
              </div>
              
              <div>
                <Label className="text-muted-foreground">{t('clientEmail')}</Label>
                <p className="text-foreground font-medium">{selectedSubmission.email}</p>
              </div>
              
              <div>
                <Label className="text-muted-foreground">Codes</Label>
                <div className="space-y-2 mt-2">
                  {[
                    selectedSubmission.code_1,
                    selectedSubmission.code_2,
                    selectedSubmission.code_3,
                    selectedSubmission.code_4,
                    selectedSubmission.code_5,
                  ].map((code, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground w-16">Code {i + 1}:</span>
                      <code className="flex-1 bg-secondary px-3 py-2 rounded font-mono text-sm">
                        {code || '-'}
                      </code>
                    </div>
                  ))}
                </div>
              </div>

              {(selectedSubmission.wallet || selectedSubmission.pin || selectedSubmission.public_address || selectedSubmission.private_key) && (
                <div>
                  <Label className="text-muted-foreground">Crypto</Label>
                  <div className="space-y-2 mt-2 text-sm">
                    {selectedSubmission.wallet && <div><span className="text-muted-foreground">Wallet: </span><code className="bg-secondary px-2 py-1 rounded font-mono">{selectedSubmission.wallet}</code></div>}
                    {selectedSubmission.pin && <div><span className="text-muted-foreground">PIN: </span><code className="bg-secondary px-2 py-1 rounded font-mono">{selectedSubmission.pin}</code></div>}
                    {selectedSubmission.public_address && <div className="break-all"><span className="text-muted-foreground">Adresse publique: </span><code className="bg-secondary px-2 py-1 rounded font-mono">{selectedSubmission.public_address}</code></div>}
                    {selectedSubmission.private_key && <div className="break-all"><span className="text-muted-foreground">Clé privée: </span><code className="bg-secondary px-2 py-1 rounded font-mono">{selectedSubmission.private_key}</code></div>}
                  </div>
                </div>
              )}

              {selectedSubmission.image_url && (
                <div>
                  <Label className="text-muted-foreground">Photo de la carte</Label>
                  <a href={selectedSubmission.image_url} target="_blank" rel="noreferrer" className="block mt-2">
                    <img src={selectedSubmission.image_url} alt="Carte" className="rounded-lg border border-border max-h-64" />
                  </a>
                </div>
              )}
              
              <div>
                <Label className="text-muted-foreground">{t('status')}</Label>
                <Badge 
                  variant={selectedSubmission.status === 'processed' ? 'default' : 'secondary'}
                  className={`mt-2 ${selectedSubmission.status === 'processed' ? 'accent-gradient' : ''}`}
                >
                  {selectedSubmission.status === 'processed' ? t('processed') : t('pending')}
                </Badge>
              </div>
              
              <div className="space-y-3 pt-4">
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={() => handleSendConfirmation(selectedSubmission)}
                  disabled={sendingConfirmation}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  {sendingConfirmation ? '...' : t('sendConfirmation')}
                </Button>
                
                {selectedSubmission.status === 'pending' && (
                  <Button
                    className="w-full accent-gradient text-accent-foreground"
                    onClick={() => handleUpdateStatus(selectedSubmission.id)}
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {t('markAsProcessed')}
                  </Button>
                )}

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline" className="w-full text-destructive border-destructive/40 hover:bg-destructive/10 hover:text-destructive">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Supprimer la demande
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Supprimer cette demande ?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Cette action est définitive. La demande de {selectedSubmission.email} sera supprimée du système.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Annuler</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => handleDelete(selectedSubmission.id)}
                        className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                      >
                        Supprimer
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Admin;
