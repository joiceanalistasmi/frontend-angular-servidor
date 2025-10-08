export interface IServidor {
  id: number;
  nome: string;
  matricula: string;
  cargoAtual: string;
  setor: string;
  dataAvaliacao: Date;
  tipoAvaliacao: string;
}

export class Servidor implements IServidor {
  id: number;
  nome: string;
  matricula: string;
  cargoAtual: string;
  setor: string;
  dataAvaliacao: Date;
  tipoAvaliacao: string;

  constructor(
    id: number = 0,
    nome: string = '',
    matricula: string = '',
    cargoAtual: string = '',
    setor: string = '',
    dataAvaliacao: Date = new Date(),
    tipoAvaliacao: string = ''
  ) {
    this.id = id;
    this.nome = nome;
    this.matricula = matricula;
    this.cargoAtual = cargoAtual;
    this.setor = setor;
    this.dataAvaliacao = dataAvaliacao;
    this.tipoAvaliacao = tipoAvaliacao;
  }
}
