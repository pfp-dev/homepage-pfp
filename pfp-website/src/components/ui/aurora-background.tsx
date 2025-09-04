"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col h-[100vh] items-center justify-center bg-white text-slate-950 transition-bg",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          {/* First layer - moves right to left */}
          <motion.div
            className={cn(
              "absolute -inset-[10px] opacity-25 will-change-transform pointer-events-none",
              "transform-gpu filter blur-[8px]",
              showRadialGradient &&
                "[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_60%)]"
            )}
            style={{
              background: `
                repeating-linear-gradient(100deg, var(--aurora-primary) 0%, var(--aurora-secondary) 1%, transparent 2%, transparent 3%, var(--aurora-accent) 4%),
                repeating-linear-gradient(100deg, var(--aurora-purple) 0.5%, var(--aurora-lavender) 1.5%, var(--aurora-primary) 2.5%, var(--aurora-secondary) 3.5%, var(--aurora-accent) 4.5%, var(--aurora-purple) 5.5%)
              `,
              backgroundSize: "300% 200%",
              backgroundPosition: "50% 50%",
            }}
            animate={{
              backgroundPosition: ["50% 50%", "100% 0%", "50% 50%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          ></motion.div>
          
          {/* Second layer - moves left to right */}
          <motion.div
            className={cn(
              "absolute -inset-[10px] opacity-10 will-change-transform pointer-events-none",
              "transform-gpu filter blur-[12px]",
              showRadialGradient &&
                "[mask-image:radial-gradient(ellipse_at_0%_0%,black_10%,transparent_60%)]"
            )}
            style={{
              background: `
                repeating-linear-gradient(100deg, var(--aurora-accent) 0%, var(--aurora-secondary) 1%, transparent 2%, transparent 3%, var(--aurora-primary) 4%),
                repeating-linear-gradient(100deg, var(--aurora-lavender) 0.5%, var(--aurora-purple) 1.5%, var(--aurora-accent) 2.5%, var(--aurora-secondary) 3.5%, var(--aurora-primary) 4.5%, var(--aurora-lavender) 5.5%)
              `,
              backgroundSize: "300% 200%",
              backgroundPosition: "50% 50%",
            }}
            animate={{
              backgroundPosition: ["50% 50%", "0% 100%", "50% 50%"],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          ></motion.div>
        </div>
        {children}
      </div>
    </main>
  );
};
