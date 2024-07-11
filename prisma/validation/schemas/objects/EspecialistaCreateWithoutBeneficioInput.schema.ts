import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EspecialistaCreateWithoutBeneficioInput> = z
  .object({
    id: z.string().optional(),
    nome: z.string(),
    email: z.string(),
    telefone: z.string(),
    endereco: z.string(),
    cidade: z.string(),
    uf: z.string(),
  })
  .strict();

export const EspecialistaCreateWithoutBeneficioInputObjectSchema = Schema;
