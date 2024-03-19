import { z } from 'zod';
import { SituacaoCreateNestedOneWithoutBeneficioInputObjectSchema } from './SituacaoCreateNestedOneWithoutBeneficioInput.schema';
import { PessoaCreateNestedOneWithoutBeneficioInputObjectSchema } from './PessoaCreateNestedOneWithoutBeneficioInput.schema';
import { TipoCreateNestedOneWithoutBeneficioInputObjectSchema } from './TipoCreateNestedOneWithoutBeneficioInput.schema';
import { EspecialistaCreateNestedOneWithoutBeneficioInputObjectSchema } from './EspecialistaCreateNestedOneWithoutBeneficioInput.schema';
import { DocumentosCreateNestedManyWithoutBeneficioInputObjectSchema } from './DocumentosCreateNestedManyWithoutBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioCreateWithoutMovimentacaoInput> = z
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
    Documentos: z
      .lazy(() => DocumentosCreateNestedManyWithoutBeneficioInputObjectSchema)
      .optional(),
  })
  .strict();

export const BeneficioCreateWithoutMovimentacaoInputObjectSchema = Schema;
