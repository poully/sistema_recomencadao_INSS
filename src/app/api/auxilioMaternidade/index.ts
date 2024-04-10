import { AuxilioMaternidadeUncheckedCreateInputObjectSchema } from "@/prisma/validation/schemas";
import { PrismaClient } from "@prisma/client";
import { differenceInDays, differenceInMonths, differenceInYears } from 'date-fns';
import { NextApiRequest, NextApiResponse } from "next";
import * as z from "zod";


const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;


    if (method === "GET") {
        const auxilios = await prisma.auxilioMaternidade.findMany();

        return res.status(200).json({
            data: auxilios,
        })
    } else if (method === "POST") {
        try {
            const beneficio = await prisma.beneficio.create({
                data: {
                    status: 'cadastrado'
                }
            })
            const data = AuxilioMaternidadeUncheckedCreateInputObjectSchema.parse({ ...req.body, beneficioId: beneficio.id });
            const diasDeIntervalo = differenceInDays(new Date(), new Date(data.dataSaidaEmprego));

            if (diasDeIntervalo > 442) {
                throw new Error("Não está no período segurado");
            }
            if (data?.dataNascimentoBebe) {
                const idadeCrianca = differenceInYears(new Date(), new Date(data.dataNascimentoBebe));
                if (idadeCrianca > 5)
                    throw new Error("Criança maior de 5 anos, não tem direito.");
            }
            if (data?.contribuinteIndividual && data?.dataContribuicao) {
                const qtdContribuicao = differenceInMonths(new Date(), new Date(data.dataContribuicao));
                if (qtdContribuicao < 10)
                    throw new Error("Contribuição mínima de 10 meses, não tem direito.");
            }
            const auxilio = await prisma.auxilioMaternidade.create({
                data
            });
            return res.status(201).json({
                data: auxilio,
                error: null,
            })

        } catch (err: any) {
            if (err instanceof z.ZodError) {
                const errors = err;
                return res.status(404).json({ errors });

            }
            return res.status(404).json({
                errors: {
                    message: err.message,
                    fieldErrors: {},
                }
            });
        }
    }
    return res.status(404).json({ message: 'Route not found' });
}

