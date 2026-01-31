"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Shield,
  Zap,
  Heart
} from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "节省 90% 创作时间",
    description: "传统音乐制作需要数周甚至数月，Music 2.5 只需 30 秒即可生成一首完整歌曲。",
    stat: "30秒",
    statLabel: "生成一首歌",
  },
  {
    icon: DollarSign,
    title: "大幅降低成本",
    description: "无需雇佣作曲家、编曲师、录音棚，一个人就能完成专业级音乐制作。",
    stat: "1/100",
    statLabel: "传统成本",
  },
  {
    icon: Zap,
    title: "零门槛创作",
    description: "不需要任何音乐理论知识，只需用文字描述你想要的音乐，AI 帮你实现。",
    stat: "0",
    statLabel: "专业要求",
  },
  {
    icon: Shield,
    title: "版权完全归属",
    description: "生成的音乐版权 100% 归你所有，可自由用于商业项目、社交媒体等。",
    stat: "100%",
    statLabel: "版权归属",
  },
  {
    icon: TrendingUp,
    title: "持续迭代升级",
    description: "Music 2.5 相比前代在音质、控制精度、生成速度上都有显著提升，且持续更新。",
    stat: "2.5",
    statLabel: "最新版本",
  },
  {
    icon: Heart,
    title: "创意无限可能",
    description: "从流行到古典，从电子到摇滚，支持几十种音乐风格，释放你的创作灵感。",
    stat: "50+",
    statLabel: "音乐风格",
  },
];

function ReasonCard({ reason, index }: { reason: typeof reasons[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-6 rounded-2xl glass hover-lift"
    >
      {/* 统计数字 */}
      <div className="absolute top-6 right-6 text-right">
        <div className="text-3xl font-bold gradient-text">{reason.stat}</div>
        <div className="text-xs text-gray-500">{reason.statLabel}</div>
      </div>

      {/* 图标 */}
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center mb-4 group-hover:from-violet-500/30 group-hover:to-fuchsia-500/30 transition-colors">
        <reason.icon className="w-6 h-6 text-violet-400" />
      </div>

      {/* H3 标题 */}
      <h3 className="text-xl font-semibold text-white mb-3 pr-20">{reason.title}</h3>

      {/* 描述 */}
      <p className="text-gray-400 leading-relaxed">{reason.description}</p>
    </motion.div>
  );
}

export default function WhyUseIt() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section className="py-24 relative bg-gradient-to-b from-black via-violet-950/10 to-black">
      {/* 背景装饰 */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-violet-600/10 rounded-full blur-[100px]" />
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-fuchsia-600/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* 标题区域 */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <TrendingUp className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-gray-300">为什么选择它？</span>
          </div>
          
          {/* H2 标题 */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            为什么 <span className="gradient-text">100万+创作者</span> 选择 Music 2.5
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            无论你是专业音乐人还是创作新手，Music 2.5 都能帮你更快、更好、更省地实现音乐梦想。
            以下是选择它的 6 个核心理由：
          </p>
        </motion.div>

        {/* 理由卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <ReasonCard key={index} reason={reason} index={index} />
          ))}
        </div>

        {/* 底部强调 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl glass">
            <div className="text-left">
              <p className="text-gray-400 text-sm">已有超过</p>
              <p className="text-2xl font-bold text-white">1,000,000+</p>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-left">
              <p className="text-gray-400 text-sm">创作者使用 Music 2.5</p>
              <p className="text-violet-400 font-medium">生成了 5000 万首歌曲</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
