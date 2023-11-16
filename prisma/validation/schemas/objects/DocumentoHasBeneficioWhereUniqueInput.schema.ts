import { z } from 'zod';
import { DocumentoHasBeneficioDocumento_idBeneficio_idCompoundUniqueInputObjectSchema } from './DocumentoHasBeneficioDocumento_idBeneficio_idCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoHasBeneficioWhereUniqueInput> = z
  .object({
    documento_id_beneficio_id: z
      .lazy(
        () =>
          DocumentoHasBeneficioDocumento_idBeneficio_idCompoundUniqueInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const DocumentoHasBeneficioWhereUniqueInputObjectSchema = Schema;
