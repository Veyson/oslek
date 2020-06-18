import { ISetorService } from "../interfaces/ISetorService";
import { Setor } from "../models/Setor";
import { Injectable } from "@angular/core";
import { Empresa } from "../models/Empresa";
import { EmpresaService } from "./Empresa.service";
import { Global } from '../shared/Global';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
@Injectable()
export class SetorService implements ISetorService {
    public empresaRelacionada: Empresa;
    public listaSetores: Array<Setor>;
    public apiURL: string = Global.apiURL+"setors";

    constructor(public empresaService: EmpresaService, public http: HttpClient) {
        this.empresaRelacionada = this.empresaService.retornarEmpresaRelacionada();
        let Setores: Array<Setor> = JSON.parse( localStorage.getItem('Setores'));
        this.listaSetores = (Setores) ? Setores : [];
    }

    criarSetores(Setor: Setor): Observable<Object> {

        if ( !Setor.nome ) throw new Error("O campo nome é obrigatório.");

        Setor.empresa_id = this.empresaRelacionada.id;

        return this.http.post(this.apiURL, Setor);

    }
    buscarSetores(id: number): Setor {
        if ( !id ) throw new Error("Nenhum Setor foi escolhido.");
        let Setor: Setor = this.listaSetores.find(c => c.id == id);
        return Setor;
    }
    listarSetores(): Observable<Object> {
        return this.http.get(this.apiURL+"/setorempresas/"+this.empresaRelacionada.id);
    }
    totalSetores(): number {
        return this.listaSetores.length;
    }

}
