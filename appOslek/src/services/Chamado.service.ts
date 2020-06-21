import { IChamadoService } from "../interfaces/IChamadoService";
import { Chamado } from "../models/Chamado";
import { Injectable } from "@angular/core";
import { UsuarioService } from "./Usuario.service";
import { Global } from '../shared/Global';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
@Injectable()
export class ChamadoService implements IChamadoService {
    public usuarioLogado: Object;
    public listaChamados: Array<Chamado>;
    public apiURL: string = Global.apiURL+"chamados";

    constructor(public usuarioService: UsuarioService, public http: HttpClient) {
        this.usuarioLogado = this.usuarioService.retornarUsuarioLogado();
    }    

    criarChamados(chamado: Chamado): Observable<Object> {

        if ( !chamado.titulo ) throw new Error("O campo titulo é obrigatório.");
        if ( !chamado.descricao ) throw new Error("O campo decrição é obrigatório.");
        if ( chamado.setor == "1"){
            chamado.setor = "Administração";
        }else if ( chamado.setor == "2"){
            chamado.setor = "Biblioteca";
        }
        chamado.status = "Pendente";
        chamado.usuario_id = this.usuarioLogado[0].id;
        console.log(this.usuarioLogado[0].id);
        return this.http.post(this.apiURL, chamado);

    }
    listarChamados(): Observable<Object> {
        return this.http.get(this.apiURL);
    }

    removerChamado(chamado: Chamado): Observable<Object> {
        return this.http.delete(this.apiURL+"/"+chamado.id);
      }

    detalharChamado(chamado: Chamado): void{
        console.log(chamado);
        localStorage.setItem("detalharChamado", JSON.stringify(chamado));
    }

    retornarChamadoDetalhado(): Chamado{
        let chamadoDetalhado: Chamado = JSON.parse(localStorage.getItem("detalharChamado"));
        return chamadoDetalhado;
    }

    killChamadoStorage(){
        localStorage.removeItem("detalharChamado");
    }
}
