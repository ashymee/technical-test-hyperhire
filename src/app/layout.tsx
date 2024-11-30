import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({ subsets: ['latin'], weight: '900', display: 'swap', variable: '--font-poppins' });

export const metadata: Metadata = {
  title: 'Hyperhire',
  description: 'The assignment test',
  authors: {
    name: 'Aswin Himawan',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased bg-white text-[#343741]`}>{children}</body>
    </html>
  );
}
