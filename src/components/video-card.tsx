import * as React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Badge } from "./ui/badge";

export interface VideoProject {
    id: string;
    title: string;
    category: "Trend" | "Storytelling" | "Product" | "Experimental";
    thumbnail: string;
    videoUrl?: string;
    embedUrl?: string;
    duration: string;
    platform: string;
    description: string;
    analysis: {
        idea: string;
        hook: string;
        format: string;
        goal: string;
    };
}

interface VideoCardProps {
    project: VideoProject;
    onClick: (project: VideoProject) => void;
}

export function VideoCard({ project, onClick }: VideoCardProps) {
    const categoryColors = {
        Trend: "bg-blue-500/20 text-blue-400 border-blue-500/30",
        Storytelling: "bg-purple-500/20 text-purple-400 border-purple-500/30",
        Product: "bg-green-500/20 text-green-400 border-green-500/30",
        Experimental: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    };

    return (
        <motion.div
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative cursor-pointer rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm"
            onClick={() => onClick(project)}
        >
            {/* Thumbnail */}
            <div className="relative aspect-3/4 md:aspect-9/16 w-full overflow-hidden bg-zinc-900">
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent z-10" />

                {/* Thumbnail Image */}
                {project.thumbnail && (
                    <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-contain z-0"
                    />
                )}

                {/* Play Button Overlay */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/90 text-white shadow-lg backdrop-blur-md">
                        <Play className="h-6 w-6 ml-1" fill="currentColor" />
                    </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-4 z-20 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <Badge className={categoryColors[project.category]}>
                            {project.category}
                        </Badge>
                        <span className="text-xs font-medium text-white/80 bg-black/50 px-2 py-1 rounded-md backdrop-blur-sm">
                            {project.duration}
                        </span>
                    </div>
                    <h3 className="font-heading text-lg md:text-xl font-bold text-white line-clamp-2 leading-tight">
                        {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-white/60">
                        <span>{project.platform}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
