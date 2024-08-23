'use client';

import type { GET, POST } from "@/src/app/api/beneficio/route";
import { fetcher } from "./fetcher";
import { ExtractResponse } from "@/src/utils/extractResponse";
import { Beneficio } from "@prisma/client";

export type BeneficioGet = ExtractResponse<Awaited<ReturnType<typeof GET>>>;
export type BeneficioCreate = ExtractResponse<Awaited<ReturnType<typeof GET>>>;

export async function get({ id }: { id?: string }): Promise<BeneficioGet | BeneficioGet[0]> {
  try {
    const url = `/beneficio${id ? `/${id}` : ""}`;
    const response = await fetcher(url);
    return response.json();
  } catch (error) {
    console.error('Erro ao obter beneficios:', error);
    throw error;
  }
}


export async function remove({ id }: { id: string }) {
  try {
    const response = await fetcher(`/beneficio/${id}`, { method: "DELETE" });
    return response.json();
  } catch (error) {
    console.error(`Erro ao remover benefício ${id}`, error);
    throw error;
  }
}
export type BeneficioCreateInput = {
  documentos: {
    imagem: string;
    descricao: string;
  }[];
  numero_beneficio: string;
  situacao_id: string;
  pessoa_id: string;
  tipo_id: string;
  especialista_id: string;
  tipo_movimentacao_id: string;
};
export async function create(data: BeneficioCreateInput): Promise<BeneficioCreate> {
  try {
    const response = await fetcher(`/beneficio`, { method: "POST", body: JSON.stringify(data) });
    return response.json();
  } catch (error) {
    console.error(`Erro ao criar`, error);
    throw error;
  }
}

export async function update(data: BeneficioCreateInput & { id: string }) {
  try {
    const response = await fetcher(`/beneficio/${data.id}`, { method: "PUT" });
    return response.json();
  } catch (error) {
    console.error(`Erro ao alterar`, error);
    throw error;
  }
}