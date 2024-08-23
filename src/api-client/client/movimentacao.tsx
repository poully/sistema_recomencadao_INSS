'use client';
import { Movimentacao } from "@prisma/client";
import { Optional } from "@prisma/client/runtime/library";
import { fetcher } from "./fetcher";
import { ExtractResponse } from "@/src/utils/extractResponse";
import type { GET } from "@/src/app/api/movimentacao/route";


export type MovimentacaoGet = ExtractResponse<Awaited<ReturnType<typeof GET>>>;

export async function get(input: { id?: string }): Promise<MovimentacaoGet | MovimentacaoGet[0]> {
  try {
    const url = `/movimentacao${input?.id ? `/${input.id}` : ""}`;
    const response = await fetcher(url);
    return response.json();
  } catch (error) {
    console.error('Erro ao obter movimentacao:', error);
    throw error;
  }
}

export async function remove({ id }: { id: string }): Promise<void> {
  try {
    const response = await fetcher(`/movimentacao/${id}`, { method: "DELETE" });
    if (!response.ok) {
      throw new Error(`Erro ao deletar movimentacao com ID ${id}`);
    }
  } catch (error) {
    console.error(`Erro ao deletar movimentacao com ID ${id}:`, error);
    throw error;
  }
}

export async function update(data: Optional<Movimentacao> & { id: string }): Promise<void> {
  try {
    const response = await fetcher(`/movimentacao/${data.id}`, { method: "PUT", body: JSON.stringify(data) });
    if (!response.ok) {
      throw new Error(`Erro ao atualizar a movimentacao com ID ${data.id}`);
    }
  } catch (error) {
    console.error(`Erro ao atualizar a movimentacao com ID ${data.id}:`, error);
    throw error;
  }
}

export async function create(data: Omit<Movimentacao, "id">): Promise<void> {
  try {
    const response = await fetcher("/movimentacao", { method: "POST", body: JSON.stringify(data) });
    if (!response.ok) {
      throw new Error("Erro ao criar movimentacao");
    }
  } catch (error) {
    console.error("Erro ao criar movimentacao:", error);
    throw error;
  }
}