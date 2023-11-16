import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoHasBeneficioDocumento_idBeneficio_idCompoundUniqueInput> =
  z
    .object({
      documento_id: z.number(),
      beneficio_id: z.number(),
    })
    .strict();

export const DocumentoHasBeneficioDocumento_idBeneficio_idCompoundUniqueInputObjectSchema =
  Schema;
