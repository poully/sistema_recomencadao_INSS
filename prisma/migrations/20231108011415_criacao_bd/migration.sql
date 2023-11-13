-- CreateTable
CREATE TABLE `Beneficio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AuxilioMaternidade` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `senhaGov` VARCHAR(191) NOT NULL,
    `nomeMae` VARCHAR(191) NOT NULL,
    `dataSaidaEmprego` DATETIME(3) NOT NULL,
    `dataNascimentoBebe` DATETIME(3) NULL,
    `matriculaCertidao` VARCHAR(191) NULL,
    `dataRegistro` VARCHAR(191) NULL,
    `rua` VARCHAR(191) NOT NULL,
    `numero` INTEGER NOT NULL,
    `bairro` VARCHAR(191) NOT NULL,
    `cep` INTEGER NOT NULL,
    `beneficio_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Documento` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `registro` INTEGER NOT NULL,
    `comprovanteResidencia` VARCHAR(191) NOT NULL,
    `comprovanteRenda` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DocumentoHasBeneficio` (
    `documento_id` INTEGER NOT NULL,
    `beneficio_id` INTEGER NOT NULL,

    INDEX `fk_documento_has_beneficio_beneficio1_idx`(`beneficio_id`),
    INDEX `fk_documento_has_beneficio_documento1_idx`(`documento_id`),
    PRIMARY KEY (`documento_id`, `beneficio_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
