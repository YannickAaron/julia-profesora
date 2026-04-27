import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './styles/global.css';
import App from './App';
import BookPage from './BookPage';
import NotFound from './components/NotFound';
import { detectLang, isLang, type Lang } from './i18n';

function LangRoute({ element }: { element: (lang: Lang) => JSX.Element }) {
  const { lang } = useParams<{ lang: string }>();
  if (!isLang(lang)) return <NotFound />;
  return element(lang);
}

function RootRedirect() {
  const lang = detectLang();
  return <Navigate to={`/${lang}`} replace />;
}

function BookRedirect() {
  const lang = detectLang();
  return <Navigate to={`/${lang}/book`} replace />;
}

const Root = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootRedirect />} />
          <Route path="/book" element={<BookRedirect />} />
          <Route path="/:lang" element={<LangRoute element={(l) => <App lang={l} />} />} />
          <Route
            path="/:lang/book"
            element={<LangRoute element={(l) => <BookPage lang={l} />} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);

const container = document.getElementById('root')!;
if (container.hasChildNodes()) {
  hydrateRoot(container, Root);
} else {
  createRoot(container).render(Root);
}
