import { z } from 'zod';
import { BeneficioUncheckedCreateNestedManyWithoutEspecialistaInputObjectSchema } from './BeneficioUncheckedCreateNestedManyWithoutEspecialistaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EspecialistaUncheckedCreateInput> = z
  .object({
    id: z.number(),
    nome: z.string(),
    email: z.string(),
    telefone: z.string(),
    endereco: z.string(),
    cidade_ibge_id: z.number(),
    Beneficio: z
      .lazy(
        () =>
          BeneficioUncheckedCreateNestedManyWithoutEspecialistaInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const EspecialistaUncheckedCreateInputObjectSchema = Schema;
