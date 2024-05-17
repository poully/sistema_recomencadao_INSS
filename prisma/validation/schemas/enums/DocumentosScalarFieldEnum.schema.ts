import { z } from 'zod';

export const DocumentosScalarFieldEnumSchema = z.enum([
  'id',
  'descricao',
  'conteudo',
  'extensao',
  'beneficio_id',
]);
