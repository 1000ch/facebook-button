# facebook-button ![GitHub Actions Status](https://github.com/1000ch/facebook-button/workflows/test/badge.svg?branch=master) [![devDependency Status](https://david-dm.org/1000ch/facebook-button/dev-status.svg)](https://david-dm.org/1000ch/facebook-button?type=dev)

Facebook button as Web Components.

## Install

Using npm:

```bash
$ npm install facebook-button
```

## Usage

Import and register scripts.

```html
<script type="module">
import { FacebookLikeButton } from 'https://unpkg.com/facebook-button';

customElements.define('facebook-like-button', FacebookLikeButton);
</script>
```

Just put `<facebook-like-button>` element in your HTML.

```html
<facebook-like-button></facebook-like-button>
```

- `href`: string, URL to like or share
- `layout`: string, must be either **standard** or **box_count**
- `width`: number, width of `facebook-like-button`
- `height`: number, height of `facebook-like-button`
- `colorscheme`: string, `light` or `dark`
- `action`: string, `like` or `recommend`
## License

[MIT](https://1000ch.mit-license.org) © [Shogo Sensui](https://github.com/1000ch)
