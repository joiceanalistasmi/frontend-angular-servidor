export class Servidor {

  id!: number;
  nome!: string;
  matricula!: string;
  cargoAtual!: string;
  setor! : string;
  dataAvaliacao! : Date;
  tipoAvaliacao! : string;

  constructor(id: number, nome: string, matricula: string, cargoAtual: string, setor: string, dataCriacao: Date, tipoAvaliacao?: string) {
    this.id = id;
    this.nome = nome;
    this.matricula = matricula;
    this.cargoAtual = cargoAtual;
    this.setor = setor;
    this.dataAvaliacao = dataCriacao;
    this.tipoAvaliacao = tipoAvaliacao || 'Concursado';
    }

     

}
