// rcc
import React, { Component } from 'react'
import { Button } from '@primereact/ui/button'
import { IconField } from '@primereact/ui/iconfield'
import { InputText } from '@primereact/ui/inputtext'
import { Search } from '@primeicons/react/search'
export default class Busca extends Component {

 
  state = {
    termoDeBusca: ''
  }

  onTermoAlterado = (evento) => {
    console.log(evento.target.value)
    //atualizar o estado, para que ele contenha o valor digitado pelo usuário em maiúsculas   
    this.setState({termoDeBusca: evento.target.value})
  }

  onFormSubmit = (evento) => {
    evento.preventDefault()
    this.props.onBuscaRealizada(this.state.termoDeBusca)
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className='flex flex-column'>
          <IconField.Root>
            <IconField.Inset>
              <Search />
            </IconField.Inset>
            <InputText
              //ajustar o value para que ele exiba o valor transformado
              value={this.state.termoDeBusca}
              pt-root-onChange={this.onTermoAlterado} 
              className="w-full"
              pt-root-placeholder={this.props.dica} />
          </IconField.Root>
          <Button
            className='mt-3'>
            OK
          </Button>
        </div>
      </form>

    )
  }
}

Busca.defaultProps = {
  dica: 'Digite o que deseja ver...'
}
