import { FallingOranges } from '../FallingOranges';
import { Reveal } from '../Reveal';
import type { T } from '../../i18n';

export function FinalCta({ t }: { t: T }) {
  return (
    <section className="bk bk-dark final-cta">
      <FallingOranges count={3} />
      <div className="wrap">
        <Reveal>
          <h2 className="final-cta-title">
            <span className="hand-bit">{t.cta_title_1}</span>
          </h2>
          <p className="final-cta-sub">{t.cta_sub}</p>
          <a href="/book" className="btn btn-primary btn-lg">
            📅 {t.cta_free}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
