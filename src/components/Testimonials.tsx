export default function Testimonials() {
  const items = [
    {
      quote: 'Parallel helped me reclaim my attention. Fewer inputs, better outputs.',
      author: 'Mina K., researcher'
    },
    {
      quote: 'It feels like the web again: words, ideas, and time to think.',
      author: 'Jon P., writer'
    },
    {
      quote: 'The weekly cadence keeps me honest about deep work.',
      author: 'Alia R., engineer'
    }
  ];

  return (
    <section className="px-6 py-16 border-t border-ink/10 bg-white/50">
      <div className="mx-auto container-narrow">
        <h2 className="text-2xl mb-8">What members are saying</h2>
        <ul className="grid sm:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <li key={i} className="border border-ink/10 rounded-lg p-5 bg-white/70">
              <blockquote className="text-lg leading-relaxed">“{t.quote}”</blockquote>
              <cite className="block mt-4 text-sm text-ink/60 not-italic">— {t.author}</cite>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
