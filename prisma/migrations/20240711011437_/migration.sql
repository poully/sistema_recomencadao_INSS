-- CreateTable
CREATE TABLE "Pessoa" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nome" STRING NOT NULL,
    "email" STRING NOT NULL,
    "endereco" STRING NOT NULL,
    "telefone" STRING NOT NULL,
    "data_nasc" TIMESTAMP(3) NOT NULL,
    "cpf" STRING NOT NULL,
    "cnis" STRING NOT NULL,
    "cidade" STRING NOT NULL,
    "uf" STRING NOT NULL,

    CONSTRAINT "Pessoa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Situacao" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nome" STRING NOT NULL,

    CONSTRAINT "Situacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tipo" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nome" STRING NOT NULL,

    CONSTRAINT "Tipo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Especialista" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nome" STRING NOT NULL,
    "email" STRING NOT NULL,
    "telefone" STRING NOT NULL,
    "endereco" STRING NOT NULL,
    "cidade" STRING NOT NULL,
    "uf" STRING NOT NULL,

    CONSTRAINT "Especialista_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Beneficio" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "numero_beneficio" STRING NOT NULL,
    "situacao_id" UUID NOT NULL,
    "pessoa_id" UUID NOT NULL,
    "tipo_id" UUID NOT NULL,
    "especialista_id" UUID NOT NULL,

    CONSTRAINT "Beneficio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Documentos" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "descricao" UUID NOT NULL,
    "imagem" UUID NOT NULL,
    "beneficio_id" UUID NOT NULL,

    CONSTRAINT "Documentos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoMovimentacao" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nome" UUID NOT NULL,

    CONSTRAINT "TipoMovimentacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Movimentacao" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "beneficio_id" UUID NOT NULL,
    "tipo_movimentacao_id" UUID NOT NULL,

    CONSTRAINT "Movimentacao_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Beneficio" ADD CONSTRAINT "Beneficio_situacao_id_fkey" FOREIGN KEY ("situacao_id") REFERENCES "Situacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Beneficio" ADD CONSTRAINT "Beneficio_pessoa_id_fkey" FOREIGN KEY ("pessoa_id") REFERENCES "Pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Beneficio" ADD CONSTRAINT "Beneficio_tipo_id_fkey" FOREIGN KEY ("tipo_id") REFERENCES "Tipo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Beneficio" ADD CONSTRAINT "Beneficio_especialista_id_fkey" FOREIGN KEY ("especialista_id") REFERENCES "Especialista"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Documentos" ADD CONSTRAINT "Documentos_beneficio_id_fkey" FOREIGN KEY ("beneficio_id") REFERENCES "Beneficio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Movimentacao" ADD CONSTRAINT "Movimentacao_beneficio_id_fkey" FOREIGN KEY ("beneficio_id") REFERENCES "Beneficio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Movimentacao" ADD CONSTRAINT "Movimentacao_tipo_movimentacao_id_fkey" FOREIGN KEY ("tipo_movimentacao_id") REFERENCES "TipoMovimentacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
