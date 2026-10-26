import type { Metadata, Viewport } from 'next';
import { MotionConfig } from 'framer-motion';
import { Newsreader, Plus_Jakarta_Sans } from 'next/font/google';
import type { ReactNode } from 'react';
import { profile, site } from '@/data/profile';
import { asset } from '@/lib/asset';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

const newsreader = Newsreader({
  subsets: ['latin', 'vietnamese'],
  weight: ['500', '600', '700'],
  variable: '--font-newsreader',
  display: 'swap',
});

export const metadata: Metadata = {
  // Origin only: image paths below already carry the base path.
  metadataBase: new URL(new URL(site.url).origin),
  title: site.title,
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: profile.name, url: profile.github }],
  icons: { icon: asset('/images/logo.png') },
  openGraph: {
    type: 'website',
    url: site.url,
    siteName: 'Truong Portfolio',
    title: site.title,
    description: site.ogDescription,
    images: [{ url: asset(profile.avatar), width: 1254, height: 1254 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    images: [asset(profile.avatar)],
  },
};

export const viewport: Viewport = {
  themeColor: site.themeColor,
  viewportFit: 'cover',
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: profile.role,
  worksFor: { '@type': 'Organization', name: profile.company.name, url: profile.company.url },
  email: `mailto:${profile.email}`,
  telephone: profile.phone.tel,
  url: site.url,
  sameAs: [profile.github, profile.linkedin],
  address: {
    '@type': 'PostalAddress',
    addressLocality: profile.location,
    addressCountry: 'VN',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${newsreader.variable}`}>
      <body>
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
