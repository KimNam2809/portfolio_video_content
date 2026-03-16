"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
    Megaphone,
    Film,
    Palette,
    Lightbulb,
    ClipboardList,
    PenSquare,
    Wrench,
    CheckCircle2,
    Clock3,
    MapPin,
    Users,
    ArrowRight,
    Target,
    Music4,
    Clapperboard,
    Sparkles,
    PlayCircle,
    X,
} from "lucide-react";
import { SectionHeading } from "./ui/section-heading";

const CONTENT_EVENT_ITEMS = [
    "Video quảng bá sự kiện",
    "Poster truyền thông",
    "Nội dung mạng xã hội",
];

const CONTENT_EVENT_INCLUDE = [
    "Xây dựng thông điệp chính",
    "Viết kịch bản video ngắn (TikTok / Reels)",
    "Định hướng hình ảnh và bố cục thiết kế",
];

const AD_SCRIPT_ITEMS = [
    "Quảng bá sản phẩm",
    "Nội dung truyền thông mạng xã hội",
    "Video giới thiệu concept",
];

const AD_SCRIPT_PROCESS = [
    "Nghiên cứu sản phẩm",
    "Xây dựng concept video",
    "Viết kịch bản chi tiết",
    "Định hướng dựng video",
];

const DESIGN_ITEMS = [
    "Poster sự kiện",
    "Nội dung social media",
    "Banner quảng cáo",
];

const DESIGN_TOOLS = ["Figma", "CapCut", "Canva"];

const EVENT_CONTENTS = [
    {
        id: "content-1",
        badge: "Content 1",
        eventName: "Hội thảo Thương mại điện tử",
        title: "🚀 DOANH NGHIỆP ĐỊA PHƯƠNG BỨT PHÁ DOANH THU NHỜ THƯƠNG MẠI ĐIỆN TỬ",
        structure: {
            hook: "Trong thời đại số, thương mại điện tử đang trở thành một trong những kênh phát triển thị trường hiệu quả nhất cho doanh nghiệp.",
            problem: "Không phải doanh nghiệp nào cũng biết cách tận dụng đúng chiến lược để mở rộng doanh thu bền vững.",
            eventIntro: "🎯 WORKSHOP: “ỨNG DỤNG THƯƠNG MẠI ĐIỆN TỬ TRONG PHÁT TRIỂN DOANH NGHIỆP” do Vitrade tổ chức.",
            benefits: [
                "✔ Cập nhật xu hướng thương mại điện tử mới nhất",
                "✔ Học cách xây dựng kênh bán hàng online hiệu quả",
                "✔ Tìm hiểu chiến lược marketing giúp tăng trưởng doanh thu",
                "✔ Kết nối và mở rộng mạng lưới đối tác kinh doanh",
            ],
            info: [
                "📍 Địa điểm: Đà Nẵng",
                "📅 Thời gian: (cập nhật sau)",
                "👥 Đối tượng: Doanh nghiệp, startup, cá nhân kinh doanh",
            ],
            cta: "👉 Đăng ký tham gia ngay để không bỏ lỡ cơ hội kết nối và phát triển.",
        },
        fullBody:
            "Đây là cơ hội để doanh nghiệp nâng cao năng lực kinh doanh trên nền tảng số và mở rộng thị trường một cách bền vững, thực tế và phù hợp với bối cảnh kinh tế hiện nay.",
    },
    {
        id: "content-2",
        badge: "Content 2",
        eventName: "Sự kiện Kết nối Doanh nghiệp",
        title: "🤝 BUSINESS MATCHING – KẾT NỐI DOANH NGHIỆP, MỞ RỘNG CƠ HỘI HỢP TÁC",
        structure: {
            hook: "Trong môi trường kinh doanh hiện nay, xây dựng mạng lưới đối tác là yếu tố sống còn để phát triển.",
            problem: "Nhiều doanh nghiệp thiếu cơ hội gặp gỡ trực tiếp để trao đổi và tìm đối tác chiến lược.",
            eventIntro: "🌐 BUSINESS MATCHING – KẾT NỐI DOANH NGHIỆP do Vitrade tổ chức nhằm tạo không gian kết nối thực chất.",
            benefits: [
                "✨ Gặp gỡ trực tiếp doanh nghiệp trong nhiều lĩnh vực",
                "✨ Giới thiệu sản phẩm, dịch vụ và tìm kiếm đối tác tiềm năng",
                "✨ Chia sẻ kinh nghiệm phát triển thị trường và hợp tác kinh doanh",
                "✨ Mở rộng mạng lưới kết nối trong cộng đồng doanh nghiệp",
            ],
            info: [
                "📍 Địa điểm: Đà Nẵng",
                "📅 Thời gian: (cập nhật sau)",
            ],
            cta: "👉 Đăng ký tham gia ngay để trở thành một phần của cộng đồng doanh nghiệp năng động.",
        },
        fullBody:
            "Sự kiện hứa hẹn là cầu nối giúp doanh nghiệp tăng cường hợp tác, mở rộng thị trường và phát triển bền vững trong hệ sinh thái kinh doanh hiện đại.",
    },
];

const OODIE_SCENES = [
    {
        scene: "Scene 1 — Hook",
        time: "0–3s",
        visual: "Một người nằm trên ghế dài, quấn mình trong chăn; chiếc chăn cứ trượt xuống; vẻ mặt bực bội.",
        text: "Tại sao chăn của tôi KHÔNG BAO GIỜ giữ nguyên vị trí?!",
        audio: "Hiệu ứng âm thanh hài hước nhẹ nhàng kết hợp với nhịp điệu vui tươi ở phần mở đầu.",
        purpose: "Ngay từ 3 giây đầu tiên, bạn đã có thể dễ dàng đồng cảm với nỗi khó chịu khi ở nhà trong thời tiết lạnh lẽo.",
    },
    {
        scene: "Scene 2 — Problem",
        time: "3–6s",
        visual: "Một người đang cố gõ trên laptop, cầm cà phê, và cuộn điện thoại trong khi chiếc chăn trượt xuống liên tục.",
        text: "Lạnh lại rồi...",
        audio: "Nhịp điệu TikTok hài hước và dễ thương tiếp tục.",
        purpose: "Thể hiện sự bất tiện của những chiếc chăn thông thường và giới hạn về khả năng di chuyển.",
    },
    {
        scene: "Scene 3 — Solution Reveal",
        time: "6–9s",
        visual: "Chuyển cảnh nhanh sang hình ảnh người sáng tạo mặc trang phục Black Cat Oodie dưới ánh sáng ấm áp. ",
        text: "Đây là chiếc chăn yêu thích mới của bạn.",
        audio: "Nhịp điệu chuyển sang không gian ấm cúng, nhẹ nhàng của nhạc lo-fi.",
        purpose: "Khoảnh khắc chuyển đổi từ vấn đề sang giải pháp.",
    },
    {
        scene: "Scene 4 — Feature Showcase",
        time: "9–14s",
        visual: "Những đường cắt nhanh: mũ trùm đầu ngoại cỡ, túi lớn, chất liệu nỉ siêu mềm, hình ảnh toàn thân.",
        text: "Mũ trùm đầu ngoại cỡ • Túi lớn • Chất liệu lông cừu siêu mềm • Giữ ấm tối đa",
        audio: "Âm thanh lo-fi ấm áp với những hiệu ứng chuyển cảnh mượt mà.",
        purpose: "Sản phẩm được chứng minh bằng những tuyên bố giá trị rõ ràng.",
    },
    {
        scene: "Scene 5 — Lifestyle Fit",
        time: "14–22s",
        visual: "Hình ảnh phim Netflix, cảnh làm việc tại nhà, đồ ăn vặt từ túi, đang vuốt mèo trong khi mặc Black Cat Oodie.",
        text: "Hoàn hảo cho: Đêm xem phim • Chủ nhật lười biếng • Buổi sáng lạnh",
        audio: "Nhịp điệu lo-fi ấm áp giữ ổn định.",
        purpose: "Giúp khán giả hình dung cách sử dụng hàng ngày và sự thoải mái cảm xúc.",
    },
    {
        scene: "Scene 6 — Social Proof",
        time: "22–25s",
        visual: "Ảnh cận cảnh nụ cười + ảnh cận cảnh chi tiết + ảnh chụp biểu cảm vui vẻ.",
        text: "Đây là món đồ mềm mại và ấm áp nhất mà bạn từng mặc.",
        audio: "Giai điệu nhẹ nhàng vang lên.",
        purpose: "Tạo dựng niềm tin và sự mong muốn trước khi thực hiện hành động kêu gọi hành động (CTA).",
    },
    {
        scene: "Scene 7 — CTA",
        time: "25–30s",
        visual: "Ảnh toàn thân với trang phục nổi bật, tạo dáng ôm sát, và ảnh cuối phim có hình ảnh sản phẩm và thương hiệu.",
        text: "Luôn cảm thấy ấm áp. Mọi lúc mọi nơi. Mua sắm ngay tại The Oodie.",
        audio: "Kết thúc bằng một bản nhạc sôi động, ấm áp kết hợp với lời kêu gọi hành động tinh tế.",
        purpose: "Chuyển đổi ý định mua hàng thành hành động cụ thể bằng lời kêu gọi hành động (CTA) đơn giản và rõ ràng.",
    },
];

const DESIGN_SHOWCASE = [
    {
        id: "poster",
        title: "Poster sự kiện",
        type: "image",
        src: "/source/poster.png",
    },
    {
        id: "product-video",
        title: "Product Video",
        type: "video",
        src: "/source/product_video.mp4",
    },
    {
        id: "storytelling-video",
        title: "Storytelling Video",
        type: "video",
        src: "/source/storytelling_video.mp4",
    },
    {
        id: "trend-video",
        title: "Trend Video",
        type: "video",
        src: "/source/trend_video.mp4",
    },
];

type LightboxItem = { type: "image" | "video"; src: string; title: string } | null;

export function ContentCreativeProjects() {
    const [lightbox, setLightbox] = useState<LightboxItem>(null);

    return (
        <>
        <section className="py-24 px-4 md:px-6 relative w-full border-t border-white/5 bg-black">
            <div className="container mx-auto">
                <SectionHeading
                    title="Content & Creative Projects"
                    subtitle="Xây dựng ý tưởng nội dung sự kiện và chiến dịch truyền thông với tư duy sáng tạo, định hướng thương hiệu và khả năng triển khai thực tế."
                    align="left"
                />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
                    <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-7 backdrop-blur-sm shadow-xl"
                    >
                        <div className="mb-5 flex items-center gap-3">
                            <div className="w-11 h-11 rounded-xl bg-primary/20 text-primary flex items-center justify-center">
                                <Megaphone className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-heading font-bold text-white">Nội dung sự kiện & truyền thông</h3>
                        </div>

                        <p className="text-white/70 leading-relaxed mb-5">
                            Thực hiện nghiên cứu và xây dựng các concept nội dung cho:
                        </p>

                        <ul className="space-y-2 text-white/80 mb-6">
                            {CONTENT_EVENT_ITEMS.map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Bao gồm</p>
                            <ul className="space-y-2 text-white/75 text-sm">
                                {CONTENT_EVENT_INCLUDE.map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <Lightbulb className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.article>

                    <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-7 backdrop-blur-sm shadow-xl"
                    >
                        <div className="mb-5 flex items-center gap-3">
                            <div className="w-11 h-11 rounded-xl bg-secondary/20 text-secondary flex items-center justify-center">
                                <Film className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-heading font-bold text-white">Kịch bản video quảng cáo ngắn</h3>
                        </div>

                        <p className="text-white/70 leading-relaxed mb-5">
                            Viết kịch bản video quảng cáo 15–30s cho các nội dung:
                        </p>

                        <ul className="space-y-2 text-white/80 mb-6">
                            {AD_SCRIPT_ITEMS.map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Quy trình thực hiện</p>
                            <ul className="space-y-2 text-white/75 text-sm">
                                {AD_SCRIPT_PROCESS.map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <ClipboardList className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.article>

                    <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-7 backdrop-blur-sm shadow-xl"
                    >
                        <div className="mb-5 flex items-center gap-3">
                            <div className="w-11 h-11 rounded-xl bg-accent/20 text-accent flex items-center justify-center">
                                <Palette className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-heading font-bold text-white">Thiết kế nội dung truyền thông</h3>
                        </div>

                        <p className="text-white/70 leading-relaxed mb-5">
                            Thiết kế các ấn phẩm:
                        </p>

                        <ul className="space-y-2 text-white/80 mb-6">
                            {DESIGN_ITEMS.map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                            <p className="text-sm font-semibold uppercase tracking-wider text-secondary mb-3">Công cụ sử dụng</p>
                            <div className="flex flex-wrap gap-2">
                                {DESIGN_TOOLS.map((tool) => (
                                    <span key={tool} className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/85">
                                        <Wrench className="w-3.5 h-3.5" />
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.article>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-7"
                >
                    <div className="flex items-start gap-3">
                        <PenSquare className="w-5 h-5 text-primary mt-0.5" />
                        <p className="text-white/75 leading-relaxed">
                            Mỗi dự án đều được triển khai theo hướng vừa sáng tạo vừa thực thi được, bám mục tiêu truyền thông và tối ưu cho các nền tảng ngắn hạn như TikTok/Reels.
                        </p>
                    </div>
                </motion.div>

                <div className="mt-12 space-y-8">
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-sm"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                                <Megaphone className="w-5 h-5" />
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-white">Chi tiết — Nội dung sự kiện & truyền thông</h3>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {EVENT_CONTENTS.map((content, index) => (
                                <motion.article
                                    key={content.id}
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.08 }}
                                    className="rounded-2xl border border-white/10 bg-black/35 p-5"
                                >
                                    <div className="mb-4 flex items-center justify-between gap-3">
                                        <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                                            {content.badge}
                                        </span>
                                        <span className="text-xs text-white/55">{content.eventName}</span>
                                    </div>

                                    <h4 className="text-lg font-heading font-bold text-white leading-snug mb-4">{content.title}</h4>

                                    <div className="space-y-3 text-sm">
                                        <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                                            <p className="text-primary font-semibold mb-1">1️⃣ Hook</p>
                                            <p className="text-white/80">{content.structure.hook}</p>
                                        </div>

                                        <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                                            <p className="text-primary font-semibold mb-1">2️⃣ Vấn đề</p>
                                            <p className="text-white/80">{content.structure.problem}</p>
                                        </div>

                                        <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                                            <p className="text-primary font-semibold mb-1">3️⃣ Giới thiệu sự kiện</p>
                                            <p className="text-white/80">{content.structure.eventIntro}</p>
                                        </div>

                                        <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                                            <p className="text-primary font-semibold mb-2">4️⃣ Lợi ích</p>
                                            <ul className="space-y-1">
                                                {content.structure.benefits.map((benefit) => (
                                                    <li key={benefit} className="flex items-start gap-2 text-white/80">
                                                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                                                        <span>{benefit}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                                            <p className="text-primary font-semibold mb-2">5️⃣ Thông tin</p>
                                            <ul className="space-y-1 text-white/80">
                                                {content.structure.info.map((info) => (
                                                    <li key={info}>{info}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="rounded-lg border border-primary/25 bg-primary/10 p-3">
                                            <p className="text-primary font-semibold mb-1">6️⃣ CTA</p>
                                            <p className="text-white/90">{content.structure.cta}</p>
                                        </div>
                                    </div>

                                    <p className="text-white/70 text-sm mt-4 leading-relaxed">{content.fullBody}</p>
                                </motion.article>
                            ))}
                        </div>
                    </motion.section>

                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.05 }}
                        className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-sm"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary">
                                <Film className="w-5 h-5" />
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-white">Chi tiết — Kịch bản video quảng cáo ngắn (The Oodie)</h3>
                        </div>

                        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
                            <div className="rounded-xl border border-white/10 bg-black/35 p-4">
                                <p className="text-sm font-semibold uppercase tracking-wider text-secondary mb-3">Product Research</p>
                                <ul className="space-y-2 text-sm text-white/80">
                                    <li className="flex gap-2"><Sparkles className="w-4 h-4 mt-0.5 text-accent shrink-0" />Lớp lông cừu mềm mại bên ngoài - ToastyTek™</li>
                                    <li className="flex gap-2"><Sparkles className="w-4 h-4 mt-0.5 text-accent shrink-0" />Lớp lông cừu mềm mại bên trong - Warm Sherpa</li>
                                    <li className="flex gap-2"><Sparkles className="w-4 h-4 mt-0.5 text-accent shrink-0" />Mũ trùm đầu ngoại cỡ + túi lớn</li>
                                    <li className="flex gap-2"><Sparkles className="w-4 h-4 mt-0.5 text-accent shrink-0" />Kiểu dáng rộng rãi, phù hợp với mọi kích cỡ, mang lại lối sống thoải mái.</li>
                                    <li className="flex gap-2"><Sparkles className="w-4 h-4 mt-0.5 text-accent shrink-0" />Giá trị cốt lõi: “Mềm mại và ấm áp nhất mà bạn từng mặc.””</li>
                                </ul>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/35 p-4">
                                <p className="text-sm font-semibold uppercase tracking-wider text-secondary mb-3">Target Audience (18–35)</p>
                                <div className="space-y-3 text-sm text-white/80">
                                    <p className="flex gap-2"><Users className="w-4 h-4 mt-0.5 text-primary shrink-0" />Gen Z và Millennials yêu thích lối sống thoải mái, TikTok, thẩm mỹ dễ thương (thiết kế hình mèo), thói quen làm việc tại nhà/học tập tại nhà.</p>
                                    <p className="flex gap-2"><Target className="w-4 h-4 mt-0.5 text-primary shrink-0" />Những điểm bất tiện: nhà lạnh, chăn bị xê dịch, khó di chuyển, muốn vừa thoải mái vừa tiện lợi.</p>
                                    <p className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-primary shrink-0" />Mong muốn: giữ ấm, cảm thấy dễ chịu, trông xinh xắn trên mạng xã hội, thư giãn thoải mái.</p>
                                </div>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/35 p-4">
                                <p className="text-sm font-semibold uppercase tracking-wider text-secondary mb-3">Creative Strategy</p>
                                <p className="text-sm text-white/80 mb-3">Core concept: <span className="text-white font-semibold">“Chiếc chăn của bạn… nhưng tốt hơn.”</span></p>
                                <ul className="space-y-2 text-sm text-white/80">
                                    <li className="flex gap-2"><ArrowRight className="w-4 h-4 mt-0.5 text-accent shrink-0" />Hook → Vấn đề → Giải pháp → Tính năng → Phong cách sống → Hành động kêu gọi hành động (CTA)</li>
                                    <li className="flex gap-2"><ArrowRight className="w-4 h-4 mt-0.5 text-accent shrink-0" />Các yếu tố khơi gợi cảm xúc: sự thoải mái, sự đồng cảm, hình ảnh chú mèo dễ thương, không khí mùa đông.</li>
                                    <li className="flex gap-2"><ArrowRight className="w-4 h-4 mt-0.5 text-accent shrink-0" />Phù hợp với nền tảng: cắt cảnh nhanh, khoảnh khắc chuyển biến, kể chuyện bằng văn bản.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/35 p-4 md:p-5 mb-6">
                            <div className="flex items-center gap-2 mb-3">
                                <Clock3 className="w-4 h-4 text-primary" />
                                <p className="text-sm font-semibold uppercase tracking-wider text-primary">TikTok Ad Script Timeline (25–30s)</p>
                            </div>
                            <div className="grid gap-3">
                                {OODIE_SCENES.map((item) => (
                                    <div key={item.scene} className="rounded-lg border border-white/10 bg-white/5 p-3">
                                        <div className="flex flex-wrap items-center gap-2 mb-2">
                                            <span className="text-white font-semibold">{item.scene}</span>
                                            <span className="text-xs rounded-full bg-primary/20 border border-primary/30 px-2 py-0.5 text-primary">{item.time}</span>
                                        </div>
                                        <p className="text-sm text-white/75 mb-1"><span className="text-white/90 font-medium">Visual:</span> {item.visual}</p>
                                        <p className="text-sm text-white/75 mb-1"><span className="text-white/90 font-medium">On-screen text:</span> “{item.text}”</p>
                                        <p className="text-sm text-white/75 mb-1"><span className="text-white/90 font-medium">Audio/Music:</span> {item.audio}</p>
                                        <p className="text-sm text-white/75"><span className="text-white/90 font-medium">Purpose:</span> {item.purpose}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl border border-white/10 bg-black/35 p-4">
                                <p className="text-sm font-semibold uppercase tracking-wider text-secondary mb-3 flex items-center gap-2">
                                    <Music4 className="w-4 h-4" /> Music Direction
                                </p>
                                <ul className="space-y-2 text-sm text-white/80">
                                    <li>• Scenes 1–2: Một bản nhạc TikTok hài hước nhẹ nhàng về những khó khăn thường gặp.</li>
                                    <li>• Scenes 3–7: bản nhạc mang phong cách lo-fi ấm cúng / thẩm mỹ ấm áp</li>
                                    <li>• Kết thúc: sự tăng nhẹ về niềm tin vào CTA.</li>
                                </ul>
                            </div>
                            <div className="rounded-xl border border-white/10 bg-black/35 p-4">
                                <p className="text-sm font-semibold uppercase tracking-wider text-secondary mb-3 flex items-center gap-2">
                                    <Clapperboard className="w-4 h-4" /> Why This Works on TikTok
                                </p>
                                <ul className="space-y-2 text-sm text-white/80">
                                    <li>• Một hook mạnh trong 3 giây</li>
                                    <li>• Vấn đề phổ biến + phần thưởng chuyển đổi</li>
                                    <li>• Chứng minh lối sống cho hành vi của đối tượng mục tiêu</li>
                                    <li>• Lời kêu gọi hành động (CTA) rõ ràng (“Mua ngay”)</li>
                                </ul>
                            </div>
                        </div>
                    </motion.section>

                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-sm"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                                <Palette className="w-5 h-5" />
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-white">Chi tiết — Thiết kế nội dung truyền thông</h3>
                        </div>

                        <p className="text-white/75 mb-5">Những sản phẩm được thực hiện trong quá trình học tập và thực hành — từ poster sự kiện cho đến các video ngắn phục vụ truyền thông. Nhấn vào từng mục để xem đầy đủ.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {DESIGN_SHOWCASE.map((item) => (
                                <div
                                    key={item.id}
                                    className="rounded-2xl border border-white/10 bg-black/35 overflow-hidden cursor-pointer group hover:border-accent/40 transition-colors"
                                    onClick={() => setLightbox({ type: item.type as "image" | "video", src: item.src, title: item.title })}
                                >
                                    <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
                                        <p className="text-white font-semibold">{item.title}</p>
                                        <span className="text-xs text-white/60 inline-flex items-center gap-1 group-hover:text-accent transition-colors">
                                            <PlayCircle className="w-3.5 h-3.5" />
                                            {item.type === "image" ? "Xem ảnh" : "Xem video"}
                                        </span>
                                    </div>

                                    <div className="relative w-full bg-zinc-900 aspect-video overflow-hidden">
                                        {item.type === "image" ? (
                                            <Image src={item.src} alt={item.title} fill className="object-contain group-hover:scale-105 transition-transform duration-300" />
                                        ) : (
                                            <video
                                                src={item.src}
                                                className="w-full h-full object-cover pointer-events-none"
                                                preload="metadata"
                                                playsInline
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20">
                                                <PlayCircle className="w-8 h-8 text-white" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/30 p-4 text-sm text-white/75">
                            <p className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                                Bộ nội dung này thể hiện năng lực triển khai đồng bộ giữa concept truyền thông, visual direction và sản xuất video thực thi.
                            </p>
                        </div>
                    </motion.section>
                </div>
            </div>
        </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {lightbox && (
                    <motion.div
                        key="lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
                        onClick={() => setLightbox(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between mb-3">
                                <p className="text-white font-semibold text-lg">{lightbox.title}</p>
                                <button
                                    onClick={() => setLightbox(null)}
                                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors border border-white/15"
                                    aria-label="Đóng"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Media */}
                            {lightbox.type === "image" ? (
                                <div className="flex items-center justify-center rounded-xl bg-zinc-900 overflow-hidden" style={{ maxHeight: "80vh" }}>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={lightbox.src}
                                        alt={lightbox.title}
                                        className="max-w-full max-h-[80vh] object-contain rounded-xl"
                                    />
                                </div>
                            ) : (
                                <video
                                    key={lightbox.src}
                                    src={lightbox.src}
                                    className="w-full rounded-xl bg-zinc-900"
                                    style={{ maxHeight: "80vh" }}
                                    controls
                                    autoPlay
                                    playsInline
                                />
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
