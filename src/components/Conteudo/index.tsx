import BotaoDeSim from "../BotaoDeSim"
import styles from "./Conteudo.module.css"

const Conteudo = () => {
    return (
        <section className={styles.container}>
            <BotaoDeSim conteudo="Sim"/>
            <BotaoDeSim conteudo="Não"/>
        </section>
    )
}

export default Conteudo
