'use client'

import { useCallback, useEffect, useState, useTransition } from "react";

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

export const useIbge = () => {

    const [estados, setEstados] = useState<Estado[]>([]);
    const [cidades, setCidades] = useState<Cidade[]>([]);
    const [cidadesLoading, startCidadesLoading] = useTransition();
    const [estadosLoading, startEstadosLoading] = useTransition();
    const fetchEstados = async () => {
        const estadosResponse = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados");
        const estadosData = await estadosResponse.json();
        setEstados(estadosData);
    };
    const fetchCidades = async (estadoId: number) => {
        const municipiosResponse = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoId}/municipios`);
        const municipios = await municipiosResponse.json();
        setCidades(municipios);
    }

    useEffect(() => {
        startEstadosLoading(fetchEstados);
    }, [startEstadosLoading]);

    const getEstadoIdBySigla = useCallback((sigla: string) => {
        const estado = estados.find(estado => estado.sigla === sigla);
        return estado?.id;
    }, [estados]);

    const getCidadeIdByName = useCallback((name: string) => {
        const cidade = cidades.find(cidade => cidade.nome === name);
        return cidade?.id;
    }, [cidades]);

    const setSelectedEstado = useCallback((sigla: string) => {
        const estadoId = getEstadoIdBySigla(sigla);
        startCidadesLoading(async () => {
            if (estadoId) {
                await fetchCidades(estadoId);
            }
        });
    }, [getEstadoIdBySigla, startCidadesLoading]);

    return { estados, cidades, cidadesLoading, estadosLoading, setSelectedEstado, getCidadeIdByName, getEstadoIdBySigla };
}