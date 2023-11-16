import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuxilioMaternidadeMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    nomeMae: z.literal(true).optional(),
    dataSaidaEmprego: z.literal(true).optional(),
    dataNascimentoBebe: z.literal(true).optional(),
    matriculaCertidao: z.literal(true).optional(),
    dataRegistro: z.literal(true).optional(),
    contribuinteIndividual: z.literal(true).optional(),
    dataContribuicao: z.literal(true).optional(),
    rua: z.literal(true).optional(),
    numero: z.literal(true).optional(),
    bairro: z.literal(true).optional(),
    cep: z.literal(true).optional(),
    beneficioId: z.literal(true).optional(),
  })
  .strict();

export const AuxilioMaternidadeMaxAggregateInputObjectSchema = Schema;
