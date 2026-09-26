import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

function publicClient() {
  const key = process.env['SUPABASE_PUBLISHABLE_KEY']!;
  return createClient<Database>(process.env['SUPABASE_URL']!, key, { auth: { persistSession: false }, global: { fetch: (input, init) => { const headers = new Headers(init?.headers); if (key.startsWith('sb_') && headers.get('Authorization') === `Bearer ${key}`) headers.delete('Authorization'); headers.set('apikey', key); return fetch(input, { ...init, headers }); } } });
}

export const getPublishedContent = createServerFn({ method: "GET" }).handler(async () => {
  const client = publicClient();
  const [content, posts, categories] = await Promise.all([
    client.from("content_entries").select("*").eq("is_published", true).order("sort_order"),
    client.from("blog_posts").select("*, blog_categories(name, slug)").eq("is_published", true).order("published_at", { ascending: false }),
    client.from("blog_categories").select("*").eq("is_published", true).order("sort_order"),
  ]);
  return { content: content.data ?? [], posts: posts.data ?? [], categories: categories.data ?? [] };
});

const enquirySchema = z.object({
  name: z.string().trim().min(2).max(100), email: z.string().trim().email().max(255), phone: z.string().trim().max(40).optional(), country: z.string().trim().min(2).max(80), area_of_support: z.string().trim().min(2).max(120), session_format: z.string().trim().min(2).max(60), availability: z.string().trim().min(2).max(200), contact_method: z.string().trim().min(2).max(40), message: z.string().trim().max(2000).optional(),
});
async function notifyEnquiry(data: z.infer<typeof enquirySchema>) {
  const apiKey = process.env["RESEND_API_KEY"];
  if (!apiKey) return;
  const to = process.env["ENQUIRY_TO_EMAIL"]?.trim() || "gulfwellbeing8@gmail.com";
  const from = process.env["ENQUIRY_FROM_EMAIL"]?.trim() || "GULFWELLBEING <onboarding@resend.dev>";
  const subject = `New GULFWELLBEING private enquiry — ${data.name}`;
  const html = `
    <h2>New private wellbeing enquiry</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone / WhatsApp:</strong> ${data.phone || "—"}</p>
    <p><strong>Country:</strong> ${data.country}</p>
    <p><strong>Area:</strong> ${data.area_of_support}</p>
    <p><strong>Session format:</strong> ${data.session_format}</p>
    <p><strong>Availability:</strong> ${data.availability}</p>
    <p><strong>Preferred contact:</strong> ${data.contact_method}</p>
    <p><strong>Message:</strong><br/>${data.message || "—"}</p>
  `;
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { "Authorization": `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to: [to], reply_to: data.email, subject, html }),
  });
  if (!response.ok) throw new Error("Notification email could not be sent.");
}
export const submitEnquiry = createServerFn({ method: "POST" }).inputValidator((data) => enquirySchema.parse(data)).handler(async ({ data }) => {
  const payload = { ...data, phone: data.phone ?? null, message: data.message ?? null };
  const { error } = await publicClient().from("booking_enquiries").insert(payload);
  if (error) throw new Error("We could not send your request. Please try again.");
  await notifyEnquiry(data);
  return { ok: true };
});

export const claimOwner = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).handler(async ({ context }) => {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const ownerEmail = process.env["OWNER_EMAIL"]?.trim().toLowerCase();
  if (!ownerEmail) throw new Error("OWNER_EMAIL is not configured.");
  const { data: user, error: userError } = await supabaseAdmin.auth.admin.getUserById(context.userId);
  if (userError || !user?.user?.email || user.user.email.toLowerCase() !== ownerEmail) {
    throw new Error("This account is not authorised as the site owner.");
  }
  const { count } = await supabaseAdmin.from("user_roles").select("id", { count: "exact", head: true });
  if ((count ?? 0) > 0) return { claimed: false };
  const { error } = await supabaseAdmin.from("user_roles").insert({ user_id: context.userId, role: "owner" });
  if (error) throw error;
  return { claimed: true };
});

export const updateEnquiryStatus = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((data) => z.object({ id: z.string().uuid(), status: z.enum(["new", "contacted", "closed"]) }).parse(data)).handler(async ({ context, data }) => {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { data: role } = await supabaseAdmin.from("user_roles").select("role").eq("user_id", context.userId).eq("role", "owner").maybeSingle();
  if (!role) throw new Error("Not authorised.");
  const { error } = await supabaseAdmin.from("booking_enquiries").update({ status: data.status }).eq("id", data.id);
  if (error) throw error;
  return { ok: true };
});
