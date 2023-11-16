import { z } from 'zod';
import { BeneficioUpdateWithoutAuxilioMaternidadeInputObjectSchema } from './BeneficioUpdateWithoutAuxilioMaternidadeInput.schema';
import { BeneficioUncheckedUpdateWithoutAuxilioMaternidadeInputObjectSchema } from './BeneficioUncheckedUpdateWithoutAuxilioMaternidadeInput.schema';
import { BeneficioCreateWithoutAuxilioMaternidadeInputObjectSchema } from './BeneficioCreateWithoutAuxilioMaternidadeInput.schema';
import { BeneficioUncheckedCreateWithoutAuxilioMaternidadeInputObjectSchema } from './BeneficioUncheckedCreateWithoutAuxilioMaternidadeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioUpsertWithoutAuxilioMaternidadeInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => BeneficioUpdateWithoutAuxilioMaternidadeInputObjectSchema),
        z.lazy(
          () =>
            BeneficioUncheckedUpdateWithoutAuxilioMaternidadeInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => BeneficioCreateWithoutAuxilioMaternidadeInputObjectSchema),
        z.lazy(
          () =>
            BeneficioUncheckedCreateWithoutAuxilioMaternidadeInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficioUpsertWithoutAuxilioMaternidadeInputObjectSchema = Schema;
