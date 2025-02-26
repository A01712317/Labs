//Node
//Usando node podemos manipular archivos, esto no se puede desde el entorno de un navegador ya que estos protegen los equipos 
//


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



const fileSystem=require('fs'); //define una variable
//Generalmente el código se ejecuta sincrónicamente
//por lo que el sistema espera a que el hardware interactúe con archivos
//pausando el código mientras se realiza este proceso
//writeFileSync pausa todo el código en lo que el equipo crea un archivo llamado hola de tipo
//txt y su contenido es Hola con node
fileSystem.writeFileSync = ('hola.txt', 'Hola con node');

//writeFile ejecuta el código asincrónicamente por lo que en teoría 
//no espera a que el sistema interactúe con archivos y se sigue de corrido


// Este es un ejemplo de programación asincrona ya que 
// Aunque esta linea este definida antes, no va a detener todo el código para ejecutarse
// el código seguirá y la linea que tardaba se ejecutará hasta que termine de procesarce
// pero mientras es procesada ejecutará el resto del código
setTimeout(() => { console.log('nopuedeser')}, 20000);

const arreglo =[1 , 5525, 651, 5,161961,6191,916,16 ,16194 ,151];

//Usando un bucle for...of para recorrer el arreglo
    //setTimeout ejecuta una función después de un tiempo específico
    //en este caso se ejecuta la función imprimir cada elemento del arreglo en un intervalo de tiempo que es igual al valor del elemento
    //Esto lo hace para que no se ejecuten todas las funciones a la vez y se vea el resultado de cada elemento en la consola en orden

for (let item of arreglo){
    setTimeout(() =>{ //
        console.log(item)
    }, item);
}
console.log("primero?");


const plantas = [];

const http = require('http');
const fs = require('fs');

const yanosirve=`
const server = http.createServer( (request, response) => {  

    if(request.method == "GET" && (request.url == "/agregar" || request.url == "/")) {
        const htmlContent = fs.readFileSync('index.html', 'utf-8');
        console.log(request.url);
        response.setHeader('Content-Type', 'text/html');
        response.write(htmlContent);
        response.end();
    }
});

server.listen(3000);`