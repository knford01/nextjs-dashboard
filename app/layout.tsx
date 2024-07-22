//Partial Rendering - One benefit of using layouts in Next.js is that on navigation, only the page components update while the layout won't re-render
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | AR-Source Dashboard',
    default: 'AR-Source Software',
  },
  description: 'The official AR-Source Software Website.',
  metadataBase: new URL('https://nextjs-dashboard-blue-nu-96.vercel.app/'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}