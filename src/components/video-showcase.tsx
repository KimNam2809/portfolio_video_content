"use client";

import * as React from "react";
import { SectionHeading } from "./ui/section-heading";
import { VideoCard, VideoProject } from "./video-card";
import { ProjectModal } from "./project-modal";

const PROJECTS: VideoProject[] = [
    {
        id: "1",
        title: "POV: Nếu Mỹ và Iran không thể thương lượng ...",
        category: "Trend",
        thumbnail: "/source/thumbnail_trend.jpg",
        videoUrl: "/source/trend_video.mp4",
        duration: "0:24",
        platform: "TikTok",
        description: "Bắt trend 'Xung đột quân sự giữa Mỹ, Isreal va Iran' thể hiện nội dung muốn truyền tải thông qua tin tức chiến sự hiện của thế giới. Loại hình video đạt được độ tương tác cao trong cộng đồng sáng tạo.",
        analysis: {
            idea: "POV: Nếu Mỹ và Iran không thể thương lượng ...', quay lại: 'Because here's the thing...'",
            hook: "Mở đầu kịch tính với chân dung một người đàn ông với khung hình tin tức thời sự kèm theo nhạc thời sự..",
            format: "Lip-sync trên nền âm thanh viral + Text hài hước.",
            goal: "Tạo sự đồng cảm (relatable) và viral trong ngách editor/creator.",
        },
    },
    {
        id: "2",
        title: "Xác thực độ uy tín của doanh nghiệp thông qua tình huống bất ngờ",
        category: "Storytelling",
        thumbnail: "/source/thumbnail_storytelling.jpg",
        videoUrl: "/source/storytelling_video.mp4",
        duration: "1:05",
        platform: "TikTok / Reels",
        description: "Video với đoạn mở đầu là cảnh khi các chú công an đang kiểm tra an toàn chữa cháy. Vận dụng hình ảnh đó nói lên sự uy tín của công ty và thu hút sự chú ý của người xem vì sự xuất hiện của các chú Công an.",
        analysis: {
            idea: "Dùng hình ảnh kiểm tra của các chú công an để thể hiện sự an toàn và uy tín của công ty.",
            hook: "POV: Tuyển dụng idol live là lừa đảo.",
            format: "Split screen hoặc cảnh chuyển đổi trước-sau kịch tính.",
            goal: "Khai thác yếu tố hài hước từ caption và sự uy tín của các chú công an để kích thích tò mò, bình luận và chia sẻ.",
        },
    },
    {
        id: "3",
        title: "POV: Khi sếp bắt đầu theo dõi tài khoản của bạn",
        category: "Product",
        thumbnail: "/source/thumbnail_product.jpg",
        videoUrl: "/source/product_video.mp4",
        duration: "0:45",
        platform: "TikTok",
        description: "Video dạng giới thiệu hài hước nhưng tinh tế làm nổi bật giá trị của tính sáng tạo con người và làm nổi bật lên môi trường công ty.",
        analysis: {
            idea: "Đánh vào tâm lý của đa phần mọi người đều muốn có 1 không gian riêng trên mạng xã hội (sống ẩn) và khi bị người quen tìm thấy đặc biệt là sếp thì thái độ và cách hành xử sẽ khác đi. Từ đó khéo léo vận dụng vào việc xây dựng nên video này.",
            hook: "POV: Khi sếp bắt đầu theo dõi tài khoản của bạn",
            format: "Tiểu phẩm ngắn (skit) + Quảng bá môi trường công ty.",
            goal: "Giới thiệu được môi trường của công ty.",
        },
    },
];

export function VideoShowcase() {
    const [selectedProject, setSelectedProject] = React.useState<VideoProject | null>(null);

    return (
        <section className="py-24 px-4 md:px-6 relative w-full border-t border-white/5 bg-zinc-950/50">
            <div className="container mx-auto">
                <SectionHeading
                    title="Dự Án Nổi Bật"
                    subtitle="Khám phá các video ngắn thu hút hàng triệu lượt xem qua lăng kính sáng tạo, nắm bắt xu hướng và kể chuyện bằng hình ảnh."
                    align="left"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-12">
                    {PROJECTS.map((project) => (
                        <VideoCard
                            key={project.id}
                            project={project}
                            onClick={(p) => setSelectedProject(p)}
                        />
                    ))}
                </div>
            </div>

            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
}
