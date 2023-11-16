import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuxilioMaternidadeCreateManyInput> = z
  .object({
    id: z.number().optional(),
    nomeMae: z.string(),
    dataSaidaEmprego: z.coerce.date(),
    dataNascimentoBebe: z.coerce.date().optional().nullable(),
    matriculaCertidao: z.string().optional().nullable(),
    dataRegistro: z.string().optional().nullable(),
    contribuinteIndividual: z.boolean().optional(),
    dataContribuicao: z.coerce.date().optional().nullable(),
    rua: z.string(),
    numero: z.number(),
    bairro: z.string(),
    cep: z.number(),
    beneficioId: z.number(),
  })
  .strict();

export const AuxilioMaternidadeCreateManyInputObjectSchema = Schema;
