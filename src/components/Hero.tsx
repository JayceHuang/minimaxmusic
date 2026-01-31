"use client";

import { motion } from "framer-motion";
import { Play, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 背景效果 */}
      <div className="absolute inset-0 grid-bg" />
      
      {/* 渐变光晕 */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/30 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      
      {/* 背景图片叠加 */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />

      {/* 内容 */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* 标签 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <Sparkles className="w-4 h-4 text-violet-400" />
          <span className="text-sm text-gray-300">MINIMAX MUSIC 2.5</span>
        </motion.div>

        {/* 主标题 - H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="text-white">全维度突破</span>
          <br />
          <span className="gradient-text">指挥细节，定义真实</span>
        </motion.h1>

        {/* 副标题 */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Music V2.5 震撼发布。从灵光初现到成片发布，赋予你对声音的绝对指挥权。
          <br className="hidden md:block" />
          每一处细微的听感起伏，皆如你所愿
        </motion.p>

        {/* CTA 按钮 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#"
            className="px-8 py-4 rounded-full bg-white text-black font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            立即创作
          </a>
          <a
            href="#showcase"
            className="px-8 py-4 rounded-full glass text-white font-medium text-lg hover:bg-white/10 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <Play className="w-5 h-5" />
            点击播放
          </a>
        </motion.div>

        {/* 核心能力标签 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {[
            { label: "人声表现", color: "from-violet-500 to-violet-600" },
            { label: "编曲与混音", color: "from-fuchsia-500 to-fuchsia-600" },
            { label: "结构精度", color: "from-pink-500 to-pink-600" },
            { label: "声音设计", color: "from-purple-500 to-purple-600" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sm text-gray-300"
            >
              <div className={`w-1 h-6 rounded-full bg-gradient-to-b ${item.color}`} />
              <span>{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 底部渐变 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
