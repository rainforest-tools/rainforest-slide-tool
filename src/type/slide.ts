import { jsonProperty, Serializable } from 'ts-serializable';
import { Section } from './section';
import { Tag } from './tag';

class Slide extends Serializable {
  @jsonProperty(String)
  title!: String;
  @jsonProperty(String)
  description: String = ''
  @jsonProperty([Tag])
  tags: Tag[] = []
  @jsonProperty([Section])
  sections: Section[] = []
}