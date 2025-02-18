const arrgelo = ["a","b","c","d"];
const que= new Array (10)
arrgelo.push("que")

arrgelo[10]="Otro"


arrgelo["uno"]=2

for (let posicion in arrgelo) {
    console.log(posicion);
}
for (let posicion of arrgelo){
    console.log(posicion);
}

//Objetos

const objeto ={}
objeto.tipo="alog"
objeto.valor=2

