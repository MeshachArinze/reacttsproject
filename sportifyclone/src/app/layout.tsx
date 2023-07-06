import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "@/components/provider";
import { WebVitals } from "./_components/web-vitals";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <WebVitals />
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
}
