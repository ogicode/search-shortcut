document.addEventListener('keydown', e => {
  if (!(e.ctrlKey && e.key === 'm')) return;
  const host = location.hostname;

  if (host.includes('youtube.com')) {
    const s = document.querySelector('input[name="search_query"]');
    if (!s) return;
    e.preventDefault();
    s.focus();
    s.select();
  }

  if (host === 'github.com') {
    const btn = document.querySelector('.header-search-button, button[data-target="qbsearch-input.inputButton"]');
    if (!btn) return;
    e.preventDefault();
    btn.click();
    setTimeout(() => {
      const s = document.querySelector('#query-builder-test');
      if (s) s.select();
    }, 50);
  }

  if (host === 'keep.google.com') {
    const s = document.querySelector('header input[type="text"]');
    if (!s) return;
    e.preventDefault();
    s.focus();
    s.select();
  }
}, true);