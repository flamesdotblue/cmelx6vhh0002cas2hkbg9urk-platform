import type { Metadata } from 'next';
import './globals.css';
import { EB_Garamond } from 'next/font/google';

const serif = EB_Garamond({ subsets: ['latin'], variable: '--font-serif', display: 'swap' });

export const metadata: Metadata = {
  title: 'Parallel — Deep Work & Digital Minimalism',
  description: 'A quiet community for people who practice deep work and digital minimalism.',
  themeColor: '#F8F7F4',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${serif.variable} font-serif h-full`}>{children}</body>
    </html>
  );
}
