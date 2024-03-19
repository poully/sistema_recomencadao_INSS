import { z } from 'zod';
import { EstadoUpdateWithoutCidadeInputObjectSchema } from './EstadoUpdateWithoutCidadeInput.schema';
import { EstadoUncheckedUpdateWithoutCidadeInputObjectSchema } from './EstadoUncheckedUpdateWithoutCidadeInput.schema';
import { EstadoCreateWithoutCidadeInputObjectSchema } from './EstadoCreateWithoutCidadeInput.schema';
import { EstadoUncheckedCreateWithoutCidadeInputObjectSchema } from './EstadoUncheckedCreateWithoutCidadeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EstadoUpsertWithoutCidadeInput> = z
  .object({
    update: z.union([
      z.lazy(() => EstadoUpdateWithoutCidadeInputObjectSchema),
      z.lazy(() => EstadoUncheckedUpdateWithoutCidadeInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => EstadoCreateWithoutCidadeInputObjectSchema),
      z.lazy(() => EstadoUncheckedCreateWithoutCidadeInputObjectSchema),
    ]),
  })
  .strict();

export const EstadoUpsertWithoutCidadeInputObjectSchema = Schema;
