import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChamadoFuncionarioPage } from '../chamado-funcionario/chamado-funcionario';

/**
 * Generated class for the ChamadoDescricaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chamado-descricao',
  templateUrl: 'chamado-descricao.html',
})
export class ChamadoDescricaoPage {

  chamadoFuncionarioPage = ChamadoFuncionarioPage;

  public titulo: any = "Titulo";
  public email: any = "E-Mail";
  public descricao: any = "Descrição";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChamadoDescricaoPage');
  }

  goChamadoFuncionarioPage(){
    this.navCtrl.setRoot(this.chamadoFuncionarioPage);
  }

}
