import { jsonProperty, Serializable } from 'ts-serializable';

export class Tag extends Serializable {
  @jsonProperty(String)
  name!: String
}