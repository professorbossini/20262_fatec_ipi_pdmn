require('dotenv').config()
const axios = require('axios')
const cors = require('cors') //cross origin resource sharing
const express = require('express')
const app = express()
//middleware
app.use(cors())
app.use(express.json())

//definindo um endpoint: ou seja, uma tripla
//método do protocolo HTTP, um padrão de acesso e uma funcionalidade
//modelo de maturidade de richardson HATEOAS Hyper Media as the engine of application state
//application programming interface
//http://localhost:3000/search?=color=black&raca=siames&querycat
app.get('/search', async (req, res) => {
  //pegar o valor associado ao parâmetro query
  const query = req.query.query
  //.lidar com a chave localmente, no servidor
  //pegar a chave e encaixar como autenticadora da requisição
  const chaveAPI = process.env.API_KEY
  console.log(`query: ${query}, chaveAPI: ${chaveAPI}`)
  //usar a axios para enviar a requisição para a api da pexels
  const pexelsClient = axios.create({
    baseURL: 'https://api.pexels.com/v1',
    headers: {
      Authorization: chaveAPI
    }
  })
  const result = await pexelsClient.get('/search', {
    params: {
      query: query   
    }
  })
  //tratar a resposta recebida da pexels
  //responder o front entregando para ele as fotos que foram obtidas junto à API da pexels
  res.json({photos: result.data.photos})
})

const port = 3000
app.listen(port, () => {
  console.log(`Servidor up and running. Porta ${port}.`)
})
