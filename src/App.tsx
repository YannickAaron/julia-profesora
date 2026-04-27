import { useState } from 'react';
import { I18N, detectLang, setLang } from './i18n';
import type { Lang } from './i18n';
import { Nav } from './components/Nav';
import { Hero } from './components/sections/Hero';
import { Credentials } from './components/sections/Credentials';
import { Levels } from './components/sections/Levels';
import { Certifications } from './components/sections/Certifications';
import { Story } from './components/sections/Story';
import { FirstClass } from './components/sections/FirstClass';
import { Pricing } from './components/sections/Pricing';
import { Testimonials } from './components/sections/Testimonials';
import { Faq } from './components/sections/Faq';
import { FinalCta } from './components/sections/FinalCta';
import { Footer } from './components/sections/Footer';

export default function App() {
  const [lang, setLangState] = useState<Lang>(() => detectLang());
  const t = I18N[lang];

  function onLang(l: Lang) {
    setLangState(l);
    setLang(l);
  }

  return (
    <>
      <Nav lang={lang} onLang={onLang} t={t} />
      <Hero t={t} />
      <Credentials t={t} />
      <Levels t={t} />
      <Certifications t={t} />
      <Story t={t} />
      <FirstClass t={t} />
      <Pricing t={t} />
      <Testimonials t={t} />
      <Faq t={t} />
      <FinalCta t={t} />
      <Footer t={t} />
    </>
  );
}
