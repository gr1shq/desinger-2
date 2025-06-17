import { Inter } from 'next/font/google';
import './globals.css';

const orbitron = Inter({ subsets: ['latin'], variable: '--font-orbitron' });

export const metadata = {
  title: 'Alex Harper | Design Portfolio',
  description: 'Interactive graphic design portfolio with futuristic visuals.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${orbitron.className} bg-black`}>{children}</body>
    </html>
  );
}