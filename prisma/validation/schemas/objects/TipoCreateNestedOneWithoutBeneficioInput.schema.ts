import { z } from 'zod';
import { TipoCreateWithoutBeneficioInputObjectSchema } from './TipoCreateWithoutBeneficioInput.schema';
import { TipoUncheckedCreateWithoutBeneficioInputObjectSchema } from './TipoUncheckedCreateWithoutBeneficioInput.schema';
import { TipoCreateOrConnectWithoutBeneficioInputObjectSchema } from './TipoCreateOrConnectWithoutBeneficioInput.schema';
import { TipoWhereUniqueInputObjectSchema } from './TipoWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TipoCreateNestedOneWithoutBeneficioInput> = z
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
    connect: z.lazy(() => TipoWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const TipoCreateNestedOneWithoutBeneficioInputObjectSchema = Schema;
