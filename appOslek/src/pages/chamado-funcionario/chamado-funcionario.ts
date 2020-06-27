import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
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
  providers: [ChamadoService]
})
export class ChamadoFuncionarioPage {

  public chamados: Array<Chamado> = new Array<Chamado>();
  public countConcluido: any;
  public countEmAndamento: any;
  public countPendente: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public chamadoServices: ChamadoService, public usuarioServices: UsuarioService) {
      this.contarChamados();
      this.buscarChamados();
  }

  buscarChamados() {
    this.chamadoServices.listarChamados().subscribe((response) => {
      this.chamados = <Chamado[]> response;
    }, (erro) => {
      console.log(erro);
    });
  }

  contarChamados(){
    this.chamadoServices.contarChamados().subscribe((response:any)=>{
      console.log(response);
      this.countConcluido = response.concluido;
      this.countEmAndamento = response.emAndamento;
      this.countPendente = response.pendente;
    }, (erro)=>{
      console.log(erro);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChamadoFuncionarioPage');
  }

  goChamadoDescricaoPage(chamado: Chamado){
    this.chamadoServices.detalharChamado(chamado);
    this.navCtrl.setRoot(ChamadoDescricaoPage);
  }

  logout() {
    this.usuarioServices.logout();
    this.navCtrl.setRoot(LoginPage);
  }
}
