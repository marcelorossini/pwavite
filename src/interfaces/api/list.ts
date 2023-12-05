export interface IList {
    usuario: string;
    titulo: string;
    carrinhoItens: any[] | null; // Substitua 'any[]' pelo tipo correto, se possível
    id: string;
    createdWhen: string;
    updatedWhen: string;
    deletedWhen: string;
    createdByUserId: string | null;
    updatedByUserId: string | null;
}