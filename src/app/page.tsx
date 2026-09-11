import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data: events, error } = await supabase
    .from("events")
    .select("*")
    .order("event_date", { ascending: true });

  if (error) {
    console.error("===== SUPABASE ERROR =====");
    console.error("message:", error.message);
    console.error("details:", error.details);
    console.error("hint:", error.hint);
    console.error("code:", error.code);
    console.error("==========================");
  }

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">
        PTIT Event Hub
      </h1>

      <pre className="mt-8 whitespace-pre-wrap">
        {JSON.stringify(events, null, 2)}
      </pre>
    </main>
  );
}
