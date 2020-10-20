import { useState } from 'react';
import useSWR from 'swr';
import Link from 'next/link';
import { Layout } from 'antd';
import { Menu } from 'antd';

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
  const updatedList = ProductsUtils.range(data.products, range);

  if(sorting === 'ASC') {
    updatedList.sort((a, b) => a.price.price_in_cents - b.price.price_in_cents);
  }
  if(sorting === 'DESC') {
    updatedList.sort((a, b) => b.price.price_in_cents - a.price.price_in_cents);
  }

  return (
    <Layout>
      <Header>
        <h1 style={{ color: "white" }}>Products</h1>
      </Header>
      <Menu mode="horizontal">
        <Menu.Item key="offwhite">
          <Link href="/off-white"><a>Off-White</a></Link>
        </Menu.Item>
        <Menu.Item key="ukshipping">
          <Link href="/uk-shipping"><a>Ship only in UK</a></Link>
        </Menu.Item>
      </Menu>
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