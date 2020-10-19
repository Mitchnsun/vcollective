import useSWR from 'swr';
import moment from 'moment';

async function fetcher(url) {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}

export default function Products() {
  const { data = {} } = useSWR('/api/products', fetcher);
  const offWhite = (data.products || []).filter(item => item.brand === 'Off-White');
  return (
    <>
      <h1>Off-White</h1>
      <div>
        {offWhite.map(item => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <h3>{item.brand}</h3>
            <p>
              <del><small>{item.price.price}</small></del>
              &nbsp;
              {(Math.round(item.price.price_in_cents * 0.9) / 100).toFixed(2)} {item.price.currency}
            </p>
            <p>By {item.seller.name} from {item.seller.country} on {moment(item.deposited_on).format("MMM Do YYYY")}</p>
          </div>
        ))}
      </div>
    </>
  );
}