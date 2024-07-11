import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PessoaCountOrderByAggregateInputObjectSchema } from './PessoaCountOrderByAggregateInput.schema';
import { PessoaMaxOrderByAggregateInputObjectSchema } from './PessoaMaxOrderByAggregateInput.schema';
import { PessoaMinOrderByAggregateInputObjectSchema } from './PessoaMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PessoaOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    nome: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    endereco: z.lazy(() => SortOrderSchema).optional(),
    telefone: z.lazy(() => SortOrderSchema).optional(),
    data_nasc: z.lazy(() => SortOrderSchema).optional(),
    cpf: z.lazy(() => SortOrderSchema).optional(),
    cnis: z.lazy(() => SortOrderSchema).optional(),
    cidade: z.lazy(() => SortOrderSchema).optional(),
    uf: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => PessoaCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => PessoaMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => PessoaMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const PessoaOrderByWithAggregationInputObjectSchema = Schema;
