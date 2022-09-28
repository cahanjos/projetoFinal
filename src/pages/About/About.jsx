import videoImg from '../../assets/video.mp4'
import styles from './about.module.css'

function About() {
  return (
    <>
      <div className={styles.header}>
        <h1>
          Está perdida? Calma e vem comigo.
        </h1>
        <img src={videoImg} />
      </div>
      <div className={styles.subtitulo}>
       <p>Nesse primeiro momento o ideal é aprender as soft e hard skills necessárias para se tornar uma dev front-end jr. Então, escolha uma linguagem e foque nela, e apenas nela, colocando muita mão no código para ficar expert naquela linguagem.</p>
      </div>
      
    </>
  )
}

export default About