export function HandUnderline({ children }: { children: React.ReactNode }) {
  return (
    <span className="hand-underline">
      {children}
      <svg viewBox="0 0 300 16" preserveAspectRatio="none">
        <path d="M2 11 Q 50 2, 100 9 T 200 8 T 298 11" />
      </svg>
    </span>
  );
}
