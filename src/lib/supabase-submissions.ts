import { supabase } from "@/integrations/supabase/client";

export interface SubmissionData {
  cardType: string;
  email: string;
  codes: string[];
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
  status: string;
}

export const submitCodes = async (data: SubmissionData): Promise<{ success: boolean; error?: string }> => {
  const { error } = await supabase
    .from('submissions')
    .insert({
      card_type: data.cardType,
      email: data.email,
      code_1: data.codes[0] || null,
      code_2: data.codes[1] || null,
      code_3: data.codes[2] || null,
      code_4: data.codes[3] || null,
      code_5: data.codes[4] || null,
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

  return { data };
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
