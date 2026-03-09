"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { SectionHeading } from "./ui/section-heading";
import Image from "next/image";

export function SocialAndContact() {
    return (
        <section className="py-24 px-4 md:px-6 relative w-full border-t border-white/5 bg-zinc-950/50">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Social Media Preview (TikTok) */}
                <div>
                    <SectionHeading
                        title="Kết Nối"
                        subtitle="Theo dõi hành trình sáng tạo của tôi trên các nền tảng mạng xã hội."
                        align="left"
                        className="mb-8"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-black border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative group"
                    >
                        {/* TikTok Header */}
                        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-zinc-900/50">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-primary to-accent p-1">
                                    <div className="w-full h-full rounded-full overflow-hidden">
                                        <Image
                                            src="/source/my_photos/IMG_20260119_172836.jpg"
                                            alt="Avatar"
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-lg">lekimnam2809</h3>
                                    <p className="text-white/60 text-sm">Video Creator</p>
                                </div>
                            </div>
                            <Button variant="outline" className="rounded-full border-white/20 text-white hover:bg-white hover:text-black">
                                Follow
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="flex px-6 py-4 justify-around border-b border-white/10 bg-zinc-900/30 text-center">
                            <div>
                                <p className="font-bold text-white">168</p>
                                <p className="text-xs text-white/50">Followers</p>
                            </div>
                            <div>
                                <p className="font-bold text-white">91</p>
                                <p className="text-xs text-white/50">Likes</p>
                            </div>
                            <div>
                                <p className="font-bold text-white">1002</p>
                                <p className="text-xs text-white/50">Views</p>
                            </div>
                        </div>

                        {/* TikTok Preview */}
                        <div className="w-full h-[600px] bg-zinc-900 relative flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#ff0050]/20 via-[#00f2ea]/10 to-transparent opacity-50" />
                            <div className="relative z-10 flex flex-col items-center justify-center gap-6 p-8 text-center">
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="relative"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#ff0050] to-[#00f2ea] blur-3xl opacity-30 animate-pulse" />
                                    <svg className="w-24 h-24 text-white relative z-10" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                                    </svg>
                                </motion.div>
                                <div>
                                    <p className="text-white/90 text-xl font-semibold mb-2">
                                        Khám phá nội dung sáng tạo
                                    </p>
                                    <p className="text-white/60 mb-8">
                                        Xem video và kết nối trên TikTok
                                    </p>
                                </div>
                                <a
                                    href="https://www.tiktok.com/@lekimnam2809"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#ff0050] to-[#00f2ea] text-white font-bold rounded-full hover:shadow-xl hover:shadow-[#ff0050]/30 transition-all hover:scale-105 text-lg"
                                >
                                    Mở TikTok
                                    <ExternalLink className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        <div className="absolute inset-0 border-4 border-transparent group-hover:border-primary/20 rounded-3xl transition-colors pointer-events-none" />
                    </motion.div>
                </div>

                {/* Contact Section */}
                <div className="flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-6 leading-tight">
                            Sẵn sàng tạo ra <br className="hidden md:block" />
                            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                                content triệu view?
                            </span>
                        </h2>

                        <p className="text-xl text-white/80 mb-12 italic border-l-4 border-primary pl-6 py-2 bg-gradient-to-r from-primary/10 to-transparent">
                            "Hãy để sự sáng tạo trong em góp sức xây dựng hình ảnh công ty trở nên lan toản hơn."
                        </p>

                        <div className="space-y-6 mb-12">
                            <a href="mailto:lekimnam2809@gmail.com" className="flex items-center gap-4 text-white/70 hover:text-white group p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <Mail className="w-5 h-5 group-hover:text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-white/40 mb-1">Email</p>
                                    <p className="font-medium text-lg">lekimnam2809@gmail.com</p>
                                </div>
                            </a>

                            <a href="https://www.facebook.com/nam.teo.1690" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/70 hover:text-white group p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                                    <svg className="w-5 h-5 group-hover:text-blue-500 fill-current" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-white/40 mb-1">Facebook</p>
                                    <p className="font-medium text-lg">Lê Kim Nam</p>
                                </div>
                            </a>

                            <a href="https://www.tiktok.com/@lekimnam2809" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/70 hover:text-white group p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#ff0050]/20 transition-colors">
                                    <svg className="w-5 h-5 group-hover:text-[#ff0050] fill-current" viewBox="0 0 24 24">
                                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 15.68a6.34 6.34 0 0 0 6.27 6.32 6.32 6.32 0 0 0 6.27-6.32v-5.69a8.45 8.45 0 0 0 7.16 3.56v-3.32a4.88 4.88 0 0 1-5.11-3.54z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-white/40 mb-1">TikTok</p>
                                    <p className="font-medium text-lg">@lekimnam2809</p>
                                </div>
                            </a>
                        </div>

                        <Button size="lg" className="w-full sm:w-auto rounded-full text-base h-16 px-10 group font-bold text-lg bg-white text-black hover:bg-zinc-200">
                            Liên Hệ Ngay
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
