import { z } from 'zod';
import { TipoUpdateWithoutBeneficioInputObjectSchema } from './TipoUpdateWithoutBeneficioInput.schema';
import { TipoUncheckedUpdateWithoutBeneficioInputObjectSchema } from './TipoUncheckedUpdateWithoutBeneficioInput.schema';
import { TipoCreateWithoutBeneficioInputObjectSchema } from './TipoCreateWithoutBeneficioInput.schema';
import { TipoUncheckedCreateWithoutBeneficioInputObjectSchema } from './TipoUncheckedCreateWithoutBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TipoUpsertWithoutBeneficioInput> = z
  .object({
    update: z.union([
      z.lazy(() => TipoUpdateWithoutBeneficioInputObjectSchema),
      z.lazy(() => TipoUncheckedUpdateWithoutBeneficioInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TipoCreateWithoutBeneficioInputObjectSchema),
      z.lazy(() => TipoUncheckedCreateWithoutBeneficioInputObjectSchema),
    ]),
  })
  .strict();

export const TipoUpsertWithoutBeneficioInputObjectSchema = Schema;
