import { z } from 'zod';
import { DocumentosUncheckedCreateNestedManyWithoutBeneficioInputObjectSchema } from './DocumentosUncheckedCreateNestedManyWithoutBeneficioInput.schema';
import { MovimentacaoUncheckedCreateNestedManyWithoutBeneficioInputObjectSchema } from './MovimentacaoUncheckedCreateNestedManyWithoutBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioUncheckedCreateWithoutTipoInput> = z
  .object({
    id: z.string().optional(),
    numero_beneficio: z.string(),
    situacao_id: z.string(),
    pessoa_id: z.string(),
    especialista_id: z.string(),
    documentos: z
      .lazy(
        () =>
          DocumentosUncheckedCreateNestedManyWithoutBeneficioInputObjectSchema,
      )
      .optional(),
    movimentacao: z
      .lazy(
        () =>
          MovimentacaoUncheckedCreateNestedManyWithoutBeneficioInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const BeneficioUncheckedCreateWithoutTipoInputObjectSchema = Schema;
