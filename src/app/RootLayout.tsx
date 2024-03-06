import Header from "@/components/Header";
import { Toaster } from "react-hot-toast";
import Provider from "@/components/Provider";
import Footer from "@/components/Footer";
import { EdgeStoreProvider } from "@/lib/edgestore";
import { inter, cinzel, faunaOne } from "./layout";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-theme='luxury'>
            <body className={`${inter.className} ${cinzel.variable} ${faunaOne.variable}`}>

                <Provider>
                    <EdgeStoreProvider>
                        <Toaster />
                        {/* <Cursor1 /> */}
                        <Header />
                        {children}
                        <Footer />
                    </EdgeStoreProvider>
                </Provider>
            </body>
        </html>
    );
}
