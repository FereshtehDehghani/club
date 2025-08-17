import type { Metadata } from "next";
import "./globals.css";
import { irsans, vazir } from "./fonts";


export const metadata: Metadata = {
  title: "club",
  description: "Gym club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fa' dir='rtl'>
      <body
        className={`${vazir.variable} ${irsans.variable} antialiased min-w-full`}
      >
        {children}
      </body>
    </html>
  );
}
