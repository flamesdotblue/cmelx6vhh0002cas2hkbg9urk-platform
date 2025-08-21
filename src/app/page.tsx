import Header from '@/components/Header';
import Testimonials from '@/components/Testimonials';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="px-6 pt-20 pb-10">
          <div className="mx-auto container-narrow">
            <h1 className="text-5xl sm:text-6xl tracking-tight leading-tight">
              Practice focus. Build a quieter internet.
            </h1>
            <p className="mt-6 text-xl text-ink/70 max-w-2xl">
              Parallel is a small community for people committed to deep work and digital minimalism. No feeds. No clutter. Just signal.
            </p>
            <div className="mt-10 flex gap-4 items-center">
              <Link href="/login" className="px-5 py-3 bg-ink text-paper rounded-md text-base inline-block">
                Enter the forum
              </Link>
              <a href="#about" className="text-ink/70 link-underline">Learn more</a>
            </div>
          </div>
        </section>

        <section id="about" className="px-6 py-16 border-t border-ink/10">
          <div className="mx-auto container-narrow prose-quiet">
            <h2 className="text-2xl mb-4">What makes Parallel different</h2>
            <div className="grid sm:grid-cols-3 gap-8 text-ink/80">
              <div>
                <h3 className="text-xl mb-2">Minimal surface area</h3>
                <p>Pages load fast, typography first. No infinite scroll, no dopamine loops.</p>
              </div>
              <div>
                <h3 className="text-xl mb-2">Asynchronous by design</h3>
                <p>We prefer long-form updates and weekly rhythms over real-time chatter.</p>
              </div>
              <div>
                <h3 className="text-xl mb-2">Privacy-respecting</h3>
                <p>No trackers. Optional login only when you want to post or read the forum.</p>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />
      </main>

      <footer className="px-6 py-10 border-t border-ink/10">
        <div className="mx-auto container-narrow flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-ink/60 text-sm">© {new Date().getFullYear()} Parallel</p>
          <div className="flex gap-6 text-sm text-ink/70">
            <Link href="/login" className="link-underline">Login</Link>
            <a href="#about" className="link-underline">About</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
