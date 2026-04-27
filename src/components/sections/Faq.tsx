import { useState } from 'react';
import { Reveal } from '../Reveal';
import type { T } from '../../i18n';

export function Faq({ t }: { t: T }) {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="bk" id="faq">
      <div className="wrap-narrow">
        <Reveal>
          <div className="section-kicker">{t.faq_kicker}</div>
          <h2 className="section-title">{t.faq_title}</h2>
        </Reveal>
        <div className="faq-list">
          {t.faq.map((item, i) => (
            <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
              <div className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{item.q}</span>
                <span className="plus">+</span>
              </div>
              <div className="faq-a">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
