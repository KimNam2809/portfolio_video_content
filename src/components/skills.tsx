"use client";

import { motion } from "framer-motion";
import { Scissors, Zap, Video, MonitorPlay } from "lucide-react";
import { SectionHeading } from "./ui/section-heading";

const SKILL_CATEGORIES = [
    {
        title: "Dựng Video",
        icon: Scissors,
        color: "text-blue-400",
        bg: "bg-blue-400/10 border-blue-400/20",
        skills: ["CapCut Pro", "Canva", "AI Image Gen (Hỗ trợ edit)", "Chỉnh màu", "Âm thanh", "Hiệu ứng chuyển cảnh"],
    },
    {
        title: "Sáng Tạo Nội Dung",
        icon: Zap,
        color: "text-yellow-400",
        bg: "bg-yellow-400/10 border-yellow-400/20",
        skills: ["Bắt trend TikTok/Reels", "Kể chuyện ngắn (Storytelling)", "Văn hóa Meme", "Viết kịch bản (Scripting)", "Hook 3 giây đầu", "Nghiên cứu thị hiếu"],
    },
    {
        title: "Sản Xuất",
        icon: Video,
        color: "text-green-400",
        bg: "bg-green-400/10 border-green-400/20",
        skills: ["Khung hình (Framing)", "Nguyên tắc ánh sáng", "Bố cục cảnh quay", "Thiết lập máy quay", "Thu âm", "Chỉ đạo diễn xuất (Cơ bản)"],
    },
];

export function Skills() {
    return (
        <section className="py-24 px-4 md:px-6 relative w-full border-t border-white/5 bg-zinc-950/50">
            <div className="container mx-auto">
                <SectionHeading
                    title="Vũ Khí Sáng Tạo"
                    subtitle="Tổ hợp kỹ năng từ lên ý tưởng, sản xuất đến hậu kỳ giúp tôi kiểm soát chất lượng video từ A tới Z."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
                    {SKILL_CATEGORIES.map((category, index) => {
                        const Icon = category.icon;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`p-8 rounded-3xl border backdrop-blur-sm shadow-xl flex flex-col h-full bg-white/5 border-white/10`}
                            >
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-inner ${category.bg} border`}>
                                    <Icon className={`w-7 h-7 ${category.color}`} />
                                </div>

                                <h3 className="text-2xl font-heading font-bold text-white mb-6 tracking-tight">
                                    {category.title}
                                </h3>

                                <ul className="space-y-4 flex-1">
                                    {category.skills.map((skill, i) => (
                                        <li key={i} className="flex items-start">
                                            <div className="mr-3 mt-1 pointer-events-none">
                                                <MonitorPlay className="w-4 h-4 text-white/30" />
                                            </div>
                                            <span className="text-white/80 font-medium leading-relaxed">
                                                {skill}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
