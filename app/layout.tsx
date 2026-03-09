import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PRIVATE UNCENSORED AI IMAGE MAKER',
  description: 'Only for you — 100% limitless — Asian edition',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}