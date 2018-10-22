import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MaSuperProduct } from '../../models/product/product';

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

  product: Array<MaSuperProduct> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.product = navParams.get('product');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  // dismiss() {
  //   let data = { 'foo': 'bar' };
  //   this.viewCtrl.dismiss(data);
  // }

  addProduct() {
    this.product.quantity += 1;
  }

  removeProduct() {
    if (this.product.quantity > 0) {
      this.product.quantity -= 1;
    }
  }

}
