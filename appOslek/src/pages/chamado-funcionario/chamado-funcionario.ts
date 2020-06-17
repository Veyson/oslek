import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ChamadoDescricaoPage } from '../chamado-descricao/chamado-descricao';

/**
 * Generated class for the ChamadoFuncionarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chamado-funcionario',
  templateUrl: 'chamado-funcionario.html',
})
export class ChamadoFuncionarioPage {

  loginPage = LoginPage;
  chamadoDescricaoPage = ChamadoDescricaoPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChamadoFuncionarioPage');
  }

  goLoginPage(){
    this.navCtrl.setRoot(this.loginPage);
  }

  goChamadoDescricaoPage(){
    this.navCtrl.setRoot(this.chamadoDescricaoPage);
  }
}
