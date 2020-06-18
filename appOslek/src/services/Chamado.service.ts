import { IChamadoService } from "../interfaces/IChamadoService";
import { Chamado } from "../models/Chamado";
import { Injectable } from "@angular/core";
import { Usuario } from "../models/Usuario";
import { UsuarioService } from "./Usuario.service";
import { Global } from '../shared/Global';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
@Injectable()
export class ChamadoService implements IChamadoService {
    public usuarioLogado: Usuario;
    public listaChamados: Array<Chamado>;
    public apiURL: string = Global.apiURL+"chamados";

    constructor(public usuarioService: UsuarioService, public http: HttpClient) {
        this.usuarioLogado = this.usuarioService.retornarUsuarioLogado();
        let Chamados: Array<Chamado> = JSON.parse( localStorage.getItem('Chamados'));
        this.listaChamados = (Chamados) ? Chamados : [];
    }

    criarChamados(Chamado: Chamado): Observable<Object> {

        if ( !Chamado.titulo ) throw new Error("O campo titulo é obrigatório.");
        if ( !Chamado.descricao ) throw new Error("O campo decrição é obrigatório.");
        if ( !Chamado.status ) throw new Error("O campo status é obrigatório.");
        if ( !Chamado.data ) throw new Error("O campo data é obrigatório.");
        if ( !Chamado.image ) throw new Error("O campo imagem é obrigatório.");
        if ( !Chamado.setor_id) throw new Error("O campo setor é obrigatório.");

        Chamado.usuario_id = this.usuarioLogado.id;

        return this.http.post(this.apiURL, Chamado);

    }
    buscarChamados(id: number): Chamado {
        if ( !id ) throw new Error("Nenhum Chamado foi escolhido.");
        let Chamado: Chamado = this.listaChamados.find(c => c.id == id);
        return Chamado;
    }
    listarChamados(): Observable<Object> {
        return this.http.get(this.apiURL+"/chamadousuarios/"+this.usuarioLogado.id);
    }
    totalChamados(): number {
        return this.listaChamados.length;
    }

}
