import { Reveal } from '../Reveal';
import type { T } from '../../i18n';

export function Credentials({ t }: { t: T }) {
  const cards = [
    { label: t.cred_1_label, title: t.cred_1_t, desc: t.cred_1_d, n: '01' },
    { label: t.cred_2_label, title: t.cred_2_t, desc: t.cred_2_d, n: '02' },
    { label: t.cred_3_label, title: t.cred_3_t, desc: t.cred_3_d, n: '03' },
  ];

  return (
    <section className="bk bk-paper2" id="about">
      <div className="wrap">
        <Reveal>
          <div className="section-kicker">{t.cred_kicker}</div>
          <h2 className="section-title">
            {t.cred_title_1}
            <br />
            <span className="hand-bit">{t.cred_title_2}</span>
          </h2>
          <p className="section-intro">{t.cred_intro}</p>
        </Reveal>

        <div className="creds">
          {cards.map((c, i) => (
            <Reveal key={i} delay={i + 1}>
              <div className="cred-card">
                <div className="cred-card-num">{c.n}</div>
                <div className="cred-card-label">{c.label}</div>
                <div className="cred-card-title">{c.title}</div>
                <div className="cred-card-desc">{c.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={1}>
          <div className="ele-callout">
            <div className="ele-callout-mono">ELE</div>
            <div>
              <div className="ele-callout-label">{t.ele_label}</div>
              <div className="ele-callout-title">{t.ele_title}</div>
              <p className="ele-callout-desc">{t.ele_desc}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
