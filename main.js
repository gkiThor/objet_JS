// Une classe
class Stylo{

    constructor(marque){
        this.marque = marque;

        if(Stylo.nb === undefined){
            Stylo.nb = 0;
        }
        Stylo.nb++;
    }

    ecrire(){
        console.log(`Le stylo ${this.marque} écrit`);
    }

    // Méthode statique
    static denombrer(){
        console.log(`Il y a ${Stylo.nb} stylos`);
    }
}

// Programme principal
new Stylo("Bic");
new Stylo("Pentel");

console.log(Stylo.nb);
Stylo.denombrer();
