import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Refresher, Content } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ChamadoDescricaoPage } from '../chamado-descricao/chamado-descricao';
import { ChamadoService } from '../../services/Chamado.service';
import { Chamado } from '../../models/Chamado';

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

  @ViewChild(Content) content: Content;
  @ViewChild(Refresher) refresher: Refresher;
  public chamados: Array<Chamado> = new Array<Chamado>();

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public chamadoService: ChamadoService) {
  }

  doRefresh(refresher) {
    this.buscarChamados();
  }

  buscarChamados() {
    this.chamadoService.listarChamados().subscribe((response) => {
      this.chamados = <Chamado[]> response;
      this.refresher.complete();
    }, (erro) => {
      this.refresher.complete();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChamadoFuncionarioPage');
  }

  goLoginPage(){
    this.navCtrl.setRoot(LoginPage);
  }

  goChamadoDescricaoPage(){
    this.navCtrl.setRoot(ChamadoDescricaoPage);
  }
}
