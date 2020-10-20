import moment from 'moment';
import * as Obdusc from '../utils/obfuscator';

const SalesPrice = ({ price, currency, sales_prices }) => sales_prices ?
  (
    <p>
      <del><small>{price}</small></del>
      &nbsp;
      {sales_price} {currency}
    </p>
  ) : (
    <p>{price}</p>
  );

const Product = ({ name, brand, price, seller, deposited_on}) => (
  <div>
    <h3>{name}</h3>
    <h4>{Obdusc.brand(brand)}</h4>
    <SalesPrice {...price} />
    <p>By {seller.name} from {seller.country} on {moment(deposited_on).format("MMM Do YYYY")}</p>
    <p>Since {moment(deposited_on, "YYYY-MM-DD'T'HH:mm:ss.SSS").fromNow()}</p>
  </div>
);

export default Product;
