const http = require('http');



const server = http.createServer( (req, res ) => {
    
    res.writeHead(200, {'Content-Type':'application/json'});
    
    const persona = {
        id: 1,
        nombre: 'Luis'
    };

    res.write( JSON.stringify(persona));
    res.end();
});

server.listen(8080);

console.log("Escuchando en puerto 8080");