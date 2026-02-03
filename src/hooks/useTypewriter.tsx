import { useState, useEffect, useCallback } from "react";

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
}

export function useTypewriter({
  text,
  speed = 50,
  delay = 0,
  onComplete,
}: UseTypewriterOptions) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!isStarted) return;

    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
      onComplete?.();
    }
  }, [displayedText, text, speed, isStarted, onComplete]);

  const reset = useCallback(() => {
    setDisplayedText("");
    setIsComplete(false);
    setIsStarted(false);
  }, []);

  return { displayedText, isComplete, reset };
}

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  cursor?: boolean;
  cursorChar?: string;
  onComplete?: () => void;
}

export function Typewriter({
  text,
  speed = 50,
  delay = 0,
  className = "",
  cursor = true,
  cursorChar = "|",
  onComplete,
}: TypewriterProps) {
  const { displayedText, isComplete } = useTypewriter({
    text,
    speed,
    delay,
    onComplete,
  });

  return (
    <span className={className}>
      {displayedText}
      {cursor && !isComplete && (
        <span className="animate-pulse ml-0.5">{cursorChar}</span>
      )}
    </span>
  );
}
