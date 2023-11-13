import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next";
import { format, differenceInDays } from 'date-fns';

format(new Date(2014, 1, 11), 'dd/MM/yyyy')
const hoje = new Date();

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    if (method === "GET") {
        const auxilios = await prisma.auxilioMaternidade.findMany();

        return res.status(200).json({
            data:
                auxilios,
        })
    } else if (method === "POST") {
        const { senhaGov, nomeMae, dataSaidaEmprego, dataNascimentoBebe, matriculaCertidao, dataRegistro,
            rua, numero, bairro, cep, contribuinteIndividual, dataContribuicao, beneficio_id } = req.body;
            // await prisma.auxilioMaternidade.create({
            //     data: {
            //         nomeMae,
            //         dataSaidaEmprego,
            //         dataNascimentoBebe,
            //         contribuinteIndividual,
            //         dataContribuicao,
            //         beneficio_id,
            //         dataRegistro,
            //         matriculaCertidao,
            //         cep,
            //         rua,
            //         numero,
            //         bairro,
                    
            //     }
            // })

        const diasDeIntervalo = differenceInDays(dataSaidaEmprego, hoje);
        const idadeCrianca = differenceInDays(dataNascimentoBebe, hoje);
        // const diasContribuicao = differenceInDays(dataContribuicao, hoje);

        console.log(`O intervalo entre ${format(dataSaidaEmprego, 'dd/MM/yyyy')} e ${format(hoje, 'dd/MM/yyyy')} é de ${diasDeIntervalo} dias.`);

        if (diasDeIntervalo <= 442) {

            if (idadeCrianca >= 1827) {

                // if(contribuinteIndividual === true && diasContribuicao >= 304){
                    
                // }
                const auxilio = await prisma.auxilioMaternidade.create({
                    data: {
                        senhaGov,
                        nomeMae,
                        dataSaidaEmprego,
                        dataNascimentoBebe,
                        matriculaCertidao,
                        dataRegistro,
                        rua,
                        numero,
                        bairro,
                        cep,
                        beneficio_id,
                    }
                });

                return res.status(201).json({
                    data: auxilio,
                })
            }
            return res.status(404).json({ message: 'Criança maior de 5 anos, não tem direito.' })
        }
        return res.status(404).json({ message: 'não está no periodo de segurado.' });
    }
    return res.status(404).json({ message: 'Route not found' });
}

