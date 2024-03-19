import { z } from 'zod';
import { BeneficioCreateWithoutDocumentosInputObjectSchema } from './BeneficioCreateWithoutDocumentosInput.schema';
import { BeneficioUncheckedCreateWithoutDocumentosInputObjectSchema } from './BeneficioUncheckedCreateWithoutDocumentosInput.schema';
import { BeneficioCreateOrConnectWithoutDocumentosInputObjectSchema } from './BeneficioCreateOrConnectWithoutDocumentosInput.schema';
import { BeneficioUpsertWithoutDocumentosInputObjectSchema } from './BeneficioUpsertWithoutDocumentosInput.schema';
import { BeneficioWhereUniqueInputObjectSchema } from './BeneficioWhereUniqueInput.schema';
import { BeneficioUpdateWithoutDocumentosInputObjectSchema } from './BeneficioUpdateWithoutDocumentosInput.schema';
import { BeneficioUncheckedUpdateWithoutDocumentosInputObjectSchema } from './BeneficioUncheckedUpdateWithoutDocumentosInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioUpdateOneRequiredWithoutDocumentosNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BeneficioCreateWithoutDocumentosInputObjectSchema),
          z.lazy(
            () => BeneficioUncheckedCreateWithoutDocumentosInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => BeneficioCreateOrConnectWithoutDocumentosInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => BeneficioUpsertWithoutDocumentosInputObjectSchema)
        .optional(),
      connect: z.lazy(() => BeneficioWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => BeneficioUpdateWithoutDocumentosInputObjectSchema),
          z.lazy(
            () => BeneficioUncheckedUpdateWithoutDocumentosInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const BeneficioUpdateOneRequiredWithoutDocumentosNestedInputObjectSchema =
  Schema;
