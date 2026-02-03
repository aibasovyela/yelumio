import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

interface TelegramMessage {
  type: 'enroll' | 'question' | 'pricing';
  name?: string;
  contact?: string;
  email?: string;
  phone?: string;
  question?: string;
  plan?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const TELEGRAM_BOT_TOKEN = Deno.env.get('TELEGRAM_BOT_TOKEN');
    const TELEGRAM_CHAT_ID = Deno.env.get('TELEGRAM_CHAT_ID');

    if (!TELEGRAM_BOT_TOKEN) {
      throw new Error('TELEGRAM_BOT_TOKEN is not configured');
    }
    if (!TELEGRAM_CHAT_ID) {
      throw new Error('TELEGRAM_CHAT_ID is not configured');
    }

    const data: TelegramMessage = await req.json();

    let message = '';

    if (data.type === 'enroll') {
      message = `🎓 *Новая заявка на курс*\n\n👤 Имя: ${data.name || 'Не указано'}\n📞 Контакт: ${data.contact || 'Не указан'}`;
    } else if (data.type === 'question') {
      message = `❓ *Новый вопрос*\n\n📧 Email: ${data.email || 'Не указан'}\n📞 Телефон: ${data.phone || 'Не указан'}\n\n💬 Вопрос:\n${data.question || 'Не указан'}`;
    } else if (data.type === 'pricing') {
      message = `💰 *Заявка на тариф "${data.plan}"*\n\n📧 Email: ${data.email || 'Не указан'}\n📞 Телефон: ${data.phone || 'Не указан'}`;
    }

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
      }
    );

    const result = await telegramResponse.json();

    if (!telegramResponse.ok) {
      throw new Error(`Telegram API error: ${JSON.stringify(result)}`);
    }

    console.log('Telegram message sent successfully:', result);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    console.error('Error sending to Telegram:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ success: false, error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
};

serve(handler);
