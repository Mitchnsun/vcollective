import { useState } from 'react';
import useSWR from 'swr';
import { Layout } from 'antd';

import * as ProductsUtils from '../utils/products';
import Product from '../components/product';
import FiltersBar from '../components/filtersBar';

async function fetcher(url) {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}

const { Header, Content } = Layout;

export default function Products() {
  const [range, setRange] = useState(0);
  const [sorting, setSorting] = useState();
  const { data = {} } = useSWR('/api/products', fetcher);
  const updatedList = ProductsUtils.range(ProductsUtils.shipIn(data.products, 'UK'), range);

  if(sorting === 'ASC') {
    updatedList.sort((a, b) => a.price.price_in_cents - b.price.price_in_cents);
  }
  if(sorting === 'DESC') {
    updatedList.sort((a, b) => b.price.price_in_cents - a.price.price_in_cents);
  }

  return (
    <Layout>
      <Header>
        <h1 style={{ color: "white" }}>Products only in UK</h1>
      </Header>
      <FiltersBar setRange={setRange} setSorting={setSorting} />
      <Content style={{
        padding: '0 50px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
      }}>
        {updatedList.map(item => (
          <Product key={item.id} {...item} />
        ))}
      </Content>
    </Layout>
  );
}