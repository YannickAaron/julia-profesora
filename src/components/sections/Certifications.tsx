import { Reveal } from '../Reveal';
import { CERT_LOGOS } from '../CertLogos';
import type { T } from '../../i18n';

export function Certifications({ t }: { t: T }) {
  return (
    <section className="bk bk-paper2" id="exams">
      <div className="wrap">
        <Reveal>
          <div className="section-kicker">{t.cert_kicker}</div>
          <h2 className="section-title">
            {t.cert_title_1}<br />
            <span className="hand-bit">{t.cert_title_2}</span>
          </h2>
          <p className="section-intro">{t.cert_intro}</p>
        </Reveal>
        <div className="certs">
          {t.certs.map((c, i) => {
            const L = CERT_LOGOS[c.code];
            return (
              <Reveal key={c.code} delay={i + 1}>
                <div className="cert-card">
                  <div className="cert-logo">{L && <L />}</div>
                  <div className="cert-org">{c.org}</div>
                  <div className="cert-desc">{c.desc}</div>
                  <dl className="cert-meta">
                    <dt>{t.cert_for_label}</dt>
                    <dd>{c.levels}</dd>
                    <dt>{t.cert_format_label}</dt>
                    <dd>{c.format}</dd>
                  </dl>
                  <div className="cert-stamp">
                    <span>★</span> {t.cert_kicker.toUpperCase()}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
        <div className="cert-disclaimer">{t.cert_disclaimer}</div>
      </div>
    </section>
  );
}
