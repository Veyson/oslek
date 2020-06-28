import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Chamado } from '../../models/Chamado';
import { ChamadoService } from '../../services/Chamado.service';
import { UsuarioService } from '../../services/Usuario.service';
import { IonLoading } from '../../async/IonLoading';
import { IonAlert } from '../../async/IonAlert';
import { ChamadoListaPage } from '../chamado-cliente-lista/chamado-lista';
import { UsuarioClientePerfilPage } from '../usuario-cliente-perfil/usuario-cliente-perfil';

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
  providers: [ChamadoService]
})
export class ChamadoClientePage {

  public titulo: any;
  public descricao: any;
  public setor: any;
  public chamado: Chamado = new Chamado();

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public chamadoServices: ChamadoService, 
    public usuarioServices: UsuarioService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChamadoClientePage');
  }

  registrarChamado() {
    IonLoading.presentLoading("Registrando chamado...", this.loadingController);
    this.chamado.titulo = this.titulo;
    this.chamado.descricao = this.descricao;
    this.chamado.setor = this.setor;
    this.chamadoServices.criarChamados(this.chamado).subscribe((success) => {
      console.log(success);
      this.titulo = "";
      this.descricao = "";
      this.setor = "";
      IonLoading.dismissLoading();
    }, (error) => {
      IonAlert.presentAlert("Aviso", "Usuario", error, this.alertController);
      IonLoading.dismissLoading();
    });
    
  }

  goPerfil() {
    this.navCtrl.push(UsuarioClientePerfilPage);
  }

  goListaChamados() {
    this.navCtrl.setRoot(ChamadoListaPage);  
  }

  logout() {
    this.usuarioServices.logout();
    this.navCtrl.setRoot(LoginPage);  
  }

}
