const express = require('express')
const app = express()

// carrega css, js e todas as dependências
app.use(express.static(__dirname + '/public'))
// carrega ejs
app.set('view engine', 'ejs')

// pagina exemplo
app.get(['/', '/home'], (req, res) => {
  res.render('pages/index')
})

// 3. Setup e Template Básico
app.get('/3', (req, res) => {
  res.render('pages/aulas/3')
});

// 4. Renderização com WebGL
app.get('/4', (req, res) => {
  res.render('pages/aulas/4')
});

// 5. Criando sua primeira cena: conceitos básicos
app.get('/5', (req, res) => {
  res.render('pages/aulas/5')
});

// 6. Câmeras e renderização
app.get('/6', (req, res) => {
  res.render('pages/aulas/6')
});

// Server
app.listen(3000, () => {
  console.log("Aplicação rodando na porta 3000 ")
});
