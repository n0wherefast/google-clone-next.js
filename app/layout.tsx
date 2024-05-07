import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import { Provider } from "./context/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Google Clone Home Page",
  description: "example of google home page  with prediction text and authentication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
