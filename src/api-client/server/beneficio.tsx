import type { GET, POST } from "@/src/app/api/beneficio/route";
import { fetcher } from "./fetcher";
import { ExtractResponse } from "@/src/utils/extractResponse";

export type BeneficioGet = ExtractResponse<Awaited<ReturnType<typeof GET>>>;

export async function get({ id }: { id?: string }): Promise<BeneficioGet[0] | BeneficioGet> {
  try {
    const url = `/beneficio${id ? `/${id}` : ""}`;
    const response = await fetcher(url);
    return response.json();
  } catch (error) {
    console.error('Erro ao obter beneficios:', error);
    throw error;
  }
}
