import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ChamadoDescricaoPage } from '../chamado-descricao/chamado-descricao';
import { ChamadoService } from '../../services/Chamado.service';
import { Chamado } from '../../models/Chamado';
import { UsuarioService } from '../../services/Usuario.service';
import { IonLoading } from '../../async/IonLoading';

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

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingController: LoadingController,
    public chamadoServices: ChamadoService, 
    public usuarioServices: UsuarioService) {
      this.contarChamados();
  }

  buscarChamados() {
    IonLoading.presentLoading("Buscando chamados...", this.loadingController);
    this.chamadoServices.listarChamados().subscribe((response) => {
      this.chamados = <Chamado[]> response;
      IonLoading.dismissLoading();
    }, (erro) => {
      console.log(erro);
      IonLoading.dismissLoading();
    });
  }

  contarChamados(){
    IonLoading.presentLoading("Contabilizando chamados...", this.loadingController);
    this.chamadoServices.contarChamados().subscribe((response:any)=>{
      console.log(response);
      this.countConcluido = response.concluido;
      this.countEmAndamento = response.emAndamento;
      this.countPendente = response.pendente;
      IonLoading.dismissLoading();
      this.buscarChamados();
    }, (erro)=>{
      console.log(erro);
      IonLoading.dismissLoading();
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
