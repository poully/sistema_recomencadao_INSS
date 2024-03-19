import { z } from 'zod';
import { TipoWhereUniqueInputObjectSchema } from './TipoWhereUniqueInput.schema';
import { TipoCreateWithoutBeneficioInputObjectSchema } from './TipoCreateWithoutBeneficioInput.schema';
import { TipoUncheckedCreateWithoutBeneficioInputObjectSchema } from './TipoUncheckedCreateWithoutBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TipoCreateOrConnectWithoutBeneficioInput> = z
  .object({
    where: z.lazy(() => TipoWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TipoCreateWithoutBeneficioInputObjectSchema),
      z.lazy(() => TipoUncheckedCreateWithoutBeneficioInputObjectSchema),
    ]),
  })
  .strict();

export const TipoCreateOrConnectWithoutBeneficioInputObjectSchema = Schema;
