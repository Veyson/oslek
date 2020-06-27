import { Usuario } from "../models/Usuario";
import { Observable } from "rxjs/Observable";

export interface IUsuarioService {
    criarUsuario(usuario: Usuario) : Observable<Object>;
    atualizarUsuario(usuario: Usuario) : Observable<Object>;
    recuperarSenha(id: number) : Observable<Object>;
    login(usuario: Usuario) : Observable<Object>;
    logar(usuario: Usuario) : void;
    logout(): void;
    retornarUsuarioLogado() : Object;
    removerUsuario(usuario: Usuario): Observable<Object>;
}
