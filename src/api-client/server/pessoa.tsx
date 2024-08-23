import type { GET } from "@/src/app/api/pessoa/route";
import { ExtractResponse } from "@/src/utils/extractResponse";
import { Pessoa } from "@prisma/client";
import { fetcher } from "./fetcher";


export type PessoaGet = ExtractResponse<Awaited<ReturnType<typeof GET>>>;

export async function get(input: { id?: string }): Promise<PessoaGet | PessoaGet[0]> {
  try {
    const url = `/pessoa${input?.id ? `/${input.id}` : ""}`;
    const response = await fetcher(url);
    return response.json();
  } catch (error) {
    console.error('Erro ao obter pessoa:', error);
    throw error;
  }
}
