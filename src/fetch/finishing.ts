import { fetchWrapper } from "./base";
import { IFinishing } from "@/interfaces/api/finishing";

export async function getAll() {
  const response = await fetchWrapper<IFinishing[]>('/api/Acabamento/GetAllOrdered'); 
  return response
}

export async function getByProductId(id: string) {
  if (!id)
    throw new Error("Produto não encontrado");

  return await fetchWrapper<IFinishing[]>(`/api/ProdutosAcabamentos/GetAllForModal?Produto=${id}`); 
}

