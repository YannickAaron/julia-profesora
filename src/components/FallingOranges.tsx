import { useState } from 'react';
import { OrangeIcon } from './OrangeIcon';

interface OrangeItem {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  rotate: number;
}

export function FallingOranges({ count = 6 }: { count?: number }) {
  const [oranges] = useState<OrangeItem[]>(() =>
    Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: 5 + Math.random() * 90,
      delay: Math.random() * 6,
      duration: 7 + Math.random() * 5,
      size: 18 + Math.random() * 20,
      rotate: Math.random() * 360,
    }))
  );

  return (
    <>
      {oranges.map((o) => (
        <div
          key={o.id}
          className="falling-orange"
          style={{
            left: `${o.left}%`,
            top: '-60px',
            animationDelay: `${o.delay}s`,
            animationDuration: `${o.duration}s`,
            animationIterationCount: 'infinite',
          }}
        >
          <OrangeIcon size={o.size} rotate={o.rotate} />
        </div>
      ))}
    </>
  );
}
