import * as S from './styles'
type FrontendProps = { // criando o tipo do que a constant Frontend vai receber na functon.
    children: React.ReactNode
}

const Frontend = ({children}: FrontendProps) => {
    return (
        <S.Container>
            teste fron {children}
        </S.Container>
    )
}

export default Frontend 