'use client'

import { useEffect, useState, useTransition } from "react";

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

export const useIbge = (params?: { cidadeId?: string | number | undefined, onChangeEstado?: (nome: string) => void }) => {

    const [estados, setEstados] = useState<Estado[]>([]);
    const [cidades, setCidades] = useState<Cidade[]>([]);
    const [cidadesLoading, startCidadesLoading] = useTransition();
    const fetchEstados = async () => {
        const estadosResponse = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados");
        const estadosData = await estadosResponse.json();
        setEstados(estadosData);
    };
    useEffect(() => {

        if (params?.cidadeId) {
            setSelectedCidade(parseInt(`${params.cidadeId}`, 10));
        } else {
            fetchEstados();
        }



    }, [params?.cidadeId]);

    const setSelectedEstado = (estadoId: number, nome: string) => {
        if (params?.onChangeEstado) params.onChangeEstado(nome);
        startCidadesLoading(async () => {
            if (estadoId) {
                const municipiosResponse = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoId}/municipios`);
                const municipios = await municipiosResponse.json();
                setCidades(municipios);
            }
        });
    };
    const setSelectedCidade = async (cidadeId: number) => {
        fetchEstados();
        const municipioResponse = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${cidadeId}`);
        const municipio = await municipioResponse.json();
        setSelectedEstado(municipio.microrregiao.mesorregiao.UF.id, municipio.microrregiao.mesorregiao.UF.nome);
    };

    return { estados, cidades, cidadesLoading, setSelectedEstado, setSelectedCidade };
}