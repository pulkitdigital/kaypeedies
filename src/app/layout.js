import { Nunito_Sans, Saira } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
const saira = Saira({
  subsets: ["latin"],
  variable: "--font-saira",
});
const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Kay Pee Dies</title>
        <meta name="description" content="Kay Pee Dies" />
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body className={`${saira.variable} ${nunitoSans.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
