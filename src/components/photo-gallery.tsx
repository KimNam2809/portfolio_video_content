"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "./ui/section-heading";
import { X, ZoomIn } from "lucide-react";
import Image from "next/image";

const PHOTOS = [
    { id: 1, src: "/source/my_photos/20220828_180222.jpg", alt: "Khoảnh khắc 1", height: "h-64" },
    { id: 2, src: "/source/my_photos/20220828_180253.jpg", alt: "Khoảnh khắc 2", height: "h-96" },
    { id: 3, src: "/source/my_photos/20220828_180302.jpg", alt: "Khoảnh khắc 3", height: "h-72" },
    { id: 4, src: "/source/my_photos/20220909_162106.jpg", alt: "Khoảnh khắc 4", height: "h-80" },
    { id: 5, src: "/source/my_photos/20220909_162118.jpg", alt: "Khoảnh khắc 5", height: "h-64" },
    { id: 6, src: "/source/my_photos/20220909_162136.jpg", alt: "Khoảnh khắc 6", height: "h-96" },
    { id: 7, src: "/source/my_photos/20220911_070144.jpg", alt: "Khoảnh khắc 7", height: "h-72" },
    { id: 8, src: "/source/my_photos/20220911_070715.jpg", alt: "Khoảnh khắc 8", height: "h-80" },
    { id: 9, src: "/source/my_photos/20220911_070722.jpg", alt: "Khoảnh khắc 9", height: "h-64" },
    { id: 10, src: "/source/my_photos/20250531_182308.jpg", alt: "Khoảnh khắc 10", height: "h-96" },
    { id: 11, src: "/source/my_photos/20250531_182317.jpg", alt: "Khoảnh khắc 11", height: "h-72" },
    { id: 12, src: "/source/my_photos/IMG_20250314_054610.jpg", alt: "Khoảnh khắc 12", height: "h-80" },
    { id: 13, src: "/source/my_photos/IMG_20250314_174619.jpg", alt: "Khoảnh khắc 13", height: "h-64" },
    { id: 14, src: "/source/my_photos/IMG_20250430_200405.jpg", alt: "Khoảnh khắc 14", height: "h-96" },
    { id: 15, src: "/source/my_photos/IMG_20250531_181408.jpg", alt: "Khoảnh khắc 15", height: "h-72" },
    { id: 16, src: "/source/my_photos/IMG_20250830_141119.jpg", alt: "Khoảnh khắc 16", height: "h-80" },
    { id: 17, src: "/source/my_photos/IMG_20250831_183201.jpg", alt: "Khoảnh khắc 17", height: "h-64" },
    { id: 18, src: "/source/my_photos/IMG_20250902_184830.jpg", alt: "Khoảnh khắc 18", height: "h-96" },
    { id: 19, src: "/source/my_photos/IMG_20250902_185639.jpg", alt: "Khoảnh khắc 19", height: "h-72" },
    { id: 20, src: "/source/my_photos/IMG_20260119_172836.jpg", alt: "Khoảnh khắc 20", height: "h-80" },
];

export function PhotoGallery() {
    const [selectedPhoto, setSelectedPhoto] = useState<typeof PHOTOS[0] | null>(null);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedPhoto) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [selectedPhoto]);

    return (
        <section className="py-24 px-4 md:px-6 relative w-full border-t border-white/5 bg-black">
            <div className="container mx-auto">
                <SectionHeading
                    title="Sau Ống Kính"
                    subtitle="Những khoảnh khắc, bức ảnh đẹp mà em đã chụp lại và muốn chia sẻ đến mọi người."
                />

                {/* Masonry-like Grid Layout */}
                <div className="mt-16 columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 max-w-7xl mx-auto">
                    {PHOTOS.map((photo, index) => (
                        <motion.div
                            key={photo.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                            onClick={() => setSelectedPhoto(photo)}
                            className={`relative w-full rounded-2xl overflow-hidden break-inside-avoid bg-zinc-900 border border-white/5 group cursor-pointer ${photo.height}`}
                        >
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="bg-black/50 backdrop-blur-md rounded-full p-3 border border-white/10 text-white/80">
                                    <ZoomIn className="w-6 h-6" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedPhoto && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8"
                        onClick={() => setSelectedPhoto(null)}
                    >
                        <button
                            className="absolute top-6 right-6 z-[60] p-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white transition-colors backdrop-blur-md"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedPhoto(null);
                            }}
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={selectedPhoto.src}
                                    alt={selectedPhoto.alt}
                                    fill
                                    className="object-contain"
                                    sizes="100vw"
                                    quality={100}
                                    priority
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
