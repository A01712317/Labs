const html = `
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css">
    </head>
    <body>
        <form action="/agregar" method="post">
            <label for="nombre" class="label">Nombre del coso</label>
            <input
                id="nombre"
                class="input is-link"
                type="text"
                placeholder="Link input"
                name="nombre"
            />
            <input class="button is-info" type="submit" value="enviar">
        </form>
    </body>
</html>
`;


const http = require('http');
const fs = require('fs');
const path = require('path');

// Lee el contenido de index.html
const indexHTML = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

const server = http.createServer((request, response) => {  

    if(request.method == "GET" && (request.url == "/agregar" || request.url == "/")) {
        console.log(request.url);
        response.setHeader('Content-Type', 'text/html');
        response.write(indexHTML);
        response.end();
    } else if(request.method == "POST" && request.url == "/agregar") {
        
        const datos_completos = [];

        request.on('data', (data)=>{
            console.log(data);
            datos_completos.push(data);
        });

        request.on('end', () => {
            const string_datos_completos = Buffer.concat(datos_completos).toString();
            console.log(string_datos_completos);

            const nueva_planta = string_datos_completos.split('=')[1];

            plantas.push(nueva_planta);

            response.setHeader('Content-Type', 'text/html');
            response.write(indexHTML);
            
            response.write(`<div class="columns">`);
            for(const planta of plantas) {
                response.write(`<div class="column">`);
                response.write(`<div class="card">
                <div class="card-content">
                    <div class="content">`);
                response.write(planta);
                response.write(`</div>
                    </div>
                </div>`);
                response.write(`</div>`);
            }

            response.end();

        });

    } else if (request.method == "GET" && request.url == "/styles.css") {
        // Sirve el archivo de estilos CSS
        fs.readFile(path.join(__dirname, 'styles.css'), 'utf8', (err, data) => {
            if (err) {
                response.statusCode = 500;
                response.end('Error loading styles.css');
                return;
            }
            response.setHeader('Content-Type', 'text/css');
            response.end(data);
        });
    } else if (request.method == "GET" && request.url == "/functions.js") {
        // Sirve el archivo de funciones JavaScript
        fs.readFile(path.join(__dirname, 'functions.js'), 'utf8', (err, data) => {
            if (err) {
                response.statusCode = 500;
                response.end('Error loading functions.js');
                return;
            }
            response.setHeader('Content-Type', 'application/javascript');
            response.end(data);
        });
    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write(indexHTML);
        response.write('<div class="notification is-danger">La página no existe</div>');
        response.end();
    }

});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
