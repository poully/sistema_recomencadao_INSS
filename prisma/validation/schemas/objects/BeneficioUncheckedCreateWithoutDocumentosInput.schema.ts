import { z } from 'zod';
import { MovimentacaoUncheckedCreateNestedManyWithoutBeneficioInputObjectSchema } from './MovimentacaoUncheckedCreateNestedManyWithoutBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioUncheckedCreateWithoutDocumentosInput> =
  z
    .object({
      id: z.number().optional(),
      numero_beneficio: z.string(),
      situacao_id: z.number(),
      pessoa_id: z.number(),
      tipo_id: z.number(),
      especialista_id: z.number(),
      Movimentacao: z
        .lazy(
          () =>
            MovimentacaoUncheckedCreateNestedManyWithoutBeneficioInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const BeneficioUncheckedCreateWithoutDocumentosInputObjectSchema =
  Schema;
