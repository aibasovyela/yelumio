import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: Date;
}

export const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex items-center gap-3">
      <TimeBlock value={timeLeft.days} label="дней" />
      <span className="text-primary text-xl font-bold">:</span>
      <TimeBlock value={timeLeft.hours} label="часов" />
      <span className="text-primary text-xl font-bold">:</span>
      <TimeBlock value={timeLeft.minutes} label="минут" />
      <span className="text-primary text-xl font-bold">:</span>
      <TimeBlock value={timeLeft.seconds} label="секунд" />
    </div>
  );
};

function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="glass-card px-3 py-2 min-w-[52px] text-center">
        <span className="text-xl md:text-2xl font-bold tabular-nums">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-[10px] text-muted-foreground mt-1">{label}</span>
    </div>
  );
}

function getTimeLeft(target: Date) {
  const now = new Date().getTime();
  const diff = Math.max(0, target.getTime() - now);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}
