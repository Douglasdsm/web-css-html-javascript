const porta = 3004
const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados2')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.get('/produtos',(req,res,next)=>{
   res.send(bancoDeDados.getProdutos())
})
app.get('./produtos/:id',(req,res,next)=>{
    res.send(bancoDeDados.getProduto(req.params.id))
})
app.post('/produtos',(req,res,next)=>{
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
    
})
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})
app.get('/produtos',(req,res,next)=>{
    res.send({nome:'notebook',preco:123.45})// converte para JSON
})
app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // JSON
})
app.listen(porta,()=>{
    console.log(`Servidor esta  executando na porta ${porta}.`);
})