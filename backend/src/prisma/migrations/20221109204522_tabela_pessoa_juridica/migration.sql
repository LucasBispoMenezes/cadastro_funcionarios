-- CreateTable
CREATE TABLE `PessoaJuridicas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_pessoa` INTEGER NOT NULL,
    `nome_fantasia` VARCHAR(191) NOT NULL,
    `ramo` VARCHAR(191) NOT NULL,
    `inscricao_estadual` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PessoaJuridicas` ADD CONSTRAINT `PessoaJuridicas_id_pessoa_fkey` FOREIGN KEY (`id_pessoa`) REFERENCES `Pessoas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
