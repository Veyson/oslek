import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChamadoClientePage } from '../chamado-cliente/chamado-cliente';
import { CadastroPage } from '../cadastro/cadastro';
import { Usuario } from '../../models/Usuario';
import { UsuarioService } from '../../services/Usuario.service';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  chamadoClientePage = ChamadoClientePage;
  cadastroPage = CadastroPage;
  public usuario: Usuario = new Usuario();

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public usuarioServices: UsuarioService) {
      console.log(this.usuario);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goChamadoClientePage(){
    this.usuarioServices.authUsuario(this.usuario).subscribe((success) => {
      console.log(success);
      this.navCtrl.setRoot(this.chamadoClientePage);
    }, (error) => {
      console.log(error);
    });
  }

  goCadastroPage(){
    this.navCtrl.setRoot(this.cadastroPage);
  }
}
