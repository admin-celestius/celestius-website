import type { Metadata } from 'next';
import { DM_Sans, Space_Mono, Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';

const inter = Inter({ subsets: ['latin'] })

const fontHeading = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

const fontBody = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Celestius',
  description: 'Explore, Learn, and Innovate with Club Celestius',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}

