export class Avaliacao {

    id: number;
    avaliador: string;
    dataAvaliacao: Date;
    nota: number;
    observacoes: string;
    periodo: Date;
    servidorId: number;

    constructor(
        id: number = 0,
        avaliador: string = '',
        dataAvaliacao: Date = new Date(),
        nota: number = 0,
        observacoes: string = '',
        periodo: Date = new Date(),
        servidorId: number = 0
    ) {
        this.id = id;
        this.avaliador = avaliador;
        this.dataAvaliacao = dataAvaliacao;
        this.nota = nota;
        this.observacoes = observacoes;
        this.periodo = periodo;
        this.servidorId = servidorId;
    }
}
