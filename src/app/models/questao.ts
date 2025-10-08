export class Questao {

    id: number;
    descricao: string;
    titulo: string;
    valor: number;

    constructor(
        id: number = 0,
        descricao: string = '',
        titulo: string = '',
        valor: number = 0
    ) {
        this.id = id;
        this.descricao = descricao;
        this.titulo = titulo;
        this.valor = valor;
    }
}
