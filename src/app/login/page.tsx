"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Header from '@/components/Header';

export default function LoginPage() {
  const router = useRouter();
  const [name, setName] = useState('');

  useEffect(() => {
    const authed = typeof window !== 'undefined' && localStorage.getItem('parallel_auth');
    if (authed) router.replace('/forum');
  }, [router]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    localStorage.setItem('parallel_auth', name.trim());
    router.push('/forum');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 px-6 pt-16">
        <div className="mx-auto container-narrow">
          <h1 className="text-3xl mb-6">Login to the forum</h1>
          <p className="text-ink/70 mb-8 max-w-xl">No email required. This lightweight demo simply stores your display name in your browser to unlock the private forum page.</p>
          <form onSubmit={onSubmit} className="max-w-md space-y-4">
            <label className="block">
              <span className="text-sm text-ink/70">Display name</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-md border border-ink/20 bg-white/70 px-3 py-2 outline-none focus:border-ink/40"
                placeholder="e.g., Cal"
                aria-label="Display name"
              />
            </label>
            <button type="submit" className="px-5 py-2 bg-ink text-paper rounded-md">Continue</button>
          </form>
        </div>
      </main>
    </div>
  );
}
