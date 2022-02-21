/* El siguiente script consiste en un juego de batalla naval,
en primer lugar se solicita que el jugador 1 ingrese la posicion 
horizontal y vertical de su barco, a traves de un proceso de validacion 
se chequea que los numeros ingresados correspondan al rango establecido
Una vez ingresados valores validos se le solicita al jugador 2 que ingrese
la posicion de las bombas, teniendo 3 intentos para asertar.
Al finalizar se le indica que jugador gano*/
console.log('Desafio esta en funcionamiento');
alert('Bienvenido a Batalla Naval')
alert('Turno jugador 1')
let barcoh=0;
let barcov=0;
let bombah=0;
let bombav=0;
while (barcoh>4 || barcoh<1 || isNaN(barcoh)){
    barcoh=parseInt(prompt('Ingrese la posicion horizontal de 1 hasta 4'))
    if(barcoh>4 || barcoh<1|| isNaN(barcoh)){
        alert('Numero invalido')
    }
}
while (barcov>4 || barcov<1 || isNaN(barcov)){
    barcov=parseInt(prompt('Ingrese la posicion vertical de 1 hasta 4'))
    if(barcov>4 || barcov<1|| isNaN(barcov)){
        alert('Numero invalido')
    }
}
    console.log(barcoh);
    console.log(barcov);
alert ('Turno jugador 2, tienes 3 intentos')
    for (let i = 1; i<=3;i==i){
            while (bombah>4 || bombah<1 || isNaN(bombah)){
            bombah=parseInt(prompt('Ingrese la posicion horizontal de 1 hasta 4'))
            if(bombah>4 || bombah<1|| isNaN(bombah)){
                alert('Numero invalido')
            }
        }
        while (bombav>4 || bombav<1 || isNaN(bombav)){
            bombav=parseInt(prompt('Ingrese la posicion vertical de 1 hasta 4'))
            if(bombav>4 || bombav<1|| isNaN(bombav)){
                alert('Numero invalido')
            }
        }
        if (bombah==barcoh && bombav==barcov){
            alert('GANA JUGADOR 2');
            break;
        }  if (i<3){
            alert(`Lo siento, prueba de nuevo, tienes ${3-i} intentos`)
        bombah=0;
        bombav=0;
        i++;
        } else {
            alert('Demasiados intentos, GANA JUGADR 1')
        break;}
        
    }
    