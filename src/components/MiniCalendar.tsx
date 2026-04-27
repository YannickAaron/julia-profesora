import { useState } from 'react';
import { DeadLink } from './DeadLink';
import { WHATSAPP_URL, EMAIL } from '../config';
import type { T } from '../i18n';

// Set free = [] when no slots are available. Add dates (1-31) to open bookings.
const FREE_SLOTS: number[] = [];
const MONTH_NAMES = ['May 2026', 'Jun 2026', 'Jul 2026'];
const DAY_HEADERS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
const TIMES = ['10:00', '11:30', '14:00', '17:00', '18:30'];

interface MiniCalendarProps {
  t: T;
}

export function MiniCalendar({ t }: MiniCalendarProps) {
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState<number | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const hasSlots = FREE_SLOTS.length > 0;

  return (
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
              const sel = n === day && month === 0;
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
              className="btn btn-primary btn-sm"
            >
              📱 {t.book_whatsapp}
            </a>
            <DeadLink
              href={`mailto:${EMAIL}`}
              todo="Verify email address is correct"
              className="btn btn-sm"
            >
              ✉ {t.book_email_cta}
            </DeadLink>
          </div>
        </div>
      )}
    </div>
  );
}
