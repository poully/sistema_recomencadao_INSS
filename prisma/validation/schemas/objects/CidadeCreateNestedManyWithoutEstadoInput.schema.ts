import { z } from 'zod';
import { CidadeCreateWithoutEstadoInputObjectSchema } from './CidadeCreateWithoutEstadoInput.schema';
import { CidadeUncheckedCreateWithoutEstadoInputObjectSchema } from './CidadeUncheckedCreateWithoutEstadoInput.schema';
import { CidadeCreateOrConnectWithoutEstadoInputObjectSchema } from './CidadeCreateOrConnectWithoutEstadoInput.schema';
import { CidadeCreateManyEstadoInputEnvelopeObjectSchema } from './CidadeCreateManyEstadoInputEnvelope.schema';
import { CidadeWhereUniqueInputObjectSchema } from './CidadeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CidadeCreateNestedManyWithoutEstadoInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => CidadeCreateWithoutEstadoInputObjectSchema),
        z.lazy(() => CidadeCreateWithoutEstadoInputObjectSchema).array(),
        z.lazy(() => CidadeUncheckedCreateWithoutEstadoInputObjectSchema),
        z
          .lazy(() => CidadeUncheckedCreateWithoutEstadoInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => CidadeCreateOrConnectWithoutEstadoInputObjectSchema),
        z
          .lazy(() => CidadeCreateOrConnectWithoutEstadoInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => CidadeCreateManyEstadoInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => CidadeWhereUniqueInputObjectSchema),
        z.lazy(() => CidadeWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const CidadeCreateNestedManyWithoutEstadoInputObjectSchema = Schema;
