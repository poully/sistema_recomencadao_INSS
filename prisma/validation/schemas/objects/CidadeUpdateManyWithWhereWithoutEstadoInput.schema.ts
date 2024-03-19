import { z } from 'zod';
import { CidadeScalarWhereInputObjectSchema } from './CidadeScalarWhereInput.schema';
import { CidadeUpdateManyMutationInputObjectSchema } from './CidadeUpdateManyMutationInput.schema';
import { CidadeUncheckedUpdateManyWithoutCidadeInputObjectSchema } from './CidadeUncheckedUpdateManyWithoutCidadeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CidadeUpdateManyWithWhereWithoutEstadoInput> = z
  .object({
    where: z.lazy(() => CidadeScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => CidadeUpdateManyMutationInputObjectSchema),
      z.lazy(() => CidadeUncheckedUpdateManyWithoutCidadeInputObjectSchema),
    ]),
  })
  .strict();

export const CidadeUpdateManyWithWhereWithoutEstadoInputObjectSchema = Schema;
