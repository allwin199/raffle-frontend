import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { headers } from "next/headers";

import { cookieToInitialState } from "wagmi";

import { config } from "@/config";
import { ContextProvider } from "@/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Smart Contract Lottery",
    description: "Players can enter the raffle by paying in ETH",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const initialState = cookieToInitialState(config, headers().get("cookie"));
    return (
        <html lang="en">
            <body className={inter.className}>
                <ContextProvider initialState={initialState}>
                    {children}
                </ContextProvider>
            </body>
        </html>
    );
}
