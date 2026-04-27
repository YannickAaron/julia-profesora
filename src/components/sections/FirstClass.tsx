import { Reveal } from '../Reveal';
import type { T } from '../../i18n';

export function FirstClass({ t }: { t: T }) {
  return (
    <section className="bk bk-dark">
      <div className="wrap">
        <div className="letter-grid">
          <Reveal>
            <div className="section-kicker">{t.first_kicker}</div>
            <h2 className="section-title">{t.first_title}</h2>
            <p style={{ fontSize: 16, opacity: 0.75, maxWidth: 320 }}>{t.bk_intro}</p>
            <a href="/book" className="btn btn-primary" style={{ marginTop: 20 }}>
              📅 {t.cta_free}
            </a>
          </Reveal>
          <Reveal delay={1}>
            <div className="letter-card">
              <div className="open">{t.first_letter_open}</div>
              <div className="body">{t.first_letter_body}</div>
              <div className="sign">{t.first_letter_sign}</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
