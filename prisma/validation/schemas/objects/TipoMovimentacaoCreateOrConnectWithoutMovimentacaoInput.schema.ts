import { z } from 'zod';
import { TipoMovimentacaoWhereUniqueInputObjectSchema } from './TipoMovimentacaoWhereUniqueInput.schema';
import { TipoMovimentacaoCreateWithoutMovimentacaoInputObjectSchema } from './TipoMovimentacaoCreateWithoutMovimentacaoInput.schema';
import { TipoMovimentacaoUncheckedCreateWithoutMovimentacaoInputObjectSchema } from './TipoMovimentacaoUncheckedCreateWithoutMovimentacaoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TipoMovimentacaoCreateOrConnectWithoutMovimentacaoInput> =
  z
    .object({
      where: z.lazy(() => TipoMovimentacaoWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () => TipoMovimentacaoCreateWithoutMovimentacaoInputObjectSchema,
        ),
        z.lazy(
          () =>
            TipoMovimentacaoUncheckedCreateWithoutMovimentacaoInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TipoMovimentacaoCreateOrConnectWithoutMovimentacaoInputObjectSchema =
  Schema;
