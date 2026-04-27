import juliaImg from '../../assets/julia.png';
import zamoraImg from '../../assets/Zamora.webp';
import valenciaImg from '../../assets/Valencia.webp';
import { Reveal } from '../Reveal';
import type { T } from '../../i18n';

// TODO: replace placeholder polaroid images (caption_2, caption_3) with real photos
export function Story({ t }: { t: T }) {
  return (
    <section className="bk bk-paper2">
      <div className="wrap">
        <div className="story-grid">
          <Reveal>
            <div className="story-photos">
              <div
                className="polaroid"
                style={{ top: 0, left: 30, transform: 'rotate(-5deg)', width: 240 }}
              >
                <img src={juliaImg} alt="Julia" />
                <div className="polaroid-caption">{t.story_caption_1}</div>
              </div>
              <div
                className="polaroid"
                style={{ top: 80, right: 0, transform: 'rotate(4deg)', width: 220 }}
              >
<img src={valenciaImg} alt="Valencia" />
                <div className="polaroid-caption">{t.story_caption_2}</div>
              </div>
              <div
                className="polaroid"
                style={{ bottom: 0, left: 80, transform: 'rotate(-2deg)', width: 220 }}
              >
<img src={zamoraImg} alt="Zamora" />
                <div className="polaroid-caption">{t.story_caption_3}</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="section-kicker">{t.story_kicker}</div>
            <h2 className="section-title">{t.story_title}</h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.75, color: 'var(--ink-soft)', marginBottom: 18 }}>
              {t.story_p1}
            </p>
            <p style={{ fontSize: 16.5, lineHeight: 1.75, color: 'var(--ink-soft)' }}>
              {t.story_p2}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
