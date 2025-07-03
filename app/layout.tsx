import './globals.css';
import type { Metadata } from 'next';
import { Inter, Crimson_Text } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const crimsonText = Crimson_Text({ 
  subsets: ['latin'], 
  weight: ['400', '600', '700'],
  variable: '--font-crimson'
});

export const metadata: Metadata = {
  title: 'Catálogo de milagros tristes - Cuentos Urbanos y Melancólicos',
  description: 'Una colección cruda y honesta de relatos que exploran la belleza en la desolación urbana, el amor perdido y los pequeños milagros que emergen de la tristeza cotidiana.',
  keywords: 'libro, cuentos urbanos, literatura melancólica, realismo sucio, narrativa contemporánea, ficción urbana, Amazon',
  authors: [{ name: 'Autor' }],
  creator: 'Autor',
  publisher: 'Editorial Independiente',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://catalogodemilagrostristes.com',
    title: 'Catálogo de milagros tristes - Cuentos Urbanos y Melancólicos',
    description: 'Una colección cruda y honesta de relatos que exploran la belleza en la desolación urbana y los pequeños milagros que emergen de la tristeza.',
    siteName: 'Catálogo de milagros tristes',
    images: [
      {
        url: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg',
        width: 1200,
        height: 630,
        alt: 'Catálogo de milagros tristes - Portada del libro',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Catálogo de milagros tristes - Cuentos Urbanos y Melancólicos',
    description: 'Una colección cruda y honesta de relatos que exploran la belleza en la desolación urbana y los pequeños milagros que emergen de la tristeza.',
    images: ['https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg'],
    creator: '@autor_escritor',
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Book",
              "name": "Catálogo de milagros tristes",
              "author": {
                "@type": "Person",
                "name": "Autor"
              },
              "description": "Una colección cruda y honesta de relatos que exploran la belleza en la desolación urbana, el amor perdido y los pequeños milagros que emergen de la tristeza cotidiana.",
              "genre": "Ficción urbana contemporánea",
              "inLanguage": "es",
              "publisher": {
                "@type": "Organization",
                "name": "Editorial Independiente"
              },
              "offers": [
                {
                  "@type": "Offer",
                  "availability": "https://schema.org/InStock",
                  "price": "12.99",
                  "priceCurrency": "EUR",
                  "seller": {
                    "@type": "Organization",
                    "name": "Amazon España"
                  },
                  "url": "https://amazon.es/dp/example"
                },
                {
                  "@type": "Offer",
                  "availability": "https://schema.org/InStock",
                  "price": "14.99",
                  "priceCurrency": "USD",
                  "seller": {
                    "@type": "Organization",
                    "name": "Amazon US"
                  },
                  "url": "https://amazon.com/dp/example"
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${crimsonText.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}