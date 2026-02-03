import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const GlassCard = ({ children, className, hover = true }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "glass-card p-6 md:p-8",
        hover && "glow-hover",
        className
      )}
    >
      {children}
    </div>
  );
};
