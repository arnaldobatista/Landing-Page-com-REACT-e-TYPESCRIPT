import * as S from './styles'
import Header from '../../organisms/Header'
type FrontendProps = { // criando o tipo do que a constant Frontend vai receber na functon.
    children: React.ReactNode
}

const Frontend = ({children}: FrontendProps) => {
    return (
        <S.Container>
            <Header></Header>
            <main>{ children }</main>
        </S.Container>
    )
}

export default Frontend 