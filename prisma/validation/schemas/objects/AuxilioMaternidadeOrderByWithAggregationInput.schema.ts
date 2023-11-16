import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AuxilioMaternidadeCountOrderByAggregateInputObjectSchema } from './AuxilioMaternidadeCountOrderByAggregateInput.schema';
import { AuxilioMaternidadeAvgOrderByAggregateInputObjectSchema } from './AuxilioMaternidadeAvgOrderByAggregateInput.schema';
import { AuxilioMaternidadeMaxOrderByAggregateInputObjectSchema } from './AuxilioMaternidadeMaxOrderByAggregateInput.schema';
import { AuxilioMaternidadeMinOrderByAggregateInputObjectSchema } from './AuxilioMaternidadeMinOrderByAggregateInput.schema';
import { AuxilioMaternidadeSumOrderByAggregateInputObjectSchema } from './AuxilioMaternidadeSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuxilioMaternidadeOrderByWithAggregationInput> =
  z
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
      _count: z
        .lazy(() => AuxilioMaternidadeCountOrderByAggregateInputObjectSchema)
        .optional(),
      _avg: z
        .lazy(() => AuxilioMaternidadeAvgOrderByAggregateInputObjectSchema)
        .optional(),
      _max: z
        .lazy(() => AuxilioMaternidadeMaxOrderByAggregateInputObjectSchema)
        .optional(),
      _min: z
        .lazy(() => AuxilioMaternidadeMinOrderByAggregateInputObjectSchema)
        .optional(),
      _sum: z
        .lazy(() => AuxilioMaternidadeSumOrderByAggregateInputObjectSchema)
        .optional(),
    })
    .strict();

export const AuxilioMaternidadeOrderByWithAggregationInputObjectSchema = Schema;
