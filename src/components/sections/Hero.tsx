import juliaImg from '../../assets/julia.webp';
import { FallingOranges } from '../FallingOranges';
import { HandUnderline } from '../HandUnderline';
import { Reveal } from '../Reveal';
import { EleBadge } from '../EleBadge';
import type { T } from '../../i18n';

// TODO: replace assets/julia.webp with a real photo of Julia
export function Hero({ t }: { t: T }) {
  return (
    <section className="hero">
      <FallingOranges count={5} />
      <div className="wrap">
        <div className="hero-grid">
          <Reveal>
            <div className="hero-kicker">{t.hero_kicker}</div>
            <h1 className="hero-title">
              <span className="hand-bit">{t.hero_title_1}</span>
              <br />
              <HandUnderline>{t.hero_title_2}</HandUnderline>
              <br />
              <span className="accent">{t.hero_title_3}</span>
            </h1>
            <p className="hero-sub">{t.hero_sub}</p>
            <div className="hero-actions">
              <a href="/book" className="btn btn-primary btn-lg">
                📅 {t.cta_free}
              </a>
              <a href="#classes" className="btn btn-ghost btn-lg">
                {t.nav.classes} →
              </a>
            </div>
            <div className="hero-pills">
              <span className="pill">{t.hero_pill_1}</span>
              <span className="pill">{t.hero_pill_2}</span>
              <span className="pill">{t.hero_pill_3}</span>
              <span className="pill">{t.hero_pill_4}</span>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <div className="hero-photo-wrap">
              <div className="hero-photo">
                <div className="polaroid" style={{ position: 'relative' }}>
                  <img src={juliaImg} alt="Julia" />
                  <div className="polaroid-caption">{t.story_caption_1}</div>
                  <div className="polaroid-stamp" style={{ top: -16, left: -22 }}>
                    ★ +4 años ★
                  </div>
                </div>
                <EleBadge />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
