import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the MaSuperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
// Lien à supprimer quand si on supprime le fichier "module.ts"

@Component({
  selector: 'page-ma-super',
  templateUrl: 'ma-super.html',
})
export class MaSuperPage {

  firstname: string
  firstnameuser: string
  lastnameuser: string

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.firstname = this.navParams.get('firstname'),
    this.firstnameuser = this.navParams.get('firstnameuser'),
    this.lastnameuser = this.navParams.get('lastnameuser')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaSuperPage');
  }

}
