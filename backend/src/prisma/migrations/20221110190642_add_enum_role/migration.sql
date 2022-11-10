/*
  Warnings:

  - You are about to alter the column `role` on the `Usuarios` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `Usuarios` MODIFY `role` ENUM('admin', 'user') NOT NULL;
