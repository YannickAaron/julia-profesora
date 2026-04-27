interface OrangeIconProps {
  size?: number;
  rotate?: number;
}

export function OrangeIcon({ size = 24, rotate = 0 }: OrangeIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" style={{ transform: `rotate(${rotate}deg)` }}>
      <path d="M16 4 Q 21 2 24 5 Q 22 9 18 9 Z" fill="#6b8e3d" stroke="#1f1a14" strokeWidth="1.2" />
      <circle cx="15" cy="18" r="10" fill="#e8762a" stroke="#1f1a14" strokeWidth="1.4" />
      <ellipse cx="11" cy="14" rx="2.5" ry="1.6" fill="rgba(255,255,255,0.35)" />
    </svg>
  );
}
