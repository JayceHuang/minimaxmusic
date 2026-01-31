"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Music 2.5 与之前版本有什么区别？",
    answer: "Music 2.5 在音质、控制精度和生成速度上都有显著提升。新增14种结构标签支持、48kHz高采样率输出、更精准的人声表现，以及风格化物理特征还原功能。整体音乐质量达到录音室级别。",
  },
  {
    question: "生成的音乐版权归谁所有？",
    answer: "使用 MiniMax Music 生成的音乐，版权归创作者所有。你可以将生成的音乐用于个人项目、商业用途、社交媒体等各种场景，无需额外支付版权费用。",
  },
  {
    question: "支持哪些音乐风格和语言？",
    answer: "Music 2.5 支持包括流行、摇滚、电子、古典、爵士、R&B、嘻哈等数十种音乐风格。人声支持中文、英文、日语、韩语等多种语言，并能准确表达各种情感。",
  },
  {
    question: "如何获得最佳的生成效果？",
    answer: "建议使用详细的 Prompt 描述，包括：音乐风格、情绪氛围、节奏速度、乐器配置、歌词内容等。你也可以使用我们提供的结构标签（如 [Intro]、[Verse]、[Chorus]）来精确控制歌曲结构。",
  },
  {
    question: "生成一首歌曲需要多长时间？",
    answer: "得益于最新的推理优化技术，Music 2.5 通常可以在 30 秒内生成一首完整的歌曲。复杂的多轨道作品可能需要稍长时间，但一般不超过 2 分钟。",
  },
  {
    question: "可以对生成的音乐进行后期编辑吗？",
    answer: "当然可以。Music 2.5 支持多轨道分层输出，你可以单独获取人声、和声、伴奏等轨道，方便在专业音频软件中进行进一步编辑和混音。",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="border-b border-white/10 last:border-b-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-medium text-white group-hover:text-violet-300 transition-colors pr-4">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
            isOpen ? "rotate-180 text-violet-400" : ""
          }`}
        />
      </button>
      
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-gray-400 leading-relaxed">{faq.answer}</p>
      </motion.div>
    </motion.div>
  );
}

export default function FAQ() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="faq" className="py-24 relative">
      {/* 背景光晕 */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px]" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* 标题区域 */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <HelpCircle className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-gray-300">常见问题</span>
          </div>
          
          {/* H2 标题 */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            你可能想知道的<span className="gradient-text">问题</span>
          </h2>
          
          <p className="text-xl text-gray-400">
            关于 Music 2.5 的常见问题解答
          </p>
        </motion.div>

        {/* FAQ 列表 */}
        <div className="glass rounded-2xl p-6 md:p-8">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
