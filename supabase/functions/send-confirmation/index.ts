import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface SendConfirmationRequest {
  submissionId: string;
  recipientEmail: string;
  cardType: string;
  language: string;
}

const translations: Record<string, Record<string, string>> = {
  fr: {
    subject: "Confirmation de réception de vos codes",
    title: "Confirmation de réception",
    greeting: "Bonjour,",
    body: "Nous avons bien reçu votre demande de vérification pour votre carte",
    processing: "Votre demande est en cours de traitement. Vous recevrez une mise à jour sous peu.",
    thanks: "Merci de votre confiance.",
    team: "L'équipe PrepaidHub",
  },
  en: {
    subject: "Confirmation of code receipt",
    title: "Receipt Confirmation",
    greeting: "Hello,",
    body: "We have received your verification request for your card",
    processing: "Your request is being processed. You will receive an update shortly.",
    thanks: "Thank you for your trust.",
    team: "The PrepaidHub Team",
  },
  de: {
    subject: "Bestätigung des Code-Empfangs",
    title: "Empfangsbestätigung",
    greeting: "Hallo,",
    body: "Wir haben Ihre Verifizierungsanfrage für Ihre Karte erhalten",
    processing: "Ihre Anfrage wird bearbeitet. Sie erhalten in Kürze ein Update.",
    thanks: "Vielen Dank für Ihr Vertrauen.",
    team: "Das PrepaidHub-Team",
  },
  es: {
    subject: "Confirmación de recepción de códigos",
    title: "Confirmación de recepción",
    greeting: "Hola,",
    body: "Hemos recibido su solicitud de verificación para su tarjeta",
    processing: "Su solicitud está siendo procesada. Recibirá una actualización en breve.",
    thanks: "Gracias por su confianza.",
    team: "El equipo de PrepaidHub",
  },
  it: {
    subject: "Conferma di ricezione dei codici",
    title: "Conferma di ricezione",
    greeting: "Ciao,",
    body: "Abbiamo ricevuto la tua richiesta di verifica per la tua carta",
    processing: "La tua richiesta è in elaborazione. Riceverai un aggiornamento a breve.",
    thanks: "Grazie per la tua fiducia.",
    team: "Il team PrepaidHub",
  },
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Verify authentication
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? "",
      { global: { headers: { Authorization: authHeader } } }
    );

    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const { submissionId, recipientEmail, cardType, language }: SendConfirmationRequest = await req.json();

    console.log("Sending confirmation email:", { submissionId, recipientEmail, cardType, language });

    const lang = translations[language] ? language : 'en';
    const t = translations[lang];

    const emailResponse = await resend.emails.send({
      from: "PrepaidHub <onboarding@resend.dev>",
      to: [recipientEmail],
      subject: t.subject,
      html: `
        <h1>${t.title}</h1>
        <p>${t.greeting}</p>
        <p>${t.body} <strong>${cardType}</strong>.</p>
        <p>${t.processing}</p>
        <p>${t.thanks}</p>
        <p><em>${t.team}</em></p>
      `,
    });

    if (emailResponse.error) {
      console.error("Resend error (send-confirmation):", emailResponse.error);
      return new Response(JSON.stringify({ error: emailResponse.error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    console.log("Confirmation email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-confirmation function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
