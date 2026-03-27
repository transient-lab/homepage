import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Transient Lab | Make Change in Music Industry",
  description:
    "Transient Lab은 인간의 창작과 협업을 지원하는 오디오 소프트웨어를 개발합니다.",
  keywords: ["Transient Lab", "MixLab", "음원 제작", "오디오 소프트웨어", "음악 협업"],
  metadataBase: new URL("https://www.transientlab.kr"),
  openGraph: {
    title: "Transient Lab | Make Change in Music Industry",
    description: "인간의 창작과 협업을 지원하는 오디오 소프트웨어를 개발합니다.",
    siteName: "Transient Lab",
    locale: "ko_KR",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Transient Lab" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transient Lab | Make Change in Music Industry",
    description: "인간의 창작과 협업을 지원하는 오디오 소프트웨어를 개발합니다.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/favicon.png",
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
