import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { BeneficioOrderByWithRelationInputObjectSchema } from './BeneficioOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuxilioMaternidadeOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    nomeMae: z.lazy(() => SortOrderSchema).optional(),
    dataSaidaEmprego: z.lazy(() => SortOrderSchema).optional(),
    dataNascimentoBebe: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    matriculaCertidao: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    dataRegistro: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    contribuinteIndividual: z.lazy(() => SortOrderSchema).optional(),
    dataContribuicao: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    rua: z.lazy(() => SortOrderSchema).optional(),
    numero: z.lazy(() => SortOrderSchema).optional(),
    bairro: z.lazy(() => SortOrderSchema).optional(),
    cep: z.lazy(() => SortOrderSchema).optional(),
    beneficioId: z.lazy(() => SortOrderSchema).optional(),
    beneficio: z
      .lazy(() => BeneficioOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const AuxilioMaternidadeOrderByWithRelationInputObjectSchema = Schema;
