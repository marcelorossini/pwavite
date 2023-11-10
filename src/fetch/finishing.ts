import { fetchWrapper } from "./base";
import { IFinishing } from "@/interfaces/api/finishing";

export async function getAll() {
  const response = await fetchWrapper<IFinishing[]>('/api/Acabamento/GetAllOrdered'); 
  return response
}


