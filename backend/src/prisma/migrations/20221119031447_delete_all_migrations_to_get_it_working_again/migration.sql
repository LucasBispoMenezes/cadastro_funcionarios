-- CreateTable
CREATE TABLE `Pessoas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_completo` VARCHAR(191) NOT NULL,
    `data_nascimento` DATETIME(3) NOT NULL,
    `sexo` VARCHAR(191) NOT NULL,
    `estado_civil` VARCHAR(191) NOT NULL,
    `nacionalidade` VARCHAR(191) NOT NULL,
    `naturalidade` VARCHAR(191) NOT NULL,
    `situacao` VARCHAR(191) NOT NULL,
    `cpf_cnpj` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Pessoas_nome_completo_key`(`nome_completo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PessoaJuridicas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_pessoa` INTEGER NOT NULL,
    `nome_fantasia` VARCHAR(191) NOT NULL,
    `ramo` VARCHAR(191) NOT NULL,
    `inscricao_estadual` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `PessoaJuridicas_nome_fantasia_key`(`nome_fantasia`),
    UNIQUE INDEX `PessoaJuridicas_inscricao_estadual_key`(`inscricao_estadual`),
    INDEX `PessoaJuridicas_id_pessoa_fkey`(`id_pessoa`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Relacionamentos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_pessoa` INTEGER NOT NULL,
    `id_pessoa_relacionada` INTEGER NOT NULL,
    `tipo` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Relacionamentos_id_pessoa_relacionada_fkey`(`id_pessoa_relacionada`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Enderecos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_pessoa` INTEGER NOT NULL,
    `endereco` VARCHAR(191) NOT NULL,
    `principal` BOOLEAN NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Enderecos_id_pessoa_fkey`(`id_pessoa`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contaBancarias` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_pessoa` INTEGER NOT NULL,
    `banco` VARCHAR(191) NOT NULL,
    `agencia` VARCHAR(191) NOT NULL,
    `conta` VARCHAR(191) NOT NULL,
    `principal` BOOLEAN NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `contaBancarias_id_pessoa_fkey`(`id_pessoa`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pix` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_banco` INTEGER NOT NULL,
    `chave` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `tipo` VARCHAR(191) NOT NULL,

    INDEX `Pix_id_banco_fkey`(`id_banco`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Telefones` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_pessoa` INTEGER NOT NULL,
    `numero` VARCHAR(191) NOT NULL,
    `principal` BOOLEAN NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Telefones_id_pessoa_fkey`(`id_pessoa`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Documentos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_pessoa` INTEGER NOT NULL,
    `numero_de_registro` VARCHAR(191) NOT NULL,
    `nome_docs` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Documentos_id_pessoa_fkey`(`id_pessoa`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_pessoa` INTEGER NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `role` ENUM('admin', 'user') NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Usuarios_email_key`(`email`),
    INDEX `Usuarios_id_pessoa_fkey`(`id_pessoa`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PessoaJuridicas` ADD CONSTRAINT `PessoaJuridicas_id_pessoa_fkey` FOREIGN KEY (`id_pessoa`) REFERENCES `Pessoas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Relacionamentos` ADD CONSTRAINT `Relacionamentos_id_pessoa_fkey` FOREIGN KEY (`id_pessoa`) REFERENCES `Pessoas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Relacionamentos` ADD CONSTRAINT `Relacionamentos_id_pessoa_relacionada_fkey` FOREIGN KEY (`id_pessoa_relacionada`) REFERENCES `Pessoas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Enderecos` ADD CONSTRAINT `Enderecos_id_pessoa_fkey` FOREIGN KEY (`id_pessoa`) REFERENCES `Pessoas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `contaBancarias` ADD CONSTRAINT `contaBancarias_id_pessoa_fkey` FOREIGN KEY (`id_pessoa`) REFERENCES `Pessoas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pix` ADD CONSTRAINT `Pix_id_banco_fkey` FOREIGN KEY (`id_banco`) REFERENCES `contaBancarias`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Telefones` ADD CONSTRAINT `Telefones_id_pessoa_fkey` FOREIGN KEY (`id_pessoa`) REFERENCES `Pessoas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Documentos` ADD CONSTRAINT `Documentos_id_pessoa_fkey` FOREIGN KEY (`id_pessoa`) REFERENCES `Pessoas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Usuarios` ADD CONSTRAINT `Usuarios_id_pessoa_fkey` FOREIGN KEY (`id_pessoa`) REFERENCES `Pessoas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
