console.log("Esto se ve solo en la consola")
console.info("Esto tambien")

console.warn("WARNING Esto igual pero en amarillo")

console.error("ERROR Esto es un error")

console.log("Este es un ejemplo de template string", 10, "un numero")
console.assert(1==1);
console.assert(1===1);
console.assert(1=="1");
console.assert(1==="1");
console.assert(1== true);
console.assert(1=== true);

//Formas de definir variables
var cosa="Variable antigua"; //no es segura, se puede modificar desde el navegador
let cosa1="Variable actual"; //No es modificable 
alert ("ALERTA ALERTA")
const siono=prompt("Cómo estoy?")
const nose=confirm("Si o no")


function func (){
    console.log("Esto es una función")
    return
}
func()

//funcion moderna o anónima

const rarisimo = () => {
    console.log("Esto es una coa rarísima")
}


const boton = document.getElementById("boton") 
console.log(boton)
boton.onclick = () =>{
    console.log("Hiciste click")
}

const accion = () =>{
    const imagen = document.getElementById("funspan")
    imagen.innerHTML='<img alt="Foto de nua planta de menta"  src="https://www.genome.gov/sites/default/files/media/images/tg_es/Gen_es_0.jpg" width="300px" height="200px" >'
    boton.onclick = otraccion

}
const otraccion = () =>{
    const imagen = document.getElementById("funspan")
    imagen.innerHTML='<img alt="Foto de algo"  src="https://1.bp.blogspot.com/-Yc214sRBGpQ/YHPe_lmXfOI/AAAAAAAAA3c/WGv7jXfKBDMkVV2l0pD4mS0_967EMA5KgCLcBGAsYHQ/s685/Gen.png" width="300px" height="200px" >'
}
boton.onclick = accion


