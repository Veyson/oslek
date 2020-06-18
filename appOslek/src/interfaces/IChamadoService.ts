import { Chamado } from "../models/Chamado";
import { Observable } from "rxjs/Observable";

export interface IChamadoService {
    criarChamados(chamado: Chamado) : Observable<Object>;
    buscarChamados(id: number) : Chamado;
    listarChamados() :Observable<Object>;
    totalChamados() : number;
}