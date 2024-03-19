import { z } from 'zod';

export const DocumentosScalarFieldEnumSchema = z.enum([
  'id',
  'descricao',
  'imagem',
  'beneficio_id',
]);
