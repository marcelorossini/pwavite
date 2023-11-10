export interface ISector {
    nome: string;
    descricao: string;
    parent: any | null;
    mapJson: any | null;
    pai: any | null;
    filhos: Object[];
    cor: string;
    corHover: string;
    ordem: number;
    icone: string;
    id: string;
    createdWhen: string;
    updatedWhen: string;
    deletedWhen: string;
    createdByUserId: string | null;
    updatedByUserId: string | null;
}