import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface NewsletterRequest {
  email: string;
  name: string;
  country: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, name, country }: NewsletterRequest = await req.json();

    console.log("Newsletter subscription request:", { email, name, country });

    // Create Supabase client with service role key
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Insert subscriber into database
    const { data: subscriber, error: dbError } = await supabaseClient
      .from("newsletter_subscribers")
      .insert([{ email, name, country }])
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      
      // Check if it's a duplicate email error
      if (dbError.code === "23505") {
        return new Response(
          JSON.stringify({ error: "Este correo ya está suscrito" }),
          {
            status: 400,
            headers: { "Content-Type": "application/json", ...corsHeaders },
          }
        );
      }

      throw dbError;
    }

    console.log("Subscriber added to database:", subscriber);

    // Send welcome email via Resend
    const emailResponse = await resend.emails.send({
      from: "PÁEZ <onboarding@resend.dev>",
      to: [email],
      subject: "¡Bienvenido al Newsletter de PÁEZ!",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
                background-color: #050505;
                color: #ffffff;
                margin: 0;
                padding: 0;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 40px 20px;
              }
              .header {
                text-align: center;
                margin-bottom: 40px;
              }
              .logo {
                font-size: 32px;
                font-weight: bold;
                color: #B88057;
                letter-spacing: 2px;
              }
              .content {
                background-color: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(184, 128, 87, 0.2);
                border-radius: 8px;
                padding: 30px;
                margin-bottom: 30px;
              }
              h1 {
                color: #B88057;
                font-size: 24px;
                margin-top: 0;
                text-transform: uppercase;
                letter-spacing: 1px;
              }
              p {
                line-height: 1.6;
                margin: 15px 0;
              }
              .highlight {
                color: #B88057;
                font-weight: bold;
              }
              .footer {
                text-align: center;
                color: #888888;
                font-size: 12px;
                margin-top: 30px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="logo">PÁEZ</div>
              </div>
              
              <div class="content">
                <h1>¡Hola ${name}!</h1>
                <p>Gracias por suscribirte al newsletter oficial de <span class="highlight">PÁEZ</span>.</p>
                <p>Ahora formas parte de una comunidad exclusiva donde recibirás:</p>
                <ul>
                  <li>🎵 Lanzamientos y estrenos antes que nadie</li>
                  <li>🎬 Contenido exclusivo detrás de cámaras</li>
                  <li>🎤 Información sobre próximos conciertos y eventos</li>
                  <li>✨ Noticias y actualizaciones directas</li>
                </ul>
                <p>Estamos emocionados de tenerte con nosotros desde <span class="highlight">${country}</span>.</p>
              </div>
              
              <div class="footer">
                <p>PÁEZ - Música que conecta</p>
                <p>Este correo fue enviado a ${email}</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    console.log("Welcome email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Suscripción exitosa",
        subscriber 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-newsletter-welcome function:", error);
    return new Response(
      JSON.stringify({ error: "Error al procesar la suscripción. Intenta más tarde." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
