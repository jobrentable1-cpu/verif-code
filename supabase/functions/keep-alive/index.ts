import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

Deno.serve(async () => {
  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_ANON_KEY")!
  );

  const { count, error } = await supabase
    .from("submissions")
    .select("id", { count: "exact", head: true });

  return new Response(
    JSON.stringify({ ok: !error, count, timestamp: new Date().toISOString() }),
    { headers: { "Content-Type": "application/json" } }
  );
});
