import type { Metadata } from 'next';
import './globals.css';
import SmoothScroll from './SmoothScroll';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Developer portfolio built with Next.js, Tailwind CSS, and smooth scrolling.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
