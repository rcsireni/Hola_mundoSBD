import { Component } from '@angular/core';
import { NavController, Alert, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nombre = '';


  constructor(public navCtrl: NavController, 
              public alertCtrl: AlertController) {

  }

  click(){
    //console.log('Hola', this.nombre);
    const alerta = this.alertCtrl.create({
      title: 'Hola', subTitle: this.nombre, buttons: ['Jalo', 'No jalo']
    });

    alerta.present();
  }
}
