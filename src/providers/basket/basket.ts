import { Http } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the BasketProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BasketProvider {

  data: [];

  constructor(public http: HttpClient) {
    console.log('Hello BasketProvider Provider');
  }

  getBasket() {
    return
  }

  setBasket() {

  }

}
