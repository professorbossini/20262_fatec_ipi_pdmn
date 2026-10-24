import Imagem from './Imagem'
const ListaImagens = ({photos, responsiveStyle, imgStyle}) => {
  return (
    photos.map((photo, key) => (
      <Imagem 
        key={key}
        src={photo.src.small} 
        alt={photo.alt}
        imgStyle={imgStyle}
        responsiveStyle={responsiveStyle}/>
    ))
  )
}

export default ListaImagens