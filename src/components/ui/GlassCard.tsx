import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  variant?: "default" | "light";
}

export const GlassCard = ({
  children,
  className,
  hover = true,
  variant = "default"
}: GlassCardProps) => {
  return (
    <div 
      className={cn(
        "glass-card p-6 md:p-8",
        variant === "default" && "bg-secondary text-secondary-foreground",
        variant === "light" && "bg-card text-card-foreground",
        hover && "glow-hover", 
        className
      )}
    >
      {children}
    </div>
  );
};