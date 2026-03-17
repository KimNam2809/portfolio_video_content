"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import NextImage from "next/image";
import {
    User,
    Phone,
    Mail,
    MapPin,
    Link2,
    GraduationCap,
    Briefcase,
    Brain,
    Wrench,
    Star,
    ChevronRight,
    Printer,
} from "lucide-react";

const SOFT_SKILLS = [
    {
        name: "Content Research",
        desc: "Nghiên cứu chủ đề, phân tích insight người dùng và xây dựng nội dung phù hợp với từng nhóm đối tượng.",
    },
    {
        name: "Storytelling",
        desc: "Xây dựng câu chuyện hấp dẫn giúp nội dung dễ tiếp cận và tăng khả năng giữ chân người xem.",
    },
    {
        name: "Creative Thinking",
        desc: "Luôn tìm kiếm các ý tưởng nội dung mới, đặc biệt trong lĩnh vực game, giải trí và cộng đồng.",
    },
    {
        name: "Communication",
        desc: "Có khả năng truyền đạt ý tưởng rõ ràng khi làm việc nhóm với designer, editor hoặc marketing team.",
    },
    {
        name: "Community Insight",
        desc: "Hiểu hành vi người dùng trên các nền tảng mạng xã hội và cộng đồng game.",
    },
    {
        name: "Problem Solving",
        desc: "Phân tích vấn đề và đưa ra hướng xử lý nội dung phù hợp với mục tiêu truyền thông.",
    },
];

const TOOL_GROUPS = [
    {
        label: "Thiết kế & Đồ họa",
        tools: ["Figma", "Canva"],
    },
    {
        label: "Video & Motion",
        tools: ["CapCut", "Pippit AI / CapCut AI"],
    },
    {
        label: "AI Tools",
        tools: ["ChatGPT", "Freepik AI", "AI Image Generator", "AI Video Generator"],
    },
    {
        label: "Công cụ làm việc",
        tools: ["Google Workspace", "Notion", "Microsoft Office"],
    },
];

const EXPERIENCE_ITEMS = [
    {
        title: "Nội dung sự kiện & truyền thông",
        desc: "Xây dựng ý tưởng nội dung sự kiện và chiến dịch truyền thông.",
        items: ["Video quảng bá sự kiện", "Poster truyền thông", "Nội dung mạng xã hội"],
        sub: ["Xây dựng thông điệp chính", "Viết kịch bản video ngắn (TikTok / Reels)", "Định hướng hình ảnh và bố cục thiết kế"],
        subLabel: "Bao gồm",
    },
    {
        title: "Viết kịch bản video quảng cáo ngắn",
        desc: "Thực hiện viết kịch bản video quảng cáo 15–30s cho:",
        items: ["Quảng bá sản phẩm", "Nội dung truyền thông mạng xã hội", "Video giới thiệu concept"],
        sub: ["Nghiên cứu sản phẩm", "Xây dựng concept video", "Viết kịch bản chi tiết", "Định hướng dựng video"],
        subLabel: "Quy trình",
    },
    {
        title: "Thiết kế nội dung truyền thông",
        desc: "Thiết kế các ấn phẩm truyền thông bằng Figma, CapCut, Canva.",
        items: ["Poster sự kiện", "Nội dung social media", "Banner quảng cáo"],
        sub: [],
        subLabel: "",
    },
    {
        title: "Nghiên cứu & phân tích cộng đồng game",
        desc: "Phân tích hoạt động cộng đồng các tựa game lớn.",
        items: ["Chiến lược phát triển cộng đồng", "Hệ thống giải đấu", "Hoạt động truyền thông và sự kiện"],
        sub: ["Hiểu hành vi người chơi", "Xây dựng ý tưởng phát triển cộng đồng game"],
        subLabel: "Mục tiêu",
        link: "https://portfolio-community-social-collaborator-j16vxmn47.vercel.app",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.4, delay: i * 0.07 } }),
};

export function CVSection() {
    const cvRef = React.useRef<HTMLDivElement>(null);
    const [isGenerating, setIsGenerating] = useState(false);

    async function printCV() {
        setIsGenerating(true);
        try {
            const cvEl = cvRef.current;
            if (!cvEl) return;

            // Clone CV and keep original classes/styles so print looks like portfolio
            const cloned = cvEl.cloneNode(true) as HTMLElement;

            // Append full URL text after each link for PDF readability
            cloned.querySelectorAll<HTMLAnchorElement>("a[href]").forEach((a) => {
                const href = a.href;
                if (href && !href.startsWith("javascript")) {
                    const urlNote = document.createElement("span");
                    urlNote.style.cssText =
                        "display:block;font-size:8.5px;color:#6d28d9;word-break:break-all;margin-top:2px;font-family:monospace;";
                    urlNote.textContent = href;
                    a.appendChild(urlNote);
                }
            });

                        const styleSheets = Array.from(document.querySelectorAll("link[rel='stylesheet'], style"))
                                .map((el) => el.outerHTML)
                                .join("\n");

                        const printWindow = window.open("", "_blank", "width=1100,height=850");
                        if (!printWindow) return;

                        printWindow.document.write(`
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CV_LeKimNam_ContentEditor</title>
    ${styleSheets}
    <style>
        @page { size: A4 portrait; margin: 10mm 8mm; }
        * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        html, body { margin: 0; padding: 0; background: #ffffff; }
        body { font-family: Inter, ui-sans-serif, system-ui, sans-serif; }
        .pdf-root { width: 210mm; max-width: 210mm; margin: 0 auto; background: #ffffff; }
        .pdf-root [data-hide-print-btn='true'] { display: none !important; }
        .pdf-root .print\\:hidden { display: none !important; }
        .pdf-root * { box-sizing: border-box; }
        a { text-decoration: underline; word-break: break-word; }
    </style>
</head>
<body>
    <div class="pdf-root">${cloned.outerHTML}</div>
    <script>
        const waitForAssets = async () => {
            const images = Array.from(document.images || []);
            await Promise.all(images.map((img) => {
                if (img.complete) return Promise.resolve();
                return new Promise((resolve) => {
                    img.onload = resolve;
                    img.onerror = resolve;
                });
            }));
        };

        window.addEventListener('load', async () => {
            await waitForAssets();
            setTimeout(() => {
                window.print();
                window.close();
            }, 250);
        });
    <\/script>
</body>
</html>
                        `);
                        printWindow.document.close();
        } finally {
            setIsGenerating(false);
        }
    }

    return (
        <section
            id="cv"
            className="py-24 px-4 md:px-6 w-full border-t border-white/5 bg-zinc-950/60 print:py-0 print:bg-white print:text-black"
        >
            <div className="container mx-auto max-w-5xl">

                {/* Print button — hidden when printing */}
                <div className="flex justify-end mb-6 print:hidden">
                    <button
                        onClick={printCV}
                        disabled={isGenerating}
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        <Printer className="w-4 h-4" />
                        {isGenerating ? "Đang tạo PDF..." : "Tải CV (PDF)"}
                    </button>
                </div>

                {/* ─── CV CARD ─── */}
                <motion.div
                    ref={cvRef}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 print:border-0 print:shadow-none print:rounded-none"
                >
                    {/* ══ HEADER BANNER ══ */}
                    <div className="relative bg-linear-to-r from-violet-700 via-purple-600 to-pink-600 px-8 py-10 md:py-12 print:bg-none print:border-b-4 print:border-violet-600">
                        {/* subtle dot-grid decoration */}
                        <div
                            aria-hidden
                            className="pointer-events-none absolute inset-0 opacity-10"
                            style={{
                                backgroundImage:
                                    "radial-gradient(circle, #fff 1px, transparent 1px)",
                                backgroundSize: "22px 22px",
                            }}
                        />
                        <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
                            <div className="flex-1">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60 mb-1">
                                    Curriculum Vitae
                                </p>
                                <h1 className="font-heading text-4xl md:text-5xl font-black text-white tracking-tight">
                                    Lê Kim Nam
                                </h1>
                                <p className="mt-2 text-lg font-semibold text-violet-200 tracking-wide">
                                    Content Creator
                                </p>
                            </div>

                            {/* Avatar */}
                            <div className="flex justify-center md:order-first">
                                <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white/30 shadow-xl shrink-0">
                                    <NextImage
                                        src="/source/ava.jpg"
                                        alt="Lê Kim Nam"
                                        fill
                                        className="object-cover"
                                        sizes="112px"
                                    />
                                </div>
                            </div>

                            {/* Quick contact chips */}
                            <div className="flex flex-col gap-2 text-sm text-white/85">
                                <span className="inline-flex items-center gap-2">
                                    <Mail className="w-3.5 h-3.5 shrink-0 text-violet-200" />
                                    lekimnam2809@gmail.com
                                </span>
                                <span className="inline-flex items-center gap-2">
                                    <Phone className="w-3.5 h-3.5 shrink-0 text-violet-200" />
                                    0367 814 254
                                </span>
                                <span className="inline-flex items-center gap-2">
                                    <MapPin className="w-3.5 h-3.5 shrink-0 text-violet-200" />
                                    Đà Nẵng, Việt Nam
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* ══ BODY ══ */}
                    <div className="bg-zinc-900 print:bg-white grid grid-cols-1 lg:grid-cols-[2fr_1fr] divide-y lg:divide-y-0 lg:divide-x divide-white/8 print:divide-zinc-200">

                        {/* ── LEFT COLUMN ── */}
                        <div className="p-6 md:p-8 space-y-10">

                            {/* 1. Giới thiệu */}
                            <motion.div custom={0} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
                                <SectionTitle icon={<User />} title="Giới thiệu" color="violet" />
                                <div className="space-y-3 text-white/75 text-sm leading-relaxed print:text-zinc-700 mt-3">
                                    <p>Sinh viên năm cuối ngành Công nghệ Thông tin với niềm đam mê mạnh mẽ trong lĩnh vực <span className="text-violet-400 font-medium print:text-violet-700">sáng tạo nội dung, truyền thông số và phát triển cộng đồng</span>.</p>
                                    <p>Tôi có kinh nghiệm xây dựng ý tưởng nội dung, viết kịch bản video, biên tập bài viết truyền thông, thiết kế ấn phẩm và sản xuất nội dung đa nền tảng.</p>
                                    <p>Với nền tảng công nghệ kết hợp cùng tư duy storytelling, tôi hướng tới việc tạo ra những nội dung thu hút người xem, truyền tải thông điệp rõ ràng và tạo giá trị cho cộng đồng người dùng.</p>
                                    <p>Mục tiêu của tôi là trở thành <span className="text-violet-400 font-medium print:text-violet-700">Content Editor chuyên nghiệp</span> trong lĩnh vực truyền thông – game – giải trí, đồng thời phát triển sâu hơn về chiến lược nội dung và storytelling trong sản phẩm số.</p>
                                </div>
                            </motion.div>

                            {/* 2. Học vấn */}
                            <motion.div custom={1} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
                                <SectionTitle icon={<GraduationCap />} title="Học vấn" color="violet" />
                                <div className="mt-3 rounded-xl border border-white/8 bg-white/4 p-4 print:border-zinc-200 print:bg-zinc-50">
                                    <p className="font-semibold text-white print:text-zinc-900">Cử nhân Công nghệ Thông tin</p>
                                    <p className="text-sm text-violet-400 print:text-violet-700 mt-0.5">Trường Đại học Sư phạm Kỹ thuật – Đại học Đà Nẵng</p>
                                    <div className="flex flex-wrap gap-3 mt-2">
                                        <Chip label="CNTT" color="violet" />
                                        <Chip label="GPA 3.3 / 4.0" color="pink" />
                                    </div>
                                    <ul className="mt-4 space-y-1.5 text-sm text-white/70 print:text-zinc-600">
                                        {["Phân tích dữ liệu và khai thác dữ liệu", "Thiết kế hệ thống và phát triển sản phẩm số", "Tư duy logic và giải quyết vấn đề", "Ứng dụng công nghệ vào sản xuất nội dung"].map((item) => (
                                            <li key={item} className="flex items-start gap-2">
                                                <ChevronRight className="w-4 h-4 mt-0.5 text-violet-400 shrink-0 print:text-violet-600" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="mt-3 text-xs text-white/50 print:text-zinc-500">
                                        + Tự học thêm: Content Marketing, Video Editing, Thiết kế đồ họa, AI Tools
                                    </p>
                                </div>
                            </motion.div>

                            {/* 3. Kinh nghiệm */}
                            <motion.div custom={2} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
                                <SectionTitle icon={<Briefcase />} title="Kinh nghiệm & Portfolio" color="violet" />
                                <div className="mt-3 space-y-4">
                                    {EXPERIENCE_ITEMS.map((exp, i) => (
                                        <div key={i} className="rounded-xl border border-white/8 bg-white/4 p-4 print:border-zinc-200 print:bg-zinc-50">
                                            <div className="flex items-start gap-2 mb-1">
                                                <Star className="w-4 h-4 mt-0.5 text-pink-400 shrink-0 print:text-pink-600" />
                                                <p className="font-semibold text-white text-sm print:text-zinc-900">{exp.title}</p>
                                            </div>
                                            <p className="text-xs text-white/60 mb-2 ml-6 print:text-zinc-500">{exp.desc}</p>
                                            <ul className="ml-6 space-y-1 text-xs text-white/75 print:text-zinc-600">
                                                {exp.items.map((it) => (
                                                    <li key={it} className="flex items-start gap-1.5">
                                                        <span className="mt-1.5 h-1 w-1 rounded-full bg-violet-400 shrink-0 print:bg-violet-600" />
                                                        {it}
                                                    </li>
                                                ))}
                                            </ul>
                                            {exp.sub.length > 0 && (
                                                <div className="ml-6 mt-3">
                                                    <p className="text-xs font-semibold text-violet-400 mb-1 print:text-violet-700">{exp.subLabel}</p>
                                                    <ul className="space-y-1 text-xs text-white/70 print:text-zinc-600">
                                                        {exp.sub.map((s) => (
                                                            <li key={s} className="flex items-start gap-1.5">
                                                                <ChevronRight className="w-3.5 h-3.5 mt-0.5 text-pink-400 shrink-0 print:text-pink-600" />
                                                                {s}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                            {exp.link && (
                                                <a
                                                    href={exp.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="ml-6 mt-2 inline-flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 underline underline-offset-2 print:text-cyan-700"
                                                >
                                                    <Link2 className="w-3 h-3" />
                                                    Xem portfolio
                                                </a>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* ── RIGHT COLUMN ── */}
                        <div className="p-6 md:p-8 space-y-10">

                            {/* 4. Liên hệ */}
                            <motion.div custom={0} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
                                <SectionTitle icon={<Phone />} title="Liên hệ" color="pink" />
                                <ul className="mt-3 space-y-3 text-sm text-white/75 print:text-zinc-700">
                                    <ContactRow icon={<User className="w-4 h-4" />} label="Họ và tên" value="Lê Nam" />
                                    <ContactRow icon={<Star className="w-4 h-4" />} label="Ngày sinh" value="28/09/2003" />
                                    <ContactRow icon={<Mail className="w-4 h-4" />} label="Email" value="lekimnam2809@gmail.com" />
                                    <ContactRow icon={<Phone className="w-4 h-4" />} label="Điện thoại" value="0367 814 254" />
                                    <ContactRow icon={<MapPin className="w-4 h-4" />} label="Địa chỉ" value="Đà Nẵng, Việt Nam" />
                                    <li>
                                        <p className="text-xs text-white/45 uppercase tracking-wider mb-0.5 print:text-zinc-400">Portfolio</p>
                                        <a
                                            href="https://portfolio-video-creator-9tlxll7ha-lekimnam2809-3867s-projects.vercel.app"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-start gap-1.5 text-cyan-400 hover:text-cyan-300 underline underline-offset-2 break-all text-xs print:text-cyan-700"
                                        >
                                            <Link2 className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                                            portfolio-video-creator…vercel.app
                                        </a>
                                    </li>
                                </ul>
                            </motion.div>

                            {/* 5. Kỹ năng mềm */}
                            <motion.div custom={1} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
                                <SectionTitle icon={<Brain />} title="Kỹ năng mềm" color="pink" />
                                <div className="mt-3 space-y-3">
                                    {SOFT_SKILLS.map((sk) => (
                                        <div key={sk.name} className="rounded-lg border border-white/8 bg-white/4 px-3 py-2.5 print:border-zinc-200 print:bg-zinc-50">
                                            <p className="text-sm font-semibold text-pink-400 print:text-pink-700">{sk.name}</p>
                                            <p className="text-xs text-white/65 mt-0.5 leading-relaxed print:text-zinc-600">{sk.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* 6. Kỹ năng phần mềm */}
                            <motion.div custom={2} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
                                <SectionTitle icon={<Wrench />} title="Kỹ năng phần mềm" color="pink" />
                                <div className="mt-3 space-y-4">
                                    {TOOL_GROUPS.map((group) => (
                                        <div key={group.label}>
                                            <p className="text-xs font-semibold uppercase tracking-wider text-white/45 mb-1.5 print:text-zinc-400">{group.label}</p>
                                            <div className="flex flex-wrap gap-1.5">
                                                {group.tools.map((t) => (
                                                    <span
                                                        key={t}
                                                        className="rounded-full bg-violet-500/15 border border-violet-500/25 px-2.5 py-0.5 text-xs text-violet-300 print:bg-violet-50 print:border-violet-300 print:text-violet-800"
                                                    >
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* ══ FOOTER BAND ══ */}
                    <div className="bg-linear-to-r from-violet-700 via-purple-600 to-pink-600 px-8 py-3 flex items-center justify-center print:bg-none print:border-t-2 print:border-violet-400">
                        <p className="text-xs text-white/70 text-center">
                            © {new Date().getFullYear()} Lê Kim Nam — Content Editor Portfolio
                        </p>
                    </div>
                </motion.div>

                {/* Print styles injected */}
                <style>{`
                    @media print {
                        body { background: white !important; color: #111 !important; }
                        @page { size: A4; margin: 12mm 10mm; }
                        section#cv { padding: 0 !important; }
                        .print\\:hidden { display: none !important; }
                    }
                `}</style>
            </div>
        </section>
    );
}

/* ─── tiny sub-components ─── */
function SectionTitle({ icon, title, color }: { icon: React.ReactNode; title: string; color: "violet" | "pink" }) {
    const cls = color === "violet"
        ? "text-violet-400 bg-violet-400/15 border-violet-400/25 print:text-violet-700"
        : "text-pink-400 bg-pink-400/15 border-pink-400/25 print:text-pink-700";
    return (
        <div className="flex items-center gap-2 mb-1">
            <div className={`w-7 h-7 rounded-lg border flex items-center justify-center [&>svg]:w-3.5 [&>svg]:h-3.5 ${cls}`}>
                {icon}
            </div>
            <h2 className={`text-sm font-bold uppercase tracking-widest ${cls}`}>{title}</h2>
        </div>
    );
}

function ContactRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
    return (
        <li className="flex items-start gap-2">
            <span className="mt-0.5 text-pink-400 shrink-0 print:text-pink-600">{icon}</span>
            <div>
                <p className="text-xs text-white/45 uppercase tracking-wider print:text-zinc-400">{label}</p>
                <p className="text-white/85 print:text-zinc-800">{value}</p>
            </div>
        </li>
    );
}

function Chip({ label, color }: { label: string; color: "violet" | "pink" }) {
    const cls = color === "violet"
        ? "bg-violet-500/15 border-violet-500/30 text-violet-300 print:bg-violet-50 print:border-violet-300 print:text-violet-800"
        : "bg-pink-500/15 border-pink-500/30 text-pink-300 print:bg-pink-50 print:border-pink-300 print:text-pink-800";
    return (
        <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${cls}`}>{label}</span>
    );
}
