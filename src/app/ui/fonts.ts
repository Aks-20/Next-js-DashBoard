// /app/ui/fonts.ts
import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'], // Lusitana comes with 400 & 700
  variable: '--font-lusitana',
});
