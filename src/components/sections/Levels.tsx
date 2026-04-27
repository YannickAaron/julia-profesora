import { Reveal } from '../Reveal';
import { HandUnderline } from '../HandUnderline';
import type { T } from '../../i18n';

export function Levels({ t }: { t: T }) {
  return (
    <section className="bk" id="classes">
      <div className="wrap">
        <Reveal>
          <div className="section-kicker">{t.levels_kicker}</div>
          <h2 className="section-title">
            {t.levels_title_1}{' '}
            <HandUnderline>
              <span className="hand-bit">{t.levels_title_2}</span>
            </HandUnderline>
            <br />
            {t.levels_title_3}
          </h2>
          <p className="section-intro">{t.levels_intro}</p>
        </Reveal>
        <div className="levels">
          {t.levels.map((l, i) => (
            <Reveal key={i} delay={(i % 2) + 1}>
              <div className="level-card">
                <div className="level-tag">{l.tag}</div>
                <div className="level-title">{l.title}</div>
                <div className="level-desc">{l.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
