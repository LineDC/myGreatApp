import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ConnectApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConnectApiProvider {

  url: string
  // header = new Headers;

  constructor(public http: Http) {
    console.log('Hello ConnectApiProvider Provider');
    this.url = '/api';
  }

  // setProviders() {
  //   this.http.get(this.url, {headers: myHeaders}).map(response => response.json());
  // }

  getCategories() {
    return this.http.get(this.url+'/categories').map(response => response.json());
  }

  getProducts() {
    return this.http.get(this.url+'/products').map(response => response.json());
  }

  getMenus() {
    return this.http.get(this.url+'/menus').map(response => response.json());
  }

  getProductsId() {
    return this.http.get(this.url+'/products/categories/{id}').map(response => response.json());
  }

}
