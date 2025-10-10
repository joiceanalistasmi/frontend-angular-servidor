export interface IServidor {
  id: number;
  nome: string;
  matricula: string;
  cpf: string;
  cargo: string;
  data_admissao: string | Date;
  statusServidor: string;
  vinculo_funcional: string;
}

export class Servidor implements IServidor {
  id: number;
  nome: string;
  matricula: string;
  cpf: string;
  cargo: string;
  data_admissao: string | Date;
  statusServidor: string;
  vinculo_funcional: string;

  constructor(
    id: number = 0,
    nome: string = '',
    matricula: string = '',
    cpf: string = '',
    cargo: string = '',
    data_admissao: string | Date = new Date(), // .. string ou Date
    vinculo_funcional: string = '',
    statusServidor: string = ''
  ) {
    this.id = id;
    this.nome = nome;
    this.matricula = matricula;
    this.cpf = cpf;
    this.cargo = cargo;
    this.data_admissao = data_admissao;
    this.vinculo_funcional = vinculo_funcional;
    this.statusServidor = statusServidor;
  }
}
export function formatarData(data: Date): string {
  return data.toISOString().split('T')[0];
}