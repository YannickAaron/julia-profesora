import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const ssrEntry = path.join(ssrDir, 'entry-server.js');
const { render } = await import(pathToFileURL(ssrEntry).href);

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

const routes = [
  '/en',
  '/es',
  '/de',
  '/en/book',
  '/es/book',
  '/de/book',
];

for (const url of routes) {
  const { html, helmet } = render(url);

  const headInjection = [
    helmet.title.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
  ]
    .filter(Boolean)
    .join('\n    ');

  const htmlAttrs = helmet.htmlAttributes.toString();

  let out = template
    .replace(/<html\s+lang="en">/, `<html ${htmlAttrs}>`)
    .replace(
      /<title>[^<]*<\/title>/,
      ''
    )
    .replace(
      /<meta name="description"[^/]*\/>/,
      ''
    )
    .replace(
      '<!--app-head-->',
      headInjection
    )
    .replace(
      '<div id="root"></div>',
      `<div id="root">${html}</div>`
    );

  if (!out.includes(headInjection)) {
    out = out.replace('</head>', `    ${headInjection}\n  </head>`);
  }

  const outPath =
    url === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, url.replace(/^\//, ''), 'index.html');

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, out);
  console.log(`prerendered ${url} → ${path.relative(root, outPath)}`);
}

const langRedirect = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Julia · Online Spanish Teacher</title>
    <meta http-equiv="refresh" content="0; url=/en" />
    <link rel="canonical" href="https://www.julia-profesora.com/en" />
    <meta name="robots" content="noindex" />
  </head>
  <body>
    <script>
      (function () {
        try {
          var saved = localStorage.getItem('julia_lang');
          var langs = ['en', 'es', 'de'];
          var lang = langs.indexOf(saved) >= 0
            ? saved
            : (navigator.language || 'en').slice(0, 2).toLowerCase();
          if (langs.indexOf(lang) < 0) lang = 'en';
          var rest = location.pathname === '/book' ? '/book' : '';
          location.replace('/' + lang + rest + location.search + location.hash);
        } catch (e) {
          location.replace('/en');
        }
      })();
    </script>
    <p>Redirecting to <a href="/en">/en</a>...</p>
  </body>
</html>
`;

fs.writeFileSync(path.join(distDir, 'index.html'), langRedirect);
fs.mkdirSync(path.join(distDir, 'book'), { recursive: true });
fs.writeFileSync(
  path.join(distDir, 'book', 'index.html'),
  langRedirect.replace(/url=\/en/g, 'url=/en/book').replace(/href="\/en"/g, 'href="/en/book"')
);
console.log('wrote root / and /book lang-redirect shells');

fs.rmSync(ssrDir, { recursive: true, force: true });
console.log('cleaned dist-ssr');
