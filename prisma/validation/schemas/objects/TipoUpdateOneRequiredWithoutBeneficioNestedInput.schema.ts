import { z } from 'zod';
import { TipoCreateWithoutBeneficioInputObjectSchema } from './TipoCreateWithoutBeneficioInput.schema';
import { TipoUncheckedCreateWithoutBeneficioInputObjectSchema } from './TipoUncheckedCreateWithoutBeneficioInput.schema';
import { TipoCreateOrConnectWithoutBeneficioInputObjectSchema } from './TipoCreateOrConnectWithoutBeneficioInput.schema';
import { TipoUpsertWithoutBeneficioInputObjectSchema } from './TipoUpsertWithoutBeneficioInput.schema';
import { TipoWhereUniqueInputObjectSchema } from './TipoWhereUniqueInput.schema';
import { TipoUpdateWithoutBeneficioInputObjectSchema } from './TipoUpdateWithoutBeneficioInput.schema';
import { TipoUncheckedUpdateWithoutBeneficioInputObjectSchema } from './TipoUncheckedUpdateWithoutBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TipoUpdateOneRequiredWithoutBeneficioNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TipoCreateWithoutBeneficioInputObjectSchema),
          z.lazy(() => TipoUncheckedCreateWithoutBeneficioInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => TipoCreateOrConnectWithoutBeneficioInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => TipoUpsertWithoutBeneficioInputObjectSchema)
        .optional(),
      connect: z.lazy(() => TipoWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => TipoUpdateWithoutBeneficioInputObjectSchema),
          z.lazy(() => TipoUncheckedUpdateWithoutBeneficioInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const TipoUpdateOneRequiredWithoutBeneficioNestedInputObjectSchema =
  Schema;
