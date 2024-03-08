import type { Metadata } from "next";
import { Inter, Cinzel, Fauna_One } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Toaster } from "react-hot-toast";
import Provider from "@/components/Provider";
// import Footer from "@/components/Footer";
import { EdgeStoreProvider } from "@/lib/edgestore";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const cinzel = Cinzel({
  weight: ['900', '800', '700', '600', '500'],
  variable: "--font-cinzel",
  subsets: ["latin"],
})


const faunaOne = Fauna_One({
  weight: ["400"],
  variable: "--font-faunaOne",
  subsets: ["latin-ext"],
})

export const metadata: Metadata = {
  title: "CYNET | IT fest of Jims",
  description: "CYNET is an annual IT Festival organised by the IT Department and society of JIMS Jagannath International Management School, Vasant Kunj, New Delhi.",
  openGraph: {
    title: 'Cynet | IT Fest',
    description: 'CYNET is an annual IT Festival organised by the IT Department and society of JIMS Jagannath International Management School, Vasant Kunj, New Delhi.',
    url: 'https://cynet.jimsd.org',
    siteName: 'Cynet',
    images: [
      {
        url: 'https://cdn.shopify.com/s/files/1/0610/5769/5932/files/opengraph-image.jpg?v=1709900684',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme='luxury'>
      <Head>
        <meta property="og:image" content="https://cdn.shopify.com/s/files/1/0610/5769/5932/files/opengraph-image.jpg?v=1709900684" />
        <meta name="google-site-verification" content="kmjKUK-e60FmQqI-2hV501bpuB93G-Fho_45seBnfUE" />
      </Head>

      <body className={`${inter.className} ${cinzel.variable} ${faunaOne.variable} bg-accent`}>
        <Provider>
          <EdgeStoreProvider>
            <Toaster />
            <Header />
            {children}
            {/* <Footer /> */}
          </EdgeStoreProvider>
        </Provider>
      </body>
    </html>
  );
}
