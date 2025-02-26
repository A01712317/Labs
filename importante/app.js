const http = require('http');
const fs = require('fs');
const path = require('path');

// Lee el contenido de index.html
const indexHTML = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const para_post=`        
        <section id="Lab_node" class= "hidden">

            <form action="/agregar" method="POST">
              <label for="nombre" class="label">Ingresa tu main de rivals</label>
              <input
                class="input is-info"
                type="text"
                placeholder="Moon Knight"
                id="nombre"
                name="nombre"
              />
              <br><br>
              <input class="button is-info" type="submit" value="Enviar">
            </form>

        </section>
        <script src="navegacion.js"></script>
    </body>
</html>
`;
const personajes= [];

const server = http.createServer((request, response) => {  

    if(request.method == "GET" && (request.url == "/agregar" || request.url == "/")) {
        console.log(request.url);
        response.setHeader('Content-Type', 'text/html');
        response.write(indexHTML+para_post);
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
          //split() separa un string por el parámetro recibido, 
          //y cada parte la pone en un arreglo
            const nuevo_personaje = string_datos_completos.split('=')[1];
    
          //Si fueran 2 inputs:
          //const nuevo_personaje = string_datos_completos.split('&')[0].split('=')[1];
    
            personajes.push(nuevo_personaje);
    
            response.setHeader('Content-Type', 'text/html');
            response.write(indexHTML);
            
            response.write(`<div class="columns">`);
            for(const personaje of personajes) {
            response.write(`<div class="column">`);
            response.write(`<div class="card">
                <div class="card-content">
                <div class="content">`);
            response.write(personaje);
            response.write(`</div>
                </div>
                </div>`);
            response.write(`</div>`);
            }
            response.write(`</div>`);
    
            response.write(para_post);
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
    } else if (request.method == "GET" && request.url == "/funciones.js") {
        // Sirve el archivo de funciones JavaScript
        fs.readFile(path.join(__dirname, 'funciones.js'), 'utf8', (err, data) => {
            if (err) {
                response.statusCode = 500;
                response.end('Error loading functions.js');
                return;
            }
            response.setHeader('Content-Type', 'application/javascript');
            response.end(data);
        });
    } else if (request.method == "GET" && request.url == "/navegacion.js") {
        // Sirve el archivo de funciones JavaScript
        fs.readFile(path.join(__dirname, 'navegacion.js'), 'utf8', (err, data) => {
            if (err) {
                response.statusCode = 500;
                response.end('Error loading functions.js');
                return;
            }
            response.setHeader('Content-Type', 'application/javascript');
            response.end(data);
        });
    }
    else {
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
