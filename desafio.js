let nomeHero = "Marshal"
let nivelHero = 1000

if (nivelHero >= 1000) {
    //console.log("Ferro")
}


//console.log("O Herói de nome:  " + nomeHero + " está no nível : " + nivelHero)
switch (nivelHero) {
    case 1000:
        console.log("Bronze")
        break

    case 2000:
        console.log("Prata")
        break


}


console.log("Ouro")
console.log("Platina")
console.log("Ascendente")
console.log("Imortal")
console.log("Radiante")



//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 5.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = Radiante