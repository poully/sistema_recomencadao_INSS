import { z } from 'zod';
import { SituacaoCreateNestedOneWithoutBeneficioInputObjectSchema } from './SituacaoCreateNestedOneWithoutBeneficioInput.schema';
import { PessoaCreateNestedOneWithoutBeneficioInputObjectSchema } from './PessoaCreateNestedOneWithoutBeneficioInput.schema';
import { TipoCreateNestedOneWithoutBeneficioInputObjectSchema } from './TipoCreateNestedOneWithoutBeneficioInput.schema';
import { DocumentosCreateNestedManyWithoutBeneficioInputObjectSchema } from './DocumentosCreateNestedManyWithoutBeneficioInput.schema';
import { MovimentacaoCreateNestedManyWithoutBeneficioInputObjectSchema } from './MovimentacaoCreateNestedManyWithoutBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioCreateWithoutEspecialistaInput> = z
  .object({
    id: z.string().optional(),
    numero_beneficio: z.string(),
    situacao: z.lazy(
      () => SituacaoCreateNestedOneWithoutBeneficioInputObjectSchema,
    ),
    pessoa: z.lazy(
      () => PessoaCreateNestedOneWithoutBeneficioInputObjectSchema,
    ),
    tipo: z.lazy(() => TipoCreateNestedOneWithoutBeneficioInputObjectSchema),
    Documentos: z
      .lazy(() => DocumentosCreateNestedManyWithoutBeneficioInputObjectSchema)
      .optional(),
    Movimentacao: z
      .lazy(() => MovimentacaoCreateNestedManyWithoutBeneficioInputObjectSchema)
      .optional(),
  })
  .strict();

export const BeneficioCreateWithoutEspecialistaInputObjectSchema = Schema;
