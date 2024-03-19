import { z } from 'zod';
import { PessoaCreateNestedOneWithoutBeneficioInputObjectSchema } from './PessoaCreateNestedOneWithoutBeneficioInput.schema';
import { TipoCreateNestedOneWithoutBeneficioInputObjectSchema } from './TipoCreateNestedOneWithoutBeneficioInput.schema';
import { EspecialistaCreateNestedOneWithoutBeneficioInputObjectSchema } from './EspecialistaCreateNestedOneWithoutBeneficioInput.schema';
import { DocumentosCreateNestedManyWithoutBeneficioInputObjectSchema } from './DocumentosCreateNestedManyWithoutBeneficioInput.schema';
import { MovimentacaoCreateNestedManyWithoutBeneficioInputObjectSchema } from './MovimentacaoCreateNestedManyWithoutBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioCreateWithoutSituacaoInput> = z
  .object({
    numero_beneficio: z.string(),
    pessoa: z.lazy(
      () => PessoaCreateNestedOneWithoutBeneficioInputObjectSchema,
    ),
    tipo: z.lazy(() => TipoCreateNestedOneWithoutBeneficioInputObjectSchema),
    especialista: z.lazy(
      () => EspecialistaCreateNestedOneWithoutBeneficioInputObjectSchema,
    ),
    Documentos: z
      .lazy(() => DocumentosCreateNestedManyWithoutBeneficioInputObjectSchema)
      .optional(),
    Movimentacao: z
      .lazy(() => MovimentacaoCreateNestedManyWithoutBeneficioInputObjectSchema)
      .optional(),
  })
  .strict();

export const BeneficioCreateWithoutSituacaoInputObjectSchema = Schema;
