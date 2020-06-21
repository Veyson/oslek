import { Usuario } from "../models/Usuario";
import { Observable } from "rxjs/Observable";

export interface IUsuarioService {
    criarUsuario(usuario: Usuario) : Observable<Object>;
    buscarUsuarioId(usuario: Usuario) :  Observable<Object>;
    listarUsuarios() :Observable<Object>;
    logar(usuario: Usuario) : void;
    retornarUsuarioLogado() : Object;
}
