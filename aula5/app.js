const express = require('express');
const app = express();


app.get('/', function(req,res){
    res.send("Pagina Home");
})
app.get('/sobre', function(req,res){
    res.send("Quem somos");
})

app.listen(3000, function(){
    console.log("Servidor rodando");
})