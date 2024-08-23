'use client';
import type { GET } from "@/src/app/api/pessoa/route";
import { ExtractResponse } from "@/src/utils/extractResponse";
import { Pessoa } from "@prisma/client";
import { Optional } from "@prisma/client/runtime/library";
import { fetcher } from "./fetcher";


export type PessoaGet = ExtractResponse<Awaited<ReturnType<typeof GET>>>;

export async function get(input: { id?: string }): Promise<PessoaGet[0] | PessoaGet> {
  try {
    const url = `/pessoa${input?.id ? `/${input.id}` : ""}`;
    const response = await fetcher(url);
    return response.json();
  } catch (error) {
    console.error('Erro ao obter pessoa:', error);
    throw error;
  }
}

export async function remove({ id }: { id: string }): Promise<void> {
  try {
    const response = await fetcher(`/pessoa/${id}`, { method: "DELETE" });
    if (!response.ok) {
      throw new Error(`Erro ao deletar pessoa com ID ${id}`);
    }
  } catch (error) {
    console.error(`Erro ao deletar pessoa com ID ${id}:`, error);
    throw error;
  }
}

export async function update(data: Optional<Pessoa> & { id: string }): Promise<void> {
  try {
    const response = await fetcher(`/pessoa/${data.id}`, { method: "PUT", body: JSON.stringify(data) });
    if (!response.ok) {
      throw new Error(`Erro ao atualizar a pessoa com ID ${data.id}`);
    }
  } catch (error) {
    console.error(`Erro ao atualizar a pessoa com ID ${data.id}:`, error);
    throw error;
  }
}

export async function create(data: Omit<Pessoa, "id">): Promise<void> {
  try {
    const response = await fetcher("/pessoa", { method: "POST", body: JSON.stringify(data) });
    if (!response.ok) {
      throw new Error("Erro ao criar pessoa");
    }
  } catch (error) {
    console.error("Erro ao criar pessoa:", error);
    throw error;
  }
}