import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Two Bob Enterprises | Engineering Solutions",
  description:
    "Two Bob Enterprises provides electrical, solar, HVAC, CCTV, UPS and generator solutions in Kenya.",
  icons: {
    icon: "/assets/logo.webp"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}