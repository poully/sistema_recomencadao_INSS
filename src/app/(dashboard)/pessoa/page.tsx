import { getPessoas } from '@/src/api-client/pessoaService';
import { Box, Button, Text } from '@mantine/core';

export default async function PessoaList() {
    const pessoas = await getPessoas();

    return (
        <Box>
            <Text variant="h1">Lista de Pessoas</Text>
            {pessoas && pessoas.map((pessoa) => (
                <Box key={pessoa.id}>
                    <Text>{pessoa.nome}</Text>
                    <Button>Excluir</Button>
                </Box>
            ))}
        </Box>
    );
}
