"use client";

import { Inter } from "next/font/google";
import { Sepolia } from "@thirdweb-dev/chains";
import { ThirdwebProvider } from "@thirdweb-dev/react";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThirdwebProvider
                    activeChain={Sepolia}
                    clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
                >
                    {children}
                </ThirdwebProvider>
            </body>
        </html>
    );
}
