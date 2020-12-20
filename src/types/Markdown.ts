import marked from 'marked';

class Markdown {
  raw: string;

  constructor(raw: string) {
    this.raw = raw
  }

  toHTML = (): string => marked(this.raw);
}

export default Markdown