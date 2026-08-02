import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { toast, Toaster } from "sonner";
import WhatsAppButton from "@/components/common/WhatsAppButton";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Amm-Ansi",
  description: "Fresh mangoes delivered directly from our orchard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}

        <WhatsAppButton />

        < Toaster 
        richColors
        position="top-right"
        />
      </body>
    </html>
  );
}