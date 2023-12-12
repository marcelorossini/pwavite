import { IImage } from "./image";
export interface IStore {
  nome: string;
  analistaId: string;
  analistaNome: string;
  representanteId: string;
  representanteNome: string;
  provendaId: string;
  principal: boolean;
  redeImagem: IStoreImage[];
  id: string;
  createdWhen: string;
  updatedWhen: string;
  deletedWhen: string;
  createdByUserId: string | null;
  updatedByUserId: string;
}

export interface IStoreImage {
  redeId: string | null;
  imagemId: string | null;
  exibePaginaLoja: boolean;
  ordem: number;
  inativo: boolean;
  capa: boolean;
  rede: any; // Substitua 'any' pelo tipo correto, se possível
  imagem: IImage;
  id: string | null;
  createdWhen: string;
  updatedWhen: string;
  deletedWhen: string;
  createdByUserId: string | null;
  updatedByUserId: string | null;
}
