import { Usuario } from "./Usuario";

export class Chamado {
  public id: number = null;
  public titulo: string = null;
  public descricao: string = null;
  public status: string = null;
  public usuario_id: number = null;
  public setor: string = null;
  public created_at: Date = null;
  public usuario: Usuario = null;
}