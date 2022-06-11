const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Olá, olha a minha imagem!')
})

app.listen(port, () => {
  console.log(`Executando na porta: ${port}`)
});