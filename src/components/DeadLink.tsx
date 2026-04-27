// Wraps placeholder links — shows a dashed orange underline in dev so they're easy to spot.
// In production renders children unchanged.

interface DeadLinkProps {
  href: string;
  todo: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export function DeadLink({ href, todo, className, style, children }: DeadLinkProps) {
  if (import.meta.env.DEV) {
    return (
      <a
        href={href}
        className={className}
        style={{
          ...style,
          outline: '2px dashed #e8762a',
          outlineOffset: '2px',
        }}
        title={`TODO: ${todo}`}
        onClick={(e) => {
          if (href === '#') e.preventDefault();
        }}
      >
        {children}
      </a>
    );
  }
  return (
    <a href={href} className={className} style={style}>
      {children}
    </a>
  );
}
