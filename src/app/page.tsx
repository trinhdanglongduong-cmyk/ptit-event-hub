import { supabase } from "@/lib/supabase";

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

        {events && events.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <article
                key={event.id}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-blue-400/40"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden bg-slate-800">
                  {event.image_url ? (
                    <img
                      src={event.image_url}
                      alt={event.title}
                      className="h-full w-full object-cover transition duration-300 hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-slate-500">
                      No image
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-400">
                    {event.category}
                  </span>

                  <h4 className="mt-4 text-xl font-semibold">
                    {event.title}
                  </h4>

                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-400">
                    {event.description}
                  </p>

                  <div className="mt-5 space-y-2 text-sm text-slate-400">
                    <p>📍 {event.location}</p>

                    <p>
                      📅{" "}
                      {new Date(event.event_date).toLocaleDateString(
                        "vi-VN",
                        {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        }
                      )}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 p-10 text-center text-slate-400">
            No events found.
          </div>
        )}
      </section>
    </main>
  );
}
