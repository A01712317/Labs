function cuadrados(n) {
    let tabla = document.createElement("table");
    tabla.style.width = "100%";
    tabla.style.borderCollapse = "collapse";
    let thead = document.createElement("thead");
    let headerRow = document.createElement("tr");
    let th1 = document.createElement("th");
    let th2 = document.createElement("th");

    th1.textContent = "Número";
    th2.textContent = "Cuadrado";

    headerRow.appendChild(th1);
    headerRow.appendChild(th2);
    thead.appendChild(headerRow);
    tabla.appendChild(thead);

    let tbody = document.createElement("tbody");

    for (let i = 1; i <= n; i++) {
        let row = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");

        td1.textContent = i;
        td2.textContent = i * i;

        row.appendChild(td1);
        row.appendChild(td2);
        tbody.appendChild(row);
    }

    tabla.appendChild(tbody);
    document.getElementById("Lab4_JS").appendChild(tabla); // Insertar la tabla en la sección
}

function suma() {
    let random1 = Math.floor(Math.random() * 100);
    let random2 = Math.floor(Math.random() * 100);
    let supuesto = prompt("Dame el resultado de " + random1 + " + " + random2);
    let suma = random1 + random2;
    if (supuesto == suma) {
        alert("¡Correcto!");
    } else {
        alert("¡Incorrecto!");
    }

    // Crear un nuevo párrafo en lugar de un elemento body
    let resultado = document.createElement("p");
    resultado.textContent = "Resultado de la suma de " +random1+ " y "+random2+" es: " + suma + ", ";
    if (supuesto == suma) {
        resultado.textContent += "estás en lo correcto";
    } else {
        resultado.textContent += "estás mal";
    }
    document.getElementById("Lab4_JS").appendChild(resultado); // Insertar el mensaje en la sección
}

function arreglo() {
    let random1 = Math.floor(Math.random() * 100);
    const arreglo = new Array(random1);

    // Inicializar los contadores
    let contador_negs = 0;
    let contador_zeros = 0;
    let contador_pos = 0;

    for (let i = 0; i < random1; i++) {
        let min = -100;
        let max = 100;
        const random2 = Math.floor(Math.random() * (max - min + 1)) + min;
        
        // Almacenar el valor random2 en el arreglo
        arreglo[i] = random2;

        if (random2 < 0) {
            contador_negs++;
        } else if (random2 === 0) {
            contador_zeros++;
        } else {
            contador_pos++;
        }
    }

    // Crear un nuevo párrafo en lugar de un elemento body
    let resultado = document.createElement("p");
    resultado.textContent = "Número de negativos: " + contador_negs + 
                            ", número de ceros: " + contador_zeros + 
                            ", número de positivos: " + contador_pos;
    document.getElementById("Lab4_JS").appendChild(resultado); // Insertar el mensaje en la sección
}

function promedios() {
    let tabla = document.createElement("table");
    tabla.style.width = "100%";
    tabla.style.borderCollapse = "collapse";
    tabla.style.border = "1px solid black";
    let min = 2;
    let max = 15;
    const columnas = Math.floor(Math.random() * (max - min + 1)) + min;
    const renglones = Math.floor(Math.random() * (max - min + 1)) + min;

    let matriz = new Array(renglones);
    for (let i = 0; i < renglones; i++) {
        matriz[i] = new Array(columnas);
        for (let j = 0; j < columnas; j++) {
            matriz[i][j] = Math.floor(Math.random() * 100);
        }
    }

    let promedios = new Array(renglones);
    for (let i = 0; i < renglones; i++) {
        let suma = 0;
        for (let j = 0; j < columnas; j++) {
            suma += matriz[i][j];
        }
        promedios[i] = (suma / columnas).toFixed(2);
    }

    let titulo = document.createElement("h2");
    titulo.textContent = "La matriz generada:";
    document.getElementById("Lab4_JS").appendChild(titulo);

    let tbody = document.createElement("tbody");

    for (let i = 0; i < renglones; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < columnas; j++) {
            let td = document.createElement("td");
            td.textContent = matriz[i][j];
            td.style.cssText = `width: ${100 / columnas}% !important;`;
            row.appendChild(td);
        }
        tbody.appendChild(row);
    }

    tabla.appendChild(tbody);
    document.getElementById("Lab4_JS").appendChild(tabla);

    let tituloPromedios = document.createElement("h2");
    tituloPromedios.textContent = "Promedio de cada renglón:";
    document.getElementById("Lab4_JS").appendChild(tituloPromedios);

    let tablaPromedios = document.createElement("table");
    tablaPromedios.style.width = "100%";
    tablaPromedios.style.borderCollapse = "collapse";
    tablaPromedios.style.border = "1px solid black";

    let tbodyPromedios = document.createElement("tbody");
    for (let i = 0; i < renglones; i++) {
        let row = document.createElement("tr");
        let td = document.createElement("td");
        td.textContent = promedios[i];
        td.style.border = "1px solid black";
        td.style.padding = "5px";
        row.appendChild(td);
        tbodyPromedios.appendChild(row);
    }

    tablaPromedios.appendChild(tbodyPromedios);
    document.getElementById("Lab4_JS").appendChild(tablaPromedios);
}

function inverso() {

    let min = 1000;
    let max = 10000000;
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    // Crear un nuevo párrafo en lugar de un elemento body
    
    // Convertir el número a una cadena
    let strNum = num.toString();
    
    // Dividir la cadena en un arreglo de caracteres
    let arrNum = strNum.split('');
    
    // Invertir el arreglo de caracteres
    let arrNumReversed = arrNum.reverse();
    
    // Unir el arreglo de caracteres invertido en una nueva cadena
    let strNumReversed = arrNumReversed.join('');
    
    // Convertir la cadena invertida de nuevo a un número
    let numReversed = parseInt(strNumReversed);
    
    // Regresar el número invertido
    let resultado = document.createElement("h2");
    resultado.textContent = "El inverso de " +num+ " es: "+numReversed;
    document.getElementById("Lab4_JS").appendChild(resultado); // Insertar el mensaje en la sección

}
