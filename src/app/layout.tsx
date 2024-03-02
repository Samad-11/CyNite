import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Toaster } from "react-hot-toast";
import Provider from "@/components/Provider";
import Footer from "@/components/Footer";
import { EdgeStoreProvider } from "@/lib/edgestore";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cynite",
  description: "The IT fest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme='luxury'>
      <body className={inter.className}>
        <Provider>
          <EdgeStoreProvider>

            <Toaster />
            <Header />
            {children}
            <Footer />
          </EdgeStoreProvider>
        </Provider>
      </body>
    </html>
  );
}
