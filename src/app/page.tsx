import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIsIt from "@/components/WhatIsIt";
import WhyUseIt from "@/components/WhyUseIt";
import HowToUse from "@/components/HowToUse";
import Features from "@/components/Features";
import Showcase from "@/components/Showcase";
import Applications from "@/components/Applications";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

/**
 * MiniMax Music 2.5 落地页
 * 
 * 页面结构遵循课程中学到的建站技巧：
 * 
 * 1. 是什么（What）- WhatIsIt 组件
 *    - 让用户立马明白这是什么产品
 *    - 核心定义：用文字描述就能生成专业级歌曲的 AI 模型
 * 
 * 2. 为什么（Why）- WhyUseIt 组件
 *    - 解释为什么要选择这个产品
 *    - 6 大核心理由：省时、省钱、零门槛、版权归属、持续升级、创意无限
 * 
 * 3. 怎么做（How）- HowToUse 组件
 *    - 3 步使用教程：描述音乐 → AI 生成 → 下载使用
 *    - 包含 Prompt 示例和使用技巧
 * 
 * SEO 结构：
 * - H1: Hero 区域主标题
 * - H2: 各功能区块标题
 * - H3: 功能卡片标题
 * 
 * 关键词：MiniMax Music 2.5、AI音乐、音乐生成、人声表现、编曲混音
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* 导航栏 */}
      <Navbar />
      
      {/* Hero 区域 - H1 主标题 */}
      <Hero />
      
      {/* ========== 核心三问：是什么、为什么、怎么做 ========== */}
      
      {/* 是什么 - H2: MiniMax Music 2.5 是下一代 AI 音乐引擎 */}
      <WhatIsIt />
      
      {/* 为什么 - H2: 为什么 100万+创作者选择 Music 2.5 */}
      <WhyUseIt />
      
      {/* 怎么做 - H2: 只需 3 步，创作你的音乐 */}
      <HowToUse />
      
      {/* ========== 详细功能展示 ========== */}
      
      {/* 功能特性 - H2: 是听众，更是指挥家 */}
      <Features />
      
      {/* 音乐展示 - H2: 聆听 AI 创作的无限可能 */}
      <Showcase />
      
      {/* 应用场景 - H2: 无限场景，无限可能 */}
      <Applications />
      
      {/* FAQ - H2: 你可能想知道的问题 */}
      <FAQ />
      
      {/* CTA - H2: 准备好开始你的音乐创作之旅了吗？ */}
      <CTA />
      
      {/* 页脚 */}
      <Footer />
    </main>
  );
}
