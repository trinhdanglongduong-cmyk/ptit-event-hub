export default function Loading() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-5">
          <div className="h-6 w-40 animate-pulse rounded bg-white/10" />
        </div>
      </nav>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="h-4 w-32 animate-pulse rounded bg-white/10" />

        <div className="mt-8 overflow-hidden rounded-3xl border border-white/10">
          <div className="h-72 animate-pulse bg-white/5 md:h-96" />

          <div className="space-y-5 p-8">
            <div className="h-6 w-24 animate-pulse rounded bg-white/10" />
            <div className="h-12 w-3/4 animate-pulse rounded bg-white/10" />
            <div className="h-5 w-1/2 animate-pulse rounded bg-white/10" />
            <div className="h-24 w-full animate-pulse rounded bg-white/10" />
          </div>
        </div>
      </section>
    </main>
  );
}
