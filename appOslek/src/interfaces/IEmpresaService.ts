import { Empresa } from "../models/Empresa";
import { Observable } from "rxjs/Observable";

export interface IEmpresaService {
    criarEmpresas(empresa: Empresa) : Observable<Object>;
    buscarEmpresas(id: number) : Empresa;
    listarEmpresas() :Observable<Object>;
    totalEmpresas() : number;
}