import { z } from 'zod';
import { BeneficioCreateNestedManyWithoutEspecialistaInputObjectSchema } from './BeneficioCreateNestedManyWithoutEspecialistaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EspecialistaCreateInput> = z
  .object({
    id: z.number(),
    nome: z.string(),
    email: z.string(),
    telefone: z.string(),
    endereco: z.string(),
    cidade_ibge_id: z.number(),
    Beneficio: z
      .lazy(() => BeneficioCreateNestedManyWithoutEspecialistaInputObjectSchema)
      .optional(),
  })
  .strict();

export const EspecialistaCreateInputObjectSchema = Schema;
