"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { Play, Pause, Music2, User, Volume2 } from "lucide-react";

// 音乐展示数据 - 使用免费的示例音频
const musicTracks = [
  {
    id: 1,
    title: "星河漫步",
    artist: "AI Composer",
    genre: "电子 / Ambient",
    cover: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=400&q=80",
    color: "from-violet-500 to-indigo-600",
    audioUrl: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3",
  },
  {
    id: 2,
    title: "城市夜曲",
    artist: "AI Composer",
    genre: "流行 / R&B",
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80",
    color: "from-fuchsia-500 to-pink-600",
    audioUrl: "https://cdn.pixabay.com/download/audio/2022/10/25/audio_946b0939c5.mp3",
  },
  {
    id: 3,
    title: "山间晨雾",
    artist: "AI Composer",
    genre: "古典 / 器乐",
    cover: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400&q=80",
    color: "from-emerald-500 to-teal-600",
    audioUrl: "https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3",
  },
  {
    id: 4,
    title: "热血战歌",
    artist: "AI Composer",
    genre: "摇滚 / Metal",
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&q=80",
    color: "from-orange-500 to-red-600",
    audioUrl: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_8cb749d484.mp3",
  },
  {
    id: 5,
    title: "午后咖啡",
    artist: "AI Composer",
    genre: "爵士 / Lounge",
    cover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&q=80",
    color: "from-amber-500 to-yellow-600",
    audioUrl: "https://cdn.pixabay.com/download/audio/2021/11/25/audio_91b32e02f9.mp3",
  },
  {
    id: 6,
    title: "霓虹都市",
    artist: "AI Composer",
    genre: "电子 / Synthwave",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80",
    color: "from-cyan-500 to-blue-600",
    audioUrl: "https://cdn.pixabay.com/download/audio/2022/08/02/audio_884fe92c21.mp3",
  },
];

function MusicCard({ 
  track, 
  index,
  isPlaying,
  isLoading,
  progress,
  onPlayPause,
}: { 
  track: typeof musicTracks[0]; 
  index: number;
  isPlaying: boolean;
  isLoading: boolean;
  progress: number;
  onPlayPause: (trackId: number) => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl overflow-hidden glass hover-lift"
    >
      {/* 封面图片 */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={track.cover}
          alt={track.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isPlaying ? "scale-110" : "group-hover:scale-110"
          }`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity ${
          isPlaying ? "opacity-90" : ""
        }`} />
        
        {/* 播放按钮 */}
        <button
          onClick={() => onPlayPause(track.id)}
          disabled={isLoading}
          className={`absolute inset-0 flex items-center justify-center transition-opacity ${
            isPlaying ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        >
          <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${track.color} flex items-center justify-center shadow-lg transform transition-transform ${
            isPlaying ? "scale-100" : "group-hover:scale-110"
          } ${isLoading ? "animate-pulse" : ""}`}>
            {isLoading ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : isPlaying ? (
              <Pause className="w-7 h-7 text-white" />
            ) : (
              <Play className="w-7 h-7 text-white ml-1" />
            )}
          </div>
        </button>

        {/* 正在播放指示器 */}
        {isPlaying && (
          <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-green-500/80 backdrop-blur-sm text-xs text-white flex items-center gap-1">
            <Volume2 className="w-3 h-3 animate-pulse" />
            播放中
          </div>
        )}

        {/* 进度条 */}
        {(isPlaying || progress > 0) && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/50">
            <div 
              className={`h-full bg-gradient-to-r ${track.color} transition-all duration-200`}
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>

      {/* 信息区域 */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-1 truncate">{track.title}</h3>
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
          <User className="w-3 h-3" />
          <span>{track.artist}</span>
        </div>
        <div className="flex items-center gap-2">
          <Music2 className="w-3 h-3 text-violet-400" />
          <span className="text-xs text-gray-500">{track.genre}</span>
        </div>
      </div>

      {/* 音波动画 */}
      {isPlaying && (
        <div className="absolute bottom-4 right-4 flex items-end gap-0.5 h-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-1 bg-gradient-to-t ${track.color} rounded-full wave-bar`}
              style={{ 
                height: "100%",
                animationDelay: `${i * 0.1}s` 
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default function Showcase() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  
  // 音频状态管理
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playingTrackId, setPlayingTrackId] = useState<number | null>(null);
  const [loadingTrackId, setLoadingTrackId] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);

  // 清理音频实例
  const cleanupAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = "";
      audioRef.current = null;
    }
    setProgress(0);
  }, []);

  // 处理播放/暂停
  const handlePlayPause = useCallback((trackId: number) => {
    const track = musicTracks.find(t => t.id === trackId);
    if (!track) return;

    // 如果点击的是当前正在播放的歌曲，则暂停
    if (playingTrackId === trackId && audioRef.current) {
      audioRef.current.pause();
      setPlayingTrackId(null);
      return;
    }

    // 清理之前的音频
    cleanupAudio();

    // 重置状态
    setLoadingTrackId(trackId);

    // 创建新的音频实例
    const audio = new Audio();
    audioRef.current = audio;

    // 监听时间更新
    audio.ontimeupdate = () => {
      if (audio.duration > 0) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    // 监听元数据加载完成
    audio.onloadedmetadata = () => {
      setLoadingTrackId(null);
      setPlayingTrackId(trackId);
      audio.play().catch((err) => {
        console.error("播放失败:", err);
        setPlayingTrackId(null);
      });
    };

    // 监听播放结束
    audio.onended = () => {
      setPlayingTrackId(null);
      setProgress(0);
    };

    // 监听错误
    audio.onerror = () => {
      console.error("音频加载失败");
      setLoadingTrackId(null);
      setPlayingTrackId(null);
    };

    // 设置音频源并加载
    audio.src = track.audioUrl;
    audio.load();
  }, [playingTrackId, cleanupAudio]);

  // 组件卸载时清理
  useEffect(() => {
    return () => {
      cleanupAudio();
    };
  }, [cleanupAudio]);

  return (
    <section id="showcase" className="py-24 relative">
      {/* 背景装饰 */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-violet-600/10 rounded-full blur-[100px]" />
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-fuchsia-600/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* 标题区域 */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="text-center mb-16"
        >
          <span className="text-violet-400 tracking-widest text-sm mb-4 block">音 乐 展 示</span>
          
          {/* H2 标题 */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            聆听 <span className="gradient-text">AI 创作</span> 的无限可能
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            从电子到古典，从流行到摇滚，Music 2.5 能够驾驭各种风格，
            为你呈现专业级的音乐作品。
          </p>

          {/* 提示文字 */}
          <p className="mt-4 text-sm text-gray-500 flex items-center justify-center gap-2">
            <Volume2 className="w-4 h-4" />
            点击卡片上的播放按钮试听音乐
          </p>
        </motion.div>

        {/* 音乐卡片网格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {musicTracks.map((track, index) => (
            <MusicCard 
              key={track.id} 
              track={track} 
              index={index}
              isPlaying={playingTrackId === track.id}
              isLoading={loadingTrackId === track.id}
              progress={playingTrackId === track.id ? progress : 0}
              onPlayPause={handlePlayPause}
            />
          ))}
        </div>

        {/* 查看更多按钮 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full glass text-white hover:bg-white/10 transition-colors"
          >
            探索更多作品
            <span className="text-violet-400">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
