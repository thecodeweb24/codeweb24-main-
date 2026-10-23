import { DM_Serif_Display, Manrope } from "next/font/google";
import "./globals.css";

const display = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>CODEWEB24 | Expert Web Developer</title>
        <meta name="description" content="We Code. We Build. We Deliver. Custom websites, web apps, e-commerce, and digital business systems built for businesses in India and beyond." />
        <meta name="google-site-verification" content="J2-hJlZOhWR_r8Qno1Icr3FNJGX5aSG62biy2Y3fQSo" />
        <meta property="og:title" content="CODEWEB24 | Expert Web Developer" />
        <meta property="og:description" content="We Build Digital Experiences" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${display.variable} ${bodyFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
