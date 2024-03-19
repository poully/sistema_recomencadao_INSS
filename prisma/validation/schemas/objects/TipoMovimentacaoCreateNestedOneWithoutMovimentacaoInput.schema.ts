import { z } from 'zod';
import { TipoMovimentacaoCreateWithoutMovimentacaoInputObjectSchema } from './TipoMovimentacaoCreateWithoutMovimentacaoInput.schema';
import { TipoMovimentacaoUncheckedCreateWithoutMovimentacaoInputObjectSchema } from './TipoMovimentacaoUncheckedCreateWithoutMovimentacaoInput.schema';
import { TipoMovimentacaoCreateOrConnectWithoutMovimentacaoInputObjectSchema } from './TipoMovimentacaoCreateOrConnectWithoutMovimentacaoInput.schema';
import { TipoMovimentacaoWhereUniqueInputObjectSchema } from './TipoMovimentacaoWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TipoMovimentacaoCreateNestedOneWithoutMovimentacaoInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => TipoMovimentacaoCreateWithoutMovimentacaoInputObjectSchema,
          ),
          z.lazy(
            () =>
              TipoMovimentacaoUncheckedCreateWithoutMovimentacaoInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            TipoMovimentacaoCreateOrConnectWithoutMovimentacaoInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => TipoMovimentacaoWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const TipoMovimentacaoCreateNestedOneWithoutMovimentacaoInputObjectSchema =
  Schema;
