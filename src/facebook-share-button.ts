export class FacebookShareButton extends HTMLElement {
  static get observedAttributes(): string[] {
    return [
      'href',
      'layout',
      'size',
      'width'
    ];
  }

  static get template(): string {
    return `
      <style>
        :host {
          display: inline-block;
          border: none;
          overflow: hidden;
        }
      </style>
      <iframe scrolling="no" frameborder="0" allowtransparency="true"></iframe>
    `;
  }

  constructor() {
    super();

    this.attachShadow({
      mode: 'open'
    }).innerHTML = FacebookShareButton.template;
  }

  connectedCallback(): void {
    const iframe = this.shadowRoot?.querySelector('iframe');
    if (!iframe) {
      return;
    }

    iframe.width = this.width || this.defaultWidth;
    iframe.height = this.defaultHeight;
    iframe.src = this.inlineFrameSource;
  }

  attributeChangedCallback(attributeName: string, oldValue: string, newValue: string): void {
    const iframe = this.shadowRoot?.querySelector('iframe');
    if (!iframe) {
      return;
    }

    switch (attributeName) {
      case 'width':
        iframe.width = newValue || this.defaultWidth;
        break;
      default:
        iframe.height = this.defaultHeight;
        iframe.src = this.inlineFrameSource;
        break;
    }
  }

  get href(): string | null {
    return this.getAttribute('href');
  }

  set href(value: string | null) {
    if (value === null || value === undefined) {
      this.removeAttribute('href');
    } else {
      this.setAttribute('href', value);
    }
  }

  get layout(): string | null {
    return this.getAttribute('layout') || 'button';
  }

  set layout(value: string | null) {
    if (value === null || value === undefined) {
      this.removeAttribute('layout');
    } else {
      this.setAttribute('layout', value);
    }
  }

  get size(): string | null {
    return this.getAttribute('size') || 'small';
  }

  set size(value: string | null) {
    if (value === null || value === undefined) {
      this.removeAttribute('size')
    } else {
      this.setAttribute('size', value);
    }
  }

  get width(): string | null {
    return this.getAttribute('width');
  }

  set width(value: string | null) {
    if (value === null || value === undefined) {
      this.removeAttribute('width');
    } else {
      this.setAttribute('width', value);
    }
  }

  get defaultWidth(): string {
    if (this.layout === 'button' || this.layout === 'box_count') {
      return this.size !== 'large' ? '67' : '76';
    } else if (this.layout === 'button_count') {
      return this.size !== 'large' ? '96' : '111';
    }

    return '';
  }

  get defaultHeight(): string {
    if (this.layout === 'button' || this.layout === 'button_count') {
      return this.size !== 'large' ? '20' : '28';
    } else if (this.layout === 'box_count') {
      return this.size !== 'large' ? '40' : '58';
    }

    return '';
  }

  get inlineFrameSource(): string {
    const attributes: Record<string, string | null> = {
      href: this.href,
      layout: this.layout,
      size: this.size
    };

    const query: string[] = Object.keys(attributes)
      .filter(key => attributes[key])
      .map(key => `${key}=${attributes[key]}`);

    return decodeURIComponent(`https://www.facebook.com/plugins/share_button.php?${query.join('&')}`);
  }
}
