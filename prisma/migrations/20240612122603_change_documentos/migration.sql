/*
  Warnings:

  - You are about to drop the column `conteudo` on the `Documentos` table. All the data in the column will be lost.
  - You are about to drop the column `extensao` on the `Documentos` table. All the data in the column will be lost.
  - Added the required column `imagem` to the `Documentos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Documentos" DROP COLUMN "conteudo";
ALTER TABLE "Documentos" DROP COLUMN "extensao";
ALTER TABLE "Documentos" ADD COLUMN     "imagem" STRING NOT NULL;
