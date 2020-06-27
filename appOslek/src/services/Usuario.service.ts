import { IUsuarioService } from "../interfaces/IUsuarioService";
import { Usuario } from "../models/Usuario";
import { Injectable } from "@angular/core";
import { Global } from '../shared/Global';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()  
export class UsuarioService implements IUsuarioService {

    private apiURL: string = Global.apiURL + "users";

    constructor(public http: HttpClient) {
    }

    criarUsuario(usuario: Usuario): Observable<Object> {
        if (!usuario.nome) throw new Error("O campo nome é obrigatório.");
        if (!usuario.cpf) throw new Error("O campo cpf é obrigatório.");
        if (!usuario.email) throw new Error("O campo email é obrigatório.");
        if (!this.validateEmail(usuario.email)) throw new Error("Utilize e-mail valido");
        if (!usuario.senha) throw new Error("O campo senha é obrigatório.");
        if (!usuario.confirmarSenha) throw new Error("O campo confirmar senha é obrigatório.");
        if (!usuario.tipo) {
            usuario.tipo = "Cliente";
        } else {
            usuario.tipo = "Funcionário"
        }
        if (usuario.senha != usuario.confirmarSenha) throw new Error("As senhas estão diferentes.");
        return this.http.post(this.apiURL, usuario);
    }
    atualizarUsuario(usuario: Usuario): Observable<Object> {
        if (!usuario.nome) throw new Error("O campo nome é obrigatório.");
        if (!usuario.cpf) throw new Error("O campo cpf é obrigatório.");
        if (!usuario.email) throw new Error("O campo email é obrigatório.");
        if (!this.validateEmail(usuario.email)) throw new Error("Utilize e-mail valido");
        if (!usuario.senha) throw new Error("O campo senha é obrigatório.");
        if (!usuario.confirmarSenha) throw new Error("O campo confirmar senha é obrigatório.");
        if (!usuario.tipo) {
            usuario.tipo = "Cliente";
        } else {
            usuario.tipo = "Funcionário"
        }
        if (usuario.senha != usuario.confirmarSenha) throw new Error("As senhas estão diferentes.");
        return this.http.put(this.apiURL, usuario);
    }
    recuperarSenha(id: number): Observable<Object> {
        throw new Error("Method not implemented.");
    }
    login(usuario: Usuario): Observable<Object> {
        if (!usuario.email) throw new Error("O campo email é obrigatório.");
        if (!this.validateEmail(usuario.email)) throw new Error("Utilize e-mail valido");
        if (!usuario.senha) throw new Error("O campo senha é obrigatório.");
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
