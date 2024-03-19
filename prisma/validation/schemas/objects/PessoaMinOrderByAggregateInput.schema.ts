import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PessoaMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    nome: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    endereco: z.lazy(() => SortOrderSchema).optional(),
    telefone: z.lazy(() => SortOrderSchema).optional(),
    data_nasc: z.lazy(() => SortOrderSchema).optional(),
    cpf: z.lazy(() => SortOrderSchema).optional(),
    cnis: z.lazy(() => SortOrderSchema).optional(),
    cidade_id: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const PessoaMinOrderByAggregateInputObjectSchema = Schema;
