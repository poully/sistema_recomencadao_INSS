import { z } from 'zod';
import { EspecialistaUpdateWithoutBeneficioInputObjectSchema } from './EspecialistaUpdateWithoutBeneficioInput.schema';
import { EspecialistaUncheckedUpdateWithoutBeneficioInputObjectSchema } from './EspecialistaUncheckedUpdateWithoutBeneficioInput.schema';
import { EspecialistaCreateWithoutBeneficioInputObjectSchema } from './EspecialistaCreateWithoutBeneficioInput.schema';
import { EspecialistaUncheckedCreateWithoutBeneficioInputObjectSchema } from './EspecialistaUncheckedCreateWithoutBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EspecialistaUpsertWithoutBeneficioInput> = z
  .object({
    update: z.union([
      z.lazy(() => EspecialistaUpdateWithoutBeneficioInputObjectSchema),
      z.lazy(
        () => EspecialistaUncheckedUpdateWithoutBeneficioInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => EspecialistaCreateWithoutBeneficioInputObjectSchema),
      z.lazy(
        () => EspecialistaUncheckedCreateWithoutBeneficioInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const EspecialistaUpsertWithoutBeneficioInputObjectSchema = Schema;
