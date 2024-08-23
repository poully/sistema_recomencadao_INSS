'use client';
import { Especialista } from "@prisma/client";
import { Optional } from "@prisma/client/runtime/library";
import { fetcher } from "./fetcher";
import { ExtractResponse } from "@/src/utils/extractResponse";
import type { GET } from "@/src/app/api/especialista/route";


export type EspecialistaGet = ExtractResponse<Awaited<ReturnType<typeof GET>>>;

export async function get(input: { id?: string }): Promise<EspecialistaGet | EspecialistaGet[0]> {
  try {
    const url = `/especialista${input?.id ? `/${input.id}` : ""}`;
    const response = await fetcher(url);
    return response.json();
  } catch (error) {
    console.error('Erro ao obter beneficios:', error);
    throw error;
  }
}

export async function remove({ id }: { id: string }): Promise<void> {
  try {
    const response = await fetcher(`/especialista/${id}`, { method: "DELETE" });
    if (!response.ok) {
      throw new Error(`Erro ao deletar especialista com ID ${id}`);
    }
  } catch (error) {
    console.error(`Erro ao deletar especialista com ID ${id}:`, error);
    throw error;
  }
}

export async function update(data: Optional<Especialista> & { id: string }): Promise<void> {
  try {
    const response = await fetcher(`/especialista/${data.id}`, { method: "PUT", body: JSON.stringify(data) });
    if (!response.ok) {
      throw new Error(`Erro ao atualizar o especialista com ID ${data.id}`);
    }
  } catch (error) {
    console.error(`Erro ao atualizar o especialista com ID ${data.id}:`, error);
    throw error;
  }
}
export async function create(data: Omit<Especialista, "id">): Promise<void> {
  try {
    const response = await fetcher("/especialista", { method: "POST", body: JSON.stringify(data) });
    if (!response.ok) {
      throw new Error("Erro ao criar especialista");
    }
  } catch (error) {
    console.error("Erro ao criar especialista:", error);
    throw error;
  }
}