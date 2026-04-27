import { Logo } from './Logo';
import { LangSwitch } from './LangSwitch';
import type { Lang, T } from '../i18n';

interface NavProps {
  lang: Lang;
  onLang: (l: Lang) => void;
  t: T;
}

export function Nav({ lang, onLang, t }: NavProps) {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="/" className="logo">
          <span className="logo-mark">
            <Logo size={38} />
          </span>
          <span>julia</span>
        </a>
        <div className="nav-links">
          <a href="#about">{t.nav.about}</a>
          <a href="#classes">{t.nav.classes}</a>
          <a href="#pricing">{t.nav.pricing}</a>
          <a href="#faq">{t.nav.faq}</a>
        </div>
        <div className="nav-right">
          <LangSwitch lang={lang} onChange={onLang} />
          <a href="/book" className="btn btn-primary btn-sm">
            {t.cta_book}
          </a>
        </div>
      </div>
    </nav>
  );
}
