"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  PenLine, 
  Sparkles, 
  Download,
  ArrowRight,
  CheckCircle2,
  Copy
} from "lucide-react";

const steps = [
  {
    step: 1,
    icon: PenLine,
    title: "描述你的音乐",
    description: "用自然语言描述你想要的音乐风格、情绪、节奏、歌词等。越详细，生成效果越好。",
    example: `[Verse]
一个人走在深夜的街头
霓虹灯闪烁映照着孤独
[Chorus]  
我在等一个不会来的人
在这城市的尽头`,
    tips: [
      "使用结构标签如 [Intro]、[Verse]、[Chorus] 控制歌曲结构",
      "描述音乐风格：流行、摇滚、电子、古典等",
      "指定情绪：欢快、忧伤、激昂、平静等",
      "可以直接写歌词，AI 会为歌词配曲",
    ],
  },
  {
    step: 2,
    icon: Sparkles,
    title: "AI 生成音乐",
    description: "点击生成按钮，Music 2.5 将在 30 秒内为你创作一首完整的歌曲，包含人声和伴奏。",
    features: [
      "48kHz 高品质音频",
      "自然真实的 AI 人声",
      "专业级编曲和混音",
      "支持多次生成选择最佳版本",
    ],
  },
  {
    step: 3,
    icon: Download,
    title: "下载并使用",
    description: "满意后即可下载音乐文件。支持多种格式导出，版权完全归你所有，可自由商用。",
    formats: ["MP3", "WAV", "FLAC", "分轨导出"],
    useCases: ["短视频配乐", "播客片头", "游戏背景音乐", "商业广告", "个人作品"],
  },
];

function StepCard({ stepData, index }: { stepData: typeof steps[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative"
    >
      {/* 连接线 */}
      {index < steps.length - 1 && (
        <div className="hidden lg:block absolute top-16 left-[calc(100%+1rem)] w-8 h-0.5 bg-gradient-to-r from-violet-500 to-transparent" />
      )}

      <div className="glass rounded-2xl p-8 h-full">
        {/* 步骤编号 */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white text-xl font-bold">
            {stepData.step}
          </div>
          <div>
            <div className="text-sm text-violet-400 mb-1">第 {stepData.step} 步</div>
            <h3 className="text-2xl font-bold text-white">{stepData.title}</h3>
          </div>
        </div>

        {/* 描述 */}
        <p className="text-gray-300 mb-6 leading-relaxed">{stepData.description}</p>

        {/* 步骤 1：示例代码 */}
        {stepData.example && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">Prompt 示例：</span>
              <button className="flex items-center gap-1 text-xs text-violet-400 hover:text-violet-300">
                <Copy className="w-3 h-3" />
                复制
              </button>
            </div>
            <pre className="bg-black/50 rounded-xl p-4 text-sm text-gray-300 overflow-x-auto">
              <code>{stepData.example}</code>
            </pre>
          </div>
        )}

        {/* 步骤 1：提示列表 */}
        {stepData.tips && (
          <div className="space-y-2">
            <span className="text-sm text-gray-400">💡 小技巧：</span>
            {stepData.tips.map((tip, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-gray-400">
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{tip}</span>
              </div>
            ))}
          </div>
        )}

        {/* 步骤 2：特性列表 */}
        {stepData.features && (
          <div className="grid grid-cols-2 gap-3">
            {stepData.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                {feature}
              </div>
            ))}
          </div>
        )}

        {/* 步骤 3：格式和用途 */}
        {stepData.formats && (
          <div className="space-y-4">
            <div>
              <span className="text-sm text-gray-400 mb-2 block">支持格式：</span>
              <div className="flex flex-wrap gap-2">
                {stepData.formats.map((format, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 text-sm">
                    {format}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="text-sm text-gray-400 mb-2 block">应用场景：</span>
              <div className="flex flex-wrap gap-2">
                {stepData.useCases?.map((useCase, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-white/5 text-gray-300 text-sm">
                    {useCase}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function HowToUse() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="how-to-use" className="py-24 relative">
      {/* 背景网格 */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* 标题区域 */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-gray-300">如何使用？</span>
          </div>
          
          {/* H2 标题 */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            只需 <span className="gradient-text">3 步</span>，创作你的音乐
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            无需任何专业知识，跟随以下步骤，30 秒内即可生成一首专业级歌曲。
          </p>
        </motion.div>

        {/* 步骤卡片 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <StepCard key={index} stepData={step} index={index} />
          ))}
        </div>

        {/* 底部 CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            立即开始创作
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="mt-4 text-gray-500 text-sm">
            无需注册，免费试用 · 每日赠送创作额度
          </p>
        </motion.div>
      </div>
    </section>
  );
}
