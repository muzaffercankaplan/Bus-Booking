import { MainProvider } from "@/context/MainContext";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LojiPer.com - Dijital İş Arkadaşınız",
  description: "Lojiper",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainProvider>
          <Suspense fallback={<p>test</p>}>{children}</Suspense>
        </MainProvider>{" "}
      </body>
    </html>
  );
}
