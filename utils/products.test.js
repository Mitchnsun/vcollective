import Item from 'antd/lib/list/Item';
import { range, shipIn} from './products';

const PRODUCTS = [
  {
    id: 42,
    price: { price_in_cents: 72877 },
    shippable_countries: ["UK", "FR"]
  },
  {
    id: 44,
    price: { price_in_cents: 73412 },
    shippable_countries: ["UK"]
  },
  {
    id: 17,
    price: { price_in_cents: 37325 },
    shippable_countries: ["US"]
  },
  {
    id: 38,
    price: { price_in_cents: 49746 },
    shippable_countries: ["US", "FR"]
  },
  {
    id: 67,
    price: { price_in_cents: 160000 },
    shippable_countries: ["ES"]
  },
];
describe('Products', () => {
  describe('Range', () => {
    it('should a filtered list', () => {
      expect(range(PRODUCTS, 0)).toStrictEqual(PRODUCTS);
      expect(range(PRODUCTS, 1)).toStrictEqual([
        {
          id: 17,
          price: { price_in_cents: 37325 },
          shippable_countries: ["US"]
        },
        {
          id: 38,
          price: { price_in_cents: 49746 },
          shippable_countries: ["US", "FR"]
        },
      ]);
      expect(range(PRODUCTS, 2)).toStrictEqual([
        {
          id: 42,
          price: { price_in_cents: 72877 },
          shippable_countries: ["UK", "FR"]
        },
        {
          id: 44,
          price: { price_in_cents: 73412 },
          shippable_countries: ["UK"]
        },
      ]);
      expect(range(PRODUCTS, 3)).toStrictEqual([
        {
          id: 67,
          price: { price_in_cents: 160000 },
          shippable_countries: ["ES"]
        },
      ]);
    });
  });

  describe('Ship In', () => {
    it('should return only products for the country', () => {
      expect(shipIn(PRODUCTS, null)).toStrictEqual(PRODUCTS);
      expect(shipIn(PRODUCTS, 'UK')).toStrictEqual([
        {
          id: 42,
          price: { price_in_cents: 72877 },
          shippable_countries: ["UK", "FR"]
        },
        {
          id: 44,
          price: { price_in_cents: 73412 },
          shippable_countries: ["UK"]
        },
      ]);
      expect(shipIn(PRODUCTS, 'FR')).toStrictEqual([
        {
          id: 42,
          price: { price_in_cents: 72877 },
          shippable_countries: ["UK", "FR"]
        },
        {
          id: 38,
          price: { price_in_cents: 49746 },
          shippable_countries: ["US", "FR"]
        },
      ]);
      expect(shipIn(PRODUCTS, 'DE')).toStrictEqual([]);
    });
  });
});