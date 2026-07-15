'use client';
import { useState, useEffect } from 'react';

export function useCountUp(end: number, duration: number = 2000, isIntersecting: boolean = true) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isIntersecting) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function (easeOutExpo)
      const easeOut = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setCount(Math.floor(end * easeOut));

      if (progress < duration) {
        animationFrame = window.requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [end, duration, isIntersecting]);

  return count;
}
