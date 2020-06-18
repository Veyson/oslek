import { IEmpresaService } from "../interfaces/IEmpresaService";
import { Empresa } from "../models/Empresa";
import { Injectable } from "@angular/core";
import { Global } from '../shared/Global';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
@Injectable()
export class EmpresaService implements IEmpresaService {
    public listaEmpresas: Array<Empresa>;
    public apiURL: string = Global.apiURL+"empresas";

    constructor(public http: HttpClient) {
        let Empresas: Array<Empresa> = JSON.parse( localStorage.getItem('Empresas'));
        this.listaEmpresas = (Empresas) ? Empresas : [];
    }

    criarEmpresas(Empresa: Empresa): Observable<Object> {

        if ( !Empresa.nome ) throw new Error("O campo nome é obrigatório.");
        if ( !Empresa.cnpj ) throw new Error("O campo cnpj é obrigatório.");

        return this.http.post(this.apiURL, Empresa);

    }
    buscarEmpresas(id: number): Empresa {
        if ( !id ) throw new Error("Nenhum Empresa foi escolhido.");
        let Empresa: Empresa = this.listaEmpresas.find(c => c.id == id);
        return Empresa;
    }
    listarEmpresas(): Observable<Object> {
        return this.http.get(this.apiURL+"/Empresas/");
    }
    totalEmpresas(): number {
        return this.listaEmpresas.length;
    }

    retornarEmpresaRelacionada(): Empresa {
        let empresaRelacionada: Empresa = JSON.parse(localStorage.getItem("empresaRelacionada"));
        return empresaRelacionada;
    }

}
