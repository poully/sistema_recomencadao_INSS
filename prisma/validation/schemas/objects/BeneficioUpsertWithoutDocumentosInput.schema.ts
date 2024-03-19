import { z } from 'zod';
import { BeneficioUpdateWithoutDocumentosInputObjectSchema } from './BeneficioUpdateWithoutDocumentosInput.schema';
import { BeneficioUncheckedUpdateWithoutDocumentosInputObjectSchema } from './BeneficioUncheckedUpdateWithoutDocumentosInput.schema';
import { BeneficioCreateWithoutDocumentosInputObjectSchema } from './BeneficioCreateWithoutDocumentosInput.schema';
import { BeneficioUncheckedCreateWithoutDocumentosInputObjectSchema } from './BeneficioUncheckedCreateWithoutDocumentosInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioUpsertWithoutDocumentosInput> = z
  .object({
    update: z.union([
      z.lazy(() => BeneficioUpdateWithoutDocumentosInputObjectSchema),
      z.lazy(() => BeneficioUncheckedUpdateWithoutDocumentosInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => BeneficioCreateWithoutDocumentosInputObjectSchema),
      z.lazy(() => BeneficioUncheckedCreateWithoutDocumentosInputObjectSchema),
    ]),
  })
  .strict();

export const BeneficioUpsertWithoutDocumentosInputObjectSchema = Schema;
