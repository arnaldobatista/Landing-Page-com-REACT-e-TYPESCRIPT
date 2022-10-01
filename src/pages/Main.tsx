import ButtonContact from '../atoms/ButtinContact'
import Frontend from '../templates/Frontend'
import * as S from './styles'
import HeroHeaderImagem from '../assets/hero-header-image.png'
import CardActivity from '../molecules/CardActivity'

function Main() {
  return (
  <Frontend>
    <S.Container>
      <div>
        <h1>Design driven development of your web product</h1>
        <h6>We are a full service digital agency that builds immesive user experience.</h6>
        <ButtonContact></ButtonContact>
      </div>
      <S.ColumnImage>
        <CardActivity>
          
        </CardActivity>
        <img src={HeroHeaderImagem} alt="Imagem" />
      </S.ColumnImage>
    </S.Container>

  </Frontend>
  )
}

export default Main
