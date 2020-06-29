import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ChamadoFuncionarioPage } from '../chamado-funcionario/chamado-funcionario';
import { UsuarioService } from '../../services/Usuario.service';
import { Usuario } from '../../models/Usuario';
import { IonLoading } from '../../async/IonLoading';
import { ChamadoClientePage } from '../chamado-cliente/chamado-cliente';

/**
 * Generated class for the UsuarioFuncionarioPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usuario-cliente-perfil',
  templateUrl: 'usuario-cliente-perfil.html',
})
export class UsuarioClientePerfilPage {

  public usuario: Usuario = new Usuario();

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public usuarioService: UsuarioService, public loadingController: LoadingController) {
      this.usuario = this.usuarioService.retornarUsuarioLogado();
      this.usuario[0].senha = '';
      this.usuario[0].confirmarSenha = '';
      console.log(this.usuario);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuarioPerfilPage');
  }

  atualizarUsuario() {
    IonLoading.presentLoading("Atualizando Usuario...", this.loadingController);
    this.usuarioService.atualizarUsuario(this.usuario[0]).subscribe((response) => {
      console.log(response);
      this.usuarioService.logar(this.usuario);

      IonLoading.dismissLoading();
      this.navCtrl.setRoot(ChamadoClientePage);
    }, error => {
      console.log(error);
      IonLoading.dismissLoading();
    });
    
  }

  goBack() {
    this.navCtrl.setRoot(ChamadoClientePage);
  }

}
