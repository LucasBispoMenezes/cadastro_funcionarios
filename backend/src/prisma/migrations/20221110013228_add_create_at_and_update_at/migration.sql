/*
  Warnings:

  - Added the required column `updatedAt` to the `Documentos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Enderecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Pix` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Relacionamentos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Telefones` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `contaBancarias` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Documentos` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Enderecos` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Pix` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Relacionamentos` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Telefones` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `contaBancarias` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;
