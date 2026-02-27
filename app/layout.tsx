import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "陽まわり農園 | HIMAWARI FARM",
  description: "6月〜9月営業。朝採り野菜の直売所。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
