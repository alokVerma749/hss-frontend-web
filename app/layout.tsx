import type { Metadata } from "next";
import { Montserrat, Open_Sans } from 'next/font/google';
import { ClerkProvider } from "@clerk/nextjs";
import Hero from "@/components/Hero";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: "HSS-Landing",
  description: "Ecommerce web application for HSS",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${montserrat.className} ${openSans.className}`}>
        <body>
          <div className="bg-bg-primary text-text-primary px-4">
            <Hero />
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
