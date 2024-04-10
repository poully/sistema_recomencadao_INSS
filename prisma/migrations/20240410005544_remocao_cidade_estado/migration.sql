/*
  Warnings:

  - You are about to drop the column `cidade_id` on the `Pessoa` table. All the data in the column will be lost.
  - You are about to drop the `Cidade` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Estado` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `cidade_ibge_id` to the `Pessoa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pessoa" DROP COLUMN "cidade_id";
ALTER TABLE "Pessoa" ADD COLUMN     "cidade_ibge_id" INT4 NOT NULL;

-- DropTable
DROP TABLE "Cidade";

-- DropTable
DROP TABLE "Estado";
