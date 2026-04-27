import { useNavigate, useLocation } from 'react-router-dom';
import { I18N, type Lang, isLang } from './i18n';
import { Nav } from './components/Nav';
import { Seo } from './components/Seo';
import { Hero } from './components/sections/Hero';
import { Credentials } from './components/sections/Credentials';
import { Levels } from './components/sections/Levels';
import { Certifications } from './components/sections/Certifications';
import { Story } from './components/sections/Story';
import { FirstClass } from './components/sections/FirstClass';
import { HowLessonUnfolds } from './components/sections/HowLessonUnfolds';
import { Pricing } from './components/sections/Pricing';
import { Testimonials } from './components/sections/Testimonials';
import { Faq } from './components/sections/Faq';
import { FinalCta } from './components/sections/FinalCta';
import { Footer } from './components/sections/Footer';

export default function App({ lang }: { lang: Lang }) {
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
    navigate(`/${l}${rest || ''}${location.hash}`);
  }

  return (
    <>
      <Seo lang={lang} page="home" />
      <Nav lang={lang} onLang={onLang} t={t} />
      <Hero lang={lang} t={t} />
      <Credentials t={t} />
      <Levels t={t} />
      <Certifications t={t} />
      <Story t={t} />
      <FirstClass lang={lang} t={t} />
      <HowLessonUnfolds t={t} />
      <Pricing t={t} />
      <Testimonials t={t} />
      <Faq t={t} />
      <FinalCta lang={lang} t={t} />
      <Footer t={t} />
    </>
  );
}
