import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO 优化：Meta Title 和 Description 可独立于页面内容进行优化
export const metadata: Metadata = {
  title: "MiniMax Music 2.5 - 全维度突破，指挥细节，定义真实 | AI 音乐生成",
  description: "Music V2.5 震撼发布。从灵光初现到成片发布，赋予你对声音的绝对指挥权。录音室级音质、14种结构标签、极致人声表现，让每一秒听感都拥有专业级质感。",
  keywords: ["MiniMax", "Music 2.5", "AI音乐", "音乐生成", "人工智能", "作曲", "编曲"],
  authors: [{ name: "MiniMax" }],
  openGraph: {
    title: "MiniMax Music 2.5 - 全维度突破，指挥细节，定义真实",
    description: "Music V2.5 震撼发布。赋予你对声音的绝对指挥权。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
