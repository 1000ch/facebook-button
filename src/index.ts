export class FacebookButton extends HTMLElement {
  static get observedAttributes(): string[] {
    return [
      'href',
      'layout',
      'width',
      'height',
      'colorscheme',
      'action'
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
    }).innerHTML = FacebookButton.template;
  }

  connectedCallback(): void {
    const iframe = this.shadowRoot?.querySelector('iframe');
    if (!iframe) {
      return;
    }

    iframe.width = `${this.width}px`;
    iframe.height = `${this.height}px`;
    iframe.src = this.inlineFrameSource;
  }

  attributeChangedCallback(attributeName: string, oldValue: string, newValue: string): void {
    const iframe = this.shadowRoot?.querySelector('iframe');
    if (!iframe) {
      return;
    }

    switch (attributeName) {
      case 'width':
      case 'height':
        iframe[attributeName] = `${newValue}px`;
        break;
      default:
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
    return this.getAttribute('layout');
  }

  set layout(value: string | null) {
    if (value === null || value === undefined) {
      this.removeAttribute('layout');
    } else {
      this.setAttribute('layout', value);
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

  get height(): string | null {
    return this.getAttribute('height');
  }

  set height(value: string | null) {
    if (value === null || value === undefined) {
      this.removeAttribute('height');
    } else {
      this.setAttribute('height', value);
    }
  }

  get colorscheme(): string | null {
    return this.getAttribute('colorscheme');
  }

  set colorscheme(value: string | null) {
    if (value === null || value === undefined) {
      this.removeAttribute('colorscheme');
    } else {
      this.setAttribute('colorscheme', value);
    }
  }

  get action(): string | null {
    return this.getAttribute('action') || '';
  }

  set action(value: string | null) {
    if (value === null || value === undefined) {
      this.removeAttribute('action')
    } else {
      this.setAttribute('action', value);
    }
  }

  get inlineFrameSource(): string {
    const attributes: Record<string, string | null> = {
      href: this.href,
      layout: this.layout,
      width: this.width,
      height: this.height,
      colorscheme: this.colorscheme,
      action: this.action
    };

    const query: string[] = Object.keys(attributes)
      .filter(key => attributes[key])
      .map(key => `${key}=${attributes[key]}`);

    return decodeURIComponent(`https://www.facebook.com/plugins/like.php?${query.join('&')}`);
  }
}
