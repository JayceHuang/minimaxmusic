"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* 背景效果 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/50 via-black to-fuchsia-900/30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* 装饰图标 */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 mb-8 glow"
          >
            <Sparkles className="w-10 h-10 text-white" />
          </motion.div>

          {/* H2 标题 */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            准备好开始你的
            <br />
            <span className="gradient-text">音乐创作之旅</span>了吗？
          </h2>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            加入数百万创作者的行列，用 AI 释放你的音乐潜能。
            无需专业知识，只需一个想法。
          </p>

          {/* CTA 按钮组 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-full bg-white text-black font-semibold text-lg flex items-center gap-2 hover:bg-gray-100 transition-colors"
            >
              免费开始创作
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            
            <motion.a
              href="#features"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-full glass text-white font-medium text-lg hover:bg-white/10 transition-colors"
            >
              了解更多功能
            </motion.a>
          </div>

          {/* 信任标签 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>无需信用卡</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>每日免费额度</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>商用版权无忧</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
