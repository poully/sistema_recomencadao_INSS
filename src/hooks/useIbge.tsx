'use client'

import { useTransition, useEffect, useState } from "react";

export type Estado = {
    id: number;
    nome: string;
    sigla: string;
    regiao: {
        id: string;
        sigla: string;
        nome: string;
    }
};
export type Cidade = {
    id: number;
    nome: string;
}

export const useIbge = (params?: { cidadeId?: string | number | undefined, onChangeEstado?: (id: number) => void }) => {

    const [estados, setEstados] = useState<Estado[]>([]);
    const [cidades, setCidades] = useState<Cidade[]>([]);
    const [cidadesLoading, startCidadesLoading] = useTransition();
    useEffect(() => {

        const fetchEstados = async () => {
            const estadosResponse = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados");
            const estados = await estadosResponse.json();
            setEstados(estados);
        };
        fetchEstados();
        if (params?.cidadeId) {
            setSelectedCidade(params.cidadeId);
        }

    }, [params.cidadeId]);

    const setSelectedEstado = (estadoId: number) => {
        if (params?.onChangeEstado) params.onChangeEstado(estadoId);
        startCidadesLoading(async () => {
            if (estadoId) {
                const municipiosResponse = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoId}/municipios`);
                const municipios = await municipiosResponse.json();
                setCidades(municipios);
            }
        });
    };
    const setSelectedCidade = async (cidadeId: string) => {
        const municipioResponse = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${cidadeId}`);
        const municipio = await municipioResponse.json();
        setSelectedEstado(municipio.microrregiao.mesorregiao.UF.id);
    };

    return { estados, cidades, cidadesLoading, setSelectedEstado, setSelectedCidade };
}