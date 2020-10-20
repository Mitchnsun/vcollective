import { useState } from 'react';
import useSWR from 'swr';

import * as ProductsUtils from '../utils/products';
import Product from '../components/product';
import FiltersBar from '../components/filtersBar';

async function fetcher(url) {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}

export default function Products() {
  const [range, setRange] = useState(0);
  const [sorting, setSorting] = useState();
  const { data = {} } = useSWR('/api/products', fetcher);
  const updatedList = ProductsUtils.range(data.products, range);

  if(sorting === 'ASC') {
    updatedList.sort((a, b) => a.price.price_in_cents - b.price.price_in_cents);
  }
  if(sorting === 'DESC') {
    updatedList.sort((a, b) => b.price.price_in_cents - a.price.price_in_cents);
  }

  return (
    <>
      <h1>Products</h1>
      <h2>Budget</h2>
      <FiltersBar setRange={setRange} setSorting={setSorting} />
      <div>
        {updatedList.map(item => (
          <Product key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}