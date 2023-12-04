import { ISector } from './sector';
import { IProduct } from './product';

export interface ISectorImages {
    setorId: string;
    setor: ISector;
    hash: string;
    fileName: string;
    legenda: string;
    ordem: number;
    id: string;
    produtos: ISectorProductImage[];
    createdWhen: string;
    updatedWhen: string;
    deletedWhen: string;
    createdByUserId: string | null;
    updatedByUserId: string | null;
}

interface ISectorProductImage {
    x: number;
    y: number;
    setorImagemId: string;
    produtoId: string;
    produto: IProduct;
  }