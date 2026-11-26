import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
export const metadata: Metadata = { title: "Aurora Ecosystem | Inteligência conectada", description: "Um ecossistema independente de software, inteligência artificial, produtividade e automação." };
export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
