"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Mic2, 
  Music, 
  Sliders, 
  Wand2, 
  AudioWaveform,
  Layers,
  Zap,
  Settings2
} from "lucide-react";

const features = [
  {
    icon: Mic2,
    title: "极致人声表现",
    description: "支持多语种人声生成，情感表达细腻真实，从低语到高亢，完美还原人声的每一个细节。",
    color: "from-violet-500 to-violet-600",
  },
  {
    icon: Music,
    title: "14种结构标签",
    description: "Intro、Verse、Chorus、Bridge、Outro等专业结构标签，让歌曲编排更加精准有序。",
    color: "from-fuchsia-500 to-fuchsia-600",
  },
  {
    icon: Sliders,
    title: "录音室级音质",
    description: "48kHz高采样率输出，专业级混音效果，每一秒听感都拥有专业级质感。",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: Wand2,
    title: "风格化物理特征还原",
    description: "系统自动识别并还原特定风格的物理特性，为现代电子赋予极致的宽频瞬态感。",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: AudioWaveform,
    title: "精准音色控制",
    description: "支持乐器音色、混响空间、动态范围等多维度精细调节，实现你心中的完美声音。",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: Layers,
    title: "多轨道编排",
    description: "支持人声、和声、伴奏分层输出，为后期制作提供更大的创作空间。",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Zap,
    title: "极速生成",
    description: "采用最新推理优化技术，30秒内即可生成一首完整歌曲，创作效率大幅提升。",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: Settings2,
    title: "专业级 Prompt",
    description: "开放核心编曲指令，直接调用专业级 Prompt，亲耳验证高保真与强控制。",
    color: "from-teal-500 to-teal-600",
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-6 rounded-2xl glass hover-lift cursor-pointer"
    >
      {/* 悬浮时的渐变边框 */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        {/* 图标 */}
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
          <feature.icon className="w-6 h-6 text-white" />
        </div>

        {/* H3 标题 */}
        <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>

        {/* 描述 */}
        <p className="text-gray-400 leading-relaxed">{feature.description}</p>
      </div>
    </motion.div>
  );
}

export default function Features() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="features" className="py-24 relative">
      {/* 背景装饰 */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* 标题区域 */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-violet-400 tracking-widest text-sm">听 见 进 化</span>
            <span className="text-gray-500">/</span>
            <span className="text-fuchsia-400 tracking-widest text-sm">创 作 实 证</span>
          </div>
          
          {/* H2 标题 */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            是听众，更是<span className="gradient-text">指挥家</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            好声音不应只存在于参数里。我们开放了一些用 V2.5 编曲的核心指令，
            你可以直接调用这些专业级 Prompt，亲耳验证&quot;高保真&quot;与&quot;强控制&quot;如何重塑声音的每一个维度。
          </p>
        </motion.div>

        {/* 功能卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
