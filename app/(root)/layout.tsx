import { Metadata } from "next";
import StreamVideoProvider from "../../providers/StreamClientProvider";
import React, { ReactNode } from "react";
export const metadata: Metadata = {
    title: " Ｃｏｎｎｅｃｔｉｖｉｔｙ",
    description: "Video-App",
    icons: "/icons/logo.svg",
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <main>
            <StreamVideoProvider>{children}</StreamVideoProvider>
        </main>
    );
};

export default RootLayout;
