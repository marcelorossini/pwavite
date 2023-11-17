import { fetchWrapper } from "./base";
import { IImage } from "@/interfaces/api/image";

export async function get(id: string) {
  return await fetchWrapper<IImage[]>(
    `/api/ProdutosImagensPrincipais/GetAllForGrid?Produto=${id}`,
    {
      formatToStore(data) {
        return data.map((item) => {
          const { fileName, padrao, ...rest } = item;
          return {
            fileName,
            padrao,
          };
        });
      },
    }
  );
}
