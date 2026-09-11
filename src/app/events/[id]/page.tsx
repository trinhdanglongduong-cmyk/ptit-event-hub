import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";
import RegistrationForm from "@/components/registration-form";

type EventPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EventPage({ params }: EventPageProps) {
  const { id } = await params;

  const { data: event, error } = await supabase
    .from("events")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !event) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-5">
          <a
            href="/"
            className="text-xl font-bold hover:text-blue-400"
          >
            PTIT<span className="text-blue-400"> Event Hub</span>
          </a>
        </div>
      </nav>

      {/* Event detail */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <a
          href="/"
          className="mb-8 inline-block text-sm text-slate-400 hover:text-white"
        >
          ← Back to events
        </a>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          {/* Image */}
          <div className="h-72 bg-slate-800 md:h-96">
            {event.image_url ? (
              <img
                src={event.image_url}
                alt={event.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-slate-500">
                No image
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-8 md:p-10">
            <span className="rounded-full bg-blue-400/10 px-3 py-1 text-sm font-medium text-blue-400">
              {event.category}
            </span>

            <h1 className="mt-5 text-4xl font-bold md:text-5xl">
              {event.title}
            </h1>

            <div className="mt-6 grid gap-4 text-slate-300 md:grid-cols-2">
              <p>📍 {event.location}</p>

              <p>
                📅{" "}
                {new Date(event.event_date).toLocaleString("vi-VN", {
                  dateStyle: "long",
                  timeStyle: "short",
                })}
              </p>
            </div>

            <div className="mt-10 border-t border-white/10 pt-8">
              <h2 className="text-2xl font-semibold">About this event</h2>

              <p className="mt-4 max-w-3xl leading-8 text-slate-400">
                {event.description}
              </p>
            </div>

            <div className="mt-10 border-t border-white/10 pt-8">
              <h2 className="text-2xl font-semibold">About this event</h2>

              <p className="mt-4 max-w-3xl leading-8 text-slate-400">
                {event.description}
              </p>
            </div>

            <RegistrationForm eventId={event.id} />

          </div>
        </div>
      </section>
    </main>
  );
}
