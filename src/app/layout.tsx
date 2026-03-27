import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Transient Lab | Sound Innovation",
  description:
    "Transient Lab은 인간의 창작과 협업을 지원하는 오디오 소프트웨어를 개발합니다.",
  keywords: ["Transient Lab", "MixLab", "음원 제작", "오디오 소프트웨어", "음악 협업"],
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
