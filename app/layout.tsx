import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Hi I'm Darshan",
  description: 'My personal perfolio created using next js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="YDewSdEv5_vlJSvd3W10-1lLqjrTXrYaPFrqJEv2oWg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
