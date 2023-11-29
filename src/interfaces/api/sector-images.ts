import { ISector } from './sector';

export interface ISectorImages {
    setorId: string;
    setor: ISector;
    hash: string;
    fileName: string;
    legenda: string;
    ordem: number;
    id: string;
    createdWhen: string;
    updatedWhen: string;
    deletedWhen: string;
    createdByUserId: string | null;
    updatedByUserId: string | null;
}