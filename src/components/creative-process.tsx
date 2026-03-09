"use client";

import { motion } from "framer-motion";
import { Lightbulb, Edit3, Video, Scissors, Upload, Search } from "lucide-react";
import { SectionHeading } from "./ui/section-heading";

const STEPS = [
    {
        icon: Search,
        title: "1. Nghiên cứu Xu hướng",
        description: "Phân tích âm thanh thịnh hành, hashtag, và các mẫu nội dung đang viral trên nền tảng.",
        color: "text-blue-500",
        bg: "bg-blue-500/10",
    },
    {
        icon: Lightbulb,
        title: "2. Phát triển Ý tưởng",
        description: "Brainstorming các góc nhìn độc đáo (POVs) hoặc cách kể chuyện mới lạ phù hợp với xu hướng.",
        color: "text-yellow-500",
        bg: "bg-yellow-500/10",
    },
    {
        icon: Edit3,
        title: "3. Viết Kịch bản",
        description: "Xây dựng hook trong 3 giây đầu, kịch bản chi tiết và CTA mạnh mẽ.",
        color: "text-green-500",
        bg: "bg-green-500/10",
    },
    {
        icon: Video,
        title: "4. Quay phim",
        description: "Thiết lập bối cảnh, ánh sáng, góc máy, đảm bảo chất lượng hình ảnh và âm thanh tốt nhất.",
        color: "text-purple-500",
        bg: "bg-purple-500/10",
    },
    {
        icon: Scissors,
        title: "5. Dựng phim",
        description: "Cắt ghép, thêm hiệu ứng, phụ đề, âm nhạc và chỉnh màu tối ưu hóa sự chú ý của người xem.",
        color: "text-pink-500",
        bg: "bg-pink-500/10",
    },
    {
        icon: Upload,
        title: "6. Xuất bản",
        description: "Viết tiêu đề SEO, chọn hashtag đúng tệp khách hàng và tương tác với người xem.",
        color: "text-orange-500",
        bg: "bg-orange-500/10",
    },
];

export function CreativeProcess() {
    return (
        <section className="py-24 px-4 md:px-6 relative w-full border-t border-white/5 bg-black overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-40 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-40 left-10 w-80 h-80 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto relative z-10">
                <SectionHeading
                    title="Quy Trình Sáng Tạo"
                    subtitle="Cách tôi biến một ý tưởng sơ khai thành video triệu view. Mỗi bước đều được tối ưu hóa để tối đa tỷ lệ giữ chân (retention rate)."
                />

                <div className="relative mt-20 max-w-4xl mx-auto">
                    {/* Timeline Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2 hidden md:block" />

                    {/* Steps */}
                    <div className="space-y-12">
                        {STEPS.map((step, index) => {
                            const Icon = step.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 relative ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    {/* Step Content */}
                                    <div className={`flex-1 md:text-${isEven ? 'right' : 'left'} bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm relative z-10 w-full md:w-auto`}>
                                        <h3 className="text-xl font-heading font-bold text-white mb-2">{step.title}</h3>
                                        <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
                                    </div>

                                    {/* Icon Node */}
                                    <div className="relative z-20 absolute left-8 md:static -translate-x-1/2 md:translate-x-0 bg-black p-2 rounded-full border border-white/10 shrink-0 hidden md:flex">
                                        <div className={`w-12 h-12 rounded-full ${step.bg} ${step.color} flex items-center justify-center`}>
                                            <Icon className="w-5 h-5" />
                                        </div>
                                    </div>

                                    {/* Empty space for alternating layout on desktop */}
                                    <div className="flex-1 hidden md:block" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
