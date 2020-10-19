import useSWR from 'swr';
import moment from 'moment';

import { brand } from '../utils/obfuscator';

async function fetcher(url) {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}

export default function Products() {
  const { data = {} } = useSWR('/api/products', fetcher);
  return (
    <>
      <h1>Products</h1>
      <div>
        {(data.products || []).map(item => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <h3>{brand(item.brand)}</h3>
            <p>{item.price.price}</p>
            <p>By {item.seller.name} from {item.seller.country} on {moment(item.deposited_on).format("MMM Do YYYY")}</p>
          </div>
        ))}
      </div>
    </>
  );
}