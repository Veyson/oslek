import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ChamadoClientePage } from '../chamado-cliente/chamado-cliente';
import { Usuario } from '../../models/Usuario';
import { UsuarioService } from '../../services/Usuario.service';
import { ChamadoFuncionarioPage } from '../chamado-funcionario/chamado-funcionario';
import { ChamadoService } from '../../services/Chamado.service';

import { trigger, style, animate, transition } from '@angular/animations';
import { ValidarCpf } from './ValidarCpf';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [UsuarioService],
  animations: [
    trigger(
      'login', [
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate("1s ease-in-out", style({
          opacity: 1
        }))
      ]),
      transition(':leave', [
        style({
          opacity: 0
        })
      ])
    ],
    ),
    trigger(
      'registro', [
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate("1s ease-in-out", style({
          opacity: 1
        }))
      ]),
      transition(':leave', [
        style({
          opacity: 0
        })
      ])
    ],
    ),
  ]

})
export class LoginPage {

  login = true;
  cadastro = false;

  public usuario: Usuario = new Usuario();

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public usuarioServices: UsuarioService, public chamadoServices: ChamadoService) {
    localStorage.clear();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goOpenSystem() {
    this.usuarioServices.login(this.usuario).subscribe((success) => {
      if (success[0].tipo == "Cliente") {
        console.log(success[0].tipo);
        this.usuarioServices.logar(success);
        this.navCtrl.setRoot(ChamadoClientePage);

      } else if (success[0].tipo == "Funcionário") {
        console.log(success[0].tipo);
        this.usuarioServices.logar(success);
        this.navCtrl.setRoot(ChamadoFuncionarioPage);
      }

    }, (error) => {
      console.log(error);
    });
  }

  validCpf(usuario: Usuario): boolean {
    var cpfLimpo = usuario.cpf.replace(".", '').replace(".", '').replace("-", '');
    if (ValidarCpf.cpf(cpfLimpo)) {
      return true;
    }
    return false;
  }

  cadastrarUsuario() {
    if (this.validCpf(this.usuario)) {
      this.usuarioServices.criarUsuario(this.usuario).subscribe((success) => {
        console.log(success);
        this.navCtrl.setRoot(LoginPage);
      }, (error) => {
        console.log(error);
      });
    }else{
      console.log("CPF inválido!")
    }
  }

  exibirRegistrar() {
    this.login = false;
    this.cadastro = true;
  }

  exibirLogin() {
    this.login = true;
    this.cadastro = false;
  }

}
