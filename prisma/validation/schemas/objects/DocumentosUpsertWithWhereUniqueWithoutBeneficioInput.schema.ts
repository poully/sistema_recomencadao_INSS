import { z } from 'zod';
import { DocumentosWhereUniqueInputObjectSchema } from './DocumentosWhereUniqueInput.schema';
import { DocumentosUpdateWithoutBeneficioInputObjectSchema } from './DocumentosUpdateWithoutBeneficioInput.schema';
import { DocumentosUncheckedUpdateWithoutBeneficioInputObjectSchema } from './DocumentosUncheckedUpdateWithoutBeneficioInput.schema';
import { DocumentosCreateWithoutBeneficioInputObjectSchema } from './DocumentosCreateWithoutBeneficioInput.schema';
import { DocumentosUncheckedCreateWithoutBeneficioInputObjectSchema } from './DocumentosUncheckedCreateWithoutBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentosUpsertWithWhereUniqueWithoutBeneficioInput> =
  z
    .object({
      where: z.lazy(() => DocumentosWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => DocumentosUpdateWithoutBeneficioInputObjectSchema),
        z.lazy(
          () => DocumentosUncheckedUpdateWithoutBeneficioInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => DocumentosCreateWithoutBeneficioInputObjectSchema),
        z.lazy(
          () => DocumentosUncheckedCreateWithoutBeneficioInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const DocumentosUpsertWithWhereUniqueWithoutBeneficioInputObjectSchema =
  Schema;
