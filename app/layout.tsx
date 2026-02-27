export const metadata = {
  title: "ひまわりファーム",
  description: "ひまわりファームのサイト",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
