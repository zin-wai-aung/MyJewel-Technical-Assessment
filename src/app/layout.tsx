import { Toaster } from "sonner";
import { dmSans, playfair } from "./fonts";
import "./globals.css";

export const metadata = {
  title: "MyJewel",
  description: "Elegant Jewelry Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${playfair.variable}`}>
        {children}
        <Toaster position="bottom-right" richColors closeButton />
      </body>
    </html>
  );
}
