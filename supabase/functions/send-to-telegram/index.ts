import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

interface TelegramMessage {
  type: 'enroll' | 'question' | 'pricing';
  plan?: string;
  name?: string;
  contact?: string;
  email?: string;
  phone?: string;
  question?: string;
}

// Escape Telegram Markdown special characters and enforce length limits
function sanitize(input: string | undefined, maxLength: number, fallback: string): string {
  if (!input || typeof input !== 'string') return fallback;
  return input
    .slice(0, maxLength)
    .replace(/[*_`\[\]()~>#+=|{}.!\\-]/g, '\\$&');
}

const VALID_TYPES = new Set(['enroll', 'question', 'pricing']);

const handler = async (req: Request): Promise<Response> => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const TELEGRAM_BOT_TOKEN = Deno.env.get('TELEGRAM_BOT_TOKEN');
    const TELEGRAM_CHAT_ID = Deno.env.get('TELEGRAM_CHAT_ID');

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error('Telegram configuration missing');
      return new Response(
        JSON.stringify({ success: false, error: 'Service temporarily unavailable' }),
        { status: 503, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const data: TelegramMessage = await req.json();

    if (!data.type || !VALID_TYPES.has(data.type)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid request type' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    let message = '';

    if (data.type === 'enroll') {
      const name = sanitize(data.name, 100, 'Не указано');
      const contact = sanitize(data.contact, 20, 'Не указан');
      const plan = sanitize(data.plan, 100, 'Не выбран');
      message = `🎓 *Новая заявка на курс*\n\n👤 Имя: ${name}\n📞 Телефон: ${contact}\n📋 Тариф: ${plan}`;
    } else if (data.type === 'question') {
      const email = sanitize(data.email, 255, 'Не указан');
      const phone = sanitize(data.phone, 20, 'Не указан');
      const question = sanitize(data.question, 1000, 'Не указан');
      message = `❓ *Новый вопрос*\n\n📧 Email: ${email}\n📞 Телефон: ${phone}\n\n💬 Вопрос:\n${question}`;
    } else if (data.type === 'pricing') {
      const name = sanitize(data.name, 100, 'Не указано');
      const email = sanitize(data.email, 255, 'Не указан');
      const phone = sanitize(data.phone, 20, 'Не указан');
      const plan = sanitize(data.plan, 100, 'Не выбран');
      message = `💰 *Заявка на тариф "${plan}"*\n\n👤 Имя: ${name}\n📧 Email: ${email}\n📞 Телефон: ${phone}`;
    }

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
      }
    );

    const result = await telegramResponse.json();

    if (!telegramResponse.ok) {
      console.error('Telegram API error:', JSON.stringify(result));
      return new Response(
        JSON.stringify({ success: false, error: 'Unable to process your request. Please try again later.' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Telegram message sent successfully');

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    console.error('Error processing request:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Unable to process your request. Please try again later.' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
};

serve(handler);
