import { z } from 'zod';
import { EstadoCreateWithoutCidadeInputObjectSchema } from './EstadoCreateWithoutCidadeInput.schema';
import { EstadoUncheckedCreateWithoutCidadeInputObjectSchema } from './EstadoUncheckedCreateWithoutCidadeInput.schema';
import { EstadoCreateOrConnectWithoutCidadeInputObjectSchema } from './EstadoCreateOrConnectWithoutCidadeInput.schema';
import { EstadoUpsertWithoutCidadeInputObjectSchema } from './EstadoUpsertWithoutCidadeInput.schema';
import { EstadoWhereUniqueInputObjectSchema } from './EstadoWhereUniqueInput.schema';
import { EstadoUpdateWithoutCidadeInputObjectSchema } from './EstadoUpdateWithoutCidadeInput.schema';
import { EstadoUncheckedUpdateWithoutCidadeInputObjectSchema } from './EstadoUncheckedUpdateWithoutCidadeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EstadoUpdateOneRequiredWithoutCidadeNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => EstadoCreateWithoutCidadeInputObjectSchema),
          z.lazy(() => EstadoUncheckedCreateWithoutCidadeInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => EstadoCreateOrConnectWithoutCidadeInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => EstadoUpsertWithoutCidadeInputObjectSchema)
        .optional(),
      connect: z.lazy(() => EstadoWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => EstadoUpdateWithoutCidadeInputObjectSchema),
          z.lazy(() => EstadoUncheckedUpdateWithoutCidadeInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const EstadoUpdateOneRequiredWithoutCidadeNestedInputObjectSchema =
  Schema;
