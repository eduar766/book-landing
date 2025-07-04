import './globals.css';
import type { Metadata } from 'next';
import { Inter, Crimson_Text } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const crimsonText = Crimson_Text({ 
  subsets: ['latin'], 
  weight: ['400', '600', '700'],
  variable: '--font-crimson'
});

export const metadata: Metadata = {
  title: 'Catálogo de milagros tristes - Cuentos Urbanos y Melancólicos',
  description: '"Catálogo de milagros tristes" es una colección de relatos breves y prosa poética que navega entre el amor y la pérdida, la nostalgia y la esperanza. En estas páginas, un beso puede detener el tiempo, un hombre se transforma en árbol por fidelidad a una promesa, y criaturas extrañas aparecen justo cuando el alma más lo necesita. Cada historia es un suspiro, un eco de lo que fuimos y lo que anhelamos ser.',
  keywords: 'libro, cuentos urbanos, literatura melancólica, realismo magico, narrativa contemporánea, ficción urbana, romance',
  authors: [{ name: 'E. Saav' }],
  creator: 'E. Saav',
  publisher: 'Amazon',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://catalogodemilagrostristes.com',
    title: 'Catálogo de milagros tristes - Cuentos Urbanos y Melancólicos',
    description: 'Una colección cruda y honesta de relatos que exploran la belleza en la desolación urbana y los pequeños milagros que emergen de la tristeza.',
    siteName: 'Catálogo de milagros tristes',
    images: [
      {
        url: 'https://m.media-amazon.com/images/I/716gxQ5Nf8L._SL1500_.jpg',
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
    images: ['https://m.media-amazon.com/images/I/716gxQ5Nf8L._SL1500_.jpg'],
    creator: '@eduar766',
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
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-C83924CSEY" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-C83924CSEY');
          `}
        </Script>
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Book",
              "name": "Catálogo de milagros tristes",
              "author": {
                "@type": "Person",
                "name": "E. Saav"
              },
              "description": "Catálogo de milagros tristes es una colección de relatos breves y prosa poética que navega entre el amor y la pérdida, la nostalgia y la esperanza. En estas páginas, un beso puede detener el tiempo, un hombre se transforma en árbol por fidelidad a una promesa, y criaturas extrañas aparecen justo cuando el alma más lo necesita. Cada historia es un suspiro, un eco de lo que fuimos y lo que anhelamos ser.",
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
                  "price": "5",
                  "priceCurrency": "EUR",
                  "seller": {
                    "@type": "Organization",
                    "name": "Amazon España"
                  },
                  "url": "https://www.amazon.es/dp/B0FG88X927"
                },
                {
                  "@type": "Offer",
                  "availability": "https://schema.org/InStock",
                  "price": "5.90",
                  "priceCurrency": "USD",
                  "seller": {
                    "@type": "Organization",
                    "name": "Amazon US"
                  },
                  "url": "https://www.amazon.com/dp/B0FG88X927"
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