import styles from './home.module.css'
import homeImg from '../../assets/home-img.svg'
import vagasImg from '../../assets/vagas.svg'
import salarioImg from '../../assets/salario.svg'
import curriculoImg from '../../assets/curriculo.svg'
import portfolioImg from '../../assets/portfolio.svg'

function Home () {
    return (
        <>
        <div className={styles.header}>
        <h1>
            Camila transitando de carreira
        </h1>
        <img src={homeImg} />
       </div>
       <div className={styles.subtitulo}>
        <p>Transitar de carreira não é fácil, ainda mais aos 31 anos de idade e mil inseguranças em torno. Acompanhe minha trajetória de descobertas e recomeços</p>
      </div>
      <div className={styles.beneficios}>
    <section className={styles.content}>
      <div className={styles.cardsContainer}>
        <h2 className={styles.tituloCards}>Razões para transitar para a área tech:</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img className={styles.imagemCard} src={vagasImg} />
            <div className={styles.textos}>
              <h3 className={styles.subtituloCard}>Vagas</h3>
              <p className={styles.texto}>Tecnologia é o mercado que mais cresce no mundo. Estima-se que até 2025, no Brasil, 800 mil vagas de pessoas desenvolvedoras não serão preenchidas por falta de pessoas qualificadas.</p>
            </div>
          </div>
          <div className={styles.card}>
            <img className={styles.imagemCard} src={salarioImg} />
            <div className={styles.textos}>
              <h3 className={styles.subtituloCard}>Salários</h3>
              <p className={styles.texto}>Os salários e benefícios são muito atrativos chegando a valer mais do dobro do salário médio no Brasil, até para pessoas iniciantes ou estagiárias.</p>
            </div>
          </div>
        </div>
      </div>
      </section>
    <section className={styles.content}>
      <div className={styles.cardsContainer}>
        <h2 className={styles.tituloCards}>Como se destacar nesse mercado?</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img className={styles.imagemCard} src={curriculoImg} />
            <div className={styles.textos}>
              <h3 className={styles.subtituloCard}>Currículo</h3>
              <p className={styles.texto}>Mostre em seu currículo todos os benefícios que sua trajetória preguessa trará para essa área. Lembre-se que você não está inciando sua carreira do zero, e sim está incrementando mais a sua trajetória profissional com sua expertise.</p>
            </div>
          </div>
          <div className={styles.card}>
            <img className={styles.imagemCard} src={portfolioImg} />
            <div className={styles.textos}>
              <h3 className={styles.subtituloCard}>Portfólio</h3>
              <p className={styles.texto}>Diferente de outras áreas, a área tech prioriza o seu portfolio na contratação. Nele você deverá demonstrar todos os seus conhecimentos na linguagem escolhida e provar aos recrutadores que você tem ciência naquilo que é pedido.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
    </>
  )
}

export default Home