import { IUsuarioService } from "../interfaces/IUsuarioService";
import { Usuario } from "../models/Usuario";
import { Injectable } from "@angular/core";
import { Global } from '../shared/Global';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { AlertController } from "ionic-angular";
import { IonAlert } from "../async/IonAlert";

@Injectable()  
export class UsuarioService implements IUsuarioService {

    private apiURL: string = Global.apiURL + "users";

    constructor(public http: HttpClient, public alertController: AlertController) {
    }

    criarUsuario(usuario: Usuario): Observable<Object> {
        if (!usuario.nome) IonAlert.presentAlert("Aviso", "Usuario","O campo nome é obrigatório!", this.alertController);
        if (!usuario.cpf) IonAlert.presentAlert("Aviso", "Usuario", "O campo CPF é obrigatório!", this.alertController);
        if (!usuario.email) IonAlert.presentAlert("Aviso", "Usuario", "O campo e-mail é obrigatório!", this.alertController);
        if (!this.validateEmail(usuario.email)) IonAlert.presentAlert("Aviso", "Usuario", "Utilize e-mail válido!", this.alertController);
        if (!usuario.senha) IonAlert.presentAlert("Aviso", "Usuario", "O campo senha é obrigatório!", this.alertController);
        if (!usuario.confirmarSenha) IonAlert.presentAlert("Aviso", "Usuario", "O campo confirmar senha é obrigatório!", this.alertController);
        if (!usuario.tipo) {
            usuario.tipo = "Cliente";
        } else {
            usuario.tipo = "Funcionário"
        }
        if (usuario.senha != usuario.confirmarSenha) IonAlert.presentAlert("Aviso", "Usuario", "As senhas estão incoerentes!", this.alertController);
        return this.http.post(this.apiURL, usuario);
    }
    atualizarUsuario(usuario: Usuario): Observable<Object> {
        if (!usuario.nome) IonAlert.presentAlert("Aviso", "Usuario","O campo nome é obrigatório!", this.alertController);
        if (!usuario.cpf) IonAlert.presentAlert("Aviso", "Usuario", "O campo CPF é obrigatório!", this.alertController);
        if (!usuario.email) IonAlert.presentAlert("Aviso", "Usuario", "O campo e-mail é obrigatório!", this.alertController);
        if (!this.validateEmail(usuario.email)) IonAlert.presentAlert("Aviso", "Usuario", "Utilize e-mail válido!", this.alertController);
        if (!usuario.senha) IonAlert.presentAlert("Aviso", "Usuario", "O campo senha é obrigatório!", this.alertController);
        if (!usuario.confirmarSenha) IonAlert.presentAlert("Aviso", "Usuario", "O campo confirmar senha é obrigatório!", this.alertController);
        if (!usuario.tipo) {
            usuario.tipo = "Cliente";
        } else {
            usuario.tipo = "Funcionário"
        }
        if (usuario.senha != usuario.confirmarSenha) IonAlert.presentAlert("Aviso", "Usuario", "As senhas estão incoerentes!", this.alertController);
        return this.http.put(this.apiURL+"/"+usuario.id, usuario);
    }
    recuperarSenha(id: number): Observable<Object> {
        throw new Error("Method not implemented.");
    }
    login(usuario: Usuario): Observable<Object> {
        if (!usuario.email) IonAlert.presentAlert("Aviso", "Usuario", "O campo e-mail é obrigatório!", this.alertController);
        if (!this.validateEmail(usuario.email)) IonAlert.presentAlert("Aviso", "Usuario", "Utilize e-mail válido!", this.alertController);
        if (!usuario.senha) IonAlert.presentAlert("Aviso", "Usuario", "O campo senha é obrigatório", this.alertController);
        return this.http.post(this.apiURL +"/buscarusuario/", usuario);
    }
    logar(usuario: Object): void {
        localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
    }
    logout(): void {
        localStorage.removeItem("usuarioLogado");
    }
    retornarUsuarioLogado(): Object {
        let usuarioLogado: Object = JSON.parse(localStorage.getItem("usuarioLogado"));
        return usuarioLogado;
    }
    removerUsuario(usuario: Usuario): Observable<Object> {
        return this.http.delete(this.apiURL + "/" + usuario.id);
    }
  
    //////////////////////////////////

    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
}  
