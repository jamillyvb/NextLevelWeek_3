//importar biblioteca
const express = require('express');
const path = require('path');

//iniciando o express
const server = express();
server


//utilizando os arquivos estaticos
.use(express.static('public'))


//criar rota
.get('/', (request, response) => {
    // console.log(request.query)
    return response.sendFile(path.join(__dirname, 'views', 'index.html'))
})


//iniciar servidor
server.listen(5500)