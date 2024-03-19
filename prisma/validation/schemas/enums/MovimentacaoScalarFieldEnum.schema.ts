import { z } from 'zod';

export const MovimentacaoScalarFieldEnumSchema = z.enum([
  'id',
  'beneficio_id',
  'tipo_movimentacao_id',
]);
