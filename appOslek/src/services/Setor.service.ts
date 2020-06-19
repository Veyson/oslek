import { ISetorService } from "../interfaces/ISetorService";
import { Setor } from "../models/Setor";
import { Injectable } from "@angular/core";
import { Global } from '../shared/Global';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
@Injectable()
export class SetorService implements ISetorService {
    public listaSetores: Array<Setor>;
    public apiURL: string = Global.apiURL+"setors";

    constructor(public http: HttpClient) {
        let Setores: Array<Setor> = JSON.parse( localStorage.getItem('Setores'));
        this.listaSetores = (Setores) ? Setores : [];
    }

    criarSetores(setor: Setor): Observable<Object> {

        if ( !setor.nome ) throw new Error("O campo nome é obrigatório.");

        return this.http.post(this.apiURL, setor);

    }
    buscarSetores(id: number): Setor {
        if ( !id ) throw new Error("Nenhum Setor foi escolhido.");
        let Setor: Setor = this.listaSetores.find(c => c.id == id);
        return Setor;
    }
    listarSetores(): Observable<Object> {
        return this.http.get(this.apiURL+"/setorempresas/");
    }
    totalSetores(): number {
        return this.listaSetores.length;
    }

}
