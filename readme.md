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
import { FacebookLikeButton, FacebookShareButton } from 'https://unpkg.com/facebook-button';

customElements.define('facebook-like-button', FacebookLikeButton);
customElements.define('facebook-share-button', FacebookShareButton);
</script>
```

Just put `<facebook-like-button>` and `<facebook-share-button>` element in your HTML.

```html
<facebook-like-button></facebook-like-button>
<facebook-share-button></facebook-share-button>
```

### `FacebooLikeButton`

- `href`: required string, URL to like or share
- `layout`: string, must be either `button_count`, `button` or `box_count`, default to `button`
- `size`: string, must be either `small` or `large`, default to `small`
- `width`: number, width of `<facebook-like-button>`
- `action`: string, `like` or `recommend`, default to `like`

### `FacebookShareButton`

- `href`: required string, URL to like or share
- `layout`: string, must be either `button_count`, `button` or `box_count`, default to `button`
- `size`: string, must be either `small` or `large`, default to `small`
- `width`: number, width of `<facebook-share-button>`
## License

[MIT](https://1000ch.mit-license.org) © [Shogo Sensui](https://github.com/1000ch)
