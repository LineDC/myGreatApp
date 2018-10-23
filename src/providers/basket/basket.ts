/*
  Generated class for the BasketProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export class BasketProvider {

  data = [];

  constructor() {
    console.log('Hello BasketProvider Provider');
  }

  getBasket() {
    console.log(JSON.stringify(this.data));
    return this.data;
  }

  setBasket(dataproduct) {
    this.data.push(dataproduct);
    console.log(JSON.stringify(this.data));
  }

}
