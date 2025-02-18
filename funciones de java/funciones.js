

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
    resultado.textContent = "Resultado: " + suma + ", ";
    if (supuesto == suma) {
        resultado.textContent += "estás en lo correcto";
    } else {
        resultado.textContent += "estás mal";
    }
    document.getElementById("Lab4_JS").appendChild(resultado); // Insertar el mensaje en la sección
}


