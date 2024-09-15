import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Auth from "./auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={inter.className + " w-screen min-h-screen m-0 p-0"}>
        <Auth>{children}</Auth>
      </body>
    </html>
  );
}
