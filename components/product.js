import moment from 'moment';
import * as Obdusc from '../utils/obfuscator';

const Product = ({ name, brand, price, seller, deposited_on}) => (
  <div>
    <h3>{name}</h3>
    <h4>{Obdusc.brand(brand)}</h4>
    <p>{price.price}</p>
    <p>By {seller.name} from {seller.country} on {moment(deposited_on).format("MMM Do YYYY")}</p>
    <p>Since {moment(deposited_on, "YYYY-MM-DD'T'HH:mm:ss.SSS").fromNow()}</p>
  </div>
);

export default Product;
