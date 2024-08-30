// Une classe
class Stylo{
    constructor(marque){
        this.marque = marque;
    }

    ecrire(){
        console.log(`Le stylo ${this.marque} écrit`);
    }

	toString(){
		return `stylo ${this.marque}`;
	}
}

// Heritage
class StyloBille extends Stylo{
	constructor(marque, couleur){
		super(marque);
		this.couleur = couleur;
	}

	// Redefinir (Override)
	ecrire(){
		super.ecrire();
        console.log(`Le stylo ${this.marque} ${this.couleur} écrit`);
    }

	fuir(){
		console.log(`Le stylo ${this.marque} ${this.couleur} fuit`);
	}
}

// Programme principal
let stylo = new Stylo("Bic");
let styloBille = new StyloBille("Bic", "rouge");
console.log(styloBille);
styloBille.ecrire();
styloBille.fuir();
console.log(`Cet objet est un ${stylo}`)// Appel implicite de toString()
console.log(stylo.toString())// Appel explicite de toString()




