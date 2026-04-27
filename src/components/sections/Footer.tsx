import { LogoLockup } from '../LogoLockup';
import { DeadLink } from '../DeadLink';
import { WHATSAPP_URL, EMAIL } from '../../config';
import type { T } from '../../i18n';

export function Footer({ t }: { t: T }) {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div style={{ marginBottom: 10 }}>
              <LogoLockup width={200} />
            </div>
            <div style={{ fontSize: 14, color: 'var(--ink-soft)', maxWidth: 280 }}>
              {t.footer_tag}
            </div>
          </div>
          <div>
            <h4>{t.footer_contact}</h4>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              WhatsApp →
            </a>
          </div>
          <div>
            <h4>{t.footer_legal}</h4>
            <DeadLink href="#" todo="Create privacy policy page at /privacy">
              {t.footer_priv}
            </DeadLink>
            <DeadLink href="#" todo="Create terms page at /terms">
              {t.footer_terms}
            </DeadLink>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Julia · ELE</span>
          <span>Made with ☀ in Valencia</span>
        </div>
      </div>
    </footer>
  );
}
