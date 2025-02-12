import { Geist, Geist_Mono } from 'next/font/google';
import Head from 'next/head';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'DatsenkoDev | Todo Test Task',
  description: 'Test task using Next.js, Tailwind, Axios & Tanstack Query',
  openGraph: {
    title: 'DatsenkoDev | Todo Test Task',
    description: 'Test task using Next.js, Tailwind, Axios & Tanstack Query',
    type: 'website',
    locale: 'en-EN',
    siteName: 'DatsenkoDev',
    // url: 'https://vercel.../',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Head>
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-[100svh]`}>
        {children}
      </body>
    </html>
  );
}
