# Search Shortcut

Chrome extension:

- **Ctrl+M** jumps to the search bar on YouTube, GitHub and Google Keep
- Hides YouTube comments and recommendations (`youtube-hide.js`)

## Install

1. Open `chrome://extensions`
2. Turn on **Developer mode**
3. **Load unpacked** and select this folder

## Customize

- **Shortcut**: change `SHORTCUT_KEY` in `content.js` (avoid `'s'`, that's Save page)
- **New site**: add its URL to `manifest.json` and a hostname block to `content.js`
- **Keep YouTube comments**: comment out the `youtube-hide.js` block in `manifest.json` with `//`

Reload the extension after any change.