import { z } from 'zod';
import { DocumentosWhereUniqueInputObjectSchema } from './DocumentosWhereUniqueInput.schema';
import { DocumentosCreateWithoutBeneficioInputObjectSchema } from './DocumentosCreateWithoutBeneficioInput.schema';
import { DocumentosUncheckedCreateWithoutBeneficioInputObjectSchema } from './DocumentosUncheckedCreateWithoutBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentosCreateOrConnectWithoutBeneficioInput> =
  z
    .object({
      where: z.lazy(() => DocumentosWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => DocumentosCreateWithoutBeneficioInputObjectSchema),
        z.lazy(
          () => DocumentosUncheckedCreateWithoutBeneficioInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const DocumentosCreateOrConnectWithoutBeneficioInputObjectSchema =
  Schema;
