import { z } from 'zod';
import { DocumentosUncheckedCreateNestedManyWithoutBeneficioInputObjectSchema } from './DocumentosUncheckedCreateNestedManyWithoutBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioUncheckedCreateWithoutMovimentacaoInput> =
  z
    .object({
      id: z.number().optional(),
      numero_beneficio: z.string(),
      situacao_id: z.number(),
      pessoa_id: z.number(),
      tipo_id: z.number(),
      especialista_id: z.number(),
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
