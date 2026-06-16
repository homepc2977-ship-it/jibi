import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JIBI — Smart Budgeting",
  description: "Know what you can safely spend before your next payday.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
