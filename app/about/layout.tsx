import { Metadata } from "next";
import "../globals.css"
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "About VheeWorld",
  description: "Learn more about VheeWorld Foundation and our mission"
}

export default function Layout({
  children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}