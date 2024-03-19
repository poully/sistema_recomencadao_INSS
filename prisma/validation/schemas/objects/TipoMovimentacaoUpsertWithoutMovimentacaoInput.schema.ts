import { z } from 'zod';
import { TipoMovimentacaoUpdateWithoutMovimentacaoInputObjectSchema } from './TipoMovimentacaoUpdateWithoutMovimentacaoInput.schema';
import { TipoMovimentacaoUncheckedUpdateWithoutMovimentacaoInputObjectSchema } from './TipoMovimentacaoUncheckedUpdateWithoutMovimentacaoInput.schema';
import { TipoMovimentacaoCreateWithoutMovimentacaoInputObjectSchema } from './TipoMovimentacaoCreateWithoutMovimentacaoInput.schema';
import { TipoMovimentacaoUncheckedCreateWithoutMovimentacaoInputObjectSchema } from './TipoMovimentacaoUncheckedCreateWithoutMovimentacaoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TipoMovimentacaoUpsertWithoutMovimentacaoInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => TipoMovimentacaoUpdateWithoutMovimentacaoInputObjectSchema,
        ),
        z.lazy(
          () =>
            TipoMovimentacaoUncheckedUpdateWithoutMovimentacaoInputObjectSchema,
        ),
      ]),
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

export const TipoMovimentacaoUpsertWithoutMovimentacaoInputObjectSchema =
  Schema;
