import { serve } from "https://deno.land/std@0.224.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js"

serve(async (req) => {
  const { email, name } = await req.json()

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
  )

  const { error } = await supabase
    .from("leads")
    .insert([{ email, name }])

  if (error) return new Response("Failed to store lead", { status: 500 })

  // 🔔 Email YOU about the new lead
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: "jake@mariagtm.com",
      to: "jake@mariagtm.com",
      subject: "New Lead Submitted",
      html: `<p><strong>${name}</strong> just submitted their email: ${email}</p>`
    })
  })

  // ✉️ Auto-respond to the lead
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: "jake@mariagtm.com",
      to: email,
      subject: "Your $458K GTM Playbook is here",
      html: `<p>Hey ${name || 'there'}, here's your playbook. If you're ready to install your GTM engine in 30 days or less—just reply to this email.</p>`
    })
  })

  return new Response("Lead processed!", { status: 200 })
})