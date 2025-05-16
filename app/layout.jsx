import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

// components
import Header from '@/components/Header';
import PageTransition from '@/components/PageTransition';
import StairTransition from '@/components/StairTransition';

const jetbrainMono = JetBrains_Mono({
  subsets: ['latin'],
  weights: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono',
});

export const metadata = {
  title: 'Joey Liou | Full-Stack Software Developer',
  description:
    'Portfolio of Joey Liou, a Full-Stack Software Developer based in Sydney, Australia.',
  icons: {
    icon: '/assets/icons8-muscle-48.png',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={jetbrainMono.variable}>
        <div className='layout-container'>
          <Header />
          <StairTransition />
          <PageTransition>{children}</PageTransition>
        </div>
      </body>
    </html>
  );
}
