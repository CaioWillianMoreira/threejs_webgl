const express = require('express')
const app = express()

// carrega css, js e todas as dependências
app.use(express.static(__dirname + '/public'))
// carrega ejs
app.set('view engine', 'ejs')

// pagina home
app.get(['/', '/home'], (req, res) => {
  res.render('pages/index')
})

// 3. Setup e Template Básico
app.get('/3', (req, res) => {
  res.render('pages/aulas/3')
});

// pagina 404
app.get('*', (req, res) => {
  res.render('pages/404')
});

// Server
app.listen(3000, () => {
  console.log("Aplicação rodando na porta 3000 ")
});
