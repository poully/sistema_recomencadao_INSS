import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { SituacaoUpdateOneRequiredWithoutBeneficioNestedInputObjectSchema } from './SituacaoUpdateOneRequiredWithoutBeneficioNestedInput.schema';
import { TipoUpdateOneRequiredWithoutBeneficioNestedInputObjectSchema } from './TipoUpdateOneRequiredWithoutBeneficioNestedInput.schema';
import { EspecialistaUpdateOneRequiredWithoutBeneficioNestedInputObjectSchema } from './EspecialistaUpdateOneRequiredWithoutBeneficioNestedInput.schema';
import { DocumentosUpdateManyWithoutBeneficioNestedInputObjectSchema } from './DocumentosUpdateManyWithoutBeneficioNestedInput.schema';
import { MovimentacaoUpdateManyWithoutBeneficioNestedInputObjectSchema } from './MovimentacaoUpdateManyWithoutBeneficioNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioUpdateWithoutPessoaInput> = z
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
    situacao: z
      .lazy(
        () => SituacaoUpdateOneRequiredWithoutBeneficioNestedInputObjectSchema,
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

export const BeneficioUpdateWithoutPessoaInputObjectSchema = Schema;
