import { useState } from "react"
import styles from "./Botao.module.css"
import { Link } from "react-router-dom"

interface IBotao{
    conteudo: string
}

const BotaoDeSim = ({conteudo}: IBotao) => {

    const [posicao, setPosicao] = useState({top: 200, left: 200, isFixed: false})

    const isSim = conteudo.trim().toLowerCase() === "sim"

    const novaPosicao = () =>{
        const novoTop = Math.floor(Math.random() * (window.innerHeight - 200))
        const novaLeft = Math.floor(Math.random() * (window.innerWidth - 300))

        setPosicao({top: novoTop, left: novaLeft, isFixed: true})
    }


    return (
        <div 
            className={`${styles.container} ${isSim ?styles.sim : ""}`}
            style={!isSim && posicao.isFixed ?{
                position: "fixed",
                top: `${posicao.top}px`,
                left: `${posicao.left}px`
            }: {}} 
            onMouseEnter={!isSim ? novaPosicao: undefined}
            
            >
            {isSim ? (
                <Link to="/sim" className={styles.link}>{conteudo}</Link>
            ): <>{conteudo}</>}
        </div>
    )
}

export default BotaoDeSim