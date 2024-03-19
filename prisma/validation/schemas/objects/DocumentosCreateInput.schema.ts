import { z } from 'zod';
import { BeneficioCreateNestedOneWithoutDocumentosInputObjectSchema } from './BeneficioCreateNestedOneWithoutDocumentosInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentosCreateInput> = z
  .object({
    descricao: z.string(),
    imagem: z.string(),
    beneficio: z.lazy(
      () => BeneficioCreateNestedOneWithoutDocumentosInputObjectSchema,
    ),
  })
  .strict();

export const DocumentosCreateInputObjectSchema = Schema;
