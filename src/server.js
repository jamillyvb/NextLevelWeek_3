//importar biblioteca
const express = require('express');
const path = require('path');
//iniciando o express
const server = express();

//criar rota
server.get('/', (request, response) => {
    return response.sendFile(path.join(__dirname, 'views', 'index.html'))
})

//iniciar servidor
server.listen(5500)