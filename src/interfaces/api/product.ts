import { IImage } from "./image";
import { ISector } from "./sector";
export interface IProduct {
  codigo: string;
  nome: string;
  descricao: string | null;
  familiaId: string;
  familia: string | null;
  setorId: string;
  setor: ISector;
  imagemPrincipal: string;
  imagemVariacaoPrincipal: string;
  lstCreationIds: string | null;
  creationType: number;
  ordem: number;
  diferenciais: string;
  id: string;
  createdWhen: string;
  updatedWhen: string;
  deletedWhen: string;
  createdByUserId: string;
  updatedByUserId: string;
  caracteristicasId: string[];
  medidasId: string[];
  acabamentosId: string[];
  imagens: IImage[];
}
