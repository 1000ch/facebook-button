# facebook-button [![devDependency Status](https://david-dm.org/1000ch/facebook-button/dev-status.svg)](https://david-dm.org/1000ch/facebook-button?type=dev)

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
import { FacebookButton } from 'https://unpkg.com/facebook-button';

customElements.define('facebook-button', FacebookButton);
</script>
```

Just put `<facebook-button>` element in your HTML.

```html
<facebook-button></facebook-button>
```

- `layout` **standard** / **box_count**
- `width`
- `height`
- `href` URL to like or share.

## License

[MIT](https://1000ch.mit-license.org) © [Shogo Sensui](https://github.com/1000ch)