import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChamadoClientePage } from '../chamado-cliente/chamado-cliente';
import { CadastroPage } from '../cadastro/cadastro';
import { Usuario } from '../../models/Usuario';
import { UsuarioService } from '../../services/Usuario.service';
import { ChamadoFuncionarioPage } from '../chamado-funcionario/chamado-funcionario';


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
      if(success[0].tipo == "Cliente"){
        this.navCtrl.setRoot(ChamadoClientePage);
      }else if(success[0].tipo == "Funcionário"){
        this.navCtrl.setRoot(ChamadoFuncionarioPage);
      }
      //
    }, (error) => {
      console.log(error);
    });
  }

  goCadastroPage(){
    this.navCtrl.setRoot(CadastroPage);
  }
}
