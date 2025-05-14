import { Inter } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Interactive Pricing Plans',
  description: 'Interactive pricing plans with toggle, animations and micro-UX',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen flex items-center justify-center "style={{ background: `linear-gradient(to bottom right, #FFFDF6, #FAF6E9, #DDEB9D)` }}>
          {children}
        </main>
      </body>
    </html>
  );
}