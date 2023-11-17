import { fetchWrapper } from "./base";
import { IDimension } from "@/interfaces/api/dimension";

export async function getByProductId(id: string) {
  if (!id)
    throw new Error("Produto não encontrado");

  return await fetchWrapper<IDimension[]>(`/api/ProdutosMedidas/GetAllForModal?Produto=${id}`); 
}


