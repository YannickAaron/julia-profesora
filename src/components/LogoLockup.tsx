interface LogoLockupProps {
  width?: number;
  variant?: 'color' | 'dark';
}

export function LogoLockup({ width = 240, variant = 'color' }: LogoLockupProps) {
  const isDark = variant === 'dark';
  const textFill = isDark ? '#fbf6ec' : '#1f1a14';
  const innerFill = isDark ? '#1f1a14' : '#fbf6ec';
  const innerStroke = isDark ? '#fbf6ec' : '#1f1a14';
  const leafStroke = isDark ? '#fbf6ec' : '#1f1a14';
  const sliceFill = isDark ? '#c54a2a' : '#f4c179';
  const centerFill = isDark ? '#fbf6ec' : '#1f1a14';
  const height = Math.round(width * (200 / 600));

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 600 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Julia Profesora ELE"
    >
      {/* mark */}
      <path d="M115 30 Q 148 14 168 34 Q 154 62 126 56 Z" fill="#6b8e3d" stroke={leafStroke} strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M118 33 L 112 58" stroke={leafStroke} strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="100" cy="120" r="68" fill="#e8762a" stroke={innerStroke} strokeWidth="4" />
      <circle cx="100" cy="120" r="54" fill={innerFill} stroke={innerStroke} strokeWidth="2.2" />
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
      <circle cx="100" cy="120" r="6" fill={centerFill} />
      {/* wordmark */}
      <text
        x="220"
        y="125"
        fill={textFill}
        fontFamily="'Caveat', 'Kalam', cursive"
        fontSize="72"
        fontWeight="700"
      >
        julia
      </text>
      {/* underline curve */}
      <path d="M225 145 Q 320 158 410 142" stroke="#e8762a" strokeWidth="3.5" strokeLinecap="round" />
      {/* subtitle */}
      <text
        x="225"
        y="172"
        fill={isDark ? '#c8bfb0' : '#7a6f63'}
        fontFamily="'JetBrains Mono', 'Courier New', monospace"
        fontSize="16"
        fontWeight="500"
        letterSpacing="2"
      >
        PROFESORA · ELE
      </text>
    </svg>
  );
}
