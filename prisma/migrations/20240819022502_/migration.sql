/*
  Warnings:

  - Changed the type of `descricao` on the `Documentos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `imagem` on the `Documentos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Documentos" DROP COLUMN "descricao";
ALTER TABLE "Documentos" ADD COLUMN     "descricao" STRING NOT NULL;
ALTER TABLE "Documentos" DROP COLUMN "imagem";
ALTER TABLE "Documentos" ADD COLUMN     "imagem" STRING NOT NULL;
