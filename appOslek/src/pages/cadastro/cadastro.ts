import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { UsuarioService } from '../../services/Usuario.service';
import { Usuario } from '../../models/Usuario';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  public usuario: Usuario = new Usuario();
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public usuarioServices: UsuarioService) {
      console.log(this.usuario);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  goLoginPage(){
    this.navCtrl.setRoot(LoginPage);
  }

  cadastrarUsuario() {
    this.usuarioServices.criarUsuario(this.usuario).subscribe((success) => {
      console.log(success);
      this.navCtrl.setRoot(LoginPage);
    }, (error) => {
      console.log(error);
    });
  }


}
