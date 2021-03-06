export class FacebookLikeButton extends HTMLElement {
  static get observedAttributes(): string[] {
    return [
      'href',
      'layout',
      'size',
      'action',
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
    }).innerHTML = FacebookLikeButton.template;
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

  get action(): string | null {
    return this.getAttribute('action') || 'like';
  }

  set action(value: string | null) {
    if (value === null || value === undefined) {
      this.removeAttribute('action')
    } else {
      this.setAttribute('action', value);
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
      if (this.action !== 'recommend') {
        return this.size !== 'large' ? '59' : '67';
      } else {
        return this.size !== 'large' ? `103` : '119';
      }
    } else if (this.layout === 'button_count') {
      if (this.action !== 'recommend') {
        return this.size !== 'large' ? '88' : '101';
      } else {
        return this.size !== 'large' ? '132' : '153';
      }
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
      size: this.size,
      action: this.action
    };

    const query: string[] = Object.keys(attributes)
      .filter(key => attributes[key])
      .map(key => `${key}=${attributes[key]}`);

    return decodeURIComponent(`https://www.facebook.com/plugins/like.php?${query.join('&')}`);
  }
}
