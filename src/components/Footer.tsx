"use client";

import { Music2, Github, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const footerLinks = {
    产品: ["功能介绍", "价格方案", "API 文档", "更新日志"],
    资源: ["使用教程", "创作案例", "社区论坛", "开发者中心"],
    公司: ["关于我们", "加入我们", "联系我们", "新闻动态"],
    法律: ["服务条款", "隐私政策", "版权声明", "Cookie 政策"],
  };

  return (
    <footer className="border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo 和简介 */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                <Music2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">MINIMAX</span>
            </a>
            <p className="text-gray-400 text-sm mb-4">
              用 AI 重新定义音乐创作，让每个人都能成为音乐家。
            </p>
            {/* 社交链接 */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* 链接列表 */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 底部版权 */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 MiniMax. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Made with ❤️ for music creators worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
