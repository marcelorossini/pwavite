import { fetchWrapper } from "./base";
import { IProduct } from "@/interfaces/api/product";

export async function getAll() {
  const response = await fetchWrapper<IProduct[]>('/api/Produto/GetAllOrdered'); 
  return response
}

export async function getAllBySector() {
  const response = await fetchWrapper<IProduct[]>('/api/Produto/GetAllOrdered'); 
  return response
}

export async function getByCode(code: string) {
  const response = await fetchWrapper<IProduct>(`/api/Produto/GetByCode?code=${code}`); 
  return response
}

