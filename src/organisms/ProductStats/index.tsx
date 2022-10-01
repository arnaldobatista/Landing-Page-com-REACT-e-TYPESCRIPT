import * as S from './styles'
import CardActivity from '../../molecules/CardActivity'
import HeroHeaderImagem from '../../assets/hero-header-image.png'
import CardChart from '../../molecules/CardChart'



const ProductStats = () => {
    return (
        <S.Container>
        <CardActivity/>
        <CardChart/>
        <img src={HeroHeaderImagem} alt="Imagem" />
      </S.Container>
    )
}

export default ProductStats