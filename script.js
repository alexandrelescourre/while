"use strict";

//Tout d'abord je vais déclarer une varaible "a" qui est égale a 3
//Tant que "a" est plus petit que 9, on incremente "a" de 1
//Si "a" est égal a 8, on arrête la boucle 
//Si "a" est égal a 7, on revient au début de la boucle

let aT=3;
while(a<9){
    aT++
    if(aT==7){
        continue
    }
    if(aT==8){
        break
    }
    console.log(aT);
}
console.log('Jai cassé la boucle au bout de '+aT+" tours");