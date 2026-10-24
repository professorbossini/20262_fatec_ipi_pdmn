// rafce
import React from 'react'

const Imagem = ({src, alt, imgStyle, responsiveStyle}) => {
  return (
    <div className={`${responsiveStyle} ${imgStyle}`}>
      <img 
        src={src} 
        alt={alt} />
    </div>
  )
}

export default Imagem
