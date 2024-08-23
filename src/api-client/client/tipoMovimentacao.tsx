'use client';
import { TipoMovimentacao } from "@prisma/client";
import { Optional } from "@prisma/client/runtime/library";
import { fetcher } from "./fetcher";
import { ExtractResponse } from "@/src/utils/extractResponse";
import type { GET } from "@/src/app/api/tipoMovimentacao/route";


export type TipoMovimentacaoGet = ExtractResponse<Awaited<ReturnType<typeof GET>>>;

export async function get(input: { id?: string }): Promise<TipoMovimentacaoGet[0] | TipoMovimentacaoGet> {
  try {
    const url = `/tipoMovimentacao${input?.id ? `/${input.id}` : ""}`;
    const response = await fetcher(url);
    return response.json();
  } catch (error) {
    console.error('Erro ao obter tipo de movimentação:', error);
    throw error;
  }
}

export async function remove({ id }: { id: string }): Promise<void> {
  try {
    const response = await fetcher(`/tipoMovimentacao/${id}`, { method: "DELETE" });
    if (!response.ok) {
      throw new Error(`Erro ao deletar tipo de movimentação com ID ${id}`);
    }
  } catch (error) {
    console.error(`Erro ao deletar tipo de movimentação com ID ${id}:`, error);
    throw error;
  }
}

export async function update(data: Optional<TipoMovimentacao> & { id: string }): Promise<void> {
  try {
    const response = await fetcher(`/tipoMovimentacao/${data.id}`, { method: "PUT", body: JSON.stringify(data) });
    if (!response.ok) {
      throw new Error(`Erro ao atualizar o tipo de movimentação com ID ${data.id}`);
    }
  } catch (error) {
    console.error(`Erro ao atualizar o tipo de movimentação com ID ${data.id}:`, error);
    throw error;
  }
}

export async function create(data: Omit<TipoMovimentacao, "id">): Promise<void> {
  try {
    const response = await fetcher("/tipoMovimentacao", { method: "POST", body: JSON.stringify(data) });
    if (!response.ok) {
      throw new Error("Erro ao criar tipo de movimentacao");
    }
  } catch (error) {
    console.error("Erro ao criar tipo de movimentacao:", error);
    throw error;
  }
}