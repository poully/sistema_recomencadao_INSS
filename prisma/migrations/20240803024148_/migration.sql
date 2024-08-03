/*
  Warnings:

  - Changed the type of `nome` on the `TipoMovimentacao` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "TipoMovimentacao" DROP COLUMN "nome";
ALTER TABLE "TipoMovimentacao" ADD COLUMN     "nome" STRING NOT NULL;
