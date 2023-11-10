import { fetchWrapper, FetchResponse } from "./base";
import { ISector } from "@/interfaces/api/sector";


export async function getAll() {
  const response = await fetchWrapper<ISector[]>('/api/Setor/GetAllOrdered'); 
  //await new Promise(resolve => setTimeout(resolve, 3000));
  return response
}

export async function get(id: string) {
  return await fetchWrapper<ISector>(`/api/Setor?id=${id}`); 
}

export async function getImages(id: string) {
  const response = await fetchWrapper(`/api/ProdutosImagensPrincipais/GetAllFromSetor?SetorId=${id}`); 
  return response
}