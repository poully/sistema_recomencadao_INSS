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
