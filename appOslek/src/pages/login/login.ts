import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { ChamadoClientePage } from '../chamado-cliente/chamado-cliente';
import { Usuario } from '../../models/Usuario';
import { UsuarioService } from '../../services/Usuario.service';
import { ChamadoFuncionarioPage } from '../chamado-funcionario/chamado-funcionario';
import { ChamadoService } from '../../services/Chamado.service';

import { trigger, style, animate, transition } from '@angular/animations';
import { ValidarCpf } from '../../validation/ValidarCpf';
import { IonLoading } from '../../async/IonLoading';
import { IonAlert } from '../../async/IonAlert';

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

  login:boolean = true;
  cadastro:boolean = false;

  public usuario: Usuario = new Usuario();

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public usuarioServices: UsuarioService, 
    public chamadoServices: ChamadoService) {
    localStorage.clear();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goOpenSystem() {
    IonLoading.presentLoading("Acessando sistema...", this.loadingController);
    this.usuarioServices.login(this.usuario).subscribe((success) => {
      if (success[0].tipo == "Cliente") {
        console.log(success[0].tipo);
        this.usuarioServices.logar(success);
        IonLoading.dismissLoading();
        this.navCtrl.setRoot(ChamadoClientePage);

      } else if (success[0].tipo == "Funcionário") {
        console.log(success[0].tipo);
        this.usuarioServices.logar(success);
        IonLoading.dismissLoading();
        this.navCtrl.setRoot(ChamadoFuncionarioPage);
      }

    }, (error) => {
      IonLoading.dismissLoading();
      //IonAlert.presentAlert("Aviso", "Usuario", error, this.alertController);
    });
  }

  validCpf(usuario: Usuario): boolean {

    if (ValidarCpf.cpf(usuario)) {
      return true;
    }
    return false;
  }

  cadastrarUsuario() {
    IonLoading.presentLoading("Autenticando dados...", this.loadingController);
    if (this.validCpf(this.usuario)) {
      this.usuarioServices.criarUsuario(this.usuario).subscribe((success) => {
        console.log(success);
        IonLoading.dismissLoading();
        IonAlert.presentAlert("Aviso", "Usuario", "Cadastrado com suceso!", this.alertController);
        this.navCtrl.setRoot(LoginPage);
      }, (error) => {
        IonLoading.dismissLoading();
        IonAlert.presentAlert("Aviso", "Usuario", error, this.alertController);
      });
    }else{
      IonLoading.dismissLoading();
      IonAlert.presentAlert("Aviso", "Usuario", "CPF inválido!", this.alertController);
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
