import { Situacao } from "@prisma/client";
import { fetcher } from "./fetcher";
import { ExtractResponse } from "@/src/utils/extractResponse";
import type { GET } from "@/src/app/api/situacao/route";


export type SituacaoGet = ExtractResponse<Awaited<ReturnType<typeof GET>>>;

export async function get(input?: { id?: string }): Promise<SituacaoGet[0] | SituacaoGet> {
  try {
    const url = `/situacao${input?.id ? `/${input?.id}` : ""}`;
    const response = await fetcher(url);
    return response.json();
  } catch (error) {
    console.error('Erro ao obter situação:', error);
    throw error;
  }
}