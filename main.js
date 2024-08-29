// Une classe
class Stylo{
    constructor(marque){
        this.marque = marque;
    }

    ecrire(){
        console.log(`Le stylo ${this.marque} écrit`);
    }
}

// Programme principal
let stylo = new Stylo("Bic");
console.log(stylo);
stylo.ecrire();

// Possible mais dangeureux...
stylo.couleur = "rouge";
console.log(stylo);
Stylo.prototype.poids = 50; // TOUS les stylos ont maintenant un poids de 50g
console.log(stylo.poids); // même ceux deja créés !