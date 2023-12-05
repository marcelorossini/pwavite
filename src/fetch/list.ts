import { fetchWrapper } from "./base";
import { IList } from "@/interfaces/api/list";

export async function getByUser(id: string) {
  return await fetchWrapper<IList>(`api/Carrinho/GetAllForModal?Usuario=marcelo.rossini%40promarket.ind.br`); 
}