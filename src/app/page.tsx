import { supabase } from "@/lib/supabase";
import EventList from "@/components/event-list";

export default async function Home() {
  const { data: events, error } = await supabase
    .from("events")
    .select("*")
    .order("event_date", { ascending: true });

  if (error) {
    console.error("Supabase error:", error);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <h1 className="text-xl font-bold">
            PTIT<span className="text-blue-400"> Event Hub</span>
          </h1>

          <div className="flex gap-6 text-sm text-slate-300">
            <a href="#" className="hover:text-white">
              Events
            </a>
            <a href="#" className="hover:text-white">
              About
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-400">
            Events at PTIT
          </p>

          <h2 className="text-5xl font-bold leading-tight md:text-6xl">
            Discover your next
            <span className="text-blue-400"> opportunity.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Find workshops, tech talks, hackathons and career events
            happening at PTIT.
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm text-slate-400">Explore</p>
            <h3 className="text-3xl font-bold">Upcoming Events</h3>
          </div>

          <span className="text-sm text-slate-500">
            {events?.length ?? 0} events
          </span>
        </div>

        <EventList events={events ?? []} />
      </section>
    </main>
  );
}
