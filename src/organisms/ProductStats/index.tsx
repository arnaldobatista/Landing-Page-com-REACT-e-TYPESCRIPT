import * as S from './styles'
import CardActivity from '../../molecules/CardActivity'
import HeroHeaderImagem from '../../assets/hero-header-image.png'



const ProductStats = () => {
    return (
        <S.Container>
        <CardActivity/>
        <img src={HeroHeaderImagem} alt="Imagem" />
      </S.Container>
    )
}

export default ProductStats