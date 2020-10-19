import { useState } from 'react';
import useSWR from 'swr';
import moment from 'moment';

import { brand } from '../utils/obfuscator';

async function fetcher(url) {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}

const rangeProducts = (list, range) => {
  const securedList = list || [];
  if(range === 0) return securedList;
  if(range === 1) return securedList.filter(item => item.price.price_in_cents < 50000);
  if(range === 2) return securedList.filter(item => item.price.price_in_cents >= 50000 && item.price.price_in_cents <= 150000);;
  if(range === 3) return securedList.filter(item => item.price.price_in_cents > 150000);
}

export default function Products() {
  const [range, setRange] = useState(0);
  const { data = {} } = useSWR('/api/products', fetcher);
  const updatedList = rangeProducts(data.products, range);
  return (
    <>
      <h1>Products</h1>
      <h2>Budget</h2>
      <div>
        <label htmlFor="under500">Under 500€</label>
        <input type="radio" name="budget" id="under500" onChange={e => setRange(1)} />
        <br/>
        <label htmlFor="range">500€ - 1500€</label>
        <input type="radio" name="budget" id="range" onChange={e => setRange(2)} />
        <br/>
        <label htmlFor="over1500">Over 1500 €</label>
        <input type="radio" name="budget" id="over1500" onChange={e => setRange(3)} />
      </div>
      <div>
        {updatedList.map(item => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <h4>{brand(item.brand)}</h4>
            <p>{item.price.price}</p>
            <p>By {item.seller.name} from {item.seller.country} on {moment(item.deposited_on).format("MMM Do YYYY")}</p>
            <p>Since {moment(item.deposited_on, "YYYY-MM-DD'T'HH:mm:ss.SSS").fromNow()}</p>
          </div>
        ))}
      </div>
    </>
  );
}