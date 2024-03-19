import { z } from 'zod';
import { CidadeCreateWithoutEstadoInputObjectSchema } from './CidadeCreateWithoutEstadoInput.schema';
import { CidadeUncheckedCreateWithoutEstadoInputObjectSchema } from './CidadeUncheckedCreateWithoutEstadoInput.schema';
import { CidadeCreateOrConnectWithoutEstadoInputObjectSchema } from './CidadeCreateOrConnectWithoutEstadoInput.schema';
import { CidadeUpsertWithWhereUniqueWithoutEstadoInputObjectSchema } from './CidadeUpsertWithWhereUniqueWithoutEstadoInput.schema';
import { CidadeCreateManyEstadoInputEnvelopeObjectSchema } from './CidadeCreateManyEstadoInputEnvelope.schema';
import { CidadeWhereUniqueInputObjectSchema } from './CidadeWhereUniqueInput.schema';
import { CidadeUpdateWithWhereUniqueWithoutEstadoInputObjectSchema } from './CidadeUpdateWithWhereUniqueWithoutEstadoInput.schema';
import { CidadeUpdateManyWithWhereWithoutEstadoInputObjectSchema } from './CidadeUpdateManyWithWhereWithoutEstadoInput.schema';
import { CidadeScalarWhereInputObjectSchema } from './CidadeScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CidadeUncheckedUpdateManyWithoutEstadoNestedInput> =
  z
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
      upsert: z
        .union([
          z.lazy(
            () => CidadeUpsertWithWhereUniqueWithoutEstadoInputObjectSchema,
          ),
          z
            .lazy(
              () => CidadeUpsertWithWhereUniqueWithoutEstadoInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => CidadeCreateManyEstadoInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => CidadeWhereUniqueInputObjectSchema),
          z.lazy(() => CidadeWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => CidadeWhereUniqueInputObjectSchema),
          z.lazy(() => CidadeWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => CidadeWhereUniqueInputObjectSchema),
          z.lazy(() => CidadeWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => CidadeWhereUniqueInputObjectSchema),
          z.lazy(() => CidadeWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => CidadeUpdateWithWhereUniqueWithoutEstadoInputObjectSchema,
          ),
          z
            .lazy(
              () => CidadeUpdateWithWhereUniqueWithoutEstadoInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => CidadeUpdateManyWithWhereWithoutEstadoInputObjectSchema),
          z
            .lazy(() => CidadeUpdateManyWithWhereWithoutEstadoInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => CidadeScalarWhereInputObjectSchema),
          z.lazy(() => CidadeScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const CidadeUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema =
  Schema;
