import { Chamado } from "../models/Chamado";
import { Observable } from "rxjs/Observable";

export interface IChamadoService {
    criarChamados(chamado: Chamado) : Observable<Object>;
    atualizarChamado(chamado: Chamado) : Observable<Object>;
    listarChamados() :Observable<Object>;
    removerChamado(chamado: Chamado): Observable<Object>
    detalharChamado(chamado: Chamado): void; 
    retornarChamadoDetalhado(): Chamado;
    killChamadoStorage(): void;
}