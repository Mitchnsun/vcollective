const { default: Item } = require("antd/lib/list/Item");

import { brand } from './obfuscator';

describe('Obfuscator', () => {
  it('Brand', () => {
    expect(brand('Toto')).toBe('Toto');
    expect(brand('Gucci')).toBe('Gucci');
    expect(brand('Off-White')).toBe('Off-White');
    expect(brand('Louis Vuitton')).toBe('nottiuV siuoL');
  });
});
