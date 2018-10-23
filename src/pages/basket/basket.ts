import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Product } from '../../models/product/product';

import { BasketProvider } from '../../providers/basket/basket';


/**
 * Generated class for the BasketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-basket',
  templateUrl: 'basket.html',
})
export class BasketPage {

  product: Array<Product> = [];
  data: any;
  total = 0;
  totalArticle = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public basketProvider: BasketProvider) {
     this.data = basketProvider.getBasket();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BasketPage');
    // console.log(this.data);
    this.basketProvider.setTotalCommand(this.data);
    this.basketProvider.setTotalArticle(this.data);
    this.total = this.basketProvider.getTotalCommand();
    this.totalArticle = this.basketProvider.getTotalArticles();
  }


}
