import { z } from 'zod';
import { DocumentosWhereUniqueInputObjectSchema } from './DocumentosWhereUniqueInput.schema';
import { DocumentosUpdateWithoutBeneficioInputObjectSchema } from './DocumentosUpdateWithoutBeneficioInput.schema';
import { DocumentosUncheckedUpdateWithoutBeneficioInputObjectSchema } from './DocumentosUncheckedUpdateWithoutBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentosUpdateWithWhereUniqueWithoutBeneficioInput> =
  z
    .object({
      where: z.lazy(() => DocumentosWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => DocumentosUpdateWithoutBeneficioInputObjectSchema),
        z.lazy(
          () => DocumentosUncheckedUpdateWithoutBeneficioInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const DocumentosUpdateWithWhereUniqueWithoutBeneficioInputObjectSchema =
  Schema;
