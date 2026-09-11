export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-blue-400">
          PTIT Event Hub
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          Event not found
        </h1>

        <p className="mt-4 text-slate-400">
          The event you're looking for doesn't exist.
        </p>

        <a
          href="/"
          className="mt-8 inline-block rounded-xl bg-blue-500 px-6 py-3 font-semibold hover:bg-blue-400"
        >
          Back to events
        </a>
      </div>
    </main>
  );
}
