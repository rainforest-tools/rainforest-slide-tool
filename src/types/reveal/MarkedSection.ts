import Markdown from "@/types/Markdown";

class MarkedSection extends Markdown {
  subsections: Array<MarkedSubSection> = [];
}

class MarkedSubSection extends Markdown {}