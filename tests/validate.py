"""Validate local links and minimal semantic invariants, without dependencies."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import re

ROOT = Path(__file__).resolve().parents[1]

class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.path, self.ids, self.links, self.errors = path, set(), [], []
        self.h1 = self.main = 0
        self.feed(path.read_text(encoding='utf-8'))

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if 'id' in a:
            if a['id'] in self.ids:
                self.errors.append(f'Duplicate ID: {a["id"]}')
            self.ids.add(a['id'])
        self.h1 += tag == 'h1'
        self.main += tag == 'main'
        if tag == 'html' and a.get('lang') != 'pt-BR':
            self.errors.append('Missing pt-BR language')
        if tag == 'img' and 'alt' not in a:
            self.errors.append('Image without alt')
        for attr in ('href', 'src'):
            if attr in a:
                self.links.append(a[attr])

pages = {p.resolve(): Page(p) for p in ROOT.rglob('*.html')}
errors = []
for path, page in pages.items():
    errors.extend(f'{path.relative_to(ROOT)}: {e}' for e in page.errors)
    if page.h1 != 1 or page.main != 1:
        errors.append(f'{path.name}: expected one h1 and one main')
    for link in page.links:
        u = urlsplit(link)
        if u.scheme or u.netloc:
            continue
        if not link or link == '#':
            errors.append(f'{path.name}: empty link')
            continue
        if u.path.startswith('/'):
            errors.append(f'{path.name}: absolute path incompatible with project subpath: {link}')
        target = (path.parent / unquote(u.path)).resolve() if u.path else path
        if target.is_dir():
            target /= 'index.html'
        if not target.exists():
            errors.append(f'{path.name}: missing {link}')
        if u.fragment and target in pages and unquote(u.fragment) not in pages[target].ids:
            errors.append(f'{path.name}: missing anchor {link}')
for css in (ROOT / 'css').glob('*.css'):
    for url in re.findall(r'url\([\'"]?([^\)\'\"]+)', css.read_text()):
        if not url.startswith(('http', 'data:')) and not (css.parent / url).exists():
            errors.append(f'{css.name}: missing asset {url}')
if errors:
    print('\n'.join(errors))
    raise SystemExit(1)
print(f'OK: {len(pages)} pages; local links, anchors, CSS assets, image alt and landmarks.')
