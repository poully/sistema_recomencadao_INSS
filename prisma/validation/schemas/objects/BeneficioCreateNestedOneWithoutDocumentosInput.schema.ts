import { z } from 'zod';
import { BeneficioCreateWithoutDocumentosInputObjectSchema } from './BeneficioCreateWithoutDocumentosInput.schema';
import { BeneficioUncheckedCreateWithoutDocumentosInputObjectSchema } from './BeneficioUncheckedCreateWithoutDocumentosInput.schema';
import { BeneficioCreateOrConnectWithoutDocumentosInputObjectSchema } from './BeneficioCreateOrConnectWithoutDocumentosInput.schema';
import { BeneficioWhereUniqueInputObjectSchema } from './BeneficioWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioCreateNestedOneWithoutDocumentosInput> =
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
      connect: z.lazy(() => BeneficioWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const BeneficioCreateNestedOneWithoutDocumentosInputObjectSchema =
  Schema;
