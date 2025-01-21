import { Fira_Code } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import BackToTop from "./components/BackToTop";
import { Header } from "./components/Header";
import { Form } from "./components/FormContact";
import { Footer } from "./components/Footer";

export const metadata = {
  title: {
    default: "Home",
    template: "%s | HerisonTech.",
  },
  icons: [
    {
      url: "/favicon.svg",
    },
  ],
};

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${firaCode.variable}`}>
      <body className="flex flex-col min-h-screen font-fira text-zinc-300">
        <BackToTop />
        <Header />
        {children}
        <Form />
        <Footer />
      </body>
    </html>
  );
}
