import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { PessoaUpdateOneRequiredWithoutBeneficioNestedInputObjectSchema } from './PessoaUpdateOneRequiredWithoutBeneficioNestedInput.schema';
import { TipoUpdateOneRequiredWithoutBeneficioNestedInputObjectSchema } from './TipoUpdateOneRequiredWithoutBeneficioNestedInput.schema';
import { EspecialistaUpdateOneRequiredWithoutBeneficioNestedInputObjectSchema } from './EspecialistaUpdateOneRequiredWithoutBeneficioNestedInput.schema';
import { DocumentosUpdateManyWithoutBeneficioNestedInputObjectSchema } from './DocumentosUpdateManyWithoutBeneficioNestedInput.schema';
import { MovimentacaoUpdateManyWithoutBeneficioNestedInputObjectSchema } from './MovimentacaoUpdateManyWithoutBeneficioNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioUpdateWithoutSituacaoInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    numero_beneficio: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    pessoa: z
      .lazy(
        () => PessoaUpdateOneRequiredWithoutBeneficioNestedInputObjectSchema,
      )
      .optional(),
    tipo: z
      .lazy(() => TipoUpdateOneRequiredWithoutBeneficioNestedInputObjectSchema)
      .optional(),
    especialista: z
      .lazy(
        () =>
          EspecialistaUpdateOneRequiredWithoutBeneficioNestedInputObjectSchema,
      )
      .optional(),
    documentos: z
      .lazy(() => DocumentosUpdateManyWithoutBeneficioNestedInputObjectSchema)
      .optional(),
    movimentacao: z
      .lazy(() => MovimentacaoUpdateManyWithoutBeneficioNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const BeneficioUpdateWithoutSituacaoInputObjectSchema = Schema;
