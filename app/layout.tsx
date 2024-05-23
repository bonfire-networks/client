
import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { Wrapper } from '@/components/wrapper';
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bonfire",
  description: "Social Network made by the web, for the web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Wrapper>
          {children}
        </Wrapper>
      </body>
    </html>
  );
}
