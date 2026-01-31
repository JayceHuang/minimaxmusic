"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Film, 
  Gamepad2, 
  Radio, 
  Store, 
  Mic, 
  Video 
} from "lucide-react";

const applications = [
  {
    icon: Film,
    title: "影视配乐",
    description: "为电影、电视剧、纪录片快速生成专业级配乐，完美匹配画面情绪。",
    stats: "节省 80% 配乐时间",
  },
  {
    icon: Gamepad2,
    title: "游戏音效",
    description: "动态生成游戏背景音乐和音效，支持实时交互式音乐系统。",
    stats: "支持 100+ 游戏风格",
  },
  {
    icon: Radio,
    title: "播客与电台",
    description: "快速生成片头曲、过渡音乐、背景音乐，让节目更具专业感。",
    stats: "30秒生成完整音乐",
  },
  {
    icon: Store,
    title: "商业广告",
    description: "为品牌广告定制专属音乐，支持多版本快速迭代。",
    stats: "版权无忧商用",
  },
  {
    icon: Mic,
    title: "个人创作",
    description: "无需专业音乐知识，用文字描述即可创作属于自己的歌曲。",
    stats: "0门槛音乐创作",
  },
  {
    icon: Video,
    title: "短视频配乐",
    description: "为抖音、B站等平台内容快速生成吸引眼球的背景音乐。",
    stats: "适配各平台规格",
  },
];

function ApplicationCard({ app, index }: { app: typeof applications[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-6 rounded-2xl glass hover-lift"
    >
      <div className="flex items-start gap-4">
        {/* 图标 */}
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center flex-shrink-0 group-hover:from-violet-500/30 group-hover:to-fuchsia-500/30 transition-colors">
          <app.icon className="w-7 h-7 text-violet-400" />
        </div>

        <div className="flex-1">
          {/* H3 标题 */}
          <h3 className="text-xl font-semibold text-white mb-2">{app.title}</h3>
          
          {/* 描述 */}
          <p className="text-gray-400 mb-3 leading-relaxed">{app.description}</p>
          
          {/* 统计标签 */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20">
            <span className="text-sm text-violet-300">{app.stats}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Applications() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="applications" className="py-24 relative">
      {/* 背景装饰 */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* 标题区域 */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="text-center mb-16"
        >
          <span className="text-violet-400 tracking-widest text-sm mb-4 block">应 用 场 景</span>
          
          {/* H2 标题 */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            无限场景，<span className="gradient-text">无限可能</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            从专业影视制作到个人创意表达，Music 2.5 为各行各业提供强大的音乐创作支持。
          </p>
        </motion.div>

        {/* 应用卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, index) => (
            <ApplicationCard key={index} app={app} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
