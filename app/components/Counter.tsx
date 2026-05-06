"use client";
import { useEffect, useRef, useState } from "react";

export function useCounter(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(Math.floor(start));
        }, 16);
        observer.disconnect();
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);
  return { count, ref };
}

export function StatCounter({ value, label, suffix = "+", color = "#F59E0B" }: {
  value: number; label: string; suffix?: string; color?: string;
}) {
  const { count, ref } = useCounter(value);
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold font-rajdhani" style={{color}}>{count}{suffix}</div>
      <div className="text-gray-400 text-sm mt-1">{label}</div>
    </div>
  );
}
