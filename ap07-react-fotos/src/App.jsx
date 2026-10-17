import React from 'react'
import Busca from "./components/Busca"
import ListaImagens from './components/ListaImagens'
import PexelsLogo from './components/PexelsLogo'
import pexelsClient from './utils/pexelsClient'
export default class App extends React.Component {

  state = {
    photos: []
  }

    
  // onBuscaRealizada = (termoDeBusca) => {
  //   this.pexelsClient.photos.search({
  //     query: termoDeBusca
  //   })
  //   .then((result) => {
  //     this.setState({photos: result.photos})    
  //   })  
  // }

  onBuscaRealizada = async (termoDeBusca) => {
    const result = await pexelsClient.get('/search', {
      params: {
        query: termoDeBusca
      }  
    })
    this.setState({photos: result.data.photos})
  }

  
  render(){
    return(
      <div className="grid">
        <div className="col-12">
          <PexelsLogo />
        </div>
        <div className="col-12">
          <h1>Exibir uma lista...</h1>
        </div>
        <div className="col-12">
          <Busca onBuscaRealizada={this.onBuscaRealizada}/>
        </div>
        <div className='col-12'>
          <div className="grid">
            <ListaImagens
              responsiveStyle='col-12 md:col-6 lg:col-4 xl:col-3'
              imgStyle='flex justify-content-center' 
              photos={this.state.photos}/>  
          </div>
        </div>
      </div>
    )
  }
}
