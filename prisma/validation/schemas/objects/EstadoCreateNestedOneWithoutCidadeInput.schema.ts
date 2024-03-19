import { z } from 'zod';
import { EstadoCreateWithoutCidadeInputObjectSchema } from './EstadoCreateWithoutCidadeInput.schema';
import { EstadoUncheckedCreateWithoutCidadeInputObjectSchema } from './EstadoUncheckedCreateWithoutCidadeInput.schema';
import { EstadoCreateOrConnectWithoutCidadeInputObjectSchema } from './EstadoCreateOrConnectWithoutCidadeInput.schema';
import { EstadoWhereUniqueInputObjectSchema } from './EstadoWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EstadoCreateNestedOneWithoutCidadeInput> = z
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
    connect: z.lazy(() => EstadoWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const EstadoCreateNestedOneWithoutCidadeInputObjectSchema = Schema;
