import type { Metadata } from "next";
import { Inter, Cinzel, Fauna_One } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Toaster } from "react-hot-toast";
import Provider from "@/components/Provider";
import Footer from "@/components/Footer";
import { EdgeStoreProvider } from "@/lib/edgestore";
import Cursor1 from "@/components/Cursor1";
import ScrollYProgress from "@/components/ScrollProgress";

const inter = Inter({ subsets: ["latin"] });
const cinzel = Cinzel({
  weight: ['900', '800', '700', '600', '500'],
  subsets: ["latin"],
  variable: "--font-cinzel"
})

const faunaOne = Fauna_One({
  weight: ["400"],
  subsets: ["latin-ext"],
  variable: "--font-faunaOne"
})

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
      <body className={`${inter.className} ${cinzel.variable} ${faunaOne.variable} min-h-[300vh]`}>

        <Provider>
          <EdgeStoreProvider>
            <Toaster />
            <Cursor1 />
            <Header />

            {children}
            {/* <Footer /> */}
          </EdgeStoreProvider>
        </Provider>
      </body>
    </html>
  );
}
