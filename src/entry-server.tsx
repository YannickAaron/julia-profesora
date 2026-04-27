import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Routes, Route, useParams } from 'react-router-dom';
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async';
import App from './App';
import BookPage from './BookPage';
import NotFound from './components/NotFound';
import { isLang, type Lang } from './i18n';

function LangRoute({ element }: { element: (lang: Lang) => JSX.Element }) {
  const { lang } = useParams<{ lang: string }>();
  if (!isLang(lang)) return <NotFound />;
  return element(lang);
}

export interface RenderResult {
  html: string;
  helmet: HelmetServerState;
}

export function render(url: string): RenderResult {
  const helmetContext: { helmet?: HelmetServerState } = {};
  const html = renderToString(
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <Routes>
            <Route path="/:lang" element={<LangRoute element={(l) => <App lang={l} />} />} />
            <Route
              path="/:lang/book"
              element={<LangRoute element={(l) => <BookPage lang={l} />} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>
  );
  return { html, helmet: helmetContext.helmet! };
}
