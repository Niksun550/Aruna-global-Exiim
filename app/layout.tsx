import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL || 'https://arunaglobalexiim.com'),
  title: {
    default: 'Aruna Global Exiim | Premium Handcrafted Art & Global Exports',
    template: '%s | Aruna Global Exiim'
  },
  description: 'Exporters of unique handmade treasures and artistic excellence since 2009. Discover museum-grade murals, paintings, and handicrafts from Pune to the world.',
  keywords: ['handcrafted art', 'global exports', 'Indian handicrafts', 'murals Pune', 'bespoke castings', 'brushless paintings', 'luxury art exports', 'Aruna Global Exiim', 'Aruna Kangude', 'Pune art gallery'],
  authors: [{ name: 'Aruna Kangude' }],
  creator: 'Aruna Global Exiim',
  publisher: 'Aruna Global Exiim',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/Aruna.png',
    shortcut: '/Aruna.png',
    apple: '/Aruna.png',
  },
  alternates: {
    canonical: 'https://arunaglobalexiim.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arunaglobalexiim.com',
    siteName: 'Aruna Global Exiim',
    title: 'Aruna Global Exiim | Premium Handcrafted Art & Global Exports',
    description: 'Exporters of unique handmade treasures and artistic excellence since 2009. Discover museum-grade murals, paintings, and handicrafts from Pune to the world.',
    images: [
      {
        url: '/Aruna.png',
        width: 1200,
        height: 630,
        alt: 'Aruna Global Exiim Art Collection',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aruna Global Exiim | Premium Handcrafted Art & Global Exports',
    description: 'Exporters of unique handmade treasures and artistic excellence since 2009. Discover museum-grade murals, paintings, and handicrafts from Pune to the world.',
    images: ['/Aruna.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Art & Design',
  classification: 'Art Gallery and Export House',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="bg-[#FAF9F6] text-[#4A4A4A] antialiased">
        {children}
      </body>
    </html>
  );
}
