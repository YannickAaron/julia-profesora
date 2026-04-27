import { useState } from 'react';
import { Reveal } from '../Reveal';
import type { T } from '../../i18n';

export function HowLessonUnfolds({ t }: { t: T }) {
  const layers = t.recipe_layers;
  const [open, setOpen] = useState(0);

  const totalSegments = 8;
  const revealedSegments = Math.round(((open + 1) / layers.length) * totalSegments);

  return (
    <section className="bk bk-paper2" id="how">
      <div className="wrap">
        <Reveal>
          <div className="section-kicker">{t.recipe_kicker}</div>
          <h2 className="section-title">
            {t.recipe_title_1} <span className="hand-bit">{t.recipe_title_2}</span>
            {t.recipe_title_3 ? (
              <>
                <br />
                {t.recipe_title_3}
              </>
            ) : null}
          </h2>
          <p className="section-intro">{t.recipe_intro}</p>
        </Reveal>

        <div className="recipe-stage">
          <div className="orange-stack">
            <svg viewBox="-260 -240 520 480" className="os-svg">
              <ellipse cx="0" cy="195" rx="160" ry="14" fill="rgba(31,26,20,0.14)" />

              <g className={`os-leaf ${open >= 0 ? 'in' : ''}`}>
                <path d="M -4 -176 L 2 -192" stroke="#5a3a1c" strokeWidth="3" strokeLinecap="round" fill="none" />
                <path d="M -10 -180 Q 30 -210 64 -178 Q 30 -150 -8 -160 Z" fill="#6b8e3d" stroke="#1f1a14" strokeWidth="2.5" strokeLinejoin="round" />
                <path d="M 0 -178 Q 25 -184 52 -188" stroke="#1f1a14" strokeWidth="1.2" opacity="0.55" fill="none" />
                <path d="M 8 -172 Q 22 -176 36 -174" stroke="#1f1a14" strokeWidth="0.9" opacity="0.4" fill="none" />
                <path d="M -14 -172 Q -34 -184 -44 -166 Q -28 -158 -12 -164 Z" fill="#8aa752" stroke="#1f1a14" strokeWidth="1.8" strokeLinejoin="round" />
              </g>

              <circle cx="0" cy="-160" r="5" fill="#c54a2a" opacity="0.55" />

              {[0, 1, 2, 3].map(q => {
                const angle = q * 90 - 45;
                const peeled = open >= q + 1;
                const tx = Math.cos((angle * Math.PI) / 180) * (peeled ? 110 : 0);
                const ty = Math.sin((angle * Math.PI) / 180) * (peeled ? 110 : 0);
                const rot = peeled ? angle + 30 : 0;
                return (
                  <g key={q} className="os-peel" style={{ transform: `translate(${tx}px, ${ty}px) rotate(${rot}deg)`, transformOrigin: '0 0' }}>
                    <path
                      d={`M 0 0 L ${Math.cos(((q * 90 - 45) * Math.PI) / 180) * 165} ${Math.sin(((q * 90 - 45) * Math.PI) / 180) * 165}
                          A 165 165 0 0 1 ${Math.cos(((q * 90 + 45) * Math.PI) / 180) * 165} ${Math.sin(((q * 90 + 45) * Math.PI) / 180) * 165} Z`}
                      fill="#e8762a" stroke="#1f1a14" strokeWidth="2.5"
                    />
                    <g opacity="0.4">
                      <circle cx={Math.cos(((q * 90 - 20) * Math.PI) / 180) * 110} cy={Math.sin(((q * 90 - 20) * Math.PI) / 180) * 110} r="2" fill="#1f1a14" />
                      <circle cx={Math.cos(((q * 90 + 10) * Math.PI) / 180) * 130} cy={Math.sin(((q * 90 + 10) * Math.PI) / 180) * 130} r="1.5" fill="#1f1a14" />
                      <circle cx={Math.cos(((q * 90 - 5) * Math.PI) / 180) * 80} cy={Math.sin(((q * 90 - 5) * Math.PI) / 180) * 80} r="1.5" fill="#1f1a14" />
                      <circle cx={Math.cos(((q * 90 + 25) * Math.PI) / 180) * 100} cy={Math.sin(((q * 90 + 25) * Math.PI) / 180) * 100} r="1.2" fill="#1f1a14" />
                    </g>
                    {peeled && (
                      <path
                        d={`M 0 0 L ${Math.cos(((q * 90 - 45) * Math.PI) / 180) * 165} ${Math.sin(((q * 90 - 45) * Math.PI) / 180) * 165}
                            A 165 165 0 0 1 ${Math.cos(((q * 90 + 45) * Math.PI) / 180) * 165} ${Math.sin(((q * 90 + 45) * Math.PI) / 180) * 165} Z`}
                        fill="rgba(255,255,255,0.35)" stroke="none"
                      />
                    )}
                  </g>
                );
              })}

              <circle r="155" fill="#f4c179" stroke="#1f1a14" strokeWidth="2" />
              <circle r="148" fill="#f7d490" stroke="#1f1a14" strokeWidth="1.5" />

              {Array.from({ length: totalSegments }).map((_, i) => {
                const a1 = (i / totalSegments) * Math.PI * 2 - Math.PI / 2;
                const a2 = ((i + 1) / totalSegments) * Math.PI * 2 - Math.PI / 2;
                const r = 145;
                const x1 = Math.cos(a1) * r, y1 = Math.sin(a1) * r;
                const x2 = Math.cos(a2) * r, y2 = Math.sin(a2) * r;
                const visible = i < revealedSegments;
                const mx = ((Math.cos(a1) + Math.cos(a2)) / 2) * (r * 0.55);
                const my = ((Math.sin(a1) + Math.sin(a2)) / 2) * (r * 0.55);
                return (
                  <g key={i} className={`os-segment ${visible ? 'in' : ''}`} style={{ transitionDelay: `${i * 60}ms` }}>
                    <path
                      d={`M 0 0 L ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2} Z`}
                      fill="#f4a445" stroke="#1f1a14" strokeWidth="1.5"
                    />
                    <ellipse cx={mx} cy={my} rx="14" ry="6"
                      transform={`rotate(${((a1 + a2) / 2) * 180 / Math.PI + 90} ${mx} ${my})`}
                      fill="rgba(255,221,160,0.55)" />
                    {i % 2 === 0 && (
                      <ellipse cx={Math.cos((a1 + a2) / 2) * 70} cy={Math.sin((a1 + a2) / 2) * 70} rx="3" ry="5"
                        transform={`rotate(${((a1 + a2) / 2) * 180 / Math.PI + 90} ${Math.cos((a1 + a2) / 2) * 70} ${Math.sin((a1 + a2) / 2) * 70})`}
                        fill="#f4ead6" stroke="#a87a3a" strokeWidth="0.8" />
                    )}
                  </g>
                );
              })}

              <g className={`os-seed ${open >= layers.length - 1 ? 'in' : ''}`}>
                <circle r="10" fill="#f4c179" stroke="#1f1a14" strokeWidth="1.2" />
                <circle r="3" fill="#1f1a14" />
              </g>

              {open >= 3 && (
                <>
                  <g className="os-juice">
                    <ellipse cx="-130" cy="135" rx="4" ry="6" fill="#e8762a" />
                    <ellipse cx="-100" cy="165" rx="3" ry="4" fill="#f4c179" />
                    <ellipse cx="135" cy="140" rx="4" ry="6" fill="#e8762a" />
                    <ellipse cx="105" cy="170" rx="3" ry="4" fill="#f4c179" />
                  </g>

                  <g className="os-glass" transform="translate(180, 110)">
                    <path d="M -28 -50 L 28 -50 L 24 50 Q 0 56 -24 50 Z"
                      fill="rgba(255,255,255,0.35)" stroke="#1f1a14" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M -27 -38 L 27 -38 L 24 50 Q 0 56 -24 50 Z" fill="#f4a445" />
                    <ellipse cx="0" cy="-38" rx="27" ry="5" fill="#e8762a" stroke="#1f1a14" strokeWidth="1.5" />
                    <circle cx="-12" cy="-39" r="3" fill="#fff5e0" stroke="#1f1a14" strokeWidth="0.8" />
                    <circle cx="-4" cy="-41" r="2" fill="#fff5e0" stroke="#1f1a14" strokeWidth="0.8" />
                    <circle cx="10" cy="-40" r="2.5" fill="#fff5e0" stroke="#1f1a14" strokeWidth="0.8" />
                    <path d="M -22 -40 L -20 40" stroke="rgba(255,255,255,0.6)" strokeWidth="3" strokeLinecap="round" />
                    <path d="M 8 -54 L 22 -76" stroke="#c54a2a" strokeWidth="5" strokeLinecap="round" />
                    <path d="M 8 -54 L 22 -76" stroke="#fbf6ec" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 3" />
                    <g transform="translate(-22, -42)">
                      <path d="M 0 0 A 14 14 0 0 1 -14 -14 L 0 0 Z" fill="#f4c179" stroke="#1f1a14" strokeWidth="1.2" />
                      <path d="M 0 0 A 14 14 0 0 1 -14 -14" fill="none" stroke="#e8762a" strokeWidth="2.5" />
                    </g>
                  </g>
                </>
              )}
            </svg>

            <div className="os-badge">
              <div className="os-badge-num">{layers[open].n}</div>
              <div>
                <div className="os-badge-title">{layers[open].title}</div>
                <div className="os-badge-sub">{layers[open].sub}</div>
              </div>
            </div>
          </div>

          <div className="recipe-card">
            <div className="rc-head">
              <div className="rc-title">{t.recipe_card_title}</div>
              <div className="rc-meta">{t.recipe_card_meta}</div>
            </div>
            <ol className="rc-list">
              {layers.map((l, i) => (
                <li
                  key={i}
                  className={`rc-step ${i === open ? 'open' : ''} ${i < open ? 'done' : ''}`}
                  onClick={() => setOpen(i)}
                >
                  <div className="rc-step-head">
                    <div className="rc-num">{l.n}</div>
                    <div className="rc-titles">
                      <div className="rc-title-main">{l.title}</div>
                      <div className="rc-title-sub">{l.sub}</div>
                    </div>
                    <div className="rc-time">{l.mins}</div>
                  </div>
                  <div className="rc-desc">{l.desc}</div>
                </li>
              ))}
            </ol>
            <div className="rc-progress">
              {layers.map((_, i) => (
                <button
                  key={i}
                  className={`rc-dot ${i === open ? 'on' : ''} ${i < open ? 'past' : ''}`}
                  onClick={() => setOpen(i)}
                  aria-label={`Step ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
