import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface IconBoxProps {
  icon: LucideIcon;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const IconBox = ({ icon: Icon, className, size = "md" }: IconBoxProps) => {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-14 h-14",
    lg: "w-16 h-16",
  };

  const iconSizes = {
    sm: 18,
    md: 24,
    lg: 28,
  };

  return (
    <div className={cn("icon-box", sizeClasses[size], className)}>
      <Icon size={iconSizes[size]} strokeWidth={1.5} />
    </div>
  );
};
