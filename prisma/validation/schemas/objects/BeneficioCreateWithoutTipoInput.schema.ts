import { z } from 'zod';
import { SituacaoCreateNestedOneWithoutBeneficioInputObjectSchema } from './SituacaoCreateNestedOneWithoutBeneficioInput.schema';
import { PessoaCreateNestedOneWithoutBeneficioInputObjectSchema } from './PessoaCreateNestedOneWithoutBeneficioInput.schema';
import { EspecialistaCreateNestedOneWithoutBeneficioInputObjectSchema } from './EspecialistaCreateNestedOneWithoutBeneficioInput.schema';
import { DocumentosCreateNestedManyWithoutBeneficioInputObjectSchema } from './DocumentosCreateNestedManyWithoutBeneficioInput.schema';
import { MovimentacaoCreateNestedManyWithoutBeneficioInputObjectSchema } from './MovimentacaoCreateNestedManyWithoutBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioCreateWithoutTipoInput> = z
  .object({
    id: z.string().optional(),
    numero_beneficio: z.string(),
    situacao: z.lazy(
      () => SituacaoCreateNestedOneWithoutBeneficioInputObjectSchema,
    ),
    pessoa: z.lazy(
      () => PessoaCreateNestedOneWithoutBeneficioInputObjectSchema,
    ),
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

export const BeneficioCreateWithoutTipoInputObjectSchema = Schema;
