import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { VideoProject } from "./video-card";
import { Badge } from "./ui/badge";

interface ProjectModalProps {
    project: VideoProject | null;
    isOpen: boolean;
    onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    // Prevent body scroll when modal is open
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-zinc-950 border border-white/10 rounded-2xl shadow-2xl pointer-events-auto"
                        >
                            <div className="sticky top-0 right-0 z-10 flex justify-end p-4 pointer-events-none">
                                <button
                                    onClick={onClose}
                                    className="rounded-full bg-black/50 p-2 text-white/70 hover:text-white hover:bg-black/80 transition-colors pointer-events-auto border border-white/10 backdrop-blur-md"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 p-6 pt-0 lg:p-10 lg:pt-6">
                                {/* Left Column: Video Embed Placeholder */}
                                <div className="flex flex-col gap-4">
                                    <div className="aspect-[9/16] md:aspect-video lg:aspect-[9/16] w-full bg-zinc-900 rounded-xl overflow-hidden border border-white/5 relative flex items-center justify-center">
                                        {project.embedUrl ? (
                                            <div className="w-full h-full relative">
                                                <div className="absolute inset-0 bg-gradient-to-br from-[#ff0050]/20 via-[#00f2ea]/10 to-transparent opacity-50" />
                                                <div className="relative z-10 flex flex-col items-center justify-center h-full gap-6 p-8 text-center">
                                                    <motion.div
                                                        initial={{ scale: 0.8, opacity: 0 }}
                                                        animate={{ scale: 1, opacity: 1 }}
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
                                                        href={project.embedUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#ff0050] to-[#00f2ea] text-white font-bold rounded-full hover:shadow-xl hover:shadow-[#ff0050]/30 transition-all hover:scale-105 text-lg"
                                                    >
                                                        Mở TikTok
                                                        <ExternalLink className="w-5 h-5" />
                                                    </a>
                                                </div>
                                            </div>
                                        ) : project.videoUrl ? (
                                            <video src={project.videoUrl} className="w-full h-full object-cover absolute inset-0" controls autoPlay loop muted playsInline />
                                        ) : (
                                            <div className="text-center p-6 text-white/40">
                                                <p className="mb-2">No Video Available</p>
                                                <p className="text-sm">Video nguồn đang được cập nhật</p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Right Column: Project Analysis */}
                                <div className="flex flex-col gap-6 mt-6 lg:mt-0">
                                    <div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/20">
                                                {project.category}
                                            </Badge>
                                            <span className="text-sm text-white/50">{project.platform}</span>
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                                            {project.title}
                                        </h2>
                                        <p className="text-white/70 text-lg leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent" />

                                    <div className="space-y-6">
                                        <h3 className="text-xl font-heading font-semibold text-white/90">
                                            Phân Tích Dự Án
                                        </h3>

                                        <div className="grid gap-6">
                                            <div className="bg-white/5 border border-white/5 rounded-xl p-5">
                                                <h4 className="flex items-center gap-2 text-secondary font-medium mb-2 uppercase tracking-wider text-sm">
                                                    Ý Tưởng (Idea)
                                                </h4>
                                                <p className="text-white/80">{project.analysis.idea}</p>
                                            </div>

                                            <div className="bg-white/5 border border-white/5 rounded-xl p-5">
                                                <h4 className="flex items-center gap-2 text-accent font-medium mb-2 uppercase tracking-wider text-sm">
                                                    Mở Đầu Thu Hút (Hook)
                                                </h4>
                                                <p className="text-white/80">{project.analysis.hook}</p>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="bg-white/5 border border-white/5 rounded-xl p-5">
                                                    <h4 className="flex items-center gap-2 text-white/50 font-medium mb-2 uppercase tracking-wider text-xs">
                                                        Định Dạng (Format)
                                                    </h4>
                                                    <p className="text-white/80 text-sm">{project.analysis.format}</p>
                                                </div>
                                                <div className="bg-white/5 border border-white/5 rounded-xl p-5">
                                                    <h4 className="flex items-center gap-2 text-white/50 font-medium mb-2 uppercase tracking-wider text-xs">
                                                        Mục Tiêu (Goal)
                                                    </h4>
                                                    <p className="text-white/80 text-sm">{project.analysis.goal}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
