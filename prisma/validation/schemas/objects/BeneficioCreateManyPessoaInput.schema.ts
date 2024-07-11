import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioCreateManyPessoaInput> = z
  .object({
    id: z.string().optional(),
    numero_beneficio: z.string(),
    situacao_id: z.string(),
    tipo_id: z.string(),
    especialista_id: z.string(),
  })
  .strict();

export const BeneficioCreateManyPessoaInputObjectSchema = Schema;
