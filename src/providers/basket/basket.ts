/*
  Generated class for the BasketProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export class BasketProvider {

  data = [];
  total = 0;
  totalArticle = 0;

  constructor() {
    console.log('Hello BasketProvider Provider');
  }

  getBasket() {
    // console.log(JSON.stringify(this.data));
    return this.data;
  }

  setBasket(dataproduct) {
    this.data.push(dataproduct);
    // console.log(JSON.stringify(this.data));
  }

  setTotalCommand(data) {
    let th = this;
    data.forEach(function(d) {
      // console.log(d);
      // console.log(JSON.stringify(d.price));
      // console.log(JSON.stringify(d.quantity));
      // console.log(th.total)
      th.total = th.total + (d.price * d.quantity);
      // console.log(th.total);
    });
  }

  setTotalArticle(data) {
    let th = this;
    data.forEach(function(d) {
      th.totalArticle = th.totalArticle + d.quantity;
      // console.log(th.totalArticle)
    });
  }

  getTotalCommand() {
    return this.total;
  }

  getTotalArticles() {
    return this.totalArticle;
  }

}
