/** @flow */
import { AbstractVinyl } from '../../../consumer/component/sources';

export default class Dist extends AbstractVinyl {
  static loadFromParsedString(parsedString: Object) {
    if (!parsedString) return;
    const opts = super.loadFromParsedString(parsedString);
    return new Dist(opts);
  }

  static loadFromParsedStringArray(arr: Object[]) {
    if (!arr) return;
    return arr.map(this.loadFromParsedString);
  }
}