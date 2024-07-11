import { z } from 'zod';
import { SituacaoCreateNestedOneWithoutBeneficioInputObjectSchema } from './SituacaoCreateNestedOneWithoutBeneficioInput.schema';
import { TipoCreateNestedOneWithoutBeneficioInputObjectSchema } from './TipoCreateNestedOneWithoutBeneficioInput.schema';
import { EspecialistaCreateNestedOneWithoutBeneficioInputObjectSchema } from './EspecialistaCreateNestedOneWithoutBeneficioInput.schema';
import { DocumentosCreateNestedManyWithoutBeneficioInputObjectSchema } from './DocumentosCreateNestedManyWithoutBeneficioInput.schema';
import { MovimentacaoCreateNestedManyWithoutBeneficioInputObjectSchema } from './MovimentacaoCreateNestedManyWithoutBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioCreateWithoutPessoaInput> = z
  .object({
    id: z.string().optional(),
    numero_beneficio: z.string(),
    situacao: z.lazy(
      () => SituacaoCreateNestedOneWithoutBeneficioInputObjectSchema,
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

export const BeneficioCreateWithoutPessoaInputObjectSchema = Schema;
