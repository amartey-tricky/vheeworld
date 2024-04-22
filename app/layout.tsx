import type { Metadata } from "next";
import { roboto } from "@/components/ui/fonts";
import "./globals.css";
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Vhee's World",
  description: "A foundation to help the less privileged in society and those on the streets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
