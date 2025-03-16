import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/components/I18nProvider";
import ClientLayout from "@/components/ClientLayout";
import "../i18n/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Green Leaf Textile - Premium Silk-like Fabric Manufacturer",
  description: "Professional manufacturer of high-quality silk-like fabrics, providing premium textile products for international brands like UNIQLO, ZARA, and H&M.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={inter.className}>
        <I18nProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </I18nProvider>
      </body>
    </html>
  );
}
