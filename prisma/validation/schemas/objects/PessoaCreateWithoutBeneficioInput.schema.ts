import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PessoaCreateWithoutBeneficioInput> = z
  .object({
    nome: z.string(),
    email: z.string(),
    endereco: z.string(),
    telefone: z.string(),
    data_nasc: z.coerce.date(),
    cpf: z.string(),
    cnis: z.string(),
    cidade_ibge_id: z.number(),
  })
  .strict();

export const PessoaCreateWithoutBeneficioInputObjectSchema = Schema;
