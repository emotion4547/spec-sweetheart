const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const MAX_BOT_TOKEN = Deno.env.get("MAX_BOT_TOKEN")!;
const MAX_CHAT_ID = Deno.env.get("MAX_CHAT_ID")!;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { name, phone, email, service, profession } = await req.json();

    const lines = ["📋 Новая заявка с сайта!", ""];
    if (name) lines.push(`👤 Имя: ${name}`);
    if (phone) lines.push(`📞 Телефон: ${phone}`);
    if (email) lines.push(`📧 Email: ${email}`);
    if (service) lines.push(`🏷 Услуга: ${service}`);
    if (profession) lines.push(`👷 Профессия: ${profession}`);

    const text = lines.join("\n");

    const url = `https://botapi.max.ru/messages?access_token=${encodeURIComponent(MAX_BOT_TOKEN)}&chat_id=${encodeURIComponent(MAX_CHAT_ID)}`;

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("MAX API error:", data);
      return new Response(JSON.stringify({ error: "MAX API error", details: data }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("notify-max error:", err);
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
