import { fetchWrapper } from "./base";
import { IProduct } from "@/interfaces/api/product";

export async function get(id: string) {
  return await fetchWrapper<IProduct>(`/api/Produto?id=${id}`); 
}

export async function getAll() {
  return await fetchWrapper<IProduct[]>('/api/Produto/GetAllOrdered'); 
}

export async function getAllBySector(id: string) {
  return await fetchWrapper<IProduct[]>(`/api/Produto/GetAllFromSetor?Setor=${id}`); 
}

export async function getByCode(code: string) {
  return await fetchWrapper<IProduct>(`/api/Produto/GetByCode?code=${code}`); 
}

