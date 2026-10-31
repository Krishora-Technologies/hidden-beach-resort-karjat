import './globals.css';
import '@fontsource/instrument-serif/400.css';
import '@fontsource/instrument-serif/400-italic.css';
import '@fontsource-variable/inter';
import '@fontsource/ibm-plex-mono/500.css';
import './condensation.css';
import Script from 'next/script';

export const metadata = {
  title: 'Hidden Beach Resort Karjat — By Greenleaf Aqua',
  description:
    'Hidden Beach Resort Karjat by Greenleaf Aqua. A luxury tropical riverside retreat with private villas, heated plunge pools, and untouched nature in the Western Ghats.',
  openGraph: {
    title: 'Hidden Beach Resort Karjat — By Greenleaf Aqua',
    description:
      'Hidden Beach Resort Karjat by Greenleaf Aqua. A luxury tropical riverside retreat with private villas, heated plunge pools, and untouched nature in the Western Ghats.',
    images: ['/assets/resort-clear.webp'],
  },
  icons: {
    icon: 'https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d5b0fb5c762915ea264809_Fav.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-mod-js w-mod-ix3">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Inter:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/css/ovo-legion.webflow.shared.938a0d3ff.css"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body>
        {children}
        <Script src="/js/legion-interactions.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
