import { Reveal } from '../Reveal';
import { HandUnderline } from '../HandUnderline';
import type { T } from '../../i18n';

export function Testimonials({ t }: { t: T }) {
  return (
    <section className="bk bk-paper2">
      <div className="wrap">
        <Reveal>
          <div className="section-kicker">{t.test_kicker}</div>
          <h2 className="section-title" style={{ maxWidth: '100%' }}>
            <HandUnderline>{t.cred_title_1.replace('—', '').trim()}</HandUnderline>
          </h2>
        </Reveal>
        <div className="tests">
          {t.testimonials.map((q, i) => (
            <Reveal key={i} delay={i + 1}>
              <div className="test-card">
                <div className="test-q">{q.q}</div>
                <div className="test-meta">
                  <span className="test-avatar" />
                  <span>
                    — {q.name},{' '}
                    <span style={{ color: 'var(--muted)' }}>{q.loc}</span>
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
