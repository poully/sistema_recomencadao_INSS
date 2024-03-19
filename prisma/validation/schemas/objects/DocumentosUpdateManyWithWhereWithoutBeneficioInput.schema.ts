import { z } from 'zod';
import { DocumentosScalarWhereInputObjectSchema } from './DocumentosScalarWhereInput.schema';
import { DocumentosUpdateManyMutationInputObjectSchema } from './DocumentosUpdateManyMutationInput.schema';
import { DocumentosUncheckedUpdateManyWithoutDocumentosInputObjectSchema } from './DocumentosUncheckedUpdateManyWithoutDocumentosInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentosUpdateManyWithWhereWithoutBeneficioInput> =
  z
    .object({
      where: z.lazy(() => DocumentosScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => DocumentosUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => DocumentosUncheckedUpdateManyWithoutDocumentosInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const DocumentosUpdateManyWithWhereWithoutBeneficioInputObjectSchema =
  Schema;
