"use client";

import { motion } from "framer-motion";
import { PlayCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import { VideoShowcase } from "@/components/video-showcase";
import { ContentCreativeProjects } from "@/components/content-creative-projects";
import { CreativeProcess } from "@/components/creative-process";
import { Skills } from "@/components/skills";
import { IdeaBank } from "@/components/idea-bank";
import { PhotoGallery } from "@/components/photo-gallery";
import { SocialAndContact } from "@/components/social-contact";
import { CVSection } from "@/components/cv-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden bg-black text-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center pt-20 pb-10 px-4 md:px-6 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-primary/20 rounded-full blur-[120px] opacity-30 z-0 pointer-events-none" />

        <div className="container relative z-10 flex flex-col items-center text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl relative mb-2"
          >
            <Image src="/source/ava.jpg" alt="Lê Kim Nam Avatar" fill className="object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            Hiện đang nhận dự án mới
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter"
          >
            Lê Kim Nam
            <span className="block mt-2 bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent pb-2">
              Content Editor
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-175 text-lg md:text-xl text-white/60 mt-4"
          >
            Chuyên gia sáng tạo nội dung ngắn, kể chuyện qua video và bắt trend TikTok.
            Biến ý tưởng thành những câu chuyện thị giác thu hút.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <a href="#video-showcase" className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 rounded-full text-base h-12 px-8 group cursor-pointer bg-white text-black hover:bg-zinc-200 border-transparent shadow">
              Xem tác phẩm của tôi
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#photo-gallery" className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 rounded-full text-base h-12 px-8 group border border-white/20 bg-black/50 backdrop-blur-sm shadow-xl hover:bg-white/10 cursor-pointer text-white">
              <PlayCircle className="mr-2 w-5 h-5" />
              Xem Showreel
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-xs text-white/40 mb-2 uppercase tracking-widest">Cuộn xuống</span>
          <div className="w-px h-12 bg-linear-to-b from-primary/50 to-transparent"></div>
        </motion.div>
      </section>

      {/* Sections */}
      <div id="video-showcase" className="w-full">
        <VideoShowcase />
      </div>
      <div id="content-creative-projects" className="w-full">
        <ContentCreativeProjects />
      </div>
      <CreativeProcess />
      <Skills />
      <IdeaBank />
      <div id="photo-gallery" className="w-full">
        <PhotoGallery />
      </div>
      <div id="cv" className="w-full">
        <CVSection />
      </div>
      <SocialAndContact />

      <footer className="w-full py-8 border-t border-white/5 bg-zinc-950 text-center text-white/40 text-sm mt-auto">
        <p>© {new Date().getFullYear()} Lê Kim Nam - Video Creator.</p>
      </footer>
    </main>
  );
}
