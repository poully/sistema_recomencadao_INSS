import { Grid, GridCol } from '@mantine/core';
import styles from './Home.module.css';

function Home() {
  return (
    <div>
      <div className={styles.background}>
      </div>
      <div className={styles.colunas}>
        <hr className={styles.hr}></hr>
        <h1 style={{ width: "100%", textAlign: "center" }}>Assessoria Beneficio INSS</h1>
      </div>
      <Grid>
        <GridCol span={6}>
          <p className={styles.paragrafos}>
            O salário-maternidade é um benefício concedido durante a licença maternidade para que o trabalhador não fique desamparado no período de afastamento do trabalho.
            As leis que regem a política de salário-maternidade estão sempre em pauta e geram muitas dúvidas, principalmente por conta das recentes alterações que surgiram com a reforma trabalhista.
            Também conhecido como auxílio maternidade ou licença maternidade, se trata de um benefício fornecido pelo Governo Federal que beneficia pessoas que contribuem para a previdência social (INSS).
            Precisa solicitar o seu salário-maternidade? Fale conosco, será um prazer lhe atender!
          </p>
        </GridCol>
        <GridCol span={6} className={styles.mamae}>
        </GridCol>
      </Grid>


    </div >
  );
}

export default Home;
