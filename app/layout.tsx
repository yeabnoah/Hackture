import { ThemeProvider } from '@/lib/ThemeContext';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import ReactQueryProvider from '@/lib/ReactQueryProvider';

const inter = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
        <body className={`${inter.className} bg-black text-white`}>
          <ReactQueryProvider>
            {children}
          </ReactQueryProvider>
        </body>
      </html>
    </ThemeProvider>
  )
}

