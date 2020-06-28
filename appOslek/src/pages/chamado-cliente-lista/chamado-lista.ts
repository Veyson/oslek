import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Chamado } from '../../models/Chamado';
import { IonLoading } from '../../async/IonLoading';
import { IonAlert } from '../../async/IonAlert';
import { ChamadoService } from '../../services/Chamado.service';
import { ChamadoClientePage } from '../chamado-cliente/chamado-cliente';

/**
 * Generated class for the ChamadoListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chamado-lista',
  templateUrl: 'chamado-lista.html',
  providers: [ChamadoService]
})  
export class ChamadoListaPage {

  public chamados: Array<Chamado> = new Array<Chamado>();

  constructor(public navCtrl: NavController,
    public loadingController: LoadingController, 
    public alertController: AlertController, 
    public chamadoServices: ChamadoService,
    public navParams: NavParams) {
    this.buscarChamados();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChamadoListaPage');
  }

  buscarChamados() {
    IonLoading.presentLoading("Buscando chamados...", this.loadingController);
    this.chamadoServices.listarChamadosId().subscribe((response) => {
      this.chamados = <Chamado[]> response;
      IonLoading.dismissLoading();
    }, (error) => {
      IonAlert.presentAlert("Aviso", "Usuario", error, this.alertController);
      IonLoading.dismissLoading();
    });
  }

  goBack() {
    this.navCtrl.setRoot(ChamadoClientePage);
  }

}
