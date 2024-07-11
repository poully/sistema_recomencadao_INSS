import { z } from 'zod';
import { BeneficioUncheckedCreateNestedManyWithoutEspecialistaInputObjectSchema } from './BeneficioUncheckedCreateNestedManyWithoutEspecialistaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EspecialistaUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    nome: z.string(),
    email: z.string(),
    telefone: z.string(),
    endereco: z.string(),
    cidade: z.string(),
    uf: z.string(),
    Beneficio: z
      .lazy(
        () =>
          BeneficioUncheckedCreateNestedManyWithoutEspecialistaInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const EspecialistaUncheckedCreateInputObjectSchema = Schema;
