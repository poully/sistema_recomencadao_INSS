import { z } from 'zod';
import { DocumentosUncheckedCreateNestedManyWithoutBeneficioInputObjectSchema } from './DocumentosUncheckedCreateNestedManyWithoutBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioUncheckedCreateWithoutMovimentacaoInput> =
  z
    .object({
      id: z.string().optional(),
      numero_beneficio: z.string(),
      situacao_id: z.string(),
      pessoa_id: z.string(),
      tipo_id: z.string(),
      especialista_id: z.string(),
      Documentos: z
        .lazy(
          () =>
            DocumentosUncheckedCreateNestedManyWithoutBeneficioInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const BeneficioUncheckedCreateWithoutMovimentacaoInputObjectSchema =
  Schema;
