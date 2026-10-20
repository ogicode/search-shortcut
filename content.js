const SHORTCUT_KEY = 'm';

document.addEventListener('keydown', e => {
  if (!(e.ctrlKey && e.key === SHORTCUT_KEY)) return;
  const host = location.hostname;

  if (host.includes('youtube.com')) {
    const s = document.querySelector('input[name="search_query"]');
    if (!s) return;
    e.preventDefault();
    s.focus();
    s.select();
  }

  if (host === 'github.com') {
    e.preventDefault();
    document.body.dispatchEvent(new KeyboardEvent('keydown', {
      key: '/',
      code: 'Slash',
      bubbles: true
    }));
  }

  if (host === 'keep.google.com') {
    const s = document.querySelector('header input[type="text"]');
    if (!s) return;
    e.preventDefault();
    s.focus();
    s.select();
  }
}, true);