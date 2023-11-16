import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoHasBeneficioUpdateManyMutationInput> = z
  .object({})
  .strict();

export const DocumentoHasBeneficioUpdateManyMutationInputObjectSchema = Schema;
