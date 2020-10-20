import { useState } from 'react';
import useSWR from 'swr';

import Product from '../components/product';
import FiltersBar from '../components/filtersBar';

async function fetcher(url) {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}

export default function Products() {
  const [sorting, setSorting] = useState();
  const { data = {} } = useSWR('/api/products', fetcher);
  const offWhite = (data.products || []).filter(item => item.brand === 'Off-White');

  if(sorting === 'ASC') {
    offWhite.sort((a, b) => a.price.price_in_cents - b.price.price_in_cents);
  }
  if(sorting === 'DESC') {
    offWhite.sort((a, b) => b.price.price_in_cents - a.price.price_in_cents);
  }

  return (
    <>
      <h1>Off-White</h1>
      <FiltersBar setSorting={setSorting} />
      <div>
        {offWhite.map(item => {
          const updatedItem = {
            ...item,
            price: {
              ...item.price,
              sales_price: (Math.round(item.price.price_in_cents * 0.9) / 100).toFixed(2),
            }
          };
          return <Product key={item.id} {...updatedItem} />;
        })}
      </div>
    </>
  );
}