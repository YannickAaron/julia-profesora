interface LogoProps {
  size?: number;
  /** 'color' (default) | 'dark' — dark inverts the inner circle fill for dark backgrounds */
  variant?: 'color' | 'dark';
}

export function Logo({ size = 38, variant = 'color' }: LogoProps) {
  const isDark = variant === 'dark';
  const innerFill = isDark ? '#1f1a14' : '#fbf6ec';
  const innerStroke = isDark ? '#fbf6ec' : '#1f1a14';
  const leafStroke = isDark ? '#fbf6ec' : '#1f1a14';
  const sliceFill = isDark ? '#c54a2a' : '#f4c179';
  const centerFill = isDark ? '#fbf6ec' : '#1f1a14';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* leaf */}
      <path
        d="M115 30 Q 148 14 168 34 Q 154 62 126 56 Z"
        fill="#6b8e3d"
        stroke={leafStroke}
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      {/* stem */}
      <path
        d="M118 33 L 112 58"
        stroke={leafStroke}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* outer orange circle */}
      <circle cx="100" cy="120" r="68" fill="#e8762a" stroke={innerStroke} strokeWidth="4" />
      {/* inner background circle */}
      <circle cx="100" cy="120" r="54" fill={innerFill} stroke={innerStroke} strokeWidth="2.2" />
      {/* 8 pie slices */}
      <g stroke={innerStroke} strokeWidth="2" fill={sliceFill} strokeLinejoin="round">
        <path d="M100 120 L 100 66 A 54 54 0 0 1 145 96 Z" />
        <path d="M100 120 L 145 96 A 54 54 0 0 1 154 120 Z" />
        <path d="M100 120 L 154 120 A 54 54 0 0 1 145 144 Z" />
        <path d="M100 120 L 145 144 A 54 54 0 0 1 100 174 Z" />
        <path d="M100 120 L 100 174 A 54 54 0 0 1 55 144 Z" />
        <path d="M100 120 L 55 144 A 54 54 0 0 1 46 120 Z" />
        <path d="M100 120 L 46 120 A 54 54 0 0 1 55 96 Z" />
        <path d="M100 120 L 55 96 A 54 54 0 0 1 100 66 Z" />
      </g>
      {/* center dot */}
      <circle cx="100" cy="120" r="6" fill={centerFill} />
    </svg>
  );
}
