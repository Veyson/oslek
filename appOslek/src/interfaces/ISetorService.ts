import { Setor } from "../models/Setor";
import { Observable } from "rxjs/Observable";

export interface ISetorService {
    criarSetores(setor: Setor) : Observable<Object>;
    buscarSetores(id: number) : Setor;
    listarSetores() :Observable<Object>;
    totalSetores() : number;
}