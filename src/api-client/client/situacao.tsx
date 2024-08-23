'use client';
import { Situacao } from "@prisma/client";
import { Optional } from "@prisma/client/runtime/library";
import { fetcher } from "./fetcher";
import { ExtractResponse } from "@/src/utils/extractResponse";
import type { GET } from "@/src/app/api/situacao/route";


export type SituacaoGet = ExtractResponse<Awaited<ReturnType<typeof GET>>>;

export async function get(input: { id?: string }): Promise<SituacaoGet[0] | SituacaoGet> {
  try {
    const url = `/situacao${input?.id ? `/${input.id}` : ""}`;
    const response = await fetcher(url);
    return response.json();
  } catch (error) {
    console.error('Erro ao obter situação:', error);
    throw error;
  }
}

export async function remove({ id }: { id: string }): Promise<void> {
  try {
    const response = await fetcher(`/situacao/${id}`, { method: "DELETE" });
    if (!response.ok) {
      throw new Error(`Erro ao deletar situação com ID ${id}`);
    }
  } catch (error) {
    console.error(`Erro ao deletar situação com ID ${id}:`, error);
    throw error;
  }
}

export async function update(data: Optional<Situacao> & { id: string }): Promise<void> {
  try {
    const response = await fetcher(`/situacao/${data.id}`, { method: "PUT", body: JSON.stringify(data) });
    if (!response.ok) {
      throw new Error(`Erro ao atualizar a situação com ID ${data.id}`);
    }
  } catch (error) {
    console.error(`Erro ao atualizar a situação com ID ${data.id}:`, error);
    throw error;
  }
}

export async function create(data: Omit<Situacao, "id">): Promise<void> {
  try {
    const response = await fetcher("/situacao", { method: "POST", body: JSON.stringify(data) });
    if (!response.ok) {
      throw new Error("Erro ao criar situacao");
    }
  } catch (error) {
    console.error("Erro ao criar situacao:", error);
    throw error;
  }
}