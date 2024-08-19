import { z } from 'zod';

export const MovimentacaoScalarFieldEnumSchema = z.enum([
  'id',
  'tipo_movimentacao_id',
  'beneficio_id',
]);
