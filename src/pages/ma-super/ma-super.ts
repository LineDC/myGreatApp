import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ConnectApiProvider } from '../../providers/connect-api/connect-api';
import { BasketProvider } from '../../providers/basket/basket';
// import { Observable } from 'rxjs/Observable';

import { ModalPage } from '../modal/modal';

import { BasketPage } from '../basket/basket';

import { Product } from '../../models/product/product';

/**
 * Generated class for the MaSuperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
// Lien à supprimer quand si on supprime le fichier "ma-super.module.ts"

@Component({
  selector: 'page-ma-super',
  templateUrl: 'ma-super.html',
})
export class MaSuperPage {

  products: Array<Product> = [];

  firstname: string;
  firstnameuser: string;
  lastnameuser: string;

  categories: any[];
  // products: any[];
  menus: any[];

  totalArticle = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ConnectApiProvider, public modalCtrl: ModalController, public basketProvider: BasketProvider) {
    this.firstname = this.navParams.get('firstname')
    this.firstnameuser = this.navParams.get('firstnameuser')
    this.lastnameuser = this.navParams.get('lastnameuser')
  }

  showProducts() {
    this.apiProvider.getProducts().subscribe(products => {
      this.products = products;
      console.log(this.products[0].name)
    });
  }

  showCategories() {
    // le categories après le subscribe peut s'appeler comme on veut, il faut juste que ça soit le même après le this.nom =
    this.apiProvider.getCategories().subscribe(categories => {
      this.categories = categories
    });
  }

  showMenus() {
    // le categories après le subscribe peut s'appeler comme on veut, il faut juste que ça soit le même après le this.nom =
    this.apiProvider.getMenus().subscribe(menus => {
      this.menus = menus
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaSuperPage');
    this.showProducts();
    this.showCategories();
    this.showMenus();
  }

  onChange(event) {
    // console.log('catégorie ' + event.value);
    this.apiProvider.getProductsId(event.value).subscribe(products => {
      this.products = products
    });
  }

  presentProfileModal(product) {
    const profileModal = this.modalCtrl.create(ModalPage, {'product' : product});
    product.quantity = 1;
    profileModal.onDidDismiss(data => {
      this.basketProvider.setBasket(data);
    });
    profileModal.present();
  }

  basketPage() {
    this.navCtrl.push(BasketPage);
  }
}
