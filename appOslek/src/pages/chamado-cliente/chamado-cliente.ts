import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Setor } from '../../models/Setor';
import { Chamado } from '../../models/Chamado';
import { ChamadoService } from '../../services/Chamado.service';

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
})
export class ChamadoClientePage {

  loginPage = LoginPage;

  public chamado: Chamado = new Chamado();
  public setors: Array<Setor> = new Array<Setor>();
  public setorSelecionadoId: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public chamadoServices: ChamadoService) {
      console.log(this.chamado);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChamadoClientePage');
  }

  goLoginPage(){
    this.navCtrl.setRoot(this.loginPage);
  }

  registrarChamado() {
    let setor: Setor = this.setors.find(c => c.id == this.setorSelecionadoId);
    ///////////////////
    console.log(setor, " setor escolhido");
    ///////////////////
    this.chamadoServices.criarChamados(this.chamado).subscribe((success) => {
      console.log(success);
    }, (error) => {
      console.log(error);
    });
    
  }

}
