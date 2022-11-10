/*
  Warnings:

  - You are about to drop the column `documento` on the `Documentos` table. All the data in the column will be lost.
  - You are about to drop the column `tipo` on the `Documentos` table. All the data in the column will be lost.
  - Added the required column `nome_docs` to the `Documentos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Documentos` DROP COLUMN `documento`,
    DROP COLUMN `tipo`,
    ADD COLUMN `nome_docs` VARCHAR(191) NOT NULL;
