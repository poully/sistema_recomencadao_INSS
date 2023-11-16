import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuxilioMaternidadeMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    nomeMae: z.lazy(() => SortOrderSchema).optional(),
    dataSaidaEmprego: z.lazy(() => SortOrderSchema).optional(),
    dataNascimentoBebe: z.lazy(() => SortOrderSchema).optional(),
    matriculaCertidao: z.lazy(() => SortOrderSchema).optional(),
    dataRegistro: z.lazy(() => SortOrderSchema).optional(),
    contribuinteIndividual: z.lazy(() => SortOrderSchema).optional(),
    dataContribuicao: z.lazy(() => SortOrderSchema).optional(),
    rua: z.lazy(() => SortOrderSchema).optional(),
    numero: z.lazy(() => SortOrderSchema).optional(),
    bairro: z.lazy(() => SortOrderSchema).optional(),
    cep: z.lazy(() => SortOrderSchema).optional(),
    beneficioId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const AuxilioMaternidadeMinOrderByAggregateInputObjectSchema = Schema;
