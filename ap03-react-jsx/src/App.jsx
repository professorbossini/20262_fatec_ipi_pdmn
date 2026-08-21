import './styles.css'
//arrow function
//https://professorbossini.dev > javascript > 01
const App = () => {
  const estilosBotao = {marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', color: 'white', border: 'none', width: '100%', borderRadius: 8}
  const textoRotulo = "Nome:"
  const obterTextoDoBotao = () => "Enviar"
  const aoClicar = function(){
    alert('Clicou')
  }
  return (
    <div style={{margin: 'auto', width: 768, backgroundColor: '#777', padding: 12, borderRadius: 8}}>
      <label
        className='rotulo'
        style={{display: 'block', marginBottom: 8}} 
        htmlFor="nome">
          {textoRotulo}
      </label>
      <input 
        id="nome"
        type="text"
        style={{paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', width: '100%', borderRadius: 8, outline: 'none'}} />
      <button
        onClick={() => {
          console.log("oi")
          aoClicar()
        }} 
        style={estilosBotao}>
        {obterTextoDoBotao()}
      </button>
    </div>
  )
}

export default App

