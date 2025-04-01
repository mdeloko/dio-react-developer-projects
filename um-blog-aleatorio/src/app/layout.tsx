import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meu Blog com Next!",
  description: "Um blog feito como estudo/aprendizado de React e Next!",
  creator:"Erik G. Coutinho",
  icons:"/globe.svg"  
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="pt-BR">
      <body>
            {children}
      </body>
    </html>
  );
}
