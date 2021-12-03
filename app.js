const express = require('express')
const app = express()

// carrega css, js e todas as dependências
app.use(express.static(__dirname + '/public'))
// carrega ejs
app.set('view engine', 'ejs')

// pagina home
app.get(['/', '/home'], function(req, res){
    res.render('pages/index')
})
// pagina 404
app.get('*', function(req, res){
    res.render('pages/404')
});

app.listen(3000, function(){
    console.log("Aplicação rodando na porta 3000 ")
});