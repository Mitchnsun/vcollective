import moment from 'moment';
import { Card } from 'antd';
import * as Obdusc from '../utils/obfuscator';

const SalesPrice = ({ price, currency, sales_price }) => sales_price ?
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
  <Card title={name} bordered={false} style={{ flex: '0 0 300px', margin: '5px 0'}} >
    <h4>{Obdusc.brand(brand)}</h4>
    <SalesPrice {...price} />
    <p>By {seller.name} from {seller.country} on {moment(deposited_on).format("MMM Do YYYY")}</p>
    <p>Since {moment(deposited_on, "YYYY-MM-DD'T'HH:mm:ss.SSS").fromNow()}</p>
  </Card>
);

export default Product;
