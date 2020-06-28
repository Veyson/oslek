import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChamadoFuncionarioPage } from '../chamado-funcionario/chamado-funcionario';
import { UsuarioService } from '../../services/Usuario.service';
import { Usuario } from '../../models/Usuario';

/**
 * Generated class for the UsuarioFuncionarioPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usuario-funcionario-perfil',
  templateUrl: 'usuario-funcionario-perfil.html',
})
export class UsuarioFuncionarioPerfilPage {

  public usuario: Usuario = new Usuario();

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public usuarioService: UsuarioService) {
      this.usuario = this.usuarioService.retornarUsuarioLogado();
      console.log(this.usuario);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuarioPerfilPage');
  }

  atualizarUsuario() {
    this.usuarioService.atualizarUsuario(this.usuario).subscribe((response) => {
      console.log(response);
      this.usuarioService.logar(this.usuario);
    }, error => {
      console.log(error);
    });
  }

  goBack() {
    this.navCtrl.setRoot(ChamadoFuncionarioPage);
  }

}
