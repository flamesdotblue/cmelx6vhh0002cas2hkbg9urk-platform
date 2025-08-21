"use client";
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Link from 'next/link';

export default function ForumPage() {
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    const n = typeof window !== 'undefined' ? localStorage.getItem('parallel_auth') : null;
    setName(n);
  }, []);

  if (!name) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 px-6 pt-20">
          <div className="mx-auto container-narrow">
            <h1 className="text-3xl mb-4">Private forum</h1>
            <p className="text-ink/70">You need to log in to access the forum. This demo uses a simple local login.
              <Link href="/login" className="ml-2 link-underline">Go to login</Link>
            </p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 px-6 pt-16 pb-12">
        <div className="mx-auto container-narrow">
          <div className="mb-8 flex items-center justify-between">
            <h1 className="text-3xl">Forum</h1>
            <button
              className="text-sm text-ink/70 link-underline"
              onClick={() => { localStorage.removeItem('parallel_auth'); location.reload(); }}
            >Log out</button>
          </div>

          <div className="rounded-lg border border-ink/10 bg-white/70 p-6">
            <p className="text-ink/80">Welcome, {name}. This is a placeholder for the private forum. In a full build, threads would live here with clean typography and no clutter.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
