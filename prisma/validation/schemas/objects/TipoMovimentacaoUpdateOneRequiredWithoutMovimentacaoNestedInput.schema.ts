import { z } from 'zod';
import { TipoMovimentacaoCreateWithoutMovimentacaoInputObjectSchema } from './TipoMovimentacaoCreateWithoutMovimentacaoInput.schema';
import { TipoMovimentacaoUncheckedCreateWithoutMovimentacaoInputObjectSchema } from './TipoMovimentacaoUncheckedCreateWithoutMovimentacaoInput.schema';
import { TipoMovimentacaoCreateOrConnectWithoutMovimentacaoInputObjectSchema } from './TipoMovimentacaoCreateOrConnectWithoutMovimentacaoInput.schema';
import { TipoMovimentacaoUpsertWithoutMovimentacaoInputObjectSchema } from './TipoMovimentacaoUpsertWithoutMovimentacaoInput.schema';
import { TipoMovimentacaoWhereUniqueInputObjectSchema } from './TipoMovimentacaoWhereUniqueInput.schema';
import { TipoMovimentacaoUpdateWithoutMovimentacaoInputObjectSchema } from './TipoMovimentacaoUpdateWithoutMovimentacaoInput.schema';
import { TipoMovimentacaoUncheckedUpdateWithoutMovimentacaoInputObjectSchema } from './TipoMovimentacaoUncheckedUpdateWithoutMovimentacaoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TipoMovimentacaoUpdateOneRequiredWithoutMovimentacaoNestedInput> =
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
      upsert: z
        .lazy(() => TipoMovimentacaoUpsertWithoutMovimentacaoInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => TipoMovimentacaoWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () => TipoMovimentacaoUpdateWithoutMovimentacaoInputObjectSchema,
          ),
          z.lazy(
            () =>
              TipoMovimentacaoUncheckedUpdateWithoutMovimentacaoInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const TipoMovimentacaoUpdateOneRequiredWithoutMovimentacaoNestedInputObjectSchema =
  Schema;
