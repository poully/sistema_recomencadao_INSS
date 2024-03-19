import { z } from 'zod';
import { CidadeWhereUniqueInputObjectSchema } from './CidadeWhereUniqueInput.schema';
import { CidadeCreateWithoutEstadoInputObjectSchema } from './CidadeCreateWithoutEstadoInput.schema';
import { CidadeUncheckedCreateWithoutEstadoInputObjectSchema } from './CidadeUncheckedCreateWithoutEstadoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CidadeCreateOrConnectWithoutEstadoInput> = z
  .object({
    where: z.lazy(() => CidadeWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CidadeCreateWithoutEstadoInputObjectSchema),
      z.lazy(() => CidadeUncheckedCreateWithoutEstadoInputObjectSchema),
    ]),
  })
  .strict();

export const CidadeCreateOrConnectWithoutEstadoInputObjectSchema = Schema;
