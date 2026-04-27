import { detectLang } from '../i18n';

const COPY = {
  en: { kicker: '404 · not found', title: 'Lost in translation', sub: "This page doesn't exist — but your next Spanish lesson can.", home: '← Back home', book: '📅 Book a free intro' },
  es: { kicker: '404 · no encontrada', title: 'Te has perdido', sub: 'Esta página no existe — pero tu próxima clase de español sí.', home: '← Volver', book: '📅 Reserva una intro gratis' },
  de: { kicker: '404 · nicht gefunden', title: 'Verloren in der Übersetzung', sub: 'Diese Seite gibt es nicht — deine nächste Spanischstunde schon.', home: '← Zurück', book: '📅 Gratis-Erstgespräch buchen' },
};

export default function NotFound() {
  const lang = detectLang();
  const t = COPY[lang] ?? COPY.en;

  return (
    <div className="nf-page">
      <div className="nf-stage">
        <svg viewBox="-110 -120 220 240" className="nf-orange" aria-hidden>
          <ellipse className="nf-shadow" cx="0" cy="98" rx="74" ry="9" fill="rgba(31,26,20,0.18)" />

          <g className="nf-leaf">
            <path d="M -2 -88 L 1 -96" stroke="#5a3a1c" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M -5 -90 Q 16 -106 34 -90 Q 16 -76 -3 -82 Z" fill="#6b8e3d" stroke="#1f1a14" strokeWidth="1.6" strokeLinejoin="round" />
            <path d="M 0 -88 Q 14 -92 28 -94" stroke="#1f1a14" strokeWidth="0.8" opacity="0.55" fill="none" />
          </g>

          <g className="nf-fruit">
            <circle r="78" fill="#e8762a" stroke="#1f1a14" strokeWidth="2" />
            <ellipse cx="-26" cy="-22" rx="14" ry="8" fill="rgba(255,255,255,0.35)" />
            <g opacity="0.45" fill="#1f1a14">
              <circle cx="22" cy="-30" r="1.4" />
              <circle cx="40" cy="6" r="1.1" />
              <circle cx="-10" cy="38" r="1.3" />
              <circle cx="32" cy="40" r="1" />
              <circle cx="-44" cy="-4" r="1.2" />
              <circle cx="6" cy="-58" r="1" />
            </g>
          </g>

          <text x="0" y="0" textAnchor="middle" dominantBaseline="central"
            fontFamily="Fraunces, Georgia, serif" fontWeight="600" fontSize="72"
            fill="#fbf6ec" stroke="#1f1a14" strokeWidth="1.4" paintOrder="stroke fill">
            404
          </text>
        </svg>

        <div className="nf-text">
          <div className="section-kicker">{t.kicker}</div>
          <h1 className="nf-title">{t.title}</h1>
          <p className="nf-sub">{t.sub}</p>
          <div className="nf-actions">
            <a href={`/${lang}`} className="btn">{t.home}</a>
            <a href={`/${lang}/book`} className="btn btn-primary">{t.book}</a>
          </div>
        </div>
      </div>
    </div>
  );
}
