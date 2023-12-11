import { fetchWrapper } from "./base";
import { IStore } from "@/interfaces/api/store";

export async function GetAllPrincipal() {
  return await fetchWrapper<IStore[]>('/api/Rede/GetAllPrincipal')
}
