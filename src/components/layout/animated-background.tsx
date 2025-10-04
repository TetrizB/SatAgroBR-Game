"use client";

import { useEffect, useState } from 'react';

const Sparkles = () => {
  const [sparkles, setSparkles] = useState<any[]>([]);

  useEffect(() => {
    const generateSparkles = () => {
      if (typeof window === 'undefined') return;
      const newSparkles = Array.from({ length: 50 }).map(() => ({
        id: Math.random(),
        style: {
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${2 + Math.random() * 3}s`,
          animationDelay: `${Math.random() * 5}s`,
        },
      }));
      setSparkles(newSparkles);
    };

    generateSparkles();
    const interval = setInterval(generateSparkles, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sparkles" aria-hidden="true">
      {sparkles.map((sparkle) => (
        <div key={sparkle.id} className="sparkle" style={sparkle.style} />
      ))}
    </div>
  );
};


export function AnimatedBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full bg-background">
      <div className="absolute inset-0 -z-10 h-full w-full animated-gradient" />
      <Sparkles />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
