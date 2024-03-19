import { z } from 'zod';

export const PessoaScalarFieldEnumSchema = z.enum([
  'id',
  'nome',
  'email',
  'endereco',
  'telefone',
  'data_nasc',
  'cpf',
  'cnis',
  'cidade_id',
]);
