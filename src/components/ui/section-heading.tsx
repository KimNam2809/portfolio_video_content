import { cn } from "../../lib/utils";
import * as React from "react";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    title: string;
    subtitle?: string;
    align?: "left" | "center" | "right";
}

export function SectionHeading({
    className,
    title,
    subtitle,
    align = "center",
    ...props
}: SectionHeadingProps) {
    return (
        <div
            className={cn(
                "mb-12 flex flex-col gap-2",
                {
                    "items-start text-left": align === "left",
                    "items-center text-center": align === "center",
                    "items-end text-right": align === "right",
                },
                className
            )}
        >
            <h2
                className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-foreground"
                {...props}
            >
                {title}
            </h2>
            {subtitle && (
                <p className="text-muted-foreground max-w-[600px] text-lg">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
