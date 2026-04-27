import type { Lang } from '../i18n';

interface LangSwitchProps {
  lang: Lang;
  onChange: (l: Lang) => void;
}

export function LangSwitch({ lang, onChange }: LangSwitchProps) {
  return (
    <div className="lang-switch" role="group" aria-label="Language">
      {(['es', 'en', 'de'] as Lang[]).map((l) => (
        <button key={l} className={lang === l ? 'on' : ''} onClick={() => onChange(l)}>
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
