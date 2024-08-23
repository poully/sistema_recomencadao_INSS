'use client';
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

export async function remove({ id }: { id: string }): Promise<void> {
  try {
    const response = await fetcher(`/tipoBeneficio/${id}`, { method: "DELETE" });
    if (!response.ok) {
      throw new Error(`Erro ao deletar tipo de benefício com ID ${id}`);
    }
  } catch (error) {
    console.error(`Erro ao deletar tipo de benefício com ID ${id}:`, error);
    throw error;
  }
}

export async function update(data: Optional<Tipo> & { id: string }): Promise<void> {
  try {
    const response = await fetcher(`/tipoBeneficio/${data.id}`, { method: "PUT", body: JSON.stringify(data) });
    if (!response.ok) {
      throw new Error(`Erro ao atualizar o tipo de benefício com ID ${data.id}`);
    }
  } catch (error) {
    console.error(`Erro ao atualizar o tipo de benefício com ID ${data.id}:`, error);
    throw error;
  }
}

export async function create(data: Omit<Tipo, "id">): Promise<void> {
  try {
    const response = await fetcher("/tipoBeneficio", { method: "POST", body: JSON.stringify(data) });
    if (!response.ok) {
      throw new Error("Erro ao criar tipoBeneficio");
    }
  } catch (error) {
    console.error("Erro ao criar tipoBeneficio:", error);
    throw error;
  }
}