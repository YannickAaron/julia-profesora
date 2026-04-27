import { LogoLockup } from '../LogoLockup';
import { DeadLink } from '../DeadLink';
import { WHATSAPP_URL } from '../../config';
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
            {/* TODO: verify email address hola@juliaprofesora.com is correct */}
            <DeadLink
              href="mailto:hola@juliaprofesora.com"
              todo="Verify this email address is correct"
            >
              hola@juliaprofesora.com
            </DeadLink>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              WhatsApp →
            </a>
          </div>
          <div>
            <h4>{t.footer_follow}</h4>
            <DeadLink href="#" todo="Add real Instagram URL">
              Instagram
            </DeadLink>
            <DeadLink href="#" todo="Add real TikTok URL">
              TikTok
            </DeadLink>
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
