import { jsonProperty, Serializable } from 'ts-serializable';

export class Section extends Serializable {
  @jsonProperty(String)
  text: String = ''
  @jsonProperty([Section])
  subsections: Section[] = []
}