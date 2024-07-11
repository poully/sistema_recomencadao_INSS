import { z } from 'zod';

export const EspecialistaScalarFieldEnumSchema = z.enum([
  'id',
  'nome',
  'email',
  'telefone',
  'endereco',
  'cidade',
  'uf',
]);
