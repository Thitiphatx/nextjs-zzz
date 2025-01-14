import type { Metadata } from "next";
import { Comfortaa, Kanit } from "next/font/google";
import "./globals.css";
import PageTransitionEffect from "./PageTransitionEffect";
import Link from "next/link";

const comfortaa = Comfortaa({ 
    subsets: ["latin"],
    weight: ['300', '400', '500', '600', '700'],
});

const kanit = Kanit({
    subsets: ["thai"],
    weight: ['100', '200', "300", "400", "500", "600", "700", "800", "900"]
})

export const metadata: Metadata = {
    title: "maru designs",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en"> 
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            </head>           
            <body className="font-body">
                <main className="min-h-svh max-w-full text-white">
                    <PageTransitionEffect>
                        {children}
                    </PageTransitionEffect>
                </main>
            </body>
        </html>
    );
}
