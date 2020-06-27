import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { ChamadoFuncionarioPage } from '../chamado-funcionario/chamado-funcionario';
import { ChamadoService } from '../../services/Chamado.service';
import { Chamado } from '../../models/Chamado';
import { IonLoading } from '../../async/IonLoading';
import { IonAlert } from '../../async/IonAlert';

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
  providers: [ChamadoService]
})
export class ChamadoDescricaoPage {

  public chamado: Chamado = new Chamado();
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingController: LoadingController, 
    public alertController: AlertController,
    public chamadoServices: ChamadoService) {
    this.chamado = this.chamadoServices.retornarChamadoDetalhado();
    console.log(this.chamado);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChamadoDescricaoPage');
  }

  goChamadoFuncionarioPage(){
    this.chamadoServices.killChamadoStorage();
    this.navCtrl.setRoot(ChamadoFuncionarioPage);
  }
   
  atualizarChamado() {
    IonLoading.presentLoading("Atualizando chamado...", this.loadingController);
    this.chamadoServices.atualizarChamado(this.chamado).subscribe((response) => {
      console.log(response);
      IonLoading.dismissLoading();
    }, error => {
      IonAlert.presentAlert("Aviso", "Usuario", error, this.alertController);
      IonLoading.dismissLoading();
    });
  }

}
