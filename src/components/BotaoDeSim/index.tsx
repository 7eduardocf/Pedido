interface IBotao{
    conteudo: string
}

const BotaoDeSim = ({conteudo}: IBotao) => {
    return (
        <div>
            {conteudo}
        </div>
    )
}

export default BotaoDeSim
