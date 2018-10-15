import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConnectApiProvider } from '../../providers/connect-api/connect-api';
// import { Observable } from 'rxjs/Observable';

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

  firstname: string
  firstnameuser: string
  lastnameuser: string

  categories: [any]
  products: [any]
  menus: [any]

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ConnectApiProvider) {
    this.firstname = this.navParams.get('firstname')
    this.firstnameuser = this.navParams.get('firstnameuser')
    this.lastnameuser = this.navParams.get('lastnameuser')
  }

  showProducts() {
    this.apiProvider.getProducts().subscribe(products => {
      this.products = products
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
}
