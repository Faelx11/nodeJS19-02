//console.log("mensagem de texto")

/*var n1 = 5
var n2 = 4

var total = n1+n2

console.log("total: " + total)

if( total <= 10){
    console.log("O total é menor ou igual a 10!")
}else{
    console.log("O total é maior que 10!")
}*/

var soma = require('./soma.js')
var subtracao = require('./subtracao.js')
var divisao = require('./divisao.js')
var multiplicacao = require('./multiplicacao.js')

console.log("total do calculo é: " +soma(10,10))
console.log("total do calculo é: " +subtracao(10,10))
console.log("total do calculo é: " +divisao(10,10))
console.log("total do calculo é: " +multiplicacao(10,10))

var http = require('http')

http.createServer(function(req, res){
    res.end("Mensagem direcionada")
}).listen(8081)

console.log(("Servidor está ativo!"))