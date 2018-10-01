import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

// Importer la page qui va nous rediriger avec le clic sur le bouton
import { MaSuperPage } from '../ma-super/ma-super';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // AlertController : on peut import à la suite des paramètres en mettant des virgules et on oublie pas
  // de le mettre dans le constructor

  firstnameuser: string
  lastnameuser: string

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }

  // Fonction pour rediriger en cliquant sur le bouton vers la page "MaSuperPage"
  // goToMaSuperPage() est dans le bouton avec la fonction click
  // navCtrl reprend le navCtrl qui se trouve dans le NavController
  // si on met setRoot à la place de push, ça va nous mettre la nouvelle en page Root et on pourra plus revenir en arrière, le bouton de retour arrière disparait
  goToMaSuperPage():void {
    console.log("Test");
    this.navCtrl.push(MaSuperPage, {
      firstname: "Line",
    })
    // this.navCtrl.setRoot(MaSuperPage)
  }

  presentPrompt() {
  let alert = this.alertCtrl.create({
    title: 'Entrer votre nom et prénom',
    inputs: [
      {
        name: 'firstnameuser',
        placeholder: 'Entrer votre nom'
      },
      {
        name: 'lastnameuser',
        placeholder: 'Entrer votre prénom'
      }
    ],
    buttons: [
      {
        text: 'Fermer',
        role: 'cancel',
        handler: data => {
          console.log('Bouton fermé cliqué');
        }
      },
      {
        text: 'Envoyer',
        handler: data => {
          this.navCtrl.push(MaSuperPage, {
            firstnameuser: data.firstnameuser,
            lastnameuser: data.lastnameuser
          })
        }
      }
    ]
  });
  alert.present();
}

}
