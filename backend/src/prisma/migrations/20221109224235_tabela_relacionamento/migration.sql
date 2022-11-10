/*
  Warnings:

  - A unique constraint covering the columns `[nome_fantasia]` on the table `PessoaJuridicas` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[inscricao_estadual]` on the table `PessoaJuridicas` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nome_completo]` on the table `Pessoas` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE `Relacionamentos` (
    `id_pessoa` INTEGER NOT NULL,
    `id_pessoa_relacionada` INTEGER NOT NULL,
    `tipo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_pessoa`, `id_pessoa_relacionada`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `PessoaJuridicas_nome_fantasia_key` ON `PessoaJuridicas`(`nome_fantasia`);

-- CreateIndex
CREATE UNIQUE INDEX `PessoaJuridicas_inscricao_estadual_key` ON `PessoaJuridicas`(`inscricao_estadual`);

-- CreateIndex
CREATE UNIQUE INDEX `Pessoas_nome_completo_key` ON `Pessoas`(`nome_completo`);

-- AddForeignKey
ALTER TABLE `Relacionamentos` ADD CONSTRAINT `Relacionamentos_id_pessoa_fkey` FOREIGN KEY (`id_pessoa`) REFERENCES `Pessoas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Relacionamentos` ADD CONSTRAINT `Relacionamentos_id_pessoa_relacionada_fkey` FOREIGN KEY (`id_pessoa_relacionada`) REFERENCES `Pessoas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
