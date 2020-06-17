import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the ChamadoClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chamado-cliente',
  templateUrl: 'chamado-cliente.html',
})
export class ChamadoClientePage {

  loginPage = LoginPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChamadoClientePage');
  }

  goLoginPage(){
    this.navCtrl.setRoot(this.loginPage);
  }
}
