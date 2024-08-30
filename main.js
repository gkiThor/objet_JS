let guillaume=new Boulanger("Guillaume");
let baguette=new Produit("baguette",0.20,1.20);
let croissant=new Produit("croissant",0.25,1.50);
let painDeMie=new Produit("pain de mie",0.50,4.50);
guillaume.fabriquer(baguette,80);
guillaume.fabriquer(croissant,60);
guillaume.fabriquer(painDeMie,20);
guillaume.bilan();

