/*
  Warnings:

  - You are about to drop the column `beneficio_id` on the `AuxilioMaternidade` table. All the data in the column will be lost.
  - You are about to drop the column `senhaGov` on the `AuxilioMaternidade` table. All the data in the column will be lost.
  - Added the required column `beneficioId` to the `AuxilioMaternidade` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `AuxilioMaternidade` DROP COLUMN `beneficio_id`,
    DROP COLUMN `senhaGov`,
    ADD COLUMN `beneficioId` INTEGER NOT NULL;
