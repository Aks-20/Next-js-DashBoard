import './globals.css';
import {inter} from './ui/fonts';



export const metadata={
  title:'My Dashboard',
  description:'A simple dashboard built with Next.js and Tailwind CSS',
  fonts:[inter.variable],
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}