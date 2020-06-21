import { IUsuarioService } from "../interfaces/IUsuarioService";
import { Usuario } from "../models/Usuario";
import { Injectable } from "@angular/core";
import { Global } from '../shared/Global';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
@Injectable()
export class UsuarioService implements IUsuarioService {
    public apiURL: string = Global.apiURL + "users";
    constructor(public http: HttpClient) {
    }
    criarUsuario(usuario: Usuario): Observable<Object> {
        if (!usuario.nome) throw new Error("O campo nome é obrigatório.");
        if (!usuario.cpf) throw new Error("O campo cpf é obrigatório.");
        if (!usuario.email) throw new Error("O campo email é obrigatório.");
        if (!usuario.senha) throw new Error("O campo senha é obrigatório.");
        if (!usuario.tipo) {
            usuario.tipo = "Cliente";
        } else {
            usuario.tipo = "Funcionário"
        }

        return this.http.post(this.apiURL, usuario);
    }
    authUsuario(usuario: Usuario): Observable<Object> {
        if (!usuario.email) throw new Error("O campo email é obrigatório.");
        if (!usuario.senha) throw new Error("O campo senha é obrigatório.");
        return this.http.post(this.apiURL +"/buscarusuario/", usuario);
    }
    buscarUsuarioId(usuario: Usuario): Observable<Object> {
        return this.http.post(this.apiURL +"/buscarusuarioId/", usuario);
    }
    listarUsuarios(): Observable<Object> {
        return this.http.get(this.apiURL);
    }
    logar(usuario: Object): void {
        localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
    }
    retornarUsuarioLogado(): Object {
        let usuarioLogado: Object = JSON.parse(localStorage.getItem("usuarioLogado"));
        return usuarioLogado;
    }
    logout(): void {
        localStorage.removeItem("usuarioLogado");
    }
    removerUsuario(usuario: Usuario): Observable<Object> {
        return this.http.delete(this.apiURL + "/" + usuario.id);
    }
  
}
