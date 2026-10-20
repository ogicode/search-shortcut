const style = document.createElement('style');
style.textContent = `
  ytd-watch-flexy #comments,
  ytd-watch-flexy #secondary,
  .ytp-endscreen-content,
  .ytp-ce-element { display: none !important; }
`;
document.documentElement.appendChild(style);