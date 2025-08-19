import styles from "./Botao.module.css"

interface IBotao{
    conteudo: string
}

const BotaoDeSim = ({conteudo}: IBotao) => {

    const isSim = conteudo.trim().toLowerCase() === "sim"

    return (
        <div className={`${styles.container} ${isSim ?styles.sim: ""}`} >
            {conteudo}
        </div>
    )
}

export default BotaoDeSim
