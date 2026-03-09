"use client";

import { motion } from "framer-motion";
import { Lightbulb, Target, Sparkles, AlertCircle } from "lucide-react";
import { SectionHeading } from "./ui/section-heading";
import { Badge } from "./ui/badge";

const IDEAS = [
    {
        id: 1,
        title: `"Because here's the thing..." POV Trend`,
        trend: `Format lip-sync với câu "because here's the thing..." rồi quay lại nói thêm dù cuộc trò chuyện đã kết thúc.`,
        idea: `POV: Bạn đã tắt máy tính sau 8 tiếng edit`,
        scene: [
            `đóng laptop`,
            `chuẩn bị đi ngủ`,
            `Rồi quay lại: "Because here's the thing..."`
        ],
        hook: `POV: Bạn đã xong việc...`,
        punchline: `Video client gửi feedback mới`,
        strengths: [`Relatable với editor / creator`, `Dễ quay`, `Đúng format POV đang viral`]
    },
    {
        id: 2,
        title: `"2016 Nostalgia Vibe"`,
        trend: `Một xu hướng hiện nay là Gen Z hoài niệm vibe internet 2016 với meme, nhạc và style cũ.`,
        idea: `"Editing videos in 2016 vs 2026"`,
        format: `Split screen (Left: 2016 editing | Right: 2026 editing)`,
        hook: `POV: Bạn từng edit video năm 2016`,
        strengths: [`Nostalgia = cực dễ viral`, `Relatable với creator ở mọi lứa tuổi`]
    },
    {
        id: 3,
        title: `"Expectation vs Reality" Creator Life`,
        trend: `Format meme rất phổ biến trên TikTok.`,
        idea: `"What people think being a creator is vs reality"`,
        scene: [
            `Expectation: ✨ aesthetic workspace, ✨ viral video, ✨ brand deal`,
            `Reality: 3AM editing, client: "edit nhẹ thôi", render error`
        ],
        hook: `POV: Bạn nói với gia đình bạn làm content creator`,
        strengths: [`Gần gũi, chân thực`, `Dễ share`]
    },
    {
        id: 4,
        title: `"AI vs Human Creativity"`,
        trend: `Trend so sánh AI content vs real human creativity.`,
        idea: `"AI editing vs me editing"`,
        scene: [
            `AI version: perfect transitions, perfect lighting, perfect captions`,
            `Human version: CapCut crash, render failed, video export lỗi`
        ],
        hook: `POV: AI said editing is easy`,
        punchline: `"Client still asks for 20 revisions"`,
        strengths: [`Đánh trúng tâm lý sợ AI của nhiều người`, `Gây tranh luận (tăng tương tác)`]
    }
];

export function IdeaBank() {
    return (
        <section className="py-24 px-4 md:px-6 relative w-full border-t border-white/5 bg-black">
            <div className="container mx-auto">
                <SectionHeading
                    title="Ngân Hàng Ý Tưởng"
                    subtitle="Tư duy đằng sau những video bắt trend. Khả năng biến xu hướng thành nội dung phù hợp với thương hiệu."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
                    {IDEAS.map((idea, index) => (
                        <motion.div
                            key={idea.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative rounded-2xl p-6 md:p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-sm shadow-xl overflow-hidden"
                        >
                            {/* Decorative Background Icon */}
                            <Lightbulb className="absolute -bottom-8 -right-8 w-40 h-40 text-primary/5 group-hover:text-primary/10 transition-colors pointer-events-none" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-6 border-b border-white/10 pb-6">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <Badge className="bg-primary/20 text-primary border-primary/20 hover:bg-primary/30">Idea #{idea.id}</Badge>
                                        <Badge variant="outline" className="border-white/20 text-white/70">
                                            <Sparkles className="w-3 h-3 mr-1" />
                                            Viral Potential
                                        </Badge>
                                    </div>
                                    <h3 className="text-2xl font-bold font-heading text-white">{idea.title}</h3>
                                    <p className="text-white/60 text-sm mt-2 italic">Trend: {idea.trend}</p>
                                </div>

                                <div className="space-y-4 flex-1">
                                    <div className="bg-black/30 rounded-lg p-4 border border-white/5">
                                        <span className="flex items-center text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                                            <Target className="w-3 h-3 mr-1" />
                                            Hook (Mở Đầu)
                                        </span>
                                        <p className="text-white/90 font-medium">{idea.hook}</p>
                                    </div>

                                    <div className="bg-black/30 rounded-lg p-4 border border-white/5">
                                        <span className="flex items-center text-xs font-semibold text-secondary uppercase tracking-wider mb-2">
                                            <Lightbulb className="w-3 h-3 mr-1" />
                                            Core Idea
                                        </span>
                                        <p className="text-white/80">{idea.idea}</p>

                                        {idea.format && (
                                            <p className="mt-2 text-sm text-white/60"><span className="text-white/40">Format:</span> {idea.format}</p>
                                        )}

                                        {idea.scene && (
                                            <div className="mt-3 space-y-1">
                                                <span className="text-white/40 text-xs uppercase">Scenes:</span>
                                                <ul className="list-disc list-inside text-sm text-white/70">
                                                    {idea.scene.map((s, i) => (
                                                        <li key={i}>{s}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {idea.punchline && (
                                            <p className="mt-3 text-sm text-primary font-medium bg-primary/10 px-3 py-2 rounded-md border border-primary/20"><span className="text-white/40 mr-1">Punchline:</span> {idea.punchline}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="mt-6 pt-6 border-t border-white/10">
                                    <span className="flex items-center text-xs font-semibold text-white/50 uppercase tracking-wider mb-3">
                                        <AlertCircle className="w-3 h-3 mr-1" />
                                        Tại sao idea này tốt?
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        {idea.strengths.map((str, i) => (
                                            <span key={i} className="text-xs px-3 py-1.5 bg-white/5 text-white/70 rounded-full border border-white/10">
                                                {str}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
