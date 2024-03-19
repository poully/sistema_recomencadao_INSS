import { z } from 'zod';
import { EstadoWhereUniqueInputObjectSchema } from './EstadoWhereUniqueInput.schema';
import { EstadoCreateWithoutCidadeInputObjectSchema } from './EstadoCreateWithoutCidadeInput.schema';
import { EstadoUncheckedCreateWithoutCidadeInputObjectSchema } from './EstadoUncheckedCreateWithoutCidadeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EstadoCreateOrConnectWithoutCidadeInput> = z
  .object({
    where: z.lazy(() => EstadoWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => EstadoCreateWithoutCidadeInputObjectSchema),
      z.lazy(() => EstadoUncheckedCreateWithoutCidadeInputObjectSchema),
    ]),
  })
  .strict();

export const EstadoCreateOrConnectWithoutCidadeInputObjectSchema = Schema;
