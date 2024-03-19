import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { SituacaoUpdateOneRequiredWithoutBeneficioNestedInputObjectSchema } from './SituacaoUpdateOneRequiredWithoutBeneficioNestedInput.schema';
import { PessoaUpdateOneRequiredWithoutBeneficioNestedInputObjectSchema } from './PessoaUpdateOneRequiredWithoutBeneficioNestedInput.schema';
import { TipoUpdateOneRequiredWithoutBeneficioNestedInputObjectSchema } from './TipoUpdateOneRequiredWithoutBeneficioNestedInput.schema';
import { EspecialistaUpdateOneRequiredWithoutBeneficioNestedInputObjectSchema } from './EspecialistaUpdateOneRequiredWithoutBeneficioNestedInput.schema';
import { DocumentosUpdateManyWithoutBeneficioNestedInputObjectSchema } from './DocumentosUpdateManyWithoutBeneficioNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioUpdateWithoutMovimentacaoInput> = z
  .object({
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
    Documentos: z
      .lazy(() => DocumentosUpdateManyWithoutBeneficioNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const BeneficioUpdateWithoutMovimentacaoInputObjectSchema = Schema;
