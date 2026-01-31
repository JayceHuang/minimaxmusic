"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Cpu, 
  Music, 
  Wand2, 
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export default function WhatIsIt() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const keyPoints = [
    "由 MiniMax 研发的最新一代 AI 音乐生成模型",
    "支持文本描述直接生成完整歌曲（含人声、伴奏）",
    "48kHz 录音室级音质输出",
    "支持 14 种专业歌曲结构标签控制",
    "多语种人声支持（中/英/日/韩等）",
    "30 秒内生成一首完整歌曲",
  ];

  return (
    <section className="py-24 relative">
      {/* 背景装饰 */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 左侧：文字说明 */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            {/* 标签 */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Cpu className="w-4 h-4 text-violet-400" />
              <span className="text-sm text-gray-300">这是什么？</span>
            </div>

            {/* H2 标题 */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              MiniMax Music 2.5 是
              <span className="gradient-text">下一代 AI 音乐引擎</span>
            </h2>

            {/* 核心定义 - 让用户立马明白这是什么 */}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              <strong className="text-white">一句话概括：</strong>MiniMax Music 2.5 是一个 
              <span className="text-violet-400 font-semibold">用文字描述就能生成专业级歌曲</span> 
              的 AI 模型。你只需要告诉它你想要什么风格、什么情绪、什么歌词，它就能在 30 秒内为你创作一首完整的歌曲。
            </p>

            {/* 核心特点列表 */}
            <div className="space-y-3 mb-8">
              {keyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{point}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#how-to-use"
              className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors"
            >
              了解如何使用
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* 右侧：可视化展示 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* 对比卡片 */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                与其他 AI 音乐工具的区别
              </h3>
              
              <div className="space-y-4">
                {/* 对比项 */}
                {[
                  { label: "音质", minimax: "48kHz 录音室级", others: "普通压缩音质" },
                  { label: "人声", minimax: "自然真实，多语种", others: "机械感明显" },
                  { label: "结构控制", minimax: "14种专业标签", others: "无法精确控制" },
                  { label: "生成速度", minimax: "30秒完成", others: "数分钟" },
                  { label: "商用版权", minimax: "✓ 完全归属用户", others: "限制较多" },
                ].map((item, index) => (
                  <div key={index} className="grid grid-cols-3 gap-4 py-3 border-b border-white/10 last:border-b-0">
                    <span className="text-gray-400 text-sm">{item.label}</span>
                    <span className="text-green-400 text-sm font-medium">{item.minimax}</span>
                    <span className="text-gray-500 text-sm">{item.others}</span>
                  </div>
                ))}
              </div>

              {/* 表头说明 */}
              <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-white/10">
                <span className="text-gray-500 text-xs">对比项</span>
                <span className="text-violet-400 text-xs font-medium">Music 2.5</span>
                <span className="text-gray-500 text-xs">其他工具</span>
              </div>
            </div>

            {/* 装饰元素 */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-violet-500/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-fuchsia-500/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
