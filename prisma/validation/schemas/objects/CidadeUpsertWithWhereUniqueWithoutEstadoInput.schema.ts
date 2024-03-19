import { z } from 'zod';
import { CidadeWhereUniqueInputObjectSchema } from './CidadeWhereUniqueInput.schema';
import { CidadeUpdateWithoutEstadoInputObjectSchema } from './CidadeUpdateWithoutEstadoInput.schema';
import { CidadeUncheckedUpdateWithoutEstadoInputObjectSchema } from './CidadeUncheckedUpdateWithoutEstadoInput.schema';
import { CidadeCreateWithoutEstadoInputObjectSchema } from './CidadeCreateWithoutEstadoInput.schema';
import { CidadeUncheckedCreateWithoutEstadoInputObjectSchema } from './CidadeUncheckedCreateWithoutEstadoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CidadeUpsertWithWhereUniqueWithoutEstadoInput> =
  z
    .object({
      where: z.lazy(() => CidadeWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => CidadeUpdateWithoutEstadoInputObjectSchema),
        z.lazy(() => CidadeUncheckedUpdateWithoutEstadoInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => CidadeCreateWithoutEstadoInputObjectSchema),
        z.lazy(() => CidadeUncheckedCreateWithoutEstadoInputObjectSchema),
      ]),
    })
    .strict();

export const CidadeUpsertWithWhereUniqueWithoutEstadoInputObjectSchema = Schema;
