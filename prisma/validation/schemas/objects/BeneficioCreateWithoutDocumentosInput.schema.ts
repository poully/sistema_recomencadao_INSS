import { z } from 'zod';
import { SituacaoCreateNestedOneWithoutBeneficioInputObjectSchema } from './SituacaoCreateNestedOneWithoutBeneficioInput.schema';
import { PessoaCreateNestedOneWithoutBeneficioInputObjectSchema } from './PessoaCreateNestedOneWithoutBeneficioInput.schema';
import { TipoCreateNestedOneWithoutBeneficioInputObjectSchema } from './TipoCreateNestedOneWithoutBeneficioInput.schema';
import { EspecialistaCreateNestedOneWithoutBeneficioInputObjectSchema } from './EspecialistaCreateNestedOneWithoutBeneficioInput.schema';
import { MovimentacaoCreateNestedManyWithoutBeneficioInputObjectSchema } from './MovimentacaoCreateNestedManyWithoutBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioCreateWithoutDocumentosInput> = z
  .object({
    numero_beneficio: z.string(),
    situacao: z.lazy(
      () => SituacaoCreateNestedOneWithoutBeneficioInputObjectSchema,
    ),
    pessoa: z.lazy(
      () => PessoaCreateNestedOneWithoutBeneficioInputObjectSchema,
    ),
    tipo: z.lazy(() => TipoCreateNestedOneWithoutBeneficioInputObjectSchema),
    especialista: z.lazy(
      () => EspecialistaCreateNestedOneWithoutBeneficioInputObjectSchema,
    ),
    Movimentacao: z
      .lazy(() => MovimentacaoCreateNestedManyWithoutBeneficioInputObjectSchema)
      .optional(),
  })
  .strict();

export const BeneficioCreateWithoutDocumentosInputObjectSchema = Schema;
