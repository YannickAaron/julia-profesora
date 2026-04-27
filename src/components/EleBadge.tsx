export function EleBadge() {
  return (
    <div className="ele-badge-wrap">
      <svg
        className="ele-badge"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="ELE — Español como Lengua Extranjera, Certificada"
      >
        {/* paper fill */}
        <circle cx="60" cy="60" r="57" fill="var(--paper)" />

        {/* outer spinning dashed ring */}
        <circle
          className="ele-ring"
          cx="60"
          cy="60"
          r="54"
          stroke="var(--orange)"
          strokeWidth="2.2"
          strokeDasharray="7 5"
        />

        {/* inner ring — draws in on load */}
        <circle
          className="ele-draw"
          cx="60"
          cy="60"
          r="46"
          stroke="var(--ink)"
          strokeWidth="1.5"
        />

        <defs>
          {/*
            Top arc: from (18,60) clockwise [sweep=1] small arc [large=0]
            to (102,60). Goes through 12 o'clock — text reads left-to-right ✓
            radius 42, half-circumference ≈ 132px, text ≈ 122px — fits.
          */}
          <path id="ele-top-arc" d="M 18,60 A 42,42 0 0,1 102,60" />
        </defs>

        {/* circular label along top arc */}
        <text fill="var(--ink-soft)" letterSpacing="0.08em">
          <textPath
            href="#ele-top-arc"
            startOffset="50%"
            textAnchor="middle"
            style={{ fontFamily: 'var(--mono)', fontSize: '6.4px' }}
          >
            ESPAÑOL · LENGUA EXTRANJERA
          </textPath>
        </text>

        {/* center ELE */}
        <text
          x="60"
          y="62"
          textAnchor="middle"
          style={{
            fontFamily: 'var(--serif)',
            fontSize: '32px',
            fontWeight: 600,
            fill: 'var(--orange-deep)',
          }}
        >
          ELE
        </text>

        {/* three small diamonds as divider */}
        <text
          x="60"
          y="76"
          textAnchor="middle"
          style={{ fontSize: '8px', fill: 'var(--orange)' }}
        >
          ✦ ✦ ✦
        </text>

        {/* bottom label */}
        <text
          x="60"
          y="88"
          textAnchor="middle"
          style={{
            fontFamily: 'var(--mono)',
            fontSize: '5.5px',
            fill: 'var(--muted)',
            letterSpacing: '0.18em',
          }}
        >
          CERTIFICADA
        </text>
      </svg>
    </div>
  );
}
