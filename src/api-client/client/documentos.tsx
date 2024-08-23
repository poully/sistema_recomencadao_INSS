'use client';
import { Documentos } from "@prisma/client";
import { Optional } from "@prisma/client/runtime/library";
import { fetcher } from "./fetcher";
import { ExtractResponse } from "@/src/utils/extractResponse";
import type { GET } from "@/src/app/api/tipoMovimentacao/route";


export type DocumentosGet = ExtractResponse<Awaited<ReturnType<typeof GET>>>;

export async function get(input: { id?: string }): Promise<DocumentosGet | DocumentosGet[0]> {
  try {
    const url = `/documentos${input?.id ? `/${input.id}` : ""}`;
    const response = await fetcher(url);
    return response.json();
  } catch (error) {
    console.error('Erro ao obter documento:', error);
    throw error;
  }
}

export async function remove({ id }: { id: string }): Promise<void> {
  try {
    const response = await fetcher(`/documentos/${id}`, { method: "DELETE" });
    if (!response.ok) {
      throw new Error(`Erro ao deletar documento com ID ${id}`);
    }
  } catch (error) {
    console.error(`Erro ao deletar documento com ID ${id}:`, error);
    throw error;
  }
}

export async function update(data: Optional<Documentos> & { id: string }): Promise<void> {
  try {
    const response = await fetcher(`/documentos/${data.id}`, { method: "PUT", body: JSON.stringify(data) });
    if (!response.ok) {
      throw new Error(`Erro ao atualizar o documento com ID ${data.id}`);
    }
  } catch (error) {
    console.error(`Erro ao atualizar o documento com ID ${data.id}:`, error);
    throw error;
  }
}
export async function create(data: Omit<Documentos, "id">): Promise<void> {
  try {
    const response = await fetcher("/documentos", { method: "POST", body: JSON.stringify(data) });
    if (!response.ok) {
      throw new Error("Erro ao criar documento");
    }
  } catch (error) {
    console.error("Erro ao criar documento:", error);
    throw error;
  }
}