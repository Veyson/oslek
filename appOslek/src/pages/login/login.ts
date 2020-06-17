import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChamadoClientePage } from '../chamado-cliente/chamado-cliente';
import { CadastroPage } from '../cadastro/cadastro';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  chamadoClientePage = ChamadoClientePage;
  cadastroPage = CadastroPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goChamadoClientePage(){
    this.navCtrl.setRoot(this.chamadoClientePage);
  }

  goCadastroPage(){
    this.navCtrl.setRoot(this.cadastroPage);
  }
}
