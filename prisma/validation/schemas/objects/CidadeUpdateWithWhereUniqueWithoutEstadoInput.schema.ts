import { z } from 'zod';
import { CidadeWhereUniqueInputObjectSchema } from './CidadeWhereUniqueInput.schema';
import { CidadeUpdateWithoutEstadoInputObjectSchema } from './CidadeUpdateWithoutEstadoInput.schema';
import { CidadeUncheckedUpdateWithoutEstadoInputObjectSchema } from './CidadeUncheckedUpdateWithoutEstadoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CidadeUpdateWithWhereUniqueWithoutEstadoInput> =
  z
    .object({
      where: z.lazy(() => CidadeWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => CidadeUpdateWithoutEstadoInputObjectSchema),
        z.lazy(() => CidadeUncheckedUpdateWithoutEstadoInputObjectSchema),
      ]),
    })
    .strict();

export const CidadeUpdateWithWhereUniqueWithoutEstadoInputObjectSchema = Schema;
