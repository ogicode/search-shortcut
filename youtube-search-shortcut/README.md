# Search Shortcut

Chrome extension. Press **Ctrl+M** to jump to the search bar on:

- YouTube (old query selected)
- GitHub
- Google Keep

## Install

1. Open `chrome://extensions`
2. Turn on **Developer mode**
3. Click **Load unpacked** and select this folder

## Change the shortcut

Change `SHORTCUT_KEY` at the top of `content.js`, e.g. `'i'` for Ctrl+I, then click reload on the extension.

Avoid `'s'`: Ctrl+S is the browser's Save page shortcut.

## Add a site

1. Add the URL to `matches` in `manifest.json`
2. Add a block for its hostname in `content.js`
3. Reload the extension