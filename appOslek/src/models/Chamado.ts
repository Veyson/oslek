import { Usuario } from "./Usuario";

export class Chamado {
  public chamado_id: number = null;
  public titulo: string = null;
  public descricao: string = null;
  public status: string = null;
  public usuario_id: Usuario = null;
  public setor: string = null;
}