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

  url: 'https://cors-anywhere.herokuapp.com/http://fast-badlands-48562.herokuapp.com/api/1.0'
  header = new Headers;

  constructor(public http: Http) {
    console.log('Hello ConnectApiProvider Provider');
  }

  getCategories() {
    return this.http.get(url+'/categories').map(response => response.json());
  }

  getProducts() {

  }

  getMenus() {

  }

}
