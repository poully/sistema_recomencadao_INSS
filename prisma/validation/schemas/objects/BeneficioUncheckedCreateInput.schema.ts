import { z } from 'zod';
import { DocumentosUncheckedCreateNestedManyWithoutBeneficioInputObjectSchema } from './DocumentosUncheckedCreateNestedManyWithoutBeneficioInput.schema';
import { MovimentacaoUncheckedCreateNestedManyWithoutBeneficioInputObjectSchema } from './MovimentacaoUncheckedCreateNestedManyWithoutBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioUncheckedCreateInput> = z
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
    Movimentacao: z
      .lazy(
        () =>
          MovimentacaoUncheckedCreateNestedManyWithoutBeneficioInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const BeneficioUncheckedCreateInputObjectSchema = Schema;
