import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Plataforma de Matemática",
  description: "Aprendizado de Matemática",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
