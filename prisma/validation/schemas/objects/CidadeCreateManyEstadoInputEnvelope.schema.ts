import { z } from 'zod';
import { CidadeCreateManyEstadoInputObjectSchema } from './CidadeCreateManyEstadoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CidadeCreateManyEstadoInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => CidadeCreateManyEstadoInputObjectSchema),
      z.lazy(() => CidadeCreateManyEstadoInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const CidadeCreateManyEstadoInputEnvelopeObjectSchema = Schema;
