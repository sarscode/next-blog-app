import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { buttonVariants } from "@/components/ui/button";
import "./globals.css";

import { cn } from "@/lib/utils";
import Link from "next/link";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Next 14 Blog App",
  description:
    "A blog app built with Next 14 using tailwind, shadcn, react-hook-form, and zod",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <nav className="container max-w-4xl my-4 flex justify-between align-middle">
          <Link
            href={"/"}
            className={cn(
              buttonVariants({ variant: "link" }),
              "font-bold pl-0"
            )}
          >
            App
          </Link>
          <Link
            href={"/posts"}
            className={buttonVariants({ variant: "default" })}
          >
            Create new post
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
