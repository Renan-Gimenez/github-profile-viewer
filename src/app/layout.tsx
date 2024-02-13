import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import TanStackProvider from "@/providers/TanStackProvider";

export const metadata: Metadata = {
  title: "GitHub Profile Viewer",
  description: "View GitHub profile and repositories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TanStackProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </TanStackProvider>
  );
}
