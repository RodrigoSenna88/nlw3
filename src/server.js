// Importar dependência
const express = require('express');
const path = require('path');
const pages = require('./pages');

// Iniciando express
const server = express()
server
// utilizando arquivos estáticos
.use(express.static('public'))

//configurar template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

// Rotas da API
.get('/', pages.index)
.get('/orphanages', pages.orphanages)
.get('/orphanage', pages.orphanage)
.get('/create-orphanage', pages.createOrphanage)


// Ligar o servidor
server.listen(5500)