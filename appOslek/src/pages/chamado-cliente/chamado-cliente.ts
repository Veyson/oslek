import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Chamado } from '../../models/Chamado';
import { ChamadoService } from '../../services/Chamado.service';
import { UsuarioService } from '../../services/Usuario.service';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public chamadoServices: ChamadoService, public usuarioServices: UsuarioService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChamadoClientePage');
  }


  registrarChamado() {
    this.chamado.titulo = this.titulo;
    this.chamado.descricao = this.descricao;
    this.chamado.setor = this.setor;
    this.chamadoServices.criarChamados(this.chamado).subscribe((success) => {
      console.log(success);
      this.titulo = "";
      this.descricao = "";
      this.setor = "";
    }, (error) => {
      console.log(error);
    });
    
  }

  logout() {
    this.usuarioServices.logout();
    this.navCtrl.setRoot(LoginPage);  
  }

}
