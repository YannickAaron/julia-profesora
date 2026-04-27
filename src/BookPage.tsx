import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { I18N, isLang } from './i18n';
import type { Lang } from './i18n';
import { Nav } from './components/Nav';
import { Seo } from './components/Seo';
import { Footer } from './components/sections/Footer';
import { DeadLink } from './components/DeadLink';
import { WHATSAPP_URL, EMAIL } from './config';

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// Set FREE_SLOTS = [] when no slots are available. Add dates (1-31) to open bookings.
const FREE_SLOTS: number[] = [];
const MONTH_NAMES = ['May 2026', 'Jun 2026', 'Jul 2026'];
const DAY_HEADERS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
const TIMES = ['10:00', '11:30', '14:00', '17:00', '18:30'];

interface FormState {
  name: string;
  email: string;
  level: string;
  goal: string;
  when: string;
  msg: string;
}

export default function BookPage({ lang }: { lang: Lang }) {
  const t = I18N[lang];
  const navigate = useNavigate();
  const location = useLocation();

  function onLang(l: Lang) {
    if (!isLang(l)) return;
    try {
      localStorage.setItem('julia_lang', l);
    } catch {
      // ignore
    }
    const rest = location.pathname.replace(/^\/(en|es|de)/, '');
    navigate(`/${l}${rest || ''}`);
  }

  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    level: '',
    goal: '',
    when: '',
    msg: '',
  });
  const [day, setDay] = useState<number | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [month, setMonth] = useState(0);
  const [done, setDone] = useState(false);
  const hasSlots = FREE_SLOTS.length > 0;

  function setF<K extends keyof FormState>(k: K, v: string) {
    setForm({ ...form, [k]: v });
  }

  if (done) {
    return (
      <div className="bk-page">
        <Seo lang={lang} page="book" />
        <Nav lang={lang} onLang={onLang} t={t} />
        <div className="wrap-narrow" style={{ paddingTop: 40 }}>
          <div className="bk-card success">
            <div className="success-mark">✓</div>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 48, margin: '0 0 10px' }}>
              {t.bk_done_title}
            </h1>
            <p style={{ fontSize: 17, color: 'var(--ink-soft)', maxWidth: 460, margin: '0 auto 24px' }}>
              {t.bk_done_sub}
            </p>
            <a href={`/${lang}`} className="btn btn-primary">
              {t.bk_back}
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bk-page">
      <Seo lang={lang} page="book" />
      <Nav lang={lang} onLang={onLang} t={t} />
      <div className="wrap-narrow" style={{ paddingTop: 40 }}>
        <a href={`/${lang}`} className="bk-back">
          {t.bk_back}
        </a>
        <h1 className="bk-title">
          {t.bk_title_1} <span className="hand-bit">{t.bk_title_2}</span>
        </h1>
        <p className="bk-intro">{t.bk_intro}</p>

        <div className="bk-whatsapp-bar">
          <span>{t.bk_whatsapp_bar}</span>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bk-whatsapp-btn"
          >
            <WhatsAppIcon />
            {t.bk_whatsapp_btn}
          </a>
        </div>

        <div className="bk-steps">
          <div className={`bk-step ${step === 0 ? 'active' : step > 0 ? 'done' : ''}`}>
            {t.bk_step1}
          </div>
          <div className={`bk-step ${step === 1 ? 'active' : step > 1 ? 'done' : ''}`}>
            {t.bk_step2}
          </div>
          <div className={`bk-step ${step === 2 ? 'active' : ''}`}>{t.bk_step3}</div>
        </div>

        <div className="bk-card">
          {step === 0 && (
            <div>
              <div className="bk-grid">
                <div>
                  <div className="field">
                    <label>{t.bk_field_name}</label>
                    <input
                      value={form.name}
                      onChange={(e) => setF('name', e.target.value)}
                      placeholder="Anna"
                    />
                  </div>
                  <div className="field">
                    <label>{t.bk_field_email}</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setF('email', e.target.value)}
                      placeholder="anna@email.com"
                    />
                  </div>
                  <div className="field">
                    <label>{t.bk_field_level}</label>
                    <div className="chips">
                      {t.bk_levels.map((l) => (
                        <div
                          key={l}
                          className={`chip ${form.level === l ? 'on' : ''}`}
                          onClick={() => setF('level', l)}
                        >
                          {l}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="field">
                    <label>{t.bk_field_goal}</label>
                    <div className="chips">
                      {t.bk_goals.map((g) => (
                        <div
                          key={g}
                          className={`chip ${form.goal === g ? 'on' : ''}`}
                          onClick={() => setF('goal', g)}
                        >
                          {g}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="field">
                    <label>{t.bk_field_when}</label>
                    <input
                      value={form.when}
                      onChange={(e) => setF('when', e.target.value)}
                      placeholder={t.bk_when_ph}
                    />
                  </div>
                  <div className="field">
                    <label>{t.bk_field_msg}</label>
                    <textarea
                      value={form.msg}
                      onChange={(e) => setF('msg', e.target.value)}
                      placeholder={t.bk_msg_ph}
                    />
                  </div>
                </div>
              </div>
              <div className="bk-actions">
                <span />
                <button
                  className="btn btn-primary btn-lg"
                  disabled={!form.name || !form.email || !form.level}
                  onClick={() => setStep(1)}
                >
                  {t.bk_step2} →
                </button>
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <div className="cal">
                <div className="cal-head">
                  <h4>{MONTH_NAMES[month]}</h4>
                  <div className="cal-nav">
                    <button onClick={() => setMonth(Math.max(0, month - 1))}>‹</button>
                    <button onClick={() => setMonth(Math.min(2, month + 1))}>›</button>
                  </div>
                </div>

                {hasSlots ? (
                  <>
                    <div className="cal-grid">
                      {DAY_HEADERS.map((d, i) => (
                        <div key={i} className="dh">{d}</div>
                      ))}
                      {Array.from({ length: 35 }).map((_, i) => {
                        const n = i - 2;
                        if (n <= 0 || n > 31) return <div key={i} className="cal-day empty" />;
                        const isFree = FREE_SLOTS.includes(n);
                        const sel = day === n;
                        return (
                          <div
                            key={i}
                            className={`cal-day ${isFree ? 'free' : 'disabled'} ${sel ? 'sel' : ''}`}
                            onClick={() => isFree && setDay(n)}
                          >
                            {n}
                          </div>
                        );
                      })}
                    </div>
                    {day && (
                      <div className="times">
                        {TIMES.map((tm) => (
                          <button
                            key={tm}
                            className={`time-pill ${time === tm ? 'on' : ''}`}
                            onClick={() => setTime(tm)}
                          >
                            {tm}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <div style={{ padding: '20px 4px 8px', textAlign: 'center' }}>
                    <p style={{ fontSize: 14, color: 'var(--ink-soft)', marginBottom: 16 }}>
                      {t.book_no_slots}
                    </p>
                    <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 14 }}>
                      {t.book_contact_instead}
                    </p>
                    <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bk-whatsapp-btn"
                      >
                        <WhatsAppIcon />
                        {t.book_whatsapp}
                      </a>
                      <DeadLink
                        href={`mailto:${EMAIL}`}
                        todo="Verify email address is correct"
                        className="btn"
                      >
                        ✉ {t.book_email_cta}
                      </DeadLink>
                    </div>
                  </div>
                )}
              </div>
              <div className="bk-actions">
                <button className="btn btn-ghost" onClick={() => setStep(0)}>
                  ← {t.bk_step1}
                </button>
                {hasSlots && (
                  <button
                    className="btn btn-primary btn-lg"
                    disabled={!day || !time}
                    onClick={() => setStep(2)}
                  >
                    {t.bk_step3} →
                  </button>
                )}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <dl className="confirm-summary">
                <dt>{t.bk_field_name}</dt>
                <dd>{form.name}</dd>
                <dt>{t.bk_field_email}</dt>
                <dd>{form.email}</dd>
                <dt>{t.bk_field_level}</dt>
                <dd>{form.level}</dd>
                {form.goal && (
                  <>
                    <dt>{t.bk_field_goal}</dt>
                    <dd>{form.goal}</dd>
                  </>
                )}
                <dt>{t.bk_calendar}</dt>
                <dd>
                  {MONTH_NAMES[month]} · {day} · {time}
                </dd>
                {form.when && (
                  <>
                    <dt>{t.bk_field_when}</dt>
                    <dd>{form.when}</dd>
                  </>
                )}
                {form.msg && (
                  <>
                    <dt>{t.bk_field_msg}</dt>
                    <dd>{form.msg}</dd>
                  </>
                )}
              </dl>
              <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 20 }}>
                {t.bk_disclaimer}
              </p>
              <div className="bk-actions">
                <button className="btn btn-ghost" onClick={() => setStep(1)}>
                  ← {t.bk_step2}
                </button>
                <button className="btn btn-primary btn-lg" onClick={() => setDone(true)}>
                  ✓ {t.bk_confirm}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer t={t} />
    </div>
  );
}

