"use client";

import { useMemo, useState } from "react";

type Event = {
  id: number;
  title: string;
  description: string | null;
  category: string;
  location: string | null;
  event_date: string;
  image_url: string | null;
};

type EventListProps = {
  events: Event[];
};

export default function EventList({ events }: EventListProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(events.map((event) => event.category))),
  ];

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        event.title.toLowerCase().includes(searchText) ||
        event.description?.toLowerCase().includes(searchText);

      const matchesCategory =
        category === "All" || event.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [events, search, category]);

  return (
    <section>
      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-blue-400"
        />
      </div>

      {/* Categories */}
      <div className="mb-8 flex flex-wrap gap-3">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              category === item
                ? "bg-blue-500 text-white"
                : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Event count */}
      <div className="mb-5 text-sm text-slate-500">
        Showing {filteredEvents.length}{" "}
        {filteredEvents.length === 1 ? "event" : "events"}
      </div>

      {/* Events */}
      {filteredEvents.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <a
              key={event.id}
              href={`/events/${event.id}`}
              className="block overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-blue-400/40"
            >
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
                    {new Date(event.event_date).toLocaleDateString("vi-VN", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-white/10 p-10 text-center text-slate-400">
          No events found.
        </div>
      )}
    </section>
  );
}
