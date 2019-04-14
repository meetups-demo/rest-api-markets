import { address } from 'faker';
import { IMarket } from './entities';
let markets: IMarket[]= [];
for (let i=0; i < 20; i++) {
  markets.push({
    "name": address.state(),
    "country": address.country()
  })
}

export default markets;
