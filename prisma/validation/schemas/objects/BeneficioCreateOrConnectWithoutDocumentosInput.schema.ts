import { z } from 'zod';
import { BeneficioWhereUniqueInputObjectSchema } from './BeneficioWhereUniqueInput.schema';
import { BeneficioCreateWithoutDocumentosInputObjectSchema } from './BeneficioCreateWithoutDocumentosInput.schema';
import { BeneficioUncheckedCreateWithoutDocumentosInputObjectSchema } from './BeneficioUncheckedCreateWithoutDocumentosInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioCreateOrConnectWithoutDocumentosInput> =
  z
    .object({
      where: z.lazy(() => BeneficioWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => BeneficioCreateWithoutDocumentosInputObjectSchema),
        z.lazy(
          () => BeneficioUncheckedCreateWithoutDocumentosInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficioCreateOrConnectWithoutDocumentosInputObjectSchema =
  Schema;
