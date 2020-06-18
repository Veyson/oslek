import { Usuario } from "../models/Usuario";
import { Observable } from "rxjs/Observable";

export interface IUsuarioService {
    criarUsuario(usuario: Usuario) : Observable<Object>;
    buscarUsuario(id: number) : Usuario;
    listarUsuarios() :Observable<Object>;
    logar(usuario: Usuario) : void;
    retornarUsuarioLogado() : Usuario;
}
