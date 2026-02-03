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
  return <div className={cn("glass-card p-6 md:p-8 rounded-md border-2 border-primary/20 text-foreground bg-primary/5", variant === "default" && "bg-primary/5 text-foreground", variant === "light" && "bg-card text-foreground", hover && "glow-hover", className)}>
      {children}
    </div>;
};