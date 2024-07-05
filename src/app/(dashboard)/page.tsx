import { Box, Container, Divider, Flex, Image, SimpleGrid, Text, Title } from '@mantine/core';

function Home() {
  return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
      <Container>
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
          <Divider my="sm" />
          <Title order={1}>Assessoria Benefício INSS</Title>
        </div>
        <SimpleGrid>
          <Box>
            <Text style={{ fontSize: '16px', lineHeight: '1.5', color: '#4a4a4a', textAlign: 'justify' }}>
              O salário-maternidade é um benefício concedido durante a licença maternidade para que o trabalhador não fique desamparado no período de afastamento do trabalho.
              As leis que regem a política de salário-maternidade estão sempre em pauta e geram muitas dúvidas, principalmente por conta das recentes alterações que surgiram com a reforma trabalhista.
              Também conhecido como auxílio maternidade ou licença maternidade, se trata de um benefício fornecido pelo Governo Federal que beneficia pessoas que contribuem para a previdência social (INSS).
              Precisa solicitar o seu salário-maternidade? Fale conosco, será um prazer lhe atender!
            </Text>
          </Box>
          <Flex align="center" justify="center">
            <Image src="/barriguda.jpg" alt="Mamãe" radius="md" />
          </Flex>
        </SimpleGrid>
      </Container>
    </div>
  );
}

export default Home;
