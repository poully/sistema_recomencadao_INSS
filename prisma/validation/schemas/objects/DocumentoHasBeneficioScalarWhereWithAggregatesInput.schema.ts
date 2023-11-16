import { z } from 'zod';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoHasBeneficioScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () =>
              DocumentoHasBeneficioScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                DocumentoHasBeneficioScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(
          () => DocumentoHasBeneficioScalarWhereWithAggregatesInputObjectSchema,
        )
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () =>
              DocumentoHasBeneficioScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                DocumentoHasBeneficioScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      documento_id: z
        .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
        .optional(),
      beneficio_id: z
        .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
        .optional(),
    })
    .strict();

export const DocumentoHasBeneficioScalarWhereWithAggregatesInputObjectSchema =
  Schema;
