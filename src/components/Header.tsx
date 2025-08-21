import Link from 'next/link';

export default function Header() {
  return (
    <header className="px-6 pt-6">
      <div className="mx-auto container-narrow flex items-center justify-between">
        <Link href="/" className="text-xl tracking-tight">Parallel</Link>
        <nav className="flex items-center gap-6 text-ink/70">
          <a href="#about" className="link-underline">About</a>
          <Link href="/login" className="link-underline">Login</Link>
        </nav>
      </div>
    </header>
  );
}
