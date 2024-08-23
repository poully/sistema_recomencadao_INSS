import { Tipo } from "@prisma/client";
import { Optional } from "@prisma/client/runtime/library";
import { fetcher } from "./fetcher";
import { ExtractResponse } from "@/src/utils/extractResponse";
import type { GET } from "@/src/app/api/tipoBeneficio/route";


export type TipoBeneficioGet = ExtractResponse<Awaited<ReturnType<typeof GET>>>;

export async function get(input: { id?: string }): Promise<TipoBeneficioGet[0] | TipoBeneficioGet> {
  try {
    const url = `/tipoBeneficio${input?.id ? `/${input.id}` : ""}`;
    const response = await fetcher(url);
    return response.json();
  } catch (error) {
    console.error('Erro ao obter tipo de benefício:', error);
    throw error;
  }
}
