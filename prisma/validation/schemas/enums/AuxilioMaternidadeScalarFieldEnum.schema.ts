import { z } from 'zod';

export const AuxilioMaternidadeScalarFieldEnumSchema = z.enum([
  'id',
  'nomeMae',
  'dataSaidaEmprego',
  'dataNascimentoBebe',
  'matriculaCertidao',
  'dataRegistro',
  'contribuinteIndividual',
  'dataContribuicao',
  'rua',
  'numero',
  'bairro',
  'cep',
  'beneficioId',
]);
