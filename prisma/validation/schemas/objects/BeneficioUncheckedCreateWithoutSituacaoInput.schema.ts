import { z } from 'zod';
import { DocumentosUncheckedCreateNestedManyWithoutBeneficioInputObjectSchema } from './DocumentosUncheckedCreateNestedManyWithoutBeneficioInput.schema';
import { MovimentacaoUncheckedCreateNestedManyWithoutBeneficioInputObjectSchema } from './MovimentacaoUncheckedCreateNestedManyWithoutBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioUncheckedCreateWithoutSituacaoInput> = z
  .object({
    id: z.number().optional(),
    numero_beneficio: z.string(),
    pessoa_id: z.number(),
    tipo_id: z.number(),
    especialista_id: z.number(),
    Documentos: z
      .lazy(
        () =>
          DocumentosUncheckedCreateNestedManyWithoutBeneficioInputObjectSchema,
      )
      .optional(),
    Movimentacao: z
      .lazy(
        () =>
          MovimentacaoUncheckedCreateNestedManyWithoutBeneficioInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const BeneficioUncheckedCreateWithoutSituacaoInputObjectSchema = Schema;
