document.addEventListener('keydown', e => {
  if (e.ctrlKey && e.key === 'm') {
    e.preventDefault();
    const s = document.querySelector('input[name="search_query"]');
    s.focus();
    s.select();
  }
}, true);
