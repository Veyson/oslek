import { IChamadoService } from "../interfaces/IChamadoService";
import { Chamado } from "../models/Chamado";
import { Injectable } from "@angular/core";
import { UsuarioService } from "./Usuario.service";
import { Global } from '../shared/Global';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { AlertController } from "ionic-angular";
import { IonAlert } from "../async/IonAlert";

@Injectable()
export class ChamadoService implements IChamadoService {
    
    public usuarioLogado: Object;
    public apiURL: string = Global.apiURL+"chamados";

    constructor(public usuarioService: UsuarioService, 
        public http: HttpClient, public alertController: AlertController) {

        this.usuarioLogado = this.usuarioService.retornarUsuarioLogado();
        console.log(this.usuarioLogado);
    }    

    criarChamados(chamado: Chamado): Observable<Object> {

        if ( !chamado.titulo ) IonAlert.presentAlert("Aviso", "Chamdo", "O campo título é obrigatório!", this.alertController);
        if ( !chamado.descricao ) IonAlert.presentAlert("Aviso", "Chamdo", "O campo descrição é obrigatório!", this.alertController);
        if ( chamado.setor === "1"){
            chamado.setor = "Administração";
        }else if ( chamado.setor === "2"){
            chamado.setor = "Biblioteca";
        }
        chamado.status = "Pendente";
        chamado.usuario_id = this.usuarioLogado[0].id;
        console.log(this.usuarioLogado[0].id);
        return this.http.post(this.apiURL, chamado);

    }

    atualizarChamado(chamado: Chamado): Observable<Object> {
        
        if ( chamado.status == "1"){
            chamado.status = "Pendente";
        }else if ( chamado.status == "2"){
            chamado.status = "Em andamento";
        }else if ( chamado.status == "3"){
            chamado.status = "Concluído"
        }
        return this.http.put(this.apiURL+"/"+chamado.id, chamado);
    }

    listarChamados(): Observable<Object> {
        return this.http.get(this.apiURL);
    }

    listarChamadosId(): Observable<Object> {
        return this.http.get(this.apiURL+"/chamadousuario/"+this.usuarioLogado[0].id);
    }

    contarChamados(): Observable<Object> {
        return this.http.get(this.apiURL+"/status");
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

    killChamadoStorage(): void{
        localStorage.removeItem("detalharChamado");
    }
}
