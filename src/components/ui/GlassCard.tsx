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
    <div className={cn(
      "relative overflow-hidden rounded-2xl p-6 md:p-8 text-card-foreground transition-all duration-400",
      "bg-[hsl(240_4%_16%/0.6)] backdrop-blur-xl border border-[hsl(0_0%_100%/0.1)]",
      "shadow-[0_8px_32px_hsl(0_0%_0%/0.2),inset_0_1px_0_hsl(0_0%_100%/0.06)]",
      hover && "hover:border-primary/25 hover:shadow-[0_8px_40px_hsl(48_100%_50%/0.1),inset_0_1px_0_hsl(0_0%_100%/0.08)] hover:-translate-y-0.5",
      className
    )}>
      {/* Top shine line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(0_0%_100%/0.15)] to-transparent" />
      {children}
    </div>
  );
};
