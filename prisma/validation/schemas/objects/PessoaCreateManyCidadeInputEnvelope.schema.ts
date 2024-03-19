import { z } from 'zod';
import { PessoaCreateManyCidadeInputObjectSchema } from './PessoaCreateManyCidadeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PessoaCreateManyCidadeInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => PessoaCreateManyCidadeInputObjectSchema),
      z.lazy(() => PessoaCreateManyCidadeInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const PessoaCreateManyCidadeInputEnvelopeObjectSchema = Schema;
