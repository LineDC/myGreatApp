import { Component } from '@angular/core';
import { NavController, NavParams, ViewController} from 'ionic-angular';

import { Product } from '../../models/product/product';
import { BasketPage } from '../basket/basket';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  product: Array<Product> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.product = navParams.get('product');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  addProduct() {
    this.product.quantity += 1;
  }

  removeProduct() {
    if (this.product.quantity > 0) {
      this.product.quantity -= 1;
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  addProductDismiss() {
    let data = this.product;
    // console.log(data);
    // console.log("Prix : " + data.price);
    // console.log("Quantité : " + data.quantity);
    // console.log("Nom : " + data.name);
    // this.navCtrl.push(MaSuperPage, {
    //   data: data
    // });
    this.viewCtrl.dismiss(data);
  }

}
