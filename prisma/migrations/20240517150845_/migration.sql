/*
  Warnings:

  - You are about to drop the column `imagem` on the `Documentos` table. All the data in the column will be lost.
  - Added the required column `conteudo` to the `Documentos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `extensao` to the `Documentos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Documentos" DROP COLUMN "imagem";
ALTER TABLE "Documentos" ADD COLUMN     "conteudo" STRING NOT NULL;
ALTER TABLE "Documentos" ADD COLUMN     "extensao" STRING NOT NULL;
