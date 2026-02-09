import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Submission {
  id: string;
  date: string;
  cardType: string;
  email: string;
  codes: string[];
  status: 'pending' | 'processed';
}

interface SubmissionsContextType {
  submissions: Submission[];
  addSubmission: (submission: Omit<Submission, 'id' | 'date' | 'status'>) => void;
  updateSubmissionStatus: (id: string, status: 'pending' | 'processed') => void;
}

const SubmissionsContext = createContext<SubmissionsContextType | undefined>(undefined);

export const SubmissionsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [submissions, setSubmissions] = useState<Submission[]>([
    {
      id: '1',
      date: new Date().toISOString(),
      cardType: 'Paysafecard',
      email: 'exemple@email.com',
      codes: ['1234-5678-9012', '2345-6789-0123', '', '', ''],
      status: 'pending',
    },
  ]);

  const addSubmission = (submission: Omit<Submission, 'id' | 'date' | 'status'>) => {
    const newSubmission: Submission = {
      ...submission,
      id: Date.now().toString(),
      date: new Date().toISOString(),
      status: 'pending',
    };
    setSubmissions(prev => [newSubmission, ...prev]);
  };

  const updateSubmissionStatus = (id: string, status: 'pending' | 'processed') => {
    setSubmissions(prev =>
      prev.map(sub => (sub.id === id ? { ...sub, status } : sub))
    );
  };

  return (
    <SubmissionsContext.Provider value={{ submissions, addSubmission, updateSubmissionStatus }}>
      {children}
    </SubmissionsContext.Provider>
  );
};

export const useSubmissions = (): SubmissionsContextType => {
  const context = useContext(SubmissionsContext);
  if (!context) {
    throw new Error('useSubmissions must be used within a SubmissionsProvider');
  }
  return context;
};
