import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ChamadoDescricaoPage } from '../chamado-descricao/chamado-descricao';
import { ChamadoService } from '../../services/Chamado.service';
import { Chamado } from '../../models/Chamado';
import { UsuarioService } from '../../services/Usuario.service';

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

  public chamados: Array<Chamado> = new Array<Chamado>();

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public chamadoServices: ChamadoService, public usuarioServices: UsuarioService) {
  }

  doRefresh(refresher) {
    this.buscarChamados();
  }

  buscarChamados() {
    this.chamadoServices.listarChamados().subscribe((response) => {
      this.chamados = <Chamado[]> response;
    }, (erro) => {
      console.log(erro);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChamadoFuncionarioPage');
  }

  goChamadoDescricaoPage(){
    this.navCtrl.setRoot(ChamadoDescricaoPage);
  }

  logout() {
    this.usuarioServices.logout();
    this.navCtrl.setRoot(LoginPage);
  }
}
